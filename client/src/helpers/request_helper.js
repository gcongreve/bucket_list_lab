const RequestHelper = function (url) {
  this.url = url;
};

// get show all/show one
RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

module.exports = RequestHelper;
