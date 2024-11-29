import {
  CopilotContext
} from "./chunk-2MPUQRAY.mjs";

// src/hooks/use-coagent-state-render.ts
import { useRef, useContext, useEffect } from "react";
import { randomId } from "@copilotkit/shared";
function useCoAgentStateRender(action, dependencies) {
  const {
    setCoAgentStateRender,
    removeCoAgentStateRender,
    coAgentStateRenders,
    chatComponentsCache
  } = useContext(CopilotContext);
  const idRef = useRef(randomId());
  const key = `${action.name}-${action.nodeName || "global"}`;
  if (dependencies === void 0) {
    if (coAgentStateRenders[idRef.current]) {
      coAgentStateRenders[idRef.current].handler = action.handler;
      if (typeof action.render === "function") {
        if (chatComponentsCache.current !== null) {
          chatComponentsCache.current.coAgentStateRenders[key] = action.render;
        }
      }
    }
  }
  useEffect(() => {
    setCoAgentStateRender(idRef.current, action);
    if (chatComponentsCache.current !== null && action.render !== void 0) {
      chatComponentsCache.current.coAgentStateRenders[key] = action.render;
    }
    return () => {
      removeCoAgentStateRender(idRef.current);
    };
  }, [
    setCoAgentStateRender,
    removeCoAgentStateRender,
    action.name,
    // include render only if it's a string
    typeof action.render === "string" ? action.render : void 0,
    // dependencies set by the developer
    ...dependencies || []
  ]);
}

export {
  useCoAgentStateRender
};
//# sourceMappingURL=chunk-CQ23Q555.mjs.map