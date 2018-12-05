const RequestHelper = function (url) {
  this.url = url;
};

// get show all/show one
RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

// post, new
RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json'}
  })
  .then((response) => response.json());
};

// delete
RequestHelper.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
  .then((response) => response.json());
}

module.exports = RequestHelper;
