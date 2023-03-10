import React from "react";
import { renderWithNavigation } from "../../utils/renderWithNavigation";
import ImageScreen from "../ImageScreen";

it('should render', () => {
    const tree = renderWithNavigation(<ImageScreen />)
    expect(tree.toJSON()).toMatchSnapshot();
});

it('should have image view', () => {
    const tree = renderWithNavigation(<ImageScreen />)
    const image = tree.getByTestId('Image')
    expect(image).not.toBeNull();
});

it('should have image url', () => {
    const tree = renderWithNavigation(<ImageScreen />)
    const image = tree.getByTestId('Image')
    console.log('---', image.props.source.uri)
    expect(image.props.source.uri).toBe('https://reactnative.dev/docs/assets/p_cat2.png');
})