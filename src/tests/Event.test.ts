import SpitEvent from '../SpitEvent';

test('notifies listener', done => {
  const event = new SpitEvent([], 'test-1');
  const listener = {
    set: data => {
      expect(data).toEqual(['peanut butter']);
      done();
    },
  };
  event.addListener(listener);
  event.set(['peanut butter']);
});

test('set returns received value', () => {
    const event = new SpitEvent([], 'test-2');
    const returnValue = event.set(['hot chocolate']);
    expect(returnValue[0]).toEqual('hot chocolate');
});
