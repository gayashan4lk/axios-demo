'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosCancelToken } from '@/utils';
import { Content } from '@/components';

export function CancelRequest() {
	const { isLoading, isError, error, data, refetch } = useQuery({
		queryKey: ['todoList'],
		queryFn: axiosCancelToken,
	});

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={refetch} label='Re-Fetch' data={data} />;
}
