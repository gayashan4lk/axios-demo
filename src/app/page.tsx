'use client';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function Home() {
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
			<div className='m-5 grid gap-4 grid-cols-3'>
				<div>
					<Card title='My Status: 200' />
					<Card
						title='Headers'
						body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, molestiae. Culpa quae sit distinctio eius, sunt illum? Dolor perspiciatis molestias eius minima dolore assumenda esse quibusdam consectetur! Voluptatum, quae autem.'
					/>
				</div>
				<Card
					title='Data'
					body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, molestiae. Culpa quae sit distinctio eius, sunt illum? Dolor perspiciatis molestias eius minima dolore assumenda esse quibusdam consectetur! Voluptatum, quae autem.'
				/>

				<Card
					title='Config'
					body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, molestiae. Culpa quae sit distinctio eius, sunt illum? Dolor perspiciatis molestias eius minima dolore assumenda esse quibusdam consectetur! Voluptatum, quae autem.'
				/>
			</div>
		</main>
	);
}
