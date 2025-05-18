<script lang="ts">
    import * as Card from '$lib/components/ui/card'
</script>

<Card.Root class="w-[350px] m-auto">
    <Card.Header>
        <Card.Title class="text-center">Page not found</Card.Title>
        <Card.Description class="text-center">The page you are looking for does not exist.</Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="text-center">
            <p class="text-2xl font-bold">404</p>
            <!-- <p class="text-sm text-muted-foreground">Page not found</p> -->
        </div>
    </Card.Content>
</Card.Root>