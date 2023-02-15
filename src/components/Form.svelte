<script>
  import Form1 from "./Form1.svelte";
  import Form2 from "./Form2.svelte";
  import { showModalStore } from "../stores.js";
  let form1Validation;
  let step = 1;

  const onNext = () => {
    if (form1Validation()) step++;
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
  <Form1 bind:validate={form1Validation} />
{:else}
  <Form2 />
{/if}

<div class="form__buttons">
  <button on:click={onBack}>Back</button>
  <button on:click={onNext}>Next</button>
</div>


<style lang="scss">
  .form__buttons {
    margin-top: 10px;
  }
</style>
