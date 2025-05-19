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

<div class="p-2 flex justify-between items-baseline gap-2 max-w-2xl m-auto">
    <!-- Left side links -->
    <a href="/" class="text-xl font-bold">rTasks</a>
    <div class="flex gap-2">
        <div class="flex gap-2 items-center">
        <a href="/about" class="[&.active]:font-bold">About</a>
        <a href="/tasks" class="[&.active]:font-bold">Tasks</a>
        <a href="/create-task" class="[&.active]:font-bold">Create</a>
        <!-- Right side: Profile and Login/Logout -->
            <a href="/profile" class="[&.active]:font-bold">Profile</a>
            {#if $userQuery.data}
                <Button
                    on:click={() => window.location.href = '/api/logout'}
                    class="bg-zinc-800 text-white hover:bg-zinc-700"
                >
                    Logout
                </Button>
            {:else}
                <Button
                    on:click={() => window.location.href = '/api/login'}
                    class="bg-zinc-800 text-white hover:bg-zinc-700"
                >
                    Login
                </Button>
            {/if}
        </div>
    </div>
</div>