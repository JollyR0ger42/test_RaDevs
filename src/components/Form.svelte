<script>
  import Form1 from "./Form1.svelte";
  import { showModalStore } from "../stores.js";
  let formValidation;

  const showModal = () => {
    if ($showModalStore) 
      showModalStore.set('')
    else 
    showModalStore.set('<h1>Yo</h1>')
  };
</script>

<Form1 bind:validate={formValidation} />
<button on:click={showModal}>Button</button>
