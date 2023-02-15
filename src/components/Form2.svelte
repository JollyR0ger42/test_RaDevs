<script>
  import { showModalStore } from "../stores.js";

  let firstName = ''
  let lastName = ''
  let carModel = ''
  let firstRegistration = ''

  export const validate = () => {
    console.log('val2')
    const errors = []
    const map = {
      'First name': !!firstName,
      'Last name': !!lastName,
      'Car model': !!carModel,
      'First registration': !!firstRegistration
    }
    for (const [key, value] of Object.entries(map)) {
      if (!value) errors.push(key)
    }
    if (errors.length) {
      showModalStore.set(`Fields required: ${errors.join(' ')}`)
      return false
    }
    return true
  }
</script>

<form class="form">
  <label for="firstName">
    First name:
    <input id="firstName" bind:value={firstName} />
  </label>
  <label for="lastName">
    Last name:
    <input id="lastName" bind:value={lastName} />
  </label>
  <label for="carModel">
    Car model:
    <input id="carModel" bind:value={carModel} />
  </label>
  <label for="firstRegistration">
    First registration:
    <input id="firstRegistration" bind:value={firstRegistration} />
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
