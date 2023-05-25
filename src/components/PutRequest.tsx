import { useMutation } from '@tanstack/react-query';
import { axiosPutRequest } from '@/utils';
import { Card } from '@/components';

export function PutRequest() {
	const { isLoading, isError, error, data, mutate } =
		useMutation(axiosPutRequest);

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return (
		<>
			<button
				onClick={() => {
					mutate();
				}}
			>
				Send Request
			</button>
			{data && (
				<div className='m-5 grid gap-4 grid-cols-2'>
					<div>
						<Card title='Status' body={`${data.status}`} />
						<Card
							title='Headers'
							body={JSON.stringify(data.headers, null, 2)}
						/>
						<Card title='Config' body={JSON.stringify(data.config, null, 2)} />
					</div>
					<Card title='Data' body={JSON.stringify(data.data, null, 2)} />
				</div>
			)}
		</>
	);
}
