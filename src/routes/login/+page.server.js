import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const userid = data.get('userid');
		const password = data.get('password');
		console.log({ userid, password });

		throw redirect(301, '/profile');
	}
};
