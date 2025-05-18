<script lang="ts">
	import '../app.css';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query'
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
	import { persistQueryClient } from '@tanstack/query-persist-client-core'
	import NavBar from '$lib/components/NavBar.svelte'

	const queryClient = new QueryClient()

	if (typeof window !== 'undefined') {
		const persister = {
			persistClient: (client: unknown) => {
				window.localStorage.setItem('REACT_QUERY_OFFLINE_CACHE', JSON.stringify(client))
			},
			restoreClient: async (): Promise<import('@tanstack/query-persist-client-core').PersistedClient | undefined> => {
				const cache = window.localStorage.getItem('REACT_QUERY_OFFLINE_CACHE')
				return cache ? JSON.parse(cache) : undefined
			},
			removeClient: () => {
				window.localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE')
			}
		}

		persistQueryClient({
			queryClient,
			persister,
		})
	}

    if (typeof window !== 'undefined' && window.location.search.includes('clearCache=1')) {
        window.localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE');
        // Remove the query param and reload the page
        window.location.replace('/');
    }
</script>

<QueryClientProvider client={queryClient}>
	<NavBar />
	<hr />
	<div class="p-2 gap-2 max-w-2xl m-auto">
		<slot />
	</div>
	<SvelteQueryDevtools />
</QueryClientProvider>


