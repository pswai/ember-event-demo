import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('basic-case');
  this.route('expert-case');
  this.route('advanced-case');
});

export default Router;
