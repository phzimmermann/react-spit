import store from './Store';

export interface SpitListener<DataType> {
  set: (val: DataType, event: SpitEvent<DataType>) => any,
}

export default class SpitEvent<DataType> {
  data: DataType;
  listeners: Array<SpitListener<DataType>>;
  identifier: string;

  constructor(data: DataType, identifier: string) {
    this.data = data;
    this.listeners = [];
    this.identifier = identifier;
    store.addEvent(this);
  }
  addListener = (cls: any) => {
    this.listeners.push(cls);
  }
  set = (val: DataType) => {
    this.listeners.forEach(cls => cls.set(val, this));
    this.data = val;
  };
  setInitial = (val: DataType) => this.set(val);
  get = () => this.data;
  getIdentifier = () => this.identifier;
  removeListener = (cls: SpitListener<DataType>) => this.listeners.filter(_cls => _cls !== cls);
}
