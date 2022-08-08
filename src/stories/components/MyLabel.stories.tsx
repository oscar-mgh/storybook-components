import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		color: { control: 'select' },
		fontColor: { control: 'color' },
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	size: 'h1',
};

export const UpperCase = Template.bind({});
UpperCase.args = {
	size: 'normal',
	upperCase: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'h3',
	color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'h3',
	color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	size: 'h1',
	fontColor: '#f1a8ff'
};