import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/messages/RenderAgentStateMessage.tsx
import { useCopilotContext } from "@copilotkit/react-core";
import { jsx, jsxs } from "react/jsx-runtime";
function RenderAgentStateMessage(props) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { chatComponentsCache } = useCopilotContext();
  const { icons } = useChatContext();
  if (message.isAgentStateMessage()) {
    let render;
    if (chatComponentsCache.current !== null) {
      render = chatComponentsCache.current.coAgentStateRenders[`${message.agentName}-${message.nodeName}`] || chatComponentsCache.current.coAgentStateRenders[`${message.agentName}-global`];
    }
    if (render) {
      if (typeof render === "string") {
        if (isCurrentMessage && inProgress) {
          return /* @__PURE__ */ jsxs("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            icons.spinnerIcon,
            " ",
            /* @__PURE__ */ jsx("span", { className: "inProgressLabel", children: render })
          ] }, index);
        } else {
          return null;
        }
      } else {
        const state = message.state;
        let status = message.active ? "inProgress" : "complete";
        const toRender = render({
          status,
          state,
          nodeName: message.nodeName
        });
        if (!toRender && status === "complete") {
          return null;
        }
        if (!toRender && isCurrentMessage && inProgress) {
          return /* @__PURE__ */ jsx("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
        } else if (!toRender) {
          return null;
        }
        if (typeof toRender === "string") {
          return /* @__PURE__ */ jsxs("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            isCurrentMessage && inProgress && icons.spinnerIcon,
            " ",
            toRender
          ] }, index);
        } else {
          return /* @__PURE__ */ jsx("div", { className: "copilotKitCustomAssistantMessage", children: toRender }, index);
        }
      }
    } else if (!inProgress || !isCurrentMessage) {
      return null;
    } else {
      return /* @__PURE__ */ jsx("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
    }
  }
}

export {
  RenderAgentStateMessage
};
//# sourceMappingURL=chunk-ZABXREBH.mjs.map