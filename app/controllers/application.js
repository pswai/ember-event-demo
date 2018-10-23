import Controller from '@ember/controller';

export default Controller.extend({
  addBox(source) {
    this.simpleReduxStore.dispatch({
      type: 'ADD_BOX',
      key: 'no-color',
      source,
    });
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
