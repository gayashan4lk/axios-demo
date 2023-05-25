'use client';
import { useState } from 'react';
import {
	Button,
	GetRequest,
	PostRequest,
	PutRequest,
	PatchRequest,
	DeleteRequest,
	SimRequest,
	CustomHeaders,
} from '@/components';

export enum Action {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
	SIM_REQEUST = 'SIM_REQEUST',
	CUSTOM_HEADERS = 'CUSTOM_HEADERS',
	TRANSFORM_RESPONSE = 'TRANSFORM_RESPONSE',
	ERROR_HANDLING = 'ERROR_HANDLING',
	CANCEL = 'CANCEL',
}

export function AppContainer() {
	const [action, setAction] = useState<Action>(Action.GET);

	return (
		<main className='dark grid place-items-center'>
			<h1 className='my-2 font-bold text-xl'>Axios Crash Course</h1>
			<div className='my-2'>
				<Button
					variant='btn-primary'
					handleOnClick={() => setAction(Action.GET)}
				>
					GET
				</Button>
				<Button
					variant='btn-accent'
					handleOnClick={() => setAction(Action.POST)}
				>
					POST
				</Button>
				<Button
					variant='btn-warning'
					handleOnClick={() => setAction(Action.PUT)}
				>
					PUT
				</Button>
				<Button
					variant='btn-warning'
					handleOnClick={() => setAction(Action.PATCH)}
				>
					PATCH
				</Button>
				<Button
					variant='btn-error'
					handleOnClick={() => setAction(Action.DELETE)}
				>
					DELETE
				</Button>
				<Button
					handleOnClick={() => {
						setAction(Action.SIM_REQEUST);
					}}
				>
					Sim Requests
				</Button>
				<Button
					handleOnClick={() => {
						setAction(Action.CUSTOM_HEADERS);
					}}
				>
					Custom Headers
				</Button>
				<Button handleOnClick={() => {}}>Transform</Button>
				<Button handleOnClick={() => {}}>Error Handling</Button>
				<Button handleOnClick={() => {}}>Cancel</Button>
			</div>
			{action === Action.GET && <GetRequest />}
			{action === Action.POST && <PostRequest />}
			{action === Action.PUT && <PutRequest />}
			{action === Action.PATCH && <PatchRequest />}
			{action === Action.DELETE && <DeleteRequest />}
			{action === Action.SIM_REQEUST && <SimRequest />}
			{action === Action.CUSTOM_HEADERS && <CustomHeaders />}
		</main>
	);
}
