<script lang="ts">
 import { Input } from "$lib/components/ui/input/index.js";
 import { Label } from "$lib/components/ui/label/index.js";
 import { Button } from "$lib/components/ui/button/index.js";

 import { createForm } from "@tanstack/svelte-form";
 import type { FieldApi } from "@tanstack/svelte-form";
 import FieldInfo from "$lib/components/FieldInfo.svelte";
    
 const form = createForm(() => ({
    defaultValues: {
        title: '',
        desc: '',
    },
    onSubmit: async ({ value }) => {
        alert(JSON.stringify(value))
    },
 }))
</script>

<form class="max-w-xl m-auto"
    id="form"
    onsubmit={((e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
    })}
>
    <form.Field name="title" let:field>
        <Label for={field.name}>Title</Label>
        <Input type="text" id={field.name} />
        <Input
            name={field.name}
            value={field.state.value}
            onblur={field.handleBlur}
            oninput={(e) => field.handleChange((e.target as HTMLInputElement).value ?? "")}
        />
        <FieldInfo field={field} />
    </form.Field>

    <Label for="desc">Description</Label>
    <Input type="text" id="desc" placeholder="Title" />
    <Button type="submit" class="mt-4">Create Task</Button>
</form>