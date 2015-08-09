
const Listener = {

  listeners: [],

  addListeners(entity, events) {
    for (let prop in this.props) {
      if (this.props.hasOwnProperty(prop) && events[prop]) {
        const addListener = google.maps.event.addListener;
        const listener = addListener(entity, events[prop], this.props[prop]);
        this.listeners.push(listener);
      }
    }
  },

  removeListeners() {
    this.listeners.forEach((listener) => {
      google.maps.event.removeListener(listener);
    });
  }

};

export default Listener;
