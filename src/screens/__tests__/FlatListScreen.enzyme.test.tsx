import { mount, render, shallow } from "enzyme";
import React from "react";
import FlatListScreen from "../FlatListScreen";

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    dispatch: mockedNavigate,
  }),
}));

describe('Flatlist enzyme tests', () => {
    it('should render okay', () => {
        const tree = shallow(<FlatListScreen />)
        expect(tree).toMatchSnapshot();
    });
    it('should render faltlist data', () => {
        const tree = shallow(<FlatListScreen />)

    })
})