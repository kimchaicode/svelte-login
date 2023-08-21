import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const phonenumber = data.get('phonenumber');
		console.log({ name, phonenumber });

		return { success: true };
	}
};
