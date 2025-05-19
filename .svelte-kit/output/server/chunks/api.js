import { hc } from "hono/client";
const client = hc("/");
const api = client.api;
async function getCurrentUser() {
  const res = await api.me.$get();
  if (res.status === 401) {
    throw new Error("unauthenticated");
  }
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}
const userQueryOptions = {
  queryKey: ["user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
  retry: false
};
export {
  api as a,
  userQueryOptions as u
};
