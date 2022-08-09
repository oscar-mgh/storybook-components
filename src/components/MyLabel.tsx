import './myLabel.css';

export interface MyLabelProps {
	/**
	 * The size of the label
	 */
	size: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * The content on the label
	 */
	label: string;
	/**
	 * The content in uppercase
	 */
	upperCase?: boolean;
	/**
	 * The label color
	 */
	color?: 'primary' | 'secondary' | 'tertiary';
	/**
	 * The color of the font customized
	 */
	fontColor?: string;
	/**
	 * The background color of the label
	 */
	backgroundColor?: string;
}

export const MyLabel = ({
	backgroundColor = 'transparent',
	color = 'primary',
	fontColor,
	label = 'No Label',
	size = 'normal',
	upperCase = false,
}: MyLabelProps) => {
	return (
		<span 
			className={`label ${size} text-${color}`}
			style={{ color: fontColor, backgroundColor }}
		>
			{upperCase ? label.toUpperCase() : label}
		</span>
	);
};
