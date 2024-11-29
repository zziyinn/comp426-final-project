import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/messages/RenderResultMessage.tsx
import { jsx } from "react/jsx-runtime";
function RenderResultMessage(props) {
  const { message, inProgress, index, isCurrentMessage } = props;
  const { icons } = useChatContext();
  if (message.isResultMessage() && inProgress && isCurrentMessage) {
    return /* @__PURE__ */ jsx("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: icons.spinnerIcon }, index);
  }
}

export {
  RenderResultMessage
};
//# sourceMappingURL=chunk-6INMITFA.mjs.map