import { J as store_get, G as slot, K as unsubscribe_stores, C as pop, A as push } from "../../../chunks/index.js";
import { u as userQueryOptions } from "../../../chunks/api.js";
import { B as Button } from "../../../chunks/index3.js";
import { c as createQuery } from "../../../chunks/createQuery.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const userQuery = createQuery(userQueryOptions);
  if (store_get($$store_subs ??= {}, "$userQuery", userQuery).isLoading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div>Loading...</div>`;
  } else if (!store_get($$store_subs ??= {}, "$userQuery", userQuery).data) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<div class="flex flex-col gap-y-2 items-center justify-center h-20"><p>You need to login or register.</p> `;
    Button($$payload, {
      class: "bg-zinc-800 text-white hover:bg-zinc-700",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Register`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
