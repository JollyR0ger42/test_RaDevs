<script>
  import Form1 from "./Form1.svelte";
  import Form2 from "./Form2.svelte";
  import { showModalStore } from "../stores.js";
  let formValidation;
  let step = 1;

  const onNext = () => {
    if (formValidation() && step < 3) step++;
  };

  const onBack = () => {
    if (step > 1) step--;
  };

  const showModal = () => {
    if ($showModalStore) showModalStore.set("");
    else showModalStore.set("<h1>Yo</h1>");
  };
</script>

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

<style lang="scss">
  .form__buttons {
    margin-top: 10px;
  }
</style>
