import { useQuery, useMutation } from '@tanstack/react-query';
import { getTodosWithAxios, getTodosWithFetch } from '@/utils';

export function useComponentState() {
	const todosQuery = useQuery({
		queryKey: ['todoList'],
		queryFn: getTodosWithAxios,
	});

	// GET REQUEST
	function getTodos() {
		console.log('GET | getTodos Initiated');
	}

	// POST REQUEST
	function addTodo() {
		console.log('POST | addTodo Initiated');
	}

	// PUT/PATCH REQUEST
	function updateTodo() {
		console.log('PUT/PATCH | updateTodo Initiated');
	}

	// DELETE REQUEST
	function removeTodo() {
		console.log('DELETE | removeTodo Initiated');
	}

	// SIMULTANEOUS DATA
	function getData() {
		console.log('Simultaneous Request');
	}

	// CUSTOM HEADERS
	function customHeaders() {
		console.log('Custom Headers');
	}

	// TRANSFORMING REQUESTS & RESPONSES
	function transformResponse() {
		console.log('Transform Response');
	}

	// ERROR HANDLING
	function errorHandling() {
		console.log('Error Handling');
	}

	// CANCEL TOKEN
	function cancelToken() {
		console.log('Cancel Token');
	}

	const functions = {
		getTodos,
		addTodo,
		updateTodo,
		removeTodo,
		getData,
		customHeaders,
		transformResponse,
		errorHandling,
		cancelToken,
	};

	return { todosQuery, functions };
}
