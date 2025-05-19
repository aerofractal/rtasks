import { C as pop, A as push, J as store_get, M as escape_html, U as attr, V as stringify, K as unsubscribe_stores } from "../../../chunks/index.js";
import { u as userQueryOptions } from "../../../chunks/api.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_description, d as Card_content } from "../../../chunks/card-title.js";
import "clsx";
import { S as Skeleton } from "../../../chunks/skeleton.js";
import { c as createQuery } from "../../../chunks/createQuery.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const query = createQuery(userQueryOptions);
  Card($$payload, {
    class: "w-[350px] m-auto",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->User Profile`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Your profile information`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          if (store_get($$store_subs ??= {}, "$query", query).isPending) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div class="flex flex-row items-center gap-4 h-20">`;
            Skeleton($$payload3, { class: "rounded-full w-20 h-20" });
            $$payload3.out += `<!----> <div class="flex flex-col flex-1 gap-2">`;
            Skeleton($$payload3, { class: "h-6 w-32" });
            $$payload3.out += `<!----> `;
            Skeleton($$payload3, { class: "h-4 w-40" });
            $$payload3.out += `<!----></div></div>`;
          } else if (store_get($$store_subs ??= {}, "$query", query).error?.message === "unauthenticated") {
            $$payload3.out += "<!--[1-->";
            $$payload3.out += `<div class="flex items-center justify-center h-20"><p>You need to login.</p></div>`;
          } else if (store_get($$store_subs ??= {}, "$query", query).error) {
            $$payload3.out += "<!--[2-->";
            $$payload3.out += `<div class="flex items-center justify-center h-20"><p>An error has occurred: ${escape_html(store_get($$store_subs ??= {}, "$query", query).error.message)}</p></div>`;
          } else if (store_get($$store_subs ??= {}, "$query", query).isSuccess) {
            $$payload3.out += "<!--[3-->";
            $$payload3.out += `<div class="flex flex-row items-center gap-4"><img${attr("src", store_get($$store_subs ??= {}, "$query", query).data.user.picture)}${attr("alt", `${stringify(store_get($$store_subs ??= {}, "$query", query).data.user.given_name)} ${stringify(store_get($$store_subs ??= {}, "$query", query).data.user.family_name)}`)} class="rounded-full w-20 h-20 object-cover"> <div class="flex flex-col"><p class="font-semibold text-lg">${escape_html(store_get($$store_subs ??= {}, "$query", query).data.user.given_name)} ${escape_html(store_get($$store_subs ??= {}, "$query", query).data.user.family_name)}</p> <p class="text-zinc-500 text-sm">${escape_html(store_get($$store_subs ??= {}, "$query", query).data.user.email)}</p></div></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
