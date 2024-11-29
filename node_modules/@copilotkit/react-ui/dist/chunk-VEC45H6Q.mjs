import {
  useChatContext
} from "./chunk-CBBFRI3Q.mjs";

// src/components/chat/Header.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Header = ({}) => {
  const { setOpen, icons, labels } = useChatContext();
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitHeader", children: [
    /* @__PURE__ */ jsx("div", { children: labels.title }),
    /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Close", children: icons.headerCloseIcon })
  ] });
};

export {
  Header
};
//# sourceMappingURL=chunk-VEC45H6Q.mjs.map