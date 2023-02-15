import { writable } from 'svelte/store'

export const showModalStore = writable('')

export const showLoaderStore = writable(100)

export const formStore = writable({
  carBrand: 'BMW',
  zipCode: '65000',
  firstName: 'a',
  lastName: 'a',
  carModel: 'a',
  firstRegistration: 'a',
})

