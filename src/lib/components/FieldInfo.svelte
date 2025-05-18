<script lang="ts">
  export let field: any;
</script>

{#if field?.state?.error}
  <div class="text-red-500 text-sm mt-1">{field.state.error}</div>
{/if}