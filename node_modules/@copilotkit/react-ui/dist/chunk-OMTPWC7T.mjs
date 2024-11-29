import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/messages/RenderActionExecutionMessage.tsx
import { MessageStatusCode } from "@copilotkit/runtime-client-gql";
import { useCopilotContext } from "@copilotkit/react-core";
import { jsx, jsxs } from "react/jsx-runtime";
function RenderActionExecutionMessage(props) {
  const { message, inProgress, index, isCurrentMessage, actionResult } = props;
  const { chatComponentsCache } = useCopilotContext();
  const { icons } = useChatContext();
  if (message.isActionExecutionMessage()) {
    if (chatComponentsCache.current !== null && chatComponentsCache.current.actions[message.name]) {
      const render = chatComponentsCache.current.actions[message.name];
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
        const args = message.arguments;
        let status = "inProgress";
        if (actionResult !== void 0) {
          status = "complete";
        } else if (message.status.code !== MessageStatusCode.Pending) {
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
            return /* @__PURE__ */ jsxs("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
              isCurrentMessage && inProgress && icons.spinnerIcon,
              " ",
              toRender
            ] }, index);
          } else {
            return /* @__PURE__ */ jsx(
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
          return /* @__PURE__ */ jsxs("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: [
            isCurrentMessage && inProgress && icons.spinnerIcon,
            /* @__PURE__ */ jsxs("b", { children: [
              "\u274C Error executing render: ",
              message.name
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            e instanceof Error ? e.message : String(e)
          ] }, index);
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
  RenderActionExecutionMessage
};
//# sourceMappingURL=chunk-OMTPWC7T.mjs.map