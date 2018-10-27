import Component from '@ember/component';
import { connect } from 'ember-simple-redux';
import { reset } from '../state/duck';

const SideMenu = Component.extend({
  classNames: ['side-menu'],
});

const mapDispatchToProps = { reset };

export default connect(
  null,
  mapDispatchToProps
)(SideMenu);
