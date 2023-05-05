export type CardProps = {
	title?: string;
	body?: string;
};

export function Card({ title, body }: CardProps) {
	if (!title && !body) return null;
	return (
		<div className='mb-3 block max-w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
			{title && (
				<h5 className='mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>
			)}
			{body && (
				<p className='font-normal text-sm text-gray-700 dark:text-gray-400'>
					{body}
				</p>
			)}
		</div>
	);
}
