

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create-task/_page.svelte.js')).default;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
