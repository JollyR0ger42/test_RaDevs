<script>
  import { showModalStore, formStore } from "../stores.js";

  export const validate = () => {
    console.log("val2");
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
    <input id="firstName" bind:value={$formStore.firstName} />
  </label>
  <label for="lastName">
    Last name:
    <input id="lastName" bind:value={$formStore.lastName} />
  </label>
  <label for="carModel">
    Car model:
    <input id="carModel" bind:value={$formStore.carModel} />
  </label>
  <label for="firstRegistration">
    First registration:
    <input id="firstRegistration" bind:value={$formStore.firstRegistration} />
  </label>
</form>

<!-- CSS -->
<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
