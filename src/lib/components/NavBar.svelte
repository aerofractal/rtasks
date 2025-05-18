<script context="module" lang="ts">
export const ssr = false;
</script>

<script lang="ts">
    import { createQuery, useQueryClient } from '@tanstack/svelte-query'
    import { userQueryOptions } from '$lib/api'
    import { Button } from '$lib/components/ui/button'
    import { goto } from '$app/navigation'

    const userQuery = createQuery(userQueryOptions)
    const queryClient = useQueryClient()
</script>

<div class="p-2 flex gap-2 max-w-2xl m-auto">
    <a href="/" class="[&.active]:font-bold">Home</a>
    <a href="/about" class="[&.active]:font-bold">About</a>
    <a href="/tasks" class="[&.active]:font-bold">Tasks</a>
    <a href="/create-task" class="[&.active]:font-bold">Create</a>
    <a href="/profile" class="[&.active]:font-bold">Profile</a>
    {#if $userQuery.data}
        <Button
            on:click={() => window.location.href = '/api/logout'}
            class="ml-4 px-3 py-1 rounded bg-zinc-800 text-white hover:bg-zinc-700"
        >
            Logout
        </Button>
    {:else}
        <Button
            on:click={() => window.location.href = '/api/login'}
            class="ml-4 px-3 py-1 rounded bg-zinc-800 text-white hover:bg-zinc-700"
        >
            Login
        </Button>
    {/if}
</div>