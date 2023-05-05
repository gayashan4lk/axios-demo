'use client';
import { Button, Card } from '@/components';
import { useComponentState } from './state';

export function AppContainer() {
	const { todosQuery, functions } = useComponentState();

	if (todosQuery.isLoading) return <div>Loading...</div>;

	if (todosQuery.isError)
		return <pre>{JSON.stringify(todosQuery.error, null, 2)}</pre>;

	return (
		<main className='dark grid place-items-center'>
			<h1 className='my-2 font-bold text-xl'>Axios Crash Course</h1>
			<div className='my-2'>
				<Button variant='btn-primary' handleOnClick={functions.getTodos}>
					GET
				</Button>
				<Button variant='btn-accent' handleOnClick={functions.addTodo}>
					POST
				</Button>
				<Button variant='btn-warning' handleOnClick={functions.updateTodo}>
					PUT/PATCH
				</Button>
				<Button variant='btn-error' handleOnClick={functions.removeTodo}>
					DELETE
				</Button>
				<Button handleOnClick={functions.getData}>Sim Requests</Button>
				<Button handleOnClick={functions.customHeaders}>Custom Headers</Button>
				<Button handleOnClick={functions.transformResponse}>Transform</Button>
				<Button handleOnClick={functions.errorHandling}>Error Handling</Button>
				<Button handleOnClick={functions.cancelToken}>Cancel</Button>
			</div>
			{todosQuery.data && (
				<div className='m-5 grid gap-4 grid-cols-3'>
					<div>
						<Card title={`Status: ${todosQuery.data.status}`} />
						<Card
							title='Headers'
							body={JSON.stringify(todosQuery.data.headers, null, 2)}
						/>
					</div>
					<Card
						title='Data'
						body={JSON.stringify(todosQuery.data.data, null, 2)}
					/>

					<Card
						title='Config'
						body={JSON.stringify(todosQuery.data.config, null, 2)}
					/>
				</div>
			)}
		</main>
	);
}
