import {
  __async
} from "./chunk-SKC7AJIV.mjs";

// src/context/copilot-context.tsx
import React from "react";
var emptyCopilotContext = {
  actions: {},
  setAction: () => {
  },
  removeAction: () => {
  },
  coAgentStateRenders: {},
  setCoAgentStateRender: () => {
  },
  removeCoAgentStateRender: () => {
  },
  chatComponentsCache: { current: { actions: {}, coAgentStateRenders: {} } },
  getContextString: (documents, categories) => returnAndThrowInDebug(""),
  addContext: () => "",
  removeContext: () => {
  },
  getFunctionCallHandler: () => returnAndThrowInDebug(() => __async(void 0, null, function* () {
  })),
  isLoading: false,
  setIsLoading: () => returnAndThrowInDebug(false),
  chatInstructions: "",
  setChatInstructions: () => returnAndThrowInDebug(""),
  getDocumentsContext: (categories) => returnAndThrowInDebug([]),
  addDocumentContext: () => returnAndThrowInDebug(""),
  removeDocumentContext: () => {
  },
  copilotApiConfig: new class {
    get chatApiEndpoint() {
      throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
    }
    get headers() {
      return {};
    }
    get body() {
      return {};
    }
  }(),
  chatSuggestionConfiguration: {},
  addChatSuggestionConfiguration: () => {
  },
  removeChatSuggestionConfiguration: () => {
  },
  showDevConsole: "auto",
  coagentStates: {},
  setCoagentStates: () => {
  },
  agentSession: null,
  setAgentSession: () => {
  }
};
var CopilotContext = React.createContext(emptyCopilotContext);
function useCopilotContext() {
  const context = React.useContext(CopilotContext);
  if (context === emptyCopilotContext) {
    throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  }
  return context;
}
function returnAndThrowInDebug(value) {
  throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  return value;
}

export {
  CopilotContext,
  useCopilotContext
};
//# sourceMappingURL=chunk-2MPUQRAY.mjs.map