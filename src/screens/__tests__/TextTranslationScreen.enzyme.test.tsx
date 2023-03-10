import React from 'react';
import TextTranslationScreen from '../TextTranslationScreen';
import {shallow} from 'enzyme';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    dispatch: mockedNavigate,
  }),
}));

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(),
}));

jest.mock('react-native-localize', () => {});

const jumbleJumble = jest.fn();

const useTranslation = jest.fn();

describe('tests for TextTranslationScreen', () => {
  it('should render okay', () => {
    const tree = shallow(<TextTranslationScreen />);
    expect(tree).toMatchSnapshot();
  });
  it('should have namespaces', () => {
    const tree = shallow(<TextTranslationScreen />);
    const nsSection = tree.findWhere(
      node => node.prop('testID') === 'NamespacesSection',
    );
    expect(nsSection).not.toBeNull();
    expect(nsSection).toBeDefined();
    expect(nsSection.props().title).toBe('NAMESPACES');
    expect(nsSection.props().children[0].props.children).toBe('welcome');
    expect(nsSection.props().children[1].props.children).toBe('ok');
  });
  it('should have all sections', () => {
    const tree = shallow(<TextTranslationScreen />);
    const lngChangeSection = tree.findWhere(
      node => node.prop('testID') === 'ChangeLanguageSection',
    );
    const interpolationSection = tree.findWhere(
      node => node.prop('testID') === 'InterpolationSection',
    );
    const pluralizationSection = tree.findWhere(
      node => node.prop('testID') === 'PluralizationSection',
    );
    const genderSection = tree.findWhere(
      node => node.prop('testID') === 'ContextGenderSection',
    );

    expect(lngChangeSection.props().title).toBe('CHANGE LANGUAGE');
    expect(interpolationSection.props().title).toBe('INTERPOLATION');
    expect(pluralizationSection.props().title).toBe('PLURALIZATION');
    expect(genderSection.props().title).toBe('CONTEXT: GENDER');
    expect(interpolationSection.props().children.props.children).toBe(
      'accountSuspended',
    );
    expect(pluralizationSection.props().children[0].props.children).toBe(
      'autopsy',
    );
    expect(genderSection.props().children[0].props.children).toBe(
      'loveThyself',
    );
  });
  it('should render next n prev buttons', () => {
    const tree = shallow(<TextTranslationScreen />);
    const npBtn = tree.findWhere(node => node.prop('testID') === 'np_btn');
    const prevbtn = npBtn
      .dive()
      .findWhere(node => node.props().testID === 'Previous_btn');
    prevbtn.props().onPress();
    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledWith({
      type: 'REPLACE',
      payload: {
        name: 'TextScreen',
      },
    });
    const nextbtn = npBtn
      .dive()
      .findWhere(node => node.props().testID === 'Next_btn');
    nextbtn.props().onPress();
    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledWith({
      type: 'REPLACE',
      payload: {
        name: 'TextInputScreen',
      },
    });
  });
});
