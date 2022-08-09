/// <reference types="react" />
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
export declare const MyLabel: ({ backgroundColor, color, fontColor, label, size, upperCase, }: MyLabelProps) => JSX.Element;
