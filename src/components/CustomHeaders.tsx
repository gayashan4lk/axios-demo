'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosPostRequestWithCustomHeaders } from '@/utils';
import { Content } from '@/components';

export function CustomHeaders() {
	const { isLoading, isError, error, data, mutate } = useMutation(
		axiosPostRequestWithCustomHeaders
	);

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={mutate} label='Send Request' data={data} />;
}
