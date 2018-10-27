import Component from '@ember/component';
import { connect } from 'ember-simple-redux';
import { addBox } from '../state/duck';

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
  addBox: source => dispatch(addBox(key, source)),
});

export default connect(
  null,
  mapDispatchToProps
)(SquareBox);
