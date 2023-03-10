import 'react-native';
import React from 'react';
import { renderWithNavigation } from '../../utils/renderWithNavigation';
import TextInputScreen from '../TextInputScreen';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

describe('Tests for TextInputScreen', () => {
    it('should render overall', ()=>{
        const tree = renderWithNavigation(<TextInputScreen />)
        expect(tree.toJSON).toMatchSnapshot();
    });
    it('should get textInput field', () => {
        const tree = renderWithNavigation(<TextInputScreen />)
        expect(tree.getByPlaceholderText('Name')).toBeDefined();
        expect(tree.getByTestId('TextInput')).toBeDefined();
    });
    it('should enter the name', () => {
        const tree = renderWithNavigation(<TextInputScreen />)
        const inputString = tree.getByTestId('TextInput');
        fireEvent.changeText(inputString, 'asdf');
        // console.log('!!', tree.getByTestId('TextInput').props)
        expect(inputString.props.value).toBe('asdf');
    });
    it('should update the text with it', ()=>{
        const tree = render(<NavigationContainer><TextInputScreen /></NavigationContainer>);
        const inputString = tree.getByTestId('TextInput');
        const text = tree.getByTestId('text');
        fireEvent.changeText(inputString, 'asdf');
        expect(text.props.children).toBe('Name is: asdf')
    });
});
