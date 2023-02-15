<script>
  import { showModalStore, formStore } from "../stores.js";

  export let disabled = false;

  export const validate = () => {
    const errors = [];
    if (!["Audi", "BMW", "Nissan"].includes($formStore.carBrand)) {
      const error = 'Car brand should be one of: "Audi", "BMW", "Nissan"';
      errors.push(`<p>${error}</p>`);
    }
    if (!["65000", "66000", "67000", "68000"].includes($formStore.zipCode)) {
      const error = "Zip code should be one of: 65000, 66000, 67000, 68000";
      errors.push(`<p>${error}</p>`);
    }
    if (errors.length) {
      showModalStore.set(errors.join(""));
      return false;
    }
    return true;
  };
</script>

<!-- HTML -->
<form class="form">
  <label for="carBrand">
    Car brand:
    <input id="carBrand" bind:value={$formStore.carBrand} disabled={disabled}/>
  </label>
  <label for="zipCode">
    Zip code:
    <input id="zipCode" bind:value={$formStore.zipCode} disabled={disabled}/>
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
