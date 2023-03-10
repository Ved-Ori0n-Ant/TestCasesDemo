import { renderWithNavigation } from "../../utils/renderWithNavigation";
import { Data } from "../Data";
import FlatListScreen from "../FlatListScreen";
import React from 'react';

describe('Tests run on FlatList', () => {
    it('should get rendered', () => {
        const tree = renderWithNavigation(<FlatListScreen />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('should have FlatList', () => {
        const tree = renderWithNavigation(<FlatListScreen />);
        const flatListItemList = tree.getByTestId('FlatList').props
        expect(flatListItemList).not.toBeNull();
        expect(flatListItemList.data.length).toBe(30)
    });
    it('should have itemList rendered', () => {
        const tree = renderWithNavigation(<FlatListScreen />);
        const item = tree.getAllByTestId('FlatList-ItemName');

        // Scrolled is not applied thus only 10 items will be shown
        expect(item.length).toBe(10)
        item.forEach((value, index) => {
            // console.log(value.props.children, '==?==', Data[index].name)
            expect(value.props.children).toBe(Data[index].name)
        });
    })
})