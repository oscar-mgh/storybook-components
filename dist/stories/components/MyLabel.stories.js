"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackground = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.UpperCase = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'h1',
};
exports.UpperCase = Template.bind({});
exports.UpperCase.args = {
    size: 'normal',
    upperCase: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'h3',
    color: 'secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'h3',
    color: 'tertiary',
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'h1',
    fontColor: '#f1a8ff'
};
exports.CustomBackground = Template.bind({});
exports.CustomBackground.args = {
    size: 'h1',
    fontColor: '#fff',
    backgroundColor: '#111'
};
