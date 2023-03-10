import React from 'react';
import NextnPrevious, {Stack} from '../NextnPrevious';
import {fireEvent, render} from '@testing-library/react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';

function renderWithNavigation(renderComponent: any) {
    return(
        render(
            <NavigationContainer>
                {renderComponent}
            </NavigationContainer>
        )
    )
}

const mockDispatch = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    dispatch: mockDispatch,
  }),
}));

describe('NextnPrevious Tests', () => {
  it('should render correctly', () => {
    const tree = renderWithNavigation(
      <NextnPrevious currentScreen={Stack.TextScreen} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have 2 Button', () => {
    const tree = renderWithNavigation(
      <NextnPrevious currentScreen={Stack.TextScreen} />,
    );
    const Next = tree.queryByTestId('Next_btn');
    const Previous = tree.queryByTestId('Previous_btn');

    expect(Next).not.toBeNull();
    expect(Previous).not.toBeNull();
  });

  it('should fireEvent', async () => {
    const tree = renderWithNavigation(
      <NextnPrevious currentScreen={Stack.TextInputScreen} />,
    );
    const Next = tree.getByTestId('Next_btn');
    const Previous = tree.getByTestId('Previous_btn');

    fireEvent.press(Next);
    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith(StackActions.replace('ButtonScreen'));
    
    fireEvent.press(Previous);
    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith(StackActions.replace('TextTranslationScreen'));
  });

  it('should disabled Previous', async () => {
    const tree = renderWithNavigation(
      <NextnPrevious currentScreen={Stack.TextScreen} />,
    );
    const Previous = tree.getByTestId('Previous_btn');
    const status = Previous.props.accessibilityState.disabled;
    expect(status).toBe(true);
  });
  it('should disabled Next', async () => {
    const tree = renderWithNavigation(
      <NextnPrevious currentScreen={Stack.FlatListScreen} />,
    );
    const Next = tree.getByTestId('Next_btn');
    const status = Next.props.accessibilityState.disabled;
    expect(status).toBe(true);
  });
});