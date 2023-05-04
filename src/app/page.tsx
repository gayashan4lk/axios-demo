export default function Home() {
	return (
		<main className='dark'>
			<h1>Axios Crash Course</h1>
			<div className='my-5'>
				<Button variant='btn-primary'>GET</Button>
				<Button variant='btn-accent'>POST</Button>
				<Button variant='btn-warning'>PUT/PATCH</Button>
				<Button variant='btn-error'>DELETE</Button>
				<Button>Sim Requests</Button>
				<Button>Custom Headers</Button>
				<Button>Transform</Button>
				<Button>Error Handling</Button>
				<Button>Cancel</Button>
			</div>
			<div className='my-5'>
				<Card title='Status: 200' />
				<Card title='Headers' body='Here is the headers' />
				<Card title='Data' body='Here is the data' />
				<Card title='Config' body='Here is the config' />
			</div>
		</main>
	);
}

type ButtonProps = {
	variant?: string;
	children?: React.ReactNode;
};

function Button({ variant = '', children }: ButtonProps) {
	return <button className={`mx-2 btn btn-sm ${variant}`}>{children}</button>;
}

type CardProps = {
	title?: string;
	body?: string;
};

function Card({ title, body }: CardProps) {
	if (!title && !body) return null;
	return (
		<div className='mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
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
