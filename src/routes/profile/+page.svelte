<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query'
    import { userQueryOptions } from '$lib/api'
    import * as Card from '$lib/components/ui/card'
    import { Skeleton } from '$lib/components/ui/skeleton'

    const query = createQuery(userQueryOptions)
</script>

<Card.Root class="w-[350px] m-auto">
    <Card.Header>
        <Card.Title>User Profile</Card.Title>
        <Card.Description>Your profile information</Card.Description>
    </Card.Header>
    <Card.Content>
        {#if $query.isPending}
            <div class="flex flex-row items-center gap-4 h-20">
                <Skeleton class="rounded-full w-20 h-20" />
                <div class="flex flex-col flex-1 gap-2">
                    <Skeleton class="h-6 w-32" />
                    <Skeleton class="h-4 w-40" />
                </div>
            </div>
        {:else if $query.error?.message === 'unauthenticated'}
            <div class="flex items-center justify-center h-20">
                <p>You need to login.</p>
            </div>
        {:else if $query.error}
            <div class="flex items-center justify-center h-20">
                <p>An error has occurred: {$query.error.message}</p>
            </div>
        {:else if $query.isSuccess}
            <div class="flex flex-row items-center gap-4">
                <img
                    src={$query.data.user.picture}
                    alt="{$query.data.user.given_name} {$query.data.user.family_name}"
                    class="rounded-full w-20 h-20 object-cover"
                />
                <div class="flex flex-col">
                    <p class="font-semibold text-lg">
                        {$query.data.user.given_name} {$query.data.user.family_name}
                    </p>
                    <p class="text-zinc-500 text-sm">
                        {$query.data.user.email}
                    </p>
                </div>
            </div>
        {/if}
    </Card.Content>
</Card.Root>