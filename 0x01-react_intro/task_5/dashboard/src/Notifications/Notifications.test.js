import { shallow } from 'enzyme';
import Notifications from './Notifications'


const wrapper = shallow(<Notifications />);
describe('Notifications component', () => {
    it('renders without crashing', () =>{
        expect(wrapper.exists()).toEqual(true)
    })

    it('renders a three list items', () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    })

    it("renders the text: 'Here is the list of notifications'", () => {
        expect(wrapper.containsMatchingElement(<p>Here is the list of notificaions</p>)).toEqual(true);
    })

});