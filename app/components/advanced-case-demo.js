import Component from '@ember/component';
import { connect } from 'ember-simple-redux';
import { addBox } from '../state/duck';

const BasicCaseDemo = Component.extend({
  classNames: ['case-demo', 'top-click-zone'],

  click() {
    this.addBox('Z');
  },

  actions: {
    logX() {
      this.addBox('X');
    },

    logY() {
      this.addBox('Y');
    },
  },
});

const mapDispatchToProps = dispatch => ({
  addBox(source) {
    dispatch(addBox('no-color', source));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(BasicCaseDemo);
