const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function (location) {
  this.location = location;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Goals:data-ready', (event) => {
    this.render(event.detail)
  })
};

DisplayView.prototype.render = function (array) {
  array.forEach((objective) => {
    const div = document.createElement('div');
    const goal = document.createElement('p');
    goal.textContent = objective.goal;
    div.appendChild(goal)
    this.location.appendChild(div)
  })


};



module.exports = DisplayView;
