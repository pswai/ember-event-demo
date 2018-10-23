import Component from '@ember/component';
import { connect } from 'ember-simple-redux';

const ResultDisplay = Component.extend({
  classNames: ['result-display'],
});

const mapStateToProps = ({ boxes }) => ({ boxes });

export default connect(mapStateToProps)(ResultDisplay);
