import "clsx";
import { C as Card, a as Card_header, b as Card_title, c as Card_description, d as Card_content } from "../../chunks/card-title.js";
function NotFound($$payload) {
  Card($$payload, {
    class: "w-[350px] m-auto",
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-center",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Page not found`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            class: "text-center",
            children: ($$payload4) => {
              $$payload4.out += `<!---->The page you are looking for does not exist.`;
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
          $$payload3.out += `<div class="text-center"><p class="text-2xl font-bold">404</p></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function _error($$payload) {
  NotFound($$payload);
}
export {
  _error as default
};
