<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query'
    import { userQueryOptions } from '$lib/api'
    import { Button } from '$lib/components/ui/button'

    const userQuery = createQuery(userQueryOptions)
</script>

{#if $userQuery.isLoading}
    <div>Loading...</div>
{:else if !$userQuery.data}
    <div class="flex flex-col gap-y-2 items-center justify-center h-20">
        <p>You need to login or register.</p>
        <Button
            on:click={() => window.location.href = '/api/register'}
            class="bg-zinc-800 text-white hover:bg-zinc-700"
        >
            Register
        </Button>
    </div>
{:else}
    <slot />
{/if}