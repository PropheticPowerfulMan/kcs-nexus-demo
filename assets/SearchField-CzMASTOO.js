import { j as jsxRuntimeExports, _ as Search } from "./ui-Bam7IDm4.js";
const SearchField = ({ wrapperClassName = "", inputClassName = "", type = "search", ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `relative block ${wrapperClassName}`.trim(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18, className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, className: `input-kcs pl-11 ${inputClassName}`.trim(), ...props })
  ] });
};
export {
  SearchField as S
};
