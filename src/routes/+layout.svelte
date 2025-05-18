<script lang="ts">
	import { type Snippet } from 'svelte'
	import '../app.css';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query'
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'

	const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
	<div class="p-2 flex gap-2">
		<a href="/" class="[&.active]:font-bold">Home</a>
		<a href="/about" class="[&.active]:font-bold">About</a>
		<a href="/tasks" class="[&.active]:font-bold">Tasks</a>
		<a href="/create-task" class="[&.active]:font-bold">Create</a>
	</div>
	<hr />
	<slot />
	<SvelteQueryDevtools />
</QueryClientProvider>


