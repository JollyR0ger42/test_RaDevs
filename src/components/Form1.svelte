<script>
  import { showModalStore } from "../stores.js";

  let carBrand = 'BMW'
  let zipCode = '65000'

  export const validate = () => {
    const errors = []
    if (!['Audi', 'BMW', 'Nissan'].includes(carBrand)) {
      const error = 'Car brand should be one of: "Audi", "BMW", "Nissan"'
      errors.push(`<p>${error}</p>`)
    }
    if (!['65000', '66000', '67000', '68000'].includes(zipCode)) {
      const error = 'Zip code should be one of: 65000, 66000, 67000, 68000'
      errors.push(`<p>${error}</p>`)
    }
    if (errors.length) {
      showModalStore.set(errors.join(''))
      return false
    }
    return true
  }
</script>

<form class="form">
  <label for="carBrand">
    Car brand:
    <input id="carBrand" bind:value={carBrand} />
  </label>
  <label for="zipCode">
    Zip code:
    <input id="zipCode" bind:value={zipCode} />
  </label>
</form>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
