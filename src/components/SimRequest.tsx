import { useQuery } from '@tanstack/react-query';
import { axiosSimultanousRequests } from '@/utils';
import { Content } from '@/components';

export function SimRequest() {
	const { isLoading, isError, error, data, refetch } = useQuery({
		queryKey: ['multiRequest'],
		queryFn: axiosSimultanousRequests,
	});

	if (isLoading) return <div>Loading ...</div>;
	if (isError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return <Content fn={refetch} label='Re-Fetch' data={data} />;
}
