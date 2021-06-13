import { writable } from 'svelte/store'

const storedToken = localStorage.getItem('access_token')
export const access_token = writable(storedToken)

const storedExpiration = localStorage.getItem('expiration')
export const expiration = writable(storedExpiration)

// Anytime the store changes, update the local storage value.
access_token.subscribe((value) => localStorage.setItem('access_token', value))
expiration.subscribe((value) => localStorage.setItem('expiration', value))

// export const access_token = writable(null);
// export const expiration = writable(null);
export const flights = writable([])
export const dictionaries = writable({ currencies: [], locations: [] })
export const bookedFlights = writable([])

// filtered tours
export const filteredTours = writable([])

// users
export const userData = writable({})



