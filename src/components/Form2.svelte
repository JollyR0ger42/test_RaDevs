<script>
  import { showModalStore, formStore } from "../stores.js";

  export let disabled = false;

  export const validate = () => {
    const errors = [];
    const map = {
      "First name": !!$formStore.firstName,
      "Last name": !!$formStore.lastName,
      "Car model": !!$formStore.carModel,
      "First registration": !!$formStore.firstRegistration,
    };
    for (const [key, value] of Object.entries(map)) {
      if (!value) errors.push(key);
    }
    if (errors.length) {
      showModalStore.set(`Fields required: ${errors.join(", ")}`);
      return false;
    }
    return true;
  };
</script>

<!-- HTML -->
<form class="form">
  <label for="firstName">
    First name:
    <input id="firstName" bind:value={$formStore.firstName} disabled={disabled} />
  </label>
  <label for="lastName">
    Last name:
    <input id="lastName" bind:value={$formStore.lastName} disabled={disabled} />
  </label>
  <label for="carModel">
    Car model:
    <input id="carModel" bind:value={$formStore.carModel} disabled={disabled} />
  </label>
  <label for="firstRegistration">
    First registration:
    <input id="firstRegistration" bind:value={$formStore.firstRegistration} disabled={disabled} />
  </label>
</form>

<!-- CSS -->
<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 10px;
    }
  }
</style>
