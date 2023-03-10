import { renderWithNavigation } from "../../utils/renderWithNavigation";
import React from "react";
import ButtonScreen from "../ButtonScreen";
import { fireEvent } from "@testing-library/react-native";

describe('ButtonScreen tests', ()=>{
    it('should render overall', ()=>{
        const tree = renderWithNavigation(<ButtonScreen />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('should render all buttons', ()=>{
        const tree = renderWithNavigation(<ButtonScreen />);
        const btn1 = tree.getByTestId('Button_1');
        const btn2 = tree.getByTestId('Button_2');
        const btn3 = tree.getByTestId('Button_3');

        const text = tree.getByText(' Pressed');

        fireEvent.press(btn1)
        expect(text?.props.children).toBe('Button 1 Pressed');

        fireEvent.press(btn2)
        expect(text?.props.children).toBe('Button 2 Pressed');
        
        fireEvent.press(btn3)
        expect(text?.props.children).toBe('Button 3 Pressed');

        expect(btn1).toBeDefined();
        expect(btn2).toBeDefined();
        expect(btn3).toBeDefined();
    });
})