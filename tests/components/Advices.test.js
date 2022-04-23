import { shallow } from 'enzyme';

import Advices from 'src/components/Advices/index';

describe('<Advices />', () => {
  test('has a title', () => {
    const wrapper = shallow(<Advices />);
    const h2Elements = wrapper.find('h2');
    expect(h2Elements).toHaveLength(1);
  });
  test('has 5 subtitles', () => {
    const wrapper = shallow(<Advices />);
    const h3Elements = wrapper.find('h3');
    expect(h3Elements).toHaveLength(5);
  });
  test('has 5 paragraphs', () => {
    const wrapper = shallow(<Advices />);
    const pElements = wrapper.find('p');
    expect(pElements).toHaveLength(5);
  });
  test('has 3 images', () => {
    const wrapper = shallow(<Advices />);
    const imgElements = wrapper.find('img');
    expect(imgElements).toHaveLength(3);
  });
});

