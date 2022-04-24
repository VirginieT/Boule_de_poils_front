import { shallow } from 'enzyme';

import AssoContactAdmin from 'src/components/AssoContactAdmin/assoContactAdmin';

describe('<AssoContactAdmin />', () => {
  test('has a title', () => {
    const wrapper = shallow(<AssoContactAdmin />);
    const h1Elements = wrapper.find('h1');
    expect(h1Elements).toHaveLength(1);
  });
  test('has 1 subtitles', () => {
    const wrapper = shallow(<AssoContactAdmin />);
    const h2Elements = wrapper.find('h3');
    expect(h2Elements).toHaveLength(1);
  });
  test('has 2 paragraphs', () => {
    const wrapper = shallow(<AssoContactAdmin />);
    const pElements = wrapper.find('p');
    expect(pElements).toHaveLength(2);
  });
  test('has 1 images', () => {
    const wrapper = shallow(<AssoContactAdmin />);
    const imgElements = wrapper.find('img');
    expect(imgElements).toHaveLength(1);
  });
});

