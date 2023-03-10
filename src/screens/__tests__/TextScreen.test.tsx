import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react-native";
import TextScreen from "../TextScreen";
import 'react-native';
import { renderWithNavigation } from "../../utils/renderWithNavigation";

afterEach(cleanup);

describe('should render perfectly', () => {
    it('should render correctly', () => {
        const tree = renderWithNavigation(<TextScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should have text', () => {
        const tree = renderWithNavigation(<TextScreen />);
        const text = tree.queryByText('Hello Tests');
        expect(text).not.toBeNull();
      });
    it('should verify text value', () => {
        const tree = renderWithNavigation(<TextScreen />);
        expect(tree.getByTestId('text').props.children).toBe('Hello Tests')
        // console.log('~~~', tree.getByTestId('text').props)
    })
})