import { useMutation } from '@tanstack/react-query';
import { axiosDeleteRequest } from '@/utils';
import { Content } from '@/components';

export function DeleteRequest() {
	const { isLoading, isError, error, data, mutate } =
		useMutation(axiosDeleteRequest);

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={mutate} label='Send Request' data={data} />;
}
