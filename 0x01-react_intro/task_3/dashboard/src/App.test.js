import { shallow } from 'enzyme';
import App from './App'


const wrapper = shallow(<App />);
describe('App component', () => {
    it('renders without crashing', () =>{
        expect(wrapper.exists()).toEqual(true)
    })

    it('renders a div class App-header', () => {
        expect(wrapper.find('.App-header'))
    })

    it('renders a div class App-body', () => {
        expect(wrapper.find('.App-body'))
    })

    it('renders a div class App-footer', () => {
        expect(wrapper.find('.App-footer'))
    })
});