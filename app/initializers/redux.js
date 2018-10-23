import { provider } from 'ember-simple-redux';
import configureStore from '../state/configure-store';

export function initialize(application) {
  const store = configureStore();
  provider(store, application);

  const storeKey = 'simpleReduxStore';
  const fullName = `simple-redux:${storeKey}`;
  application.inject('controller', storeKey, fullName);
}

export default {
  initialize,
};
