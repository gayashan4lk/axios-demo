import axios from 'axios';
import { z } from 'zod';
import type { Response } from '@/types';

const todosValidator = z.object({
	status: z.number().optional(),
	headers: z.any(),
	data: z.any(),
	config: z.any(),
});

export async function getTodosWithAxios() {
	try {
		const response = await axios({
			method: 'get',
			url: 'https://jsonplaceholder.typicode.com/todos',
			params: {
				_limit: 5,
			},
		});
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}

export async function getTodosWithFetch() {
	try {
		const res = await fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=5'
		);
		console.log(res);
		const response = await res.json();
		const formattedResponse: Response = {
			status: res.status,
			headers: undefined,
			data: response,
			config: undefined,
		};
		return todosValidator.parse(formattedResponse);
	} catch (error) {
		console.error(error);
	}
}
