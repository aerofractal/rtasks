import "clsx";
import { O as sanitize_props, P as rest_props, F as fallback, Q as spread_attributes, R as clsx, G as slot, I as bind_props, C as pop, A as push, J as store_get, M as escape_html, W as ensure_array_like, K as unsubscribe_stores } from "../../../chunks/index.js";
import { a as api } from "../../../chunks/api.js";
import { c as cn } from "../../../chunks/utils.js";
import { S as Skeleton } from "../../../chunks/skeleton.js";
import { c as createQuery } from "../../../chunks/createQuery.js";
function Table($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div class="relative w-full overflow-auto"><table${spread_attributes(
    {
      class: clsx(cn("w-full caption-bottom text-sm", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></table></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_body($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<tbody${spread_attributes(
    {
      class: clsx(cn("[&_tr:last-child]:border-0", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></tbody>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_caption($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<caption${spread_attributes(
    {
      class: clsx(cn("text-muted-foreground mt-4 text-sm", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></caption>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_cell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<td${spread_attributes(
    {
      class: clsx(cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></td>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_head($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<th${spread_attributes(
    {
      class: clsx(cn("text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></th>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<thead${spread_attributes(
    {
      class: clsx(cn("[&_tr]:border-b", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></thead>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_row($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<tr${spread_attributes(
    {
      class: clsx(cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></tr>`;
  bind_props($$props, { class: className });
  pop();
}
function AllTasksTable($$payload, $$props) {
  push();
  var $$store_subs;
  async function fetchTasks() {
    const res = await api.tasks.$get();
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  }
  const query = createQuery({
    queryKey: ["get-all-tasks"],
    queryFn: fetchTasks
  });
  Table($$payload, {
    class: "p-2 max-w-3xl m-auto",
    children: ($$payload2) => {
      Table_caption($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->A list of your tasks.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Table_header($$payload2, {
        children: ($$payload3) => {
          Table_row($$payload3, {
            children: ($$payload4) => {
              Table_head($$payload4, {
                class: "w-[100px]",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Id`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Table_head($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Title`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Table_head($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Description`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Table_head($$payload4, {
                class: "text-right",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Complete`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Table_body($$payload2, {
        children: ($$payload3) => {
          if (store_get($$store_subs ??= {}, "$query", query).isPending) {
            $$payload3.out += "<!--[-->";
            Table_row($$payload3, {
              children: ($$payload4) => {
                Table_cell($$payload4, {
                  class: "font-medium",
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Table_cell($$payload4, {
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Table_cell($$payload4, {
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Table_row($$payload3, {
              children: ($$payload4) => {
                Table_cell($$payload4, {
                  class: "font-medium",
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Table_cell($$payload4, {
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Table_cell($$payload4, {
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Table_row($$payload3, {
              children: ($$payload4) => {
                Table_cell($$payload4, {
                  class: "font-medium",
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Table_cell($$payload4, {
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Table_cell($$payload4, {
                  children: ($$payload5) => {
                    Skeleton($$payload5, { class: "h-4" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          } else if (store_get($$store_subs ??= {}, "$query", query).error) {
            $$payload3.out += "<!--[1-->";
            Table_row($$payload3, {
              children: ($$payload4) => {
                Table_cell($$payload4, {
                  colspan: 4,
                  class: "text-center text-red-500",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->An error has occurred: ${escape_html(store_get($$store_subs ??= {}, "$query", query).error.message)}`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          } else if (store_get($$store_subs ??= {}, "$query", query).isSuccess) {
            $$payload3.out += "<!--[2-->";
            const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$query", query).data.tasks);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let task = each_array[$$index];
              Table_row($$payload3, {
                children: ($$payload4) => {
                  Table_cell($$payload4, {
                    class: "font-medium",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(task.id)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  Table_cell($$payload4, {
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(task.title)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  Table_cell($$payload4, {
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(task.description)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  Table_cell($$payload4, {
                    class: "text-right",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(task.complete ? "Yes" : "No")}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out += `<!--]-->`;
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
function _page($$payload) {
  AllTasksTable($$payload);
}
export {
  _page as default
};
