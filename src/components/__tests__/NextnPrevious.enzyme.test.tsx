import React from "react";
import NextnPrevious, { Stack } from "../NextnPrevious";
import { shallow } from "enzyme";
import { NavigationContainer } from "@react-navigation/native";

const mockDispatch = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    dispatch: mockDispatch,
  }),
}));

describe('tests for NextnPrevios screen', () => {
    it('should render okay', () => {
        const tree = shallow(<NextnPrevious currentScreen={Stack.TextScreen} />)
        expect(tree).toMatchSnapshot();
    });
    it('should have two buttons', () => {
        const tree = shallow(<NavigationContainer><NextnPrevious currentScreen={Stack.TextScreen} /></NavigationContainer>)
        const previousBtn = tree.findWhere(node => node.prop('testID') === 'Previous_btn')
        const nextBtn = tree.findWhere(node => node.prop('testID') === 'Next_btn')

        expect(previousBtn).not.toBeNull();
        expect(nextBtn).not.toBeNull();
        expect(previousBtn).toBeDefined();
        expect(nextBtn).toBeDefined();
    });
    it('should render disable previousBtn while nextBtn should be active', async() => {
        const tree = shallow(<NextnPrevious currentScreen={Stack.TextScreen} />)
        const previousBtn = tree.findWhere(node => node.prop('testID') === 'Previous_btn')  
        const nextBtn = tree.findWhere(node => node.prop('testID') === 'Next_btn')
        expect(nextBtn.props().disabled).toBe(false);
        expect(previousBtn.props().disabled).toBe(true);
    });
    it('should render disable nextBtn while prevBtn should be active', async() => {
      const tree = shallow(<NextnPrevious currentScreen={Stack.FlatListScreen} />)
      const previousBtn = tree.findWhere(node => node.prop('testID') === 'Previous_btn')  
      const nextBtn = tree.findWhere(node => node.prop('testID') === 'Next_btn')
      expect(previousBtn.props().disabled).toBe(false);
      expect(nextBtn.props().disabled).toBe(true)
    });
    it('should call navigate method', async() => {
      const tree = shallow(<NextnPrevious currentScreen={Stack.ImageScreen} />)
      const previousBtn = tree.findWhere(node => node.prop('testID') === 'Previous_btn')  
      const nextBtn = tree.findWhere(node => node.prop('testID') === 'Next_btn')
      
      previousBtn.props().onPress();
      expect(mockDispatch).toBeCalledTimes(1)

      nextBtn.props().onPress();
      expect(mockDispatch).toBeCalledTimes(2)
    })
})