'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContainer } from '@/components';

export default function Home() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<AppContainer />
		</QueryClientProvider>
	);
}
