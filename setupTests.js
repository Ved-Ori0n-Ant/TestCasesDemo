import { configure } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import 'react-native';
import 'jest-enzyme';

configure({adapter: new Adapter()})