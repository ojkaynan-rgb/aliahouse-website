import { writable } from 'svelte/store';

export interface ModalPrefill {
	city?: string;
	travelPeriod?: string;
	adults?: string;
	children?: string;
}

export const modalOpen = writable(false);
export const modalPrefill = writable<ModalPrefill>({});

export function openModal(data?: ModalPrefill) {
	if (data) modalPrefill.set(data);
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
