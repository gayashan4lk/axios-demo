'use client';
import { useState } from 'react';
import { Button, Card } from '@/components';
import { getTodosWithAxios, getTodosWithFetch } from '@/utils';
import type { Response } from '@/types';

export default function Home() {
	const [response, setResponse] = useState<Response>();
	const [loading, setLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	// GET REQUEST
	function getTodos() {
		console.log('GET | getTodos Initiated');
		setLoading(true);
		// Axios GET Request
		(async () => {
			try {
				const myRes = await getTodosWithFetch();
				setResponse(myRes);
			} catch (error) {
				setIsError(true);
			}
			setLoading(false);
		})();
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

	if (loading) return <h1>Loading...</h1>;

	if (isError) return <h1>Oh no, Error occured!</h1>;

	return (
		<main className='dark grid place-items-center'>
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
			{response && (
				<div className='m-5 grid gap-4 grid-cols-3'>
					<div>
						<Card title={`Status: ${response.status}`} />
						<Card
							title='Headers'
							body={JSON.stringify(response.headers, null, 2)}
						/>
					</div>
					<Card title='Data' body={JSON.stringify(response.data, null, 2)} />

					<Card
						title='Config'
						body={JSON.stringify(response.config, null, 2)}
					/>
				</div>
			)}
		</main>
	);
}
