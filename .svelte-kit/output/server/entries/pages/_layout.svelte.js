import { E as current_component, F as fallback, G as slot, I as bind_props, C as pop, A as push, J as store_get, K as unsubscribe_stores } from "../../chunks/index.js";
import { s as setQueryClientContext, u as useQueryClient, c as createQuery } from "../../chunks/createQuery.js";
import { persistQueryClient } from "@tanstack/query-persist-client-core";
import { u as userQueryOptions } from "../../chunks/api.js";
import { B as Button } from "../../chunks/index3.js";
import "../../chunks/client.js";
import { QueryClient } from "@tanstack/query-core";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function QueryClientProvider($$payload, $$props) {
  push();
  let client = fallback($$props["client"], () => new QueryClient(), true);
  setQueryClientContext(client);
  onDestroy(() => {
    client.unmount();
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  bind_props($$props, { client });
  pop();
}
function Devtools($$payload, $$props) {
  push();
  let initialIsOpen = fallback($$props["initialIsOpen"], false);
  let buttonPosition = fallback($$props["buttonPosition"], "bottom-right");
  let position = fallback($$props["position"], "bottom");
  let client = fallback($$props["client"], useQueryClient, true);
  let errorTypes = fallback($$props["errorTypes"], () => [], true);
  let styleNonce = fallback($$props["styleNonce"], void 0);
  let shadowDOMTarget = fallback($$props["shadowDOMTarget"], void 0);
  $$payload.out += `<div class="tsqd-parent-container"></div>`;
  bind_props($$props, {
    initialIsOpen,
    buttonPosition,
    position,
    client,
    errorTypes,
    styleNonce,
    shadowDOMTarget
  });
  pop();
}
function NavBar($$payload, $$props) {
  push();
  var $$store_subs;
  const userQuery = createQuery(userQueryOptions);
  useQueryClient();
  $$payload.out += `<div class="p-2 flex justify-between items-baseline gap-2 max-w-2xl m-auto"><a href="/" class="text-2xl font-bold">rTasks</a> <div class="flex gap-2"><div class="flex gap-2 items-center"><a href="/about" class="[&amp;.active]:font-bold">About</a> <a href="/tasks" class="[&amp;.active]:font-bold">Tasks</a> <a href="/create-task" class="[&amp;.active]:font-bold">Create</a> <a href="/profile" class="[&amp;.active]:font-bold">Profile</a> `;
  if (store_get($$store_subs ??= {}, "$userQuery", userQuery).data) {
    $$payload.out += "<!--[-->";
    Button($$payload, {
      class: "bg-zinc-800 text-white hover:bg-zinc-700",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Logout`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
    Button($$payload, {
      class: "bg-zinc-800 text-white hover:bg-zinc-700",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Login`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  const queryClient = new QueryClient();
  if (typeof window !== "undefined") {
    const persister = {
      persistClient: (client) => {
        window.localStorage.setItem("REACT_QUERY_OFFLINE_CACHE", JSON.stringify(client));
      },
      restoreClient: async () => {
        const cache = window.localStorage.getItem("REACT_QUERY_OFFLINE_CACHE");
        return cache ? JSON.parse(cache) : void 0;
      },
      removeClient: () => {
        window.localStorage.removeItem("REACT_QUERY_OFFLINE_CACHE");
      }
    };
    persistQueryClient({ queryClient, persister });
  }
  if (typeof window !== "undefined" && window.location.search.includes("clearCache=1")) {
    window.localStorage.removeItem("REACT_QUERY_OFFLINE_CACHE");
    window.location.replace("/");
  }
  QueryClientProvider($$payload, {
    client: queryClient,
    children: ($$payload2) => {
      NavBar($$payload2);
      $$payload2.out += `<!----> <hr> <div class="p-2 gap-2 max-w-2xl m-auto"><!---->`;
      slot($$payload2, $$props, "default", {});
      $$payload2.out += `<!----></div> `;
      Devtools($$payload2, {});
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  _layout as default
};
