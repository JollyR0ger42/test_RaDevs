import { writable } from 'svelte/store'

export const showModalStore = writable('')

export const showLoaderStore = writable(100)

export const formStore = writable({
  carBrand: '',
  zipCode: '',
  firstName: '',
  lastName: '',
  carModel: '',
  firstRegistration: '',
})

