
// import '@testing-library/jest-dom/extend-expect';   //para hacr pruebas antes de Enzyme

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}))