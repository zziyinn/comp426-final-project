import {
  Markdown
} from "./chunk-YQ3D5IQV.mjs";
import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/messages/RenderTextMessage.tsx
import { jsx } from "react/jsx-runtime";
function RenderTextMessage(props) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isTextMessage()) {
    if (message.role === "user") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          "data-message-role": "user",
          className: "copilotKitMessage copilotKitUserMessage",
          children: message.content
        },
        index
      );
    } else if (message.role == "assistant") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          "data-message-role": "assistant",
          className: `copilotKitMessage copilotKitAssistantMessage`,
          children: isCurrentMessage && inProgress && !message.content ? icons.spinnerIcon : /* @__PURE__ */ jsx(Markdown, { content: message.content })
        },
        index
      );
    }
  }
}

export {
  RenderTextMessage
};
//# sourceMappingURL=chunk-RU73BEZM.mjs.map