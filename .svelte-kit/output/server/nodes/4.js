

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tasks/_layout.svelte.js')).default;
export const imports = [];
export const stylesheets = [];
export const fonts = [];
