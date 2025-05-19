
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const SYSTEMD_EXEC_PID: string;
	export const XAUTHORITY: string;
	export const SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LANG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const INVOCATION_ID: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const USER: string;
	export const DISPLAY: string;
	export const SHLVL: string;
	export const XDG_VTNR: string;
	export const UBUNTU_MENUPROXY: string;
	export const XDG_SESSION_ID: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const GTK3_MODULES: string;
	export const XDG_DATA_DIRS: string;
	export const PATH: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const MAIL: string;
	export const OLDPWD: string;
	export const _: string;
	export const CHROME_DESKTOP: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const GDK_BACKEND: string;
	export const NO_AT_BRIDGE: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const COLORTERM: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const ZDOTDIR: string;
	export const USER_ZDOTDIR: string;
	export const FPATH: string;
	export const MANPAGER: string;
	export const EDITOR: string;
	export const NVM_DIR: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_BIN: string;
	export const NVM_INC: string;
	export const rvm_prefix: string;
	export const rvm_path: string;
	export const rvm_bin_path: string;
	export const rvm_version: string;
	export const GEM_HOME: string;
	export const GEM_PATH: string;
	export const MY_RUBY_HOME: string;
	export const IRBRC: string;
	export const RUBY_VERSION: string;
	export const SSH_AUTH_SOCK: string;
	export const SSH_AGENT_PID: string;
	export const STARSHIP_SHELL: string;
	export const STARSHIP_SESSION_KEY: string;
	export const PHP_INI_SCAN_DIR: string;
	export const LD_LIBRARY_PATH: string;
	export const rvm_alias_expanded: string;
	export const rvm_bin_flag: string;
	export const rvm_docs_type: string;
	export const rvm_gemstone_package_file: string;
	export const rvm_gemstone_url: string;
	export const rvm_niceness: string;
	export const rvm_nightly_flag: string;
	export const rvm_only_path_flag: string;
	export const rvm_pretty_print_flag: string;
	export const rvm_proxy: string;
	export const rvm_quiet_flag: string;
	export const rvm_ruby_bits: string;
	export const rvm_ruby_file: string;
	export const rvm_ruby_make: string;
	export const rvm_ruby_make_install: string;
	export const rvm_ruby_mode: string;
	export const rvm_script_name: string;
	export const rvm_sdk: string;
	export const rvm_silent_flag: string;
	export const rvm_use_flag: string;
	export const rvm_hook: string;
	export const npm_config_local_prefix: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_package_name: string;
	export const npm_package_json: string;
	export const npm_package_version: string;
	export const NODE: string;
	export const npm_node_execpath: string;
	export const BUN_INTERNAL_BUNX_INSTALL: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		MEMORY_PRESSURE_WRITE: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		SYSTEMD_EXEC_PID: string;
		XAUTHORITY: string;
		SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
		MOTD_SHOWN: string;
		HOME: string;
		LANG: string;
		MEMORY_PRESSURE_WATCH: string;
		INVOCATION_ID: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		USER: string;
		DISPLAY: string;
		SHLVL: string;
		XDG_VTNR: string;
		UBUNTU_MENUPROXY: string;
		XDG_SESSION_ID: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		GTK3_MODULES: string;
		XDG_DATA_DIRS: string;
		PATH: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		MAIL: string;
		OLDPWD: string;
		_: string;
		CHROME_DESKTOP: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		GDK_BACKEND: string;
		NO_AT_BRIDGE: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		COLORTERM: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		ZDOTDIR: string;
		USER_ZDOTDIR: string;
		FPATH: string;
		MANPAGER: string;
		EDITOR: string;
		NVM_DIR: string;
		NVM_CD_FLAGS: string;
		NVM_BIN: string;
		NVM_INC: string;
		rvm_prefix: string;
		rvm_path: string;
		rvm_bin_path: string;
		rvm_version: string;
		GEM_HOME: string;
		GEM_PATH: string;
		MY_RUBY_HOME: string;
		IRBRC: string;
		RUBY_VERSION: string;
		SSH_AUTH_SOCK: string;
		SSH_AGENT_PID: string;
		STARSHIP_SHELL: string;
		STARSHIP_SESSION_KEY: string;
		PHP_INI_SCAN_DIR: string;
		LD_LIBRARY_PATH: string;
		rvm_alias_expanded: string;
		rvm_bin_flag: string;
		rvm_docs_type: string;
		rvm_gemstone_package_file: string;
		rvm_gemstone_url: string;
		rvm_niceness: string;
		rvm_nightly_flag: string;
		rvm_only_path_flag: string;
		rvm_pretty_print_flag: string;
		rvm_proxy: string;
		rvm_quiet_flag: string;
		rvm_ruby_bits: string;
		rvm_ruby_file: string;
		rvm_ruby_make: string;
		rvm_ruby_make_install: string;
		rvm_ruby_mode: string;
		rvm_script_name: string;
		rvm_sdk: string;
		rvm_silent_flag: string;
		rvm_use_flag: string;
		rvm_hook: string;
		npm_config_local_prefix: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_package_name: string;
		npm_package_json: string;
		npm_package_version: string;
		NODE: string;
		npm_node_execpath: string;
		BUN_INTERNAL_BUNX_INSTALL: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
