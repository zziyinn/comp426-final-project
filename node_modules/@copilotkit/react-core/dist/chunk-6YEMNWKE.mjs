import {
  CopilotMessages
} from "./chunk-XXR4QFAQ.mjs";
import {
  use_flat_category_store_default
} from "./chunk-5FHSUKQL.mjs";
import {
  use_tree_default
} from "./chunk-6U3UH3KO.mjs";
import {
  CopilotContext
} from "./chunk-2MPUQRAY.mjs";
import {
  __async,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-SKC7AJIV.mjs";

// src/components/copilot-provider/copilotkit.tsx
import { useCallback, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  COPILOT_CLOUD_CHAT_URL
} from "@copilotkit/shared";
import { jsx } from "react/jsx-runtime";
function CopilotKit(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  if (!props.runtimeUrl && !props.publicApiKey) {
    throw new Error(
      "Please provide either a runtimeUrl or a publicApiKey to the CopilotKit component."
    );
  }
  const chatApiEndpoint = props.runtimeUrl || COPILOT_CLOUD_CHAT_URL;
  const [actions, setActions] = useState({});
  const [coAgentStateRenders, setCoAgentStateRenders] = useState({});
  const chatComponentsCache = useRef({
    actions: {},
    coAgentStateRenders: {}
  });
  const { addElement, removeElement, printTree } = use_tree_default();
  const [isLoading, setIsLoading] = useState(false);
  const [chatInstructions, setChatInstructions] = useState("");
  const {
    addElement: addDocument,
    removeElement: removeDocument,
    allElements: allDocuments
  } = use_flat_category_store_default();
  const setAction = useCallback((id, action) => {
    setActions((prevPoints) => {
      return __spreadProps(__spreadValues({}, prevPoints), {
        [id]: action
      });
    });
  }, []);
  const removeAction = useCallback((id) => {
    setActions((prevPoints) => {
      const newPoints = __spreadValues({}, prevPoints);
      delete newPoints[id];
      return newPoints;
    });
  }, []);
  const setCoAgentStateRender = useCallback((id, stateRender) => {
    setCoAgentStateRenders((prevPoints) => {
      return __spreadProps(__spreadValues({}, prevPoints), {
        [id]: stateRender
      });
    });
  }, []);
  const removeCoAgentStateRender = useCallback((id) => {
    setCoAgentStateRenders((prevPoints) => {
      const newPoints = __spreadValues({}, prevPoints);
      delete newPoints[id];
      return newPoints;
    });
  }, []);
  const getContextString = useCallback(
    (documents, categories) => {
      const documentsString = documents.map((document) => {
        return `${document.name} (${document.sourceApplication}):
${document.getContents()}`;
      }).join("\n\n");
      const nonDocumentStrings = printTree(categories);
      return `${documentsString}

${nonDocumentStrings}`;
    },
    [printTree]
  );
  const addContext = useCallback(
    (context, parentId, categories = defaultCopilotContextCategories) => {
      return addElement(context, categories, parentId);
    },
    [addElement]
  );
  const removeContext = useCallback(
    (id) => {
      removeElement(id);
    },
    [removeElement]
  );
  const getFunctionCallHandler = useCallback(
    (customEntryPoints) => {
      return entryPointsToFunctionCallHandler(Object.values(customEntryPoints || actions));
    },
    [actions]
  );
  const getDocumentsContext = useCallback(
    (categories) => {
      return allDocuments(categories);
    },
    [allDocuments]
  );
  const addDocumentContext = useCallback(
    (documentPointer, categories = defaultCopilotContextCategories) => {
      return addDocument(documentPointer, categories);
    },
    [addDocument]
  );
  const removeDocumentContext = useCallback(
    (documentId) => {
      removeDocument(documentId);
    },
    [removeDocument]
  );
  if (!props.publicApiKey) {
    if (props.cloudRestrictToTopic) {
      throw new Error(
        "To use the cloudRestrictToTopic feature, please sign up at https://copilotkit.ai and provide a publicApiKey."
      );
    }
  }
  const copilotApiConfig = useMemo(() => {
    var _a2, _b2;
    let cloud = void 0;
    if (props.publicApiKey) {
      cloud = {
        guardrails: {
          input: {
            restrictToTopic: {
              enabled: props.cloudRestrictToTopic ? true : false,
              validTopics: ((_a2 = props.cloudRestrictToTopic) == null ? void 0 : _a2.validTopics) || [],
              invalidTopics: ((_b2 = props.cloudRestrictToTopic) == null ? void 0 : _b2.invalidTopics) || []
            }
          }
        }
      };
    }
    return __spreadProps(__spreadValues({
      publicApiKey: props.publicApiKey
    }, cloud ? { cloud } : {}), {
      chatApiEndpoint,
      headers: props.headers || {},
      properties: props.properties || {},
      transcribeAudioUrl: props.transcribeAudioUrl,
      textToSpeechUrl: props.textToSpeechUrl,
      credentials: props.credentials
    });
  }, [
    props.publicApiKey,
    props.headers,
    props.properties,
    props.transcribeAudioUrl,
    props.textToSpeechUrl,
    props.credentials,
    props.cloudRestrictToTopic
  ]);
  const [chatSuggestionConfiguration, setChatSuggestionConfiguration] = useState({});
  const addChatSuggestionConfiguration = (id, suggestion) => {
    setChatSuggestionConfiguration((prev) => __spreadProps(__spreadValues({}, prev), { [id]: suggestion }));
  };
  const removeChatSuggestionConfiguration = (id) => {
    setChatSuggestionConfiguration((prev) => {
      const _a2 = prev, { [id]: _ } = _a2, rest = __objRest(_a2, [__restKey(id)]);
      return rest;
    });
  };
  const [coagentStates, setCoagentStates] = useState({});
  let initialAgentSession = null;
  if (props.agent) {
    initialAgentSession = {
      agentName: props.agent
    };
  }
  const [agentSession, setAgentSession] = useState(initialAgentSession);
  return /* @__PURE__ */ jsx(
    CopilotContext.Provider,
    {
      value: {
        actions,
        chatComponentsCache,
        getFunctionCallHandler,
        setAction,
        removeAction,
        coAgentStateRenders,
        setCoAgentStateRender,
        removeCoAgentStateRender,
        getContextString,
        addContext,
        removeContext,
        getDocumentsContext,
        addDocumentContext,
        removeDocumentContext,
        copilotApiConfig,
        isLoading,
        setIsLoading,
        chatSuggestionConfiguration,
        addChatSuggestionConfiguration,
        removeChatSuggestionConfiguration,
        chatInstructions,
        setChatInstructions,
        showDevConsole: props.showDevConsole === void 0 ? "auto" : props.showDevConsole,
        coagentStates,
        setCoagentStates,
        agentSession,
        setAgentSession
      },
      children: /* @__PURE__ */ jsx(CopilotMessages, { children })
    }
  );
}
var defaultCopilotContextCategories = ["global"];
function entryPointsToFunctionCallHandler(actions) {
  return (_0) => __async(this, [_0], function* ({ messages, name, args }) {
    let actionsByFunctionName = {};
    for (let action2 of actions) {
      actionsByFunctionName[action2.name] = action2;
    }
    const action = actionsByFunctionName[name];
    let result = void 0;
    if (action) {
      yield new Promise((resolve, reject) => {
        flushSync(() => __async(this, null, function* () {
          var _a;
          try {
            result = yield (_a = action.handler) == null ? void 0 : _a.call(action, args);
            resolve();
          } catch (error) {
            reject(error);
          }
        }));
      });
      yield new Promise((resolve) => setTimeout(resolve, 20));
    }
    return result;
  });
}

export {
  CopilotKit,
  defaultCopilotContextCategories
};
//# sourceMappingURL=chunk-6YEMNWKE.mjs.map