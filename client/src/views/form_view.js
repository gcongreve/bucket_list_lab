const PubSub = require('../helpers/pub_sub.js');

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
   this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

FormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newGoal = this.createGoal(event.target);
  PubSub.publish('FormView:goal-submitted', newGoal);
  event.target.reset();
};

FormView.prototype.createGoal = function (form) {
  const newGoal = {
    goal: form.goal.value,
    deadline: form.goal.deadline
  };
  return newGoal;
};


module.exports = FormView;
