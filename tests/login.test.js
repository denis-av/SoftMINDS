import React from 'react';
import Login from '../screens/login';
import {findByTestAttr} from '../screens/login';
import * as firebase from 'firebase';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const navigation = {navigate: jest.fn()};

jest.mock('firebase', () => {
    return {
      auth: jest.fn().mockReturnThis(),
      signInWithEmailAndPassword: jest.fn().mockImplementation(() => Promise.resolve()),
    };
  });


test('renders correctly the snapshot', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

describe('Login', () => {
    it('show SoftMINDS text from button', () => {
        const wrapper = shallow(<Login />);
        const texts = wrapper.find('Text').at(0);
        expect(texts.props().children).toBe('SoftMINDS');
    })
})

describe('Login', () => {
    it('show LOGIN text from button', () => {
        const wrapper = shallow(<Login />);
        const texts = wrapper.find('Text').at(1);
        expect(texts.props().children).toBe('LOGIN');
    })
})

describe('Login', () => {
    it('show text1', () => {
      const wrapper = shallow(<Login />);
      const texts = wrapper.find('Text').at(2);
      expect(texts.props().children).toBe("Don't have an account?");
    })
  })
  
  describe('Login', () => {
    it('show REGISTER text', () => {
      const wrapper = shallow(<Login />);
      const texts = wrapper.find('Text').at(3);
      expect(texts.props().children).toBe('REGISTER');
    })
  })

  describe('Login', () => {
    it('check if the initial state of email is empty', () => {
      const wrapper = shallow(<Login />);
      const instance = wrapper.instance();
      jest.spyOn(instance, 'handleEmail');
      expect(instance.state.email).toBe("");
    })
  })
  
  describe('Login', () => {
    it('check if the initial state of password is empty', () => {
      const wrapper = shallow(<Login />);
      const instance = wrapper.instance();
      jest.spyOn(instance, 'handlePassword');
      expect(instance.state.email).toBe("");
    })
  })
  
  describe('Login', () => {
    it('check the updated state of the email', () => {
      const wrapper = shallow(<Login />);
      const instance = wrapper.instance();
      const input = findByTestAttr(wrapper, "testInputUsername");
      input.simulate("changeText", "example@gmail.com");
      wrapper.update();
      jest.spyOn(instance, 'handleEmail');
      expect(instance.state.email).toBe("example@gmail.com");
    })
  })
  
  describe('Login', () => {
    it('check if the password is not empty after the initialization', () => {
      const wrapper = shallow(<Login />);
      const instance = wrapper.instance();
      const input = findByTestAttr(wrapper, "testInputPassword");
      input.simulate("changeText", "123456");
      wrapper.update();
      jest.spyOn(instance, 'handlePassword');
      expect(instance.state.password).not.toBe("");
    })
  })
  
  describe('Login', () => {
    it('FireBase Test', () => {
        const navigate = jest.fn();
        const wrapper = shallow(<Login navigation = {navigation}/>);
        const instance = wrapper.instance();
        const input = findByTestAttr(wrapper, "testInputUsername");
        const input2 = findByTestAttr(wrapper, "testInputPassword");
      
        input.simulate("changeText", "usertest2@yahoo.com");
        input2.simulate("changeText", "123456");

        const button = findByTestAttr(wrapper, "press-button");
        button.simulate("press");
        wrapper.update();

        jest.spyOn(instance, 'LoginPress');
        expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith("usertest2@yahoo.com","123456");
    });
  });


