<script>
  import Form1 from "./Form1.svelte";
  import Form2 from "./Form2.svelte";
  import { goto } from '$app/navigation';

  let formValidation;
  let step = 1;

  const onNext = () => {
    if (formValidation() && step === 2) goto('/result')
    else if (formValidation() && step < 3) step++;
  };

  const onBack = () => {
    if (step > 1) step--;
  };
</script>

<!-- HTML -->
{#if step === 1}
  <Form1 bind:validate={formValidation} />
{:else if step === 2}
  <Form2 bind:validate={formValidation} />
{/if}
<div class="form__buttons">
  {#if step !== 1}
    <button on:click={onBack}>Back</button>
  {/if}
  <button on:click={onNext}>Next</button>
</div>

<!-- CSS -->
<style lang="scss">
  .form__buttons {
    margin-top: 10px;
  }
</style>
