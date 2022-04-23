import { shallow } from 'enzyme';

import Advices from 'src/components/Advices/index';

describe('<Advices />', () => {
  test('has a title', () => {
    const wrapper = shallow(<Advices />);
    const h2Elements = wrapper.find('h2');
    expect(h2Elements).toHaveLength(1);
  });
});
