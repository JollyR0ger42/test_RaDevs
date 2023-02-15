import { writable } from 'svelte/store'

export const showModalStore = writable('')
export const formStore = writable({
  carBrand: 'BMW',
  zipCode: '65000',
  firstName: '',
  lastName: '',
  carModel: '',
  firstRegistration: '',
})
