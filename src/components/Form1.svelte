<script>
  let carBrand = ''
  let zipCode = ''
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
