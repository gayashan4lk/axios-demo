import axios from 'axios';
import { Response } from '@/types';

export async function getTodosWithAxios() {
	try {
		const response = (await axios({
			method: 'get',
			url: 'https://jsonplaceholder.typicode.com/todos',
			params: {
				_limit: 5,
			},
		})) as Response;
		return response;
	} catch (error) {
		console.error(error);
	}
}

export async function getTodosWithFetch() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=5'
		);
		const res = (await response.json()) as Response;
		console.log(res);
		return res;
	} catch (error) {
		console.error(error);
	}
}
