import {
  CopilotMessagesContext
} from "./chunk-DCTJZ742.mjs";
import {
  __objRest
} from "./chunk-SKC7AJIV.mjs";

// src/components/copilot-provider/copilot-messages.tsx
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
function CopilotMessages(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [messages, setMessages] = useState([]);
  return /* @__PURE__ */ jsx(
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

export {
  CopilotMessages
};
//# sourceMappingURL=chunk-XXR4QFAQ.mjs.map