"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContext = exports.defaultObject = void 0;

var _react = require("react");

var defaultObject = {
  currentLanguage: 'polish',
  handleLanguage: function handleLanguage() {}
};
exports.defaultObject = defaultObject;
var AppContext = (0, _react.createContext)(defaultObject);
exports.AppContext = AppContext;