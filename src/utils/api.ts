import axios from 'axios';
import { z } from 'zod';
import type { Response } from '@/types';

const todosValidator = z.object({
	status: z.number().optional(),
	headers: z.any(),
	data: z.any(),
	config: z.any(),
});

export async function axiosGetRequest() {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		// const response = await axios({
		// 	method: 'get',
		// 	url: 'https://jsonplaceholder.typicode.com/todos',
		// 	params: {
		// 		_limit: null,
		// 	},
		// });
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}

export async function fetchGetRequest() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
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

export async function axiosPostRequest() {
	try {
		const response = await axios.post(
			'https://jsonplaceholder.typicode.com/todos',
			{ title: 'New Todo', completed: false }
		);
		// const response = await axios({
		// 	method: 'post',
		// 	url: 'https://jsonplaceholder.typicode.com/todos',
		// 	data: {
		// 		title: 'New Todo',
		// 		completed: false,
		// 	},
		// });
		console.log(response);
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}

export async function axiosPutRequest() {
	try {
		const response = await axios.put(
			'https://jsonplaceholder.typicode.com/todos/1',
			{ title: 'Updated Todo', completed: true }
		);
		// const response = await axios({
		// 	method: 'put',
		// 	url: 'https://jsonplaceholder.typicode.com/todos/1',
		// 	data: {
		// 		title: 'Updated Todo',
		// 		completed: true,
		// 	},
		// });
		console.log(response);
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}

export async function axiosPatchRequest() {
	try {
		const response = await axios.patch(
			'https://jsonplaceholder.typicode.com/todos/1',
			{ title: 'Updated Todo', completed: true }
		);
		console.log(response);
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}

export async function axiosDeleteRequest() {
	try {
		const response = await axios.delete(
			'https://jsonplaceholder.typicode.com/todos/1'
		);
		console.log(response);
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}

export async function axiosSimultanousRequests() {
	try {
		const response = await axios.all([
			axios.get('https://jsonplaceholder.typicode.com/todos'),
			axios.get('https://jsonplaceholder.typicode.com/posts'),
		]);
		console.log(response);
		return todosValidator.parse(response[1]);
	} catch (error) {
		console.error(error);
	}
}

export async function axiosPostRequestWithCustomHeaders() {
	try {
		const response = await axios.post(
			'https://jsonplaceholder.typicode.com/todos',
			{ title: 'New Todo', completed: false },
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'sometoken',
				},
			}
		);
		console.log(response);
		return todosValidator.parse(response);
	} catch (error) {
		console.error(error);
	}
}
