import { writable } from 'svelte/store';

export const modalOpen = writable(false);

export function openModal() {
	modalOpen.set(true);
}

export function closeModal() {
	modalOpen.set(false);
}
