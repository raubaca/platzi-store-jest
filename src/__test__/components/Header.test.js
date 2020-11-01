import { mount, shallow } from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';

import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Component render', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Title render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('UI Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
