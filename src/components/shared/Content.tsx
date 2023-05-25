'use client';
import { Button, Card } from '@/components';

interface ContentProps {
	fn: () => void;
	label: string;
	data: any;
}
export function Content({ fn, label, data }: ContentProps) {
	return (
		<>
			<Button variant='btn-outline' handleOnClick={() => fn()}>
				{label}
			</Button>
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
