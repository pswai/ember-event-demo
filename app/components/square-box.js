import Component from '@ember/component';
import { connect } from 'ember-simple-redux';

const SquareBox = Component.extend({
  classNames: ['square-box'],

  click() {
    this.addBox('C');
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

const mapDispatchToProps = (dispatch, { key }) => ({
  addBox: source =>
    dispatch({
      type: 'ADD_BOX',
      key,
      source,
    }),
});

export default connect(
  null,
  mapDispatchToProps
)(SquareBox);
