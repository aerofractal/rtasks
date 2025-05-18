<script lang="ts">
  import { api } from '$lib/api'
  import { createQuery } from '@tanstack/svelte-query'
  import * as Table from '$lib/components/ui/table'
  import { Skeleton } from '$lib/components/ui/skeleton'

  type Task = {
    id: number,
    title: string,
    description: string,
    complete: boolean
  }

  type TasksResponse = {
    tasks: Task[]
  }

  async function fetchTasks(): Promise<TasksResponse> {
    const res = await api.tasks.$get()
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await res.json()
    return data
  }

  const query = createQuery<TasksResponse>({
    queryKey: ['get-all-tasks'],
    queryFn: fetchTasks
  })
</script>

<Table.Root class="p-2 max-w-3xl m-auto">
 <Table.Caption>A list of your tasks.</Table.Caption>
 <Table.Header>
  <Table.Row>
   <Table.Head class="w-[100px]">Id</Table.Head>
   <Table.Head>Title</Table.Head>
   <Table.Head>Description</Table.Head>
   <Table.Head class="text-right">Complete</Table.Head>
  </Table.Row>
 </Table.Header>
 <Table.Body>
  {#if $query.isPending}
    <Table.Row>
      <Table.Cell class="font-medium"><Skeleton class="h-4" /></Table.Cell>
      <Table.Cell><Skeleton class="h-4" /></Table.Cell>
      <Table.Cell><Skeleton class="h-4" /></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell class="font-medium"><Skeleton class="h-4" /></Table.Cell>
      <Table.Cell><Skeleton class="h-4" /></Table.Cell>
      <Table.Cell><Skeleton class="h-4" /></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell class="font-medium"><Skeleton class="h-4" /></Table.Cell>
      <Table.Cell><Skeleton class="h-4" /></Table.Cell>
      <Table.Cell><Skeleton class="h-4" /></Table.Cell>
    </Table.Row>
  {:else if $query.error}
    <Table.Row>
      <Table.Cell colspan={4} class="text-center text-red-500">
        An error has occurred: {$query.error.message}
      </Table.Cell>
    </Table.Row>
  {:else if $query.isSuccess}
    {#each $query.data.tasks as task (task.id)}
      <Table.Row>
        <Table.Cell class="font-medium">{task.id}</Table.Cell>
        <Table.Cell>{task.title}</Table.Cell>
        <Table.Cell>{task.description}</Table.Cell>
        <Table.Cell class="text-right">{task.complete ? 'Yes' : 'No'}</Table.Cell>
      </Table.Row>
    {/each}
  {/if}
 </Table.Body>
</Table.Root>