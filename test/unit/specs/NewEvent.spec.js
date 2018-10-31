/* eslint-disable */
import Vue from 'vue';
import NewEvent from '../../../src/components/NewEvent';

describe('NewEvent.vue', () => {
  it('has a mounted hook', () => {
    expect(typeof NewEvent.mounted)
      .to.equal('function');
  });
});
