const PubSub = require('../helpers/pub_sub.js');

const Display = function (container) {
  this.container = container
}


Display.prototype.render = function (objective) {
  const div = document.createElement('div');
  div.id = "goal";
  const goal = document.createElement('h4');
  goal.textContent = objective.goal;
  div.appendChild(goal)
  const deadline = document.createElement('p');
  deadline.textContent = objective.deadline;
  div.appendChild(deadline);

  const deleteButton = this.addDeletebutton(objective._id);
  div.appendChild(deleteButton);

  this.container.appendChild(div)

};


Display.prototype.addDeletebutton = function (objectiveId) {
  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.value = objectiveId;

  button.addEventListener('click', (event) => {
    PubSub.publish('Display:delete-button-clicked', event.target.value);
  })

  return button;
};





module.exports = Display;
