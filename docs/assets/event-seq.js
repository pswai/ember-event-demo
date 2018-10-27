'use strict';



;define('event-seq/app', ['exports', 'event-seq/resolver', 'ember-load-initializers', 'event-seq/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('event-seq/components/advanced-case-demo', ['exports', 'ember-simple-redux', 'event-seq/state/duck'], function (exports, _emberSimpleRedux, _duck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const BasicCaseDemo = Ember.Component.extend({
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
      }
    }
  });

  const mapDispatchToProps = dispatch => ({
    addBox(source) {
      dispatch((0, _duck.addBox)('no-color', source));
    }
  });

  exports.default = (0, _emberSimpleRedux.connect)(null, mapDispatchToProps)(BasicCaseDemo);
});
;define('event-seq/components/basic-case-demo', ['exports', 'ember-simple-redux', 'event-seq/state/duck'], function (exports, _emberSimpleRedux, _duck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const BasicCaseDemo = Ember.Component.extend({
    classNames: ['case-demo', 'top-click-zone'],

    actions: {
      logX() {
        this.addBox('X');
      },

      logY() {
        this.addBox('Y');
      }
    }
  });

  const mapDispatchToProps = dispatch => ({
    addBox(source) {
      dispatch((0, _duck.addBox)('no-color', source));
    }
  });

  exports.default = (0, _emberSimpleRedux.connect)(null, mapDispatchToProps)(BasicCaseDemo);
});
;define('event-seq/components/result-display', ['exports', 'ember-simple-redux'], function (exports, _emberSimpleRedux) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const ResultDisplay = Ember.Component.extend({
    classNames: ['result-display']
  });

  const mapStateToProps = ({ boxes }) => ({ boxes });

  exports.default = (0, _emberSimpleRedux.connect)(mapStateToProps)(ResultDisplay);
});
;define('event-seq/components/side-menu', ['exports', 'ember-simple-redux', 'event-seq/state/duck'], function (exports, _emberSimpleRedux, _duck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const SideMenu = Ember.Component.extend({
    classNames: ['side-menu']
  });

  const mapDispatchToProps = { reset: _duck.reset };

  exports.default = (0, _emberSimpleRedux.connect)(null, mapDispatchToProps)(SideMenu);
});
;define('event-seq/components/square-box', ['exports', 'ember-simple-redux', 'event-seq/state/duck'], function (exports, _emberSimpleRedux, _duck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const SquareBox = Ember.Component.extend({
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
      }
    }
  });

  const mapDispatchToProps = (dispatch, { key }) => ({
    addBox: source => dispatch((0, _duck.addBox)(key, source))
  });

  exports.default = (0, _emberSimpleRedux.connect)(null, mapDispatchToProps)(SquareBox);
});
;define('event-seq/controllers/expert-case', ['exports', 'event-seq/state/duck'], function (exports, _duck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    addBox(source) {
      this.simpleReduxStore.dispatch((0, _duck.addBox)('no-color', source));
    },

    actions: {
      handleNative() {
        this.addBox('N');
      },

      handleEmber() {
        this.addBox('E');
      }
    }
  });
});
;define('event-seq/helpers/app-version', ['exports', 'event-seq/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('event-seq/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('event-seq/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('event-seq/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'event-seq/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('event-seq/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('event-seq/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('event-seq/initializers/export-application-global', ['exports', 'event-seq/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('event-seq/initializers/redux', ['exports', 'ember-simple-redux', 'event-seq/state/configure-store'], function (exports, _emberSimpleRedux, _configureStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(application) {
    const store = (0, _configureStore.default)();
    (0, _emberSimpleRedux.provider)(store, application);

    const storeKey = 'simpleReduxStore';
    const fullName = `simple-redux:${storeKey}`;
    application.inject('controller', storeKey, fullName);
  }

  exports.default = {
    initialize
  };
});
;define('event-seq/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('event-seq/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('event-seq/router', ['exports', 'event-seq/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('basic-case');
    this.route('expert-case');
    this.route('advanced-case');
  });

  exports.default = Router;
});
;define('event-seq/routes/advanced-case', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('event-seq/routes/basic-case', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('event-seq/routes/expert-case', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('event-seq/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('event-seq/state/configure-store', ['exports', 'redux', 'event-seq/state/duck'], function (exports, _redux, _duck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint-disable no-underscore-dangle */

  const configureStore = initialState => {
    const store = (0, _redux.createStore)(_duck.default, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
  };

  exports.default = configureStore;
});
;define('event-seq/state/duck', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  const DEFAULT_STATE = {
    boxes: []
  };

  const ADD_BOX = 'ADD_BOX';
  const RESET = 'RESET';

  const addBox = exports.addBox = (key, source) => ({
    type: ADD_BOX,
    key,
    source
  });

  const reset = exports.reset = () => ({
    type: RESET
  });

  const reducer = (state = DEFAULT_STATE, action) => {
    const { type } = action;

    switch (type) {
      case ADD_BOX:
        return _extends({}, state, {
          boxes: state.boxes.concat([{
            key: action.key,
            source: action.source
          }])
        });

      case RESET:
        return DEFAULT_STATE;
    }

    return state;
  };

  exports.default = reducer;
});
;define("event-seq/templates/advanced-case", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/TW5ZC0Y", "block": "{\"symbols\":[],\"statements\":[[5,\"advanced-case-demo\",[],[[],[]]]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/advanced-case.hbs" } });
});
;define("event-seq/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WQyGAii5", "block": "{\"symbols\":[],\"statements\":[[5,\"side-menu\",[],[[],[]]],[0,\"\\n\"],[5,\"result-display\",[],[[],[]]],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/application.hbs" } });
});
;define("event-seq/templates/basic-case", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kuXEUyiq", "block": "{\"symbols\":[],\"statements\":[[5,\"basic-case-demo\",[],[[],[]]]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/basic-case.hbs" } });
});
;define("event-seq/templates/components/advanced-case-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oaNOtjKE", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[3,\"action\",[[22,0,[]],\"logX\"]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"case-demo__case-button\"],[3,\"action\",[[22,0,[]],\"logY\"]],[9],[0,\"Foo\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logX\"],null]],[9],[0,\"\\n  \"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logY\"],null]],[11,\"class\",\"case-demo__case-button\"],[9],[0,\"Bar\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"logX\"]],[9],[0,\"\\n  \"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logY\"],null]],[11,\"class\",\"case-demo__case-button\"],[9],[0,\"Baz\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logX\"],null]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"case-demo__case-button\"],[3,\"action\",[[22,0,[]],\"logY\"]],[9],[0,\"Qux\"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/components/advanced-case-demo.hbs" } });
});
;define("event-seq/templates/components/basic-case-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UDew+DjF", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[3,\"action\",[[22,0,[]],\"logX\"]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"case-demo__case-button\"],[3,\"action\",[[22,0,[]],\"logY\"]],[9],[0,\"Foo\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logX\"],null]],[9],[0,\"\\n  \"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logY\"],null]],[11,\"class\",\"case-demo__case-button\"],[9],[0,\"Bar\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"logX\"]],[9],[0,\"\\n  \"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logY\"],null]],[11,\"class\",\"case-demo__case-button\"],[9],[0,\"Baz\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logX\"],null]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"case-demo__case-button\"],[3,\"action\",[[22,0,[]],\"logY\"]],[9],[0,\"Qux\"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/components/basic-case-demo.hbs" } });
});
;define("event-seq/templates/components/result-display", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SiGrspi8", "block": "{\"symbols\":[\"box\"],\"statements\":[[7,\"div\"],[11,\"class\",\"result-display__content\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"boxes\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[12,\"class\",[27,\"concat\",[\"square-box \",\"result-display__square-box \",\"square-box--small \",\"square-box--\",[22,1,[\"key\"]]],null]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"square-box__content\"],[9],[1,[22,1,[\"source\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/components/result-display.hbs" } });
});
;define("event-seq/templates/components/side-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZFqWsqdf", "block": "{\"symbols\":[],\"statements\":[[7,\"ul\"],[11,\"class\",\"side-menu__content\"],[9],[0,\"\\n  \"],[7,\"li\"],[3,\"action\",[[22,0,[]],[23,[\"reset\"]]]],[9],[0,\"\\n    \"],[7,\"a\"],[11,\"class\",\"side-menu__button side-menu__button--reset\"],[9],[0,\"Reset\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"li\"],[11,\"class\",\"side-menu__horizontal-line\"],[9],[10],[0,\"\\n\\n  \"],[7,\"li\"],[3,\"action\",[[22,0,[]],[23,[\"reset\"]]]],[9],[0,\"\\n    \"],[4,\"link-to\",[\"basic-case\"],[[\"class\",\"activeClass\"],[\"side-menu__button\",\"side-menu__button--active-route\"]],{\"statements\":[[0,\"Basic\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"li\"],[3,\"action\",[[22,0,[]],[23,[\"reset\"]]]],[9],[0,\"\\n    \"],[4,\"link-to\",[\"advanced-case\"],[[\"class\",\"activeClass\"],[\"side-menu__button\",\"side-menu__button--active-route\"]],{\"statements\":[[0,\"Advanced\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"li\"],[3,\"action\",[[22,0,[]],[23,[\"reset\"]]]],[9],[0,\"\\n    \"],[4,\"link-to\",[\"expert-case\"],[[\"class\",\"activeClass\"],[\"side-menu__button\",\"side-menu__button--active-route\"]],{\"statements\":[[0,\"Expert\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"side-menu__handle\"],[9],[0,\"Menu\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/components/side-menu.hbs" } });
});
;define("event-seq/templates/components/square-box", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QPnkDrPv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"square-box__content\"],[11,\"role\",\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"handleNative\"],null]],[3,\"action\",[[22,0,[]],\"handleEmber\"]],[9],[0,\"\\n  \"],[14,1],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/components/square-box.hbs" } });
});
;define("event-seq/templates/expert-case", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yx3AhJm1", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"top-click-zone\"],[11,\"role\",\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"handleNative\"],null]],[3,\"action\",[[22,0,[]],\"handleEmber\"]],[9],[0,\"\\n  \"],[5,\"square-box\",[[11,\"class\",\"square-box--big square-box--red\"]],[[\"@key\"],[\"red\"]],{\"statements\":[[0,\"\\n    \"],[5,\"square-box\",[[11,\"class\",\"square-box--blue\"]],[[\"@key\"],[\"blue\"]]],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "event-seq/templates/expert-case.hbs" } });
});
;

;define('event-seq/config/environment', [], function() {
  var prefix = 'event-seq';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("event-seq/app")["default"].create({"name":"event-seq","version":"0.0.0+975e2536"});
          }
        
//# sourceMappingURL=event-seq.map
