import { O as sanitize_props, P as rest_props, F as fallback, Q as spread_attributes, R as clsx, G as slot, I as bind_props, C as pop, A as push, S as element } from "./index.js";
import { c as cn } from "./utils.js";
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(cn("bg-card text-card-foreground rounded-lg border shadow-sm", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(cn("p-6", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<p${spread_attributes(
    {
      class: clsx(cn("text-muted-foreground text-sm", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></p>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(cn("flex flex-col space-y-1.5 p-6 pb-0", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag"]);
  push();
  let className = fallback($$props["class"], void 0);
  let tag = fallback($$props["tag"], "h3");
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes(
        {
          class: clsx(cn("text-lg font-semibold leading-none tracking-tight", className)),
          ...$$restProps
        }
      )}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { class: className, tag });
  pop();
}
export {
  Card as C,
  Card_header as a,
  Card_title as b,
  Card_description as c,
  Card_content as d
};
