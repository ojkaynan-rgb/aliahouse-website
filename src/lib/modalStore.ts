import { writable } from 'svelte/store';

export const modalOpen = writable(false);

export function openModal() {
	modalOpen.set(true);
	if (typeof gtag !== 'undefined') {
		gtag('event', 'modal_shown', {
			event_category: 'waitlist',
			event_label: 'first_access_modal'
		});
	}
}

export function closeModal() {
	modalOpen.set(false);
}
