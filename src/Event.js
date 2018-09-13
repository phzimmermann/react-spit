import store from './Store';

export default class Event {
  constructor(data, identifier) {
    this.data = data;
    this.listeners = [];
    this.identifier = identifier;
    store.addEvent(this);
  }
  addListener = cls => {
    this.listeners.push(cls);
  }
  set = val => {
    this.listeners.forEach(cls => cls.set(val, this));
    this.data = val;
  };
  setInitial = val => this.set(val);
  get = () => this.data;
  getIdentifier = () => this.identifier;
  removeListener = cls => this.listeners.filter(_cls => _cls !== cls);
}
