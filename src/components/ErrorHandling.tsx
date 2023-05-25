'use client';
import { useQuery } from '@tanstack/react-query';
import { axiosErrorHandling } from '@/utils';
import { Content } from '@/components';

export function ErrorHandling() {
	const { isLoading, isError, error, data, refetch } = useQuery({
		queryKey: ['todoListErrorHandling'],
		queryFn: axiosErrorHandling,
	});

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={refetch} label='Re-Fetch' data={data} />;
}
