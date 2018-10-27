import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | expert-case', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:expert-case');
    assert.ok(route);
  });
});
