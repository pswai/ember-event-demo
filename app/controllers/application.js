import Controller from '@ember/controller';
import { addBox } from '../state/duck';

export default Controller.extend({
  addBox(source) {
    this.simpleReduxStore.dispatch(addBox('no-color', source));
  },

  actions: {
    handleNative() {
      this.addBox('N');
    },

    handleEmber() {
      this.addBox('E');
    },
  },
});
