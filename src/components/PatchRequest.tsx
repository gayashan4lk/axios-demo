import { useMutation } from '@tanstack/react-query';
import { axiosPatchRequest } from '@/utils';
import { Content } from '@/components';

export function PatchRequest() {
	const { isLoading, isError, error, data, mutate } =
		useMutation(axiosPatchRequest);

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={mutate} label='Send Request' data={data} />;
}
