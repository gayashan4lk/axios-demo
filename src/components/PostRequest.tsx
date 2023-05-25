'use client';
import { useMutation } from '@tanstack/react-query';
import { axiosPostRequest } from '@/utils';
import { Content } from '@/components';

export function PostRequest() {
	const { isLoading, isError, error, data, mutate } =
		useMutation(axiosPostRequest);

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={mutate} label='Send Request' data={data} />;
}
