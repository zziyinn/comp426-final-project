"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/components/chat/messages/RenderActionExecutionMessage.tsx
var RenderActionExecutionMessage_exports = {};
__export(RenderActionExecutionMessage_exports, {
  RenderActionExecutionMessage: () => RenderActionExecutionMessage
});
module.exports = __toCommonJS(RenderActionExecutionMessage_exports);
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");

// src/components/chat/ChatContext.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var ChatContext = import_react.default.createContext(void 0);
function useChatContext() {
  const context = import_react.default.useContext(ChatContext);
  if (context === void 0) {
    throw new Error(
      "Context not found. Did you forget to wrap your app in a <ChatContextProvider> component?"
    );
  }
  return context;
}

// src/components/chat/messages/RenderActionExecutionMessage.tsx
var import_react_core = require("@copilotkit/react-core");
var import_jsx_runtime2 = require("react/jsx-runtime");
function RenderActionExecutionMessage(props) {
  const { message, inProgress, index, isCurrentMessage, actionResult } = props;
  const { chatComponentsCache } = (0, import_react_core.useCopilotContext)();
  const { icons } = useChatContext();
  if (message.isActionExecutionMessage()) {
    if (chatComponentsCache.current !== null && chatComponentsCache.current.actions[message.name]) {
      const render = chatComponentsCache.current.actions[message.name];
      if (typeof render === "string") {
        if (isCurrentMessage && inProgress) {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            icons.spinnerIcon,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "inProgressLabel", children: render })
          ] }, index);
        } else {
          return null;
        }
      } else {
        const args = message.arguments;
        let status = "inProgress";
        if (actionResult !== void 0) {
          status = "complete";
        } else if (message.status.code !== import_runtime_client_gql.MessageStatusCode.Pending) {
          status = "executing";
        }
        try {
          const toRender = render({
            status,
            args,
            result: actionResult
          });
          if (!toRender && status === "complete") {
            return null;
          }
          if (typeof toRender === "string") {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
              isCurrentMessage && inProgress && icons.spinnerIcon,
              " ",
              toRender
            ] }, index);
          } else {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                "data-message-type": "action-render",
                className: "copilotKitCustomAssistantMessage",
                children: toRender
              },
              index
            );
          }
        } catch (e) {
          console.error(`Error executing render function for action ${message.name}: ${e}`);
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            isCurrentMessage && inProgress && icons.spinnerIcon,
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("b", { children: [
              "\u274C Error executing render: ",
              message.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
            e instanceof Error ? e.message : String(e)
          ] }, index);
        }
      }
    } else if (!inProgress || !isCurrentMessage) {
      return null;
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RenderActionExecutionMessage
});
//# sourceMappingURL=RenderActionExecutionMessage.js.map