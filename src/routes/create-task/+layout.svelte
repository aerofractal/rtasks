<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query'
    import { userQueryOptions } from '$lib/api'

    const userQuery = createQuery(userQueryOptions)
</script>

{#if $userQuery.isLoading}
    <div>Loading...</div>
{:else if !$userQuery.data}
    <div class="flex items-center justify-center h-20">
        <p>You need to login.</p>
    </div>
{:else}
    <slot />
{/if}