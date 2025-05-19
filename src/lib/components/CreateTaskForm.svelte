<script lang="ts">
  import { createForm } from '@tanstack/svelte-form'
  import { Input } from '$lib/components/ui/input'
  import { Button } from '$lib/components/ui/button'
  import { writable } from 'svelte/store'
  import { api } from '$lib/api'
  import { goto } from '$app/navigation'
  import { createTaskSchema } from '$server/shared-types'

  const isSubmitting = writable(false)

  const form = createForm(() => ({
    defaultValues: {
      title: '',
      description: '',
    },
    onSubmit: async ({ value }) => {
      isSubmitting.set(true)
      const res = await api.tasks.$post({ json: value })
      if (!res.ok) {
        throw new Error('server error')
      }
      isSubmitting.set(false)
      goto('/tasks')
    },
  }))
</script>

<form
  id="form"
  onsubmit={(e) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }}
  class="flex flex-col gap-y-4 max-w-xl m-auto"
>
  <form.Field 
    name="title"
    validators={{
      onChange: createTaskSchema.shape.title
    }}
  >
    {#snippet children(field)}
      <div>
        <label>
          <div>Title</div>
          <Input
            value={form.state.values.title}
            oninput={(e: Event) => {
              const target = e.target as HTMLInputElement
              field.handleChange(target.value)
            }}
          />
        </label>
        {#if field.state.meta.errors.length}
          <div class="text-sm mt-1">{field.state.meta.errors[0]?.message}</div>
        {/if}
      </div>
    {/snippet}
  </form.Field>
  <form.Field
    name="description"
    validators={{
      onChange: createTaskSchema.shape.description
    }}
  >
    {#snippet children(field)}
      <div>
        <label>
          <div>Description</div>
          <Input
            value={form.state.values.description}
            oninput={(e: Event) => {
              const target = e.target as HTMLInputElement
              field.handleChange(target.value)
            }}
          />
        </label>
        {#if field.state.meta.errors.length}
          <div class="text-sm mt-1">{field.state.meta.errors[0]?.message}</div>
        {/if}
      </div>
    {/snippet}
  </form.Field>
  <Button type="submit" class="mt-4" disabled={$isSubmitting}>
    {#if $isSubmitting}
      ...
    {:else}
      Submit
    {/if}
  </Button>
</form>