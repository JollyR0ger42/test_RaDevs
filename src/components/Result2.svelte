<script>
  import { formStore } from "../stores.js";
</script>

<!-- HTML -->
<form class="form">
  <label for="firstName">
    Name:
    <input id="firstName" value={$formStore.firstName + ' ' + $formStore.lastName} disabled />
  </label>
  <label for="carBrand">
    Car:
    <input id="carBrand" value={$formStore.carBrand + ' ' + $formStore.carModel} disabled/>
  </label>
  <label for="zipCode">
    Zip code:
    <input id="zipCode" value={$formStore.zipCode} disabled/>
  </label>
  <label for="firstRegistration">
    First registration:
    <input id="firstRegistration" value={$formStore.firstRegistration} disabled />
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