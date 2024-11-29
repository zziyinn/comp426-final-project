import {
  useCopilotContext
} from "./chunk-2MPUQRAY.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-SKC7AJIV.mjs";

// src/hooks/use-copilot-action.ts
import { useRef, useEffect } from "react";
import { randomId } from "@copilotkit/shared";
function useCopilotAction(action, dependencies) {
  const { setAction, removeAction, actions, chatComponentsCache } = useCopilotContext();
  const idRef = useRef(randomId());
  const renderAndWaitRef = useRef(null);
  action = __spreadValues({}, action);
  if (action.renderAndWait) {
    const renderAndWait = action.renderAndWait;
    action.renderAndWait = void 0;
    action.handler = () => __async(this, null, function* () {
      let resolve;
      let reject;
      const promise = new Promise((resolvePromise, rejectPromise) => {
        resolve = resolvePromise;
        reject = rejectPromise;
      });
      renderAndWaitRef.current = { promise, resolve, reject };
      return yield promise;
    });
    action.render = (props) => {
      const waitProps = {
        status: props.status,
        args: props.args,
        result: props.result,
        handler: props.status === "executing" ? renderAndWaitRef.current.resolve : void 0
      };
      return renderAndWait(waitProps);
    };
  }
  if (dependencies === void 0) {
    if (actions[idRef.current]) {
      actions[idRef.current].handler = action.handler;
      if (typeof action.render === "function") {
        if (chatComponentsCache.current !== null) {
          chatComponentsCache.current.actions[action.name] = action.render;
        }
      }
    }
  }
  useEffect(() => {
    setAction(idRef.current, action);
    if (chatComponentsCache.current !== null && action.render !== void 0) {
      chatComponentsCache.current.actions[action.name] = action.render;
    }
    return () => {
      removeAction(idRef.current);
    };
  }, [
    setAction,
    removeAction,
    action.description,
    action.name,
    action.disabled,
    // This should be faster than deep equality checking
    // In addition, all major JS engines guarantee the order of object keys
    JSON.stringify(action.parameters),
    // include render only if it's a string
    typeof action.render === "string" ? action.render : void 0,
    // dependencies set by the developer
    ...dependencies || []
  ]);
}

export {
  useCopilotAction
};
//# sourceMappingURL=chunk-RYDEG77L.mjs.map