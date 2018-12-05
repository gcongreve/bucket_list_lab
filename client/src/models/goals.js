const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Goals = function () {
  this.url = 'http://localhost:3000/api/goals';
  this.request = new RequestHelper(this.url);
};

Goals.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:goal-submitted', (payload) => {
    const newGoal = payload.detail;
    this.postGoal(newGoal);
  });
  PubSub.subscribe('Display:delete-button-clicked', (payload) => {
    const deletedGoalId = payload.detail;
    this.deleteGoal(deletedGoalId);
  });
};


Goals.prototype.getData = function () {
  this.request.get()
  .then((goals) => {
    PubSub.publish('Goals:data-ready', goals);
  });
};


Goals.prototype.postGoal = function (goal) {
  this.request.post(goal)
  .then((goals) => {
    PubSub.publish('Goals:data-ready', goals);
  });
};

Goals.prototype.deleteGoal = function (goalId) {
  this.request.delete(goalId)
    .then((goals) => {
      PubSub.publish('Goals:data-ready', goals);
    });
};

module.exports = Goals;
