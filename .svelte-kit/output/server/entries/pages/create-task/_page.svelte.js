import "clsx";
import { A as push, C as pop, N as noop, O as sanitize_props, P as rest_props, F as fallback, Q as spread_attributes, R as clsx, I as bind_props, J as store_get, K as unsubscribe_stores, M as escape_html } from "../../../chunks/index.js";
import { c as cn } from "../../../chunks/utils.js";
import { B as Button } from "../../../chunks/index3.js";
import { w as writable } from "../../../chunks/index2.js";
import { a as api } from "../../../chunks/api.js";
import { g as goto } from "../../../chunks/client.js";
import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { FieldApi, FormApi } from "@tanstack/form-core";
function useStore(store, selector = (d) => d) {
  let slice = selector(store.state);
  return {
    get current() {
      return slice;
    }
  };
}
function createField(opts) {
  const options = opts();
  const api2 = new FieldApi(options);
  const extendedApi = api2;
  extendedApi.Field = Field_1;
  const storeSub = useStore(api2.store);
  Object.defineProperty(extendedApi, "state", {
    get() {
      return storeSub.current;
    }
  });
  return extendedApi;
}
function Field_1($$payload, $$props) {
  push();
  let {
    children,
    $$slots,
    $$events,
    ...fieldOptions
  } = $$props;
  const fieldApi = createField(() => {
    return fieldOptions;
  });
  children($$payload, fieldApi);
  $$payload.out += `<!---->`;
  pop();
}
function Subscribe($$payload, $$props) {
  push();
  let {
    children,
    store,
    selector = (state) => state
  } = $$props;
  const value = useStore(store, selector);
  children($$payload, value.current);
  $$payload.out += `<!---->`;
  pop();
}
function createForm(opts) {
  const options = opts?.();
  const api2 = new FormApi(options);
  const extendedApi = api2;
  extendedApi.Field = (internal, props) => Field_1(internal, { ...props, form: api2 });
  extendedApi.createField = (props) => createField(() => {
    return { ...props(), form: api2 };
  });
  extendedApi.useStore = (selector) => useStore(api2.store, selector);
  extendedApi.Subscribe = (internal, props) => Subscribe(internal, { ...props, store: api2.store });
  noop(api2.mount);
  return extendedApi;
}
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "readonly"]);
  push();
  let className = fallback($$props["class"], void 0);
  let value = fallback($$props["value"], void 0);
  let readonly = fallback($$props["readonly"], void 0);
  $$payload.out += `<input${spread_attributes(
    {
      class: clsx(cn("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)),
      value,
      readonly,
      ...$$restProps
    }
  )}>`;
  bind_props($$props, { class: className, value, readonly });
  pop();
}
const tasks = sqliteTable(
  "tasks",
  {
    id: integer("id").primaryKey(),
    userId: text("user_id").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    completed: integer("completed", { mode: "boolean" }).default(false),
    createdAt: text("created_at").notNull().default(sql`(current_timestamp)`)
  },
  (tasks2) => [
    index("name_idx").on(tasks2.userId)
  ]
);
const insertTaskSchema = createInsertSchema(tasks, {
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  description: z.string().min(3, { message: "Description must be at least 3 characters." })
});
createSelectSchema(tasks);
const createTaskSchema = insertTaskSchema.omit({
  userId: true,
  createdAt: true,
  completed: true
});
function CreateTaskForm($$payload, $$props) {
  push();
  var $$store_subs;
  const isSubmitting = writable(false);
  const form = createForm(() => ({
    defaultValues: { title: "", description: "" },
    onSubmit: async ({ value }) => {
      isSubmitting.set(true);
      const res = await api.tasks.$post({ json: value });
      if (!res.ok) {
        throw new Error("server error");
      }
      isSubmitting.set(false);
      goto();
    }
  }));
  $$payload.out += `<form id="form" class="flex flex-col gap-y-4 max-w-xl m-auto">`;
  {
    let children = function($$payload2, field) {
      $$payload2.out += `<div><label><div>Title</div> `;
      Input($$payload2, {
        value: form.state.values.title,
        oninput: (e) => {
          const target = e.target;
          field.handleChange(target.value);
        }
      });
      $$payload2.out += `<!----></label> `;
      if (field.state.meta.errors.length) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="text-sm mt-1">${escape_html(field.state.meta.errors[0]?.message)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div>`;
    };
    form.Field($$payload, {
      name: "title",
      validators: { onChange: createTaskSchema.shape.title },
      children,
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!----> `;
  {
    let children = function($$payload2, field) {
      $$payload2.out += `<div><label><div>Description</div> `;
      Input($$payload2, {
        value: form.state.values.description,
        oninput: (e) => {
          const target = e.target;
          field.handleChange(target.value);
        }
      });
      $$payload2.out += `<!----></label> `;
      if (field.state.meta.errors.length) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="text-sm mt-1">${escape_html(field.state.meta.errors[0]?.message)}</div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div>`;
    };
    form.Field($$payload, {
      name: "description",
      validators: { onChange: createTaskSchema.shape.description },
      children,
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!----> `;
  Button($$payload, {
    type: "submit",
    class: "mt-4",
    disabled: store_get($$store_subs ??= {}, "$isSubmitting", isSubmitting),
    children: ($$payload2) => {
      if (store_get($$store_subs ??= {}, "$isSubmitting", isSubmitting)) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `...`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `Submit`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="p-2"><h2>Create Task</h2> `;
  CreateTaskForm($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
