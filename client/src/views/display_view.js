const PubSub = require('../helpers/pub_sub.js');
const Display = require('./display.js')

const DisplayView = function (location) {
  this.location = location;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Goals:data-ready', (event) => {
    this.render(event.detail)
  })
};

DisplayView.prototype.render = function (array) {
  this.location.innerHTML = '';
  const display = new Display(this.location);
  array.forEach((goal) => display.render(goal));
};



module.exports = DisplayView;
