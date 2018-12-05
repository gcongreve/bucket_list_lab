const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Goals = function () {
  this.url = 'http://localhost:3000/api/goals';
  this.request = new RequestHelper(this.url);
};
