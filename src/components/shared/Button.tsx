type ButtonProps = {
	variant?: string;
	children?: React.ReactNode;
	handleOnClick?: () => void;
};

export function Button({ variant = '', children, handleOnClick }: ButtonProps) {
	return (
		<button className={`mx-2 btn btn-sm ${variant}`} onClick={handleOnClick}>
			{children}
		</button>
	);
}
