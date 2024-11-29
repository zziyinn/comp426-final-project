"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/copilot-provider/copilot-messages.tsx
var copilot_messages_exports = {};
__export(copilot_messages_exports, {
  CopilotMessages: () => CopilotMessages
});
module.exports = __toCommonJS(copilot_messages_exports);
var import_react2 = require("react");

// src/context/copilot-messages-context.tsx
var import_react = __toESM(require("react"));
var emptyCopilotContext = {
  messages: [],
  setMessages: () => []
};
var CopilotMessagesContext = import_react.default.createContext(emptyCopilotContext);

// src/components/copilot-provider/copilot-messages.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function CopilotMessages(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [messages, setMessages] = (0, import_react2.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    CopilotMessagesContext.Provider,
    {
      value: {
        messages,
        setMessages
      },
      children
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotMessages
});
//# sourceMappingURL=copilot-messages.js.map