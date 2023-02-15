<script>
  import Result1 from '../../components/Result1.svelte'
  import Result2 from '../../components/Result2.svelte'
  import { goto } from '$app/navigation';

  let chance = Math.random() < 0.5
</script>

{#if chance}
  <Result1 />
{:else}
  <Result2 />
{/if}
<button on:click={() => goto('/')}>Back</button>
