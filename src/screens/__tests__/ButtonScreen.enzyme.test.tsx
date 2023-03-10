import React from 'react';
import {shallow, render, mount} from 'enzyme';
import ButtonScreen from '../ButtonScreen';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    dispatch: mockedNavigate,
  }),
}));

describe('Button screen tests with enzyme', () => {
  it('should render okay', () => {
    const tree = shallow(<ButtonScreen />);
    // console.log('--tree.debug()--', tree.debug())
    // console.log('--tree.dive.debug()--', tree.dive().debug())
    const npBtn = tree.findWhere(node => node.prop('testID') === 'np_btn');
    // console.log('--npBtn.debug--',npBtn.debug());
    // console.log('--npBtn.dive.debug--',npBtn.dive().debug());
    const btn = npBtn
      .dive()
      .findWhere(node => node.props().testID === 'Previous_btn');
    btn.props().onPress();
    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledWith({
      type: 'REPLACE',
      payload: {
        name: 'TextInputScreen',
      },
    });
    mockedNavigate.mockClear();

    const btn1 = npBtn
      .dive()
      .findWhere(node => node.props().testID === 'Next_btn');
      console.log('=++=',btn1.props())
    btn1.props().onPress();
    expect(mockedNavigate).toBeCalledTimes(1);
  });
  it('should have three buttons', () => {
    const tree = shallow(<ButtonScreen />)
    const btn1 = tree.findWhere(node => node.prop('testID') === 'Button_1')
    const btn2 = tree.findWhere(node => node.prop('testID') === 'Button_2')
    const btn3 = tree.findWhere(node => node.prop('testID') === 'Button_3')

    expect(btn1).toBeDefined();
    expect(btn2).toBeDefined();
    expect(btn3).toBeDefined();
  })
});
