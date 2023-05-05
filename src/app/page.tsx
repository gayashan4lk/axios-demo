'use client';
import { ReactNode, useState } from 'react';
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
	useMutation,
} from '@tanstack/react-query';
import { Button, Card } from '@/components';
import { getTodosWithAxios, getTodosWithFetch } from '@/utils';
import type { Response } from '@/types';

export default function Home() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<main className='dark grid place-items-center'>
				<AppContainer />
			</main>
		</QueryClientProvider>
	);
}

function AppContainer() {
	const todoList = useQuery({
		queryKey: ['todoList'],
		queryFn: getTodosWithAxios,
	});

	console.log(todoList);

	// GET REQUEST
	function getTodos() {
		console.log('GET | getTodos Initiated');

		// Axios GET Request
		// (async () => {
		// 	try {
		// 		const myRes = await getTodosWithFetch();
		// 	} catch (error) {}
		// })();
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

	if (todoList.isLoading) return <div>Loading...</div>;
	if (todoList.isError)
		return <pre>{JSON.stringify(todoList.error, null, 2)}</pre>;

	return (
		<>
			<h1 className='my-2 font-bold text-xl'>Axios Crash Course</h1>
			<div className='my-2'>
				<Button variant='btn-primary' handleOnClick={getTodos}>
					GET
				</Button>
				<Button variant='btn-accent' handleOnClick={addTodo}>
					POST
				</Button>
				<Button variant='btn-warning' handleOnClick={updateTodo}>
					PUT/PATCH
				</Button>
				<Button variant='btn-error' handleOnClick={removeTodo}>
					DELETE
				</Button>
				<Button handleOnClick={getData}>Sim Requests</Button>
				<Button handleOnClick={customHeaders}>Custom Headers</Button>
				<Button handleOnClick={transformResponse}>Transform</Button>
				<Button handleOnClick={errorHandling}>Error Handling</Button>
				<Button handleOnClick={cancelToken}>Cancel</Button>
			</div>
			{todoList.data && (
				<div className='m-5 grid gap-4 grid-cols-3'>
					<div>
						<Card title={`Status: ${todoList.data.status}`} />
						<Card
							title='Headers'
							body={JSON.stringify(todoList.data.headers, null, 2)}
						/>
					</div>
					<Card
						title='Data'
						body={JSON.stringify(todoList.data.data, null, 2)}
					/>

					<Card
						title='Config'
						body={JSON.stringify(todoList.data.config, null, 2)}
					/>
				</div>
			)}
		</>
	);
}
