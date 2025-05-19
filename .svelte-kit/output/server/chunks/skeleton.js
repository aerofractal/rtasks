import { O as sanitize_props, P as rest_props, A as push, F as fallback, Q as spread_attributes, R as clsx, I as bind_props, C as pop } from "./index.js";
import { c as cn } from "./utils.js";
function Skeleton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(cn("bg-muted animate-pulse rounded-md", className)),
      ...$$restProps
    }
  )}></div>`;
  bind_props($$props, { class: className });
  pop();
}
export {
  Skeleton as S
};
