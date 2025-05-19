import { C as pop, A as push, J as store_get, M as escape_html, K as unsubscribe_stores } from "../../chunks/index.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_description, d as Card_content } from "../../chunks/card-title.js";
import "clsx";
import { a as api, u as userQueryOptions } from "../../chunks/api.js";
import { S as Skeleton } from "../../chunks/skeleton.js";
import { c as createQuery } from "../../chunks/createQuery.js";
import { B as Button } from "../../chunks/index3.js";
function TotalTasksCard($$payload, $$props) {
  push();
  var $$store_subs;
  async function fetchTotalTasks() {
    const res = await api.tasks["total-tasks"].$get();
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return { totalTasks: data.total };
  }
  const query = createQuery({
    queryKey: ["get-total-tasks"],
    queryFn: fetchTotalTasks,
    staleTime: 0,
    refetchOnWindowFocus: true
  });
  Card($$payload, {
    class: "w-[350px] m-auto",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Total Tasks`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->The total amount of tasks you have`;
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
          $$payload3.out += `<div>`;
          if (store_get($$store_subs ??= {}, "$query", query).isPending) {
            $$payload3.out += "<!--[-->";
            Skeleton($$payload3, { class: "w-full h-12" });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          if (store_get($$store_subs ??= {}, "$query", query).error) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `An error has occurred:
        ${escape_html(store_get($$store_subs ??= {}, "$query", query).error.message)}`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          if (store_get($$store_subs ??= {}, "$query", query).isSuccess) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div><p class="text-2xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$query", query).data.totalTasks)}</p> <p class="text-sm text-muted-foreground">tasks</p></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div>`;
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
function _page($$payload, $$props) {
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
    TotalTasksCard($$payload);
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
