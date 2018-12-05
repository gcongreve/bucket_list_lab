const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    console.log(`pubsub is publishing on ${channel} with payload ${payload}`);
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
    console.log(`pubsub is subscribing on ${channel}`);
  }

};

module.exports = PubSub;
