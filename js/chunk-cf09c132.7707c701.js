(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cf09c132"],{

/***/ "057b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "3a18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/games/Survo.vue?vue&type=template&id=5fef4d76&scoped=true&lang=pug


var _withId = /*#__PURE__*/Object(vue_runtime_esm_bundler["M" /* withScopeId */])("data-v-5fef4d76");

Object(vue_runtime_esm_bundler["y" /* pushScopeId */])("data-v-5fef4d76");

var _hoisted_1 = {
  class: "page",
  "data-aos": "zoom-in"
};
var _hoisted_2 = {
  class: "hero is-small mt-3"
};
var _hoisted_3 = {
  class: "hero-body"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("p", {
  class: "title has-text-white"
}, "Survo", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("p", {
  class: "subtitle has-text-grey"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createVNode */])("a", {
  class: "pointer link-text",
  target: "tabnew",
  href: "https://en.wikipedia.org/wiki/Survo_puzzle#Example"
}, "How to Play")], -1);

var _hoisted_6 = {
  class: "tile is-12"
};
var _hoisted_7 = {
  class: "text is-size-6 my-4"
};

var _hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])("Max Value: ");

var _hoisted_9 = {
  class: "board"
};
var _hoisted_10 = {
  class: "tile is-12"
};
var _hoisted_11 = {
  key: 0,
  class: "tile is-child box no-border"
};
var _hoisted_12 = {
  key: 0,
  class: "text"
};
var _hoisted_13 = {
  key: 0,
  class: "center-text"
};
var _hoisted_14 = {
  class: "text known-value"
};
var _hoisted_15 = {
  class: "horizontal-center tile is-12 mt-4"
};
var _hoisted_16 = {
  class: "tile is-4"
};

Object(vue_runtime_esm_bundler["w" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("section", _hoisted_2, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_3, [_hoisted_4, _hoisted_5, Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_6, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("button", {
    class: ["column button is-rounded is-outlined is-normal is-fullwidth my-button mx-2 difficulty-button", [{
      'active-button': _ctx.isEasy
    }]],
    disabled: _ctx.gameStarted && !_ctx.gameComplete,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.startNewGame({
        width: 3,
        height: 2,
        difficulty: 'Easy'
      });
    })
  }, "Easy", 10, ["disabled"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("button", {
    class: ["column button is-rounded is-outlined is-normal is-fullwidth my-button mx-2 difficulty-button", [{
      'active-button': _ctx.isNormal
    }]],
    disabled: _ctx.gameStarted && !_ctx.gameComplete,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.startNewGame({
        width: 4,
        height: 3,
        difficulty: 'Normal'
      });
    })
  }, "Normal", 10, ["disabled"]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("button", {
    class: ["column button is-rounded is-outlined is-normal is-fullwidth my-button mx-2 difficulty-button", [{
      'active-button': _ctx.isHard
    }]],
    disabled: _ctx.gameStarted && !_ctx.gameComplete,
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.startNewGame({
        width: 5,
        height: 4,
        difficulty: 'Hard'
      });
    })
  }, "Hard", 10, ["disabled"])])])]), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_7, [_hoisted_8, (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("strong", {
    class: "text is-size-6 animate__animated animate__flipInY",
    key: _ctx.gamesPlayed
  }, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.getMaxValue), 1))]), (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
    class: "board-wrapper mb-6",
    key: _ctx.gamesPlayed
  }, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_9, [(Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(_ctx.getGrid, function (row, rowIdx) {
    return Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_10, [(Object(vue_runtime_esm_bundler["v" /* openBlock */])(true), Object(vue_runtime_esm_bundler["e" /* createBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, Object(vue_runtime_esm_bundler["B" /* renderList */])(row, function (col, colIdx) {
      return Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", null, [col.type == 'corner' ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_11)) : col.type == 'sum' ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
        key: 1,
        class: ["tile is-child box edge animate__animated animate__rotateIn static", [{
          'hide-left-border': col === 0,
          'hide-right-border': colIdx === _ctx.getWidth,
          'hide-bottom-border': rowIdx === _ctx.getHeight,
          'hide-top-border': row === 0
        }]]
      }, [col.visible ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_12, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("strong", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(col.value), 1)])) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)], 2)) : (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", {
        key: 2,
        class: ["tile is-child box animate__animated animate__rotateIn", [{
          'static': col.visible
        }]]
      }, [col.visible ? (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("div", _hoisted_13, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("span", _hoisted_14, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(col.value), 1)])) : (Object(vue_runtime_esm_bundler["v" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])("input", {
        key: 1,
        id: 'value' + rowIdx + '_' + colIdx,
        disabled: _ctx.gameComplete,
        maxlength: "2",
        onInput: _cache[4] || (_cache[4] = function ($event) {
          return $options.checkAnswer();
        })
      }, null, 40, ["id", "disabled"]))], 2))]);
    }), 256))]);
  }), 256))])])), Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_15, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("div", _hoisted_16, [Object(vue_runtime_esm_bundler["i" /* createVNode */])("button", {
    class: "column button is-rounded is-outlined is-normal is-fullwidth my-button",
    disabled: !_ctx.gameComplete,
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.startNewGame({
        width: _ctx.getWidth,
        height: _ctx.getHeight,
        difficulty: _ctx.getDifficulty
      });
    })
  }, "New Game", 8, ["disabled"])])])]);
});
// CONCATENATED MODULE: ./src/views/games/Survo.vue?vue&type=template&id=5fef4d76&scoped=true&lang=pug

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-browser.js
var vuex_esm_browser = __webpack_require__("5502");

// EXTERNAL MODULE: ./src/components/Header.vue + 4 modules
var Header = __webpack_require__("0418");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/games/Survo.vue?vue&type=script&lang=js



/* harmony default export */ var Survovue_type_script_lang_js = ({
  name: 'Survo',
  components: {
    Header: Header["a" /* default */]
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["c" /* mapGetters */])("Survo", ["getGrid", "getWidth", "getHeight", "gameComplete", "isEasy", "isNormal", "isHard", "newGame", "gamesPlayed", "gameStarted", "getMaxValue"])),
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["b" /* mapActions */])("Survo", ["startNewGame", "checkAnswers"])), {}, {
    checkAnswer: function checkAnswer() {
      this.checkAnswers();
    }
  }),
  mounted: function mounted() {
    this.startNewGame({
      width: 4,
      height: 3,
      difficulty: 'Normal'
    });
  }
});
// CONCATENATED MODULE: ./src/views/games/Survo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/views/games/Survo.vue?vue&type=style&index=0&id=5fef4d76&scoped=true&lang=scss
var Survovue_type_style_index_0_id_5fef4d76_scoped_true_lang_scss = __webpack_require__("cfb0");

// CONCATENATED MODULE: ./src/views/games/Survo.vue





Survovue_type_script_lang_js.render = render
Survovue_type_script_lang_js.__scopeId = "data-v-5fef4d76"

/* harmony default export */ var Survo = __webpack_exports__["default"] = (Survovue_type_script_lang_js);

/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "5530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _objectSpread2; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js








function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "cfb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Survo_vue_vue_type_style_index_0_id_5fef4d76_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("057b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Survo_vue_vue_type_style_index_0_id_5fef4d76_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Survo_vue_vue_type_style_index_0_id_5fef4d76_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ })

}]);
//# sourceMappingURL=chunk-cf09c132.7707c701.js.map