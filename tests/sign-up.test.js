import React from 'react';
import SignUp from '../screens/sign-up';
import {findByTestAttr} from '../screens/sign-up';
import * as firebase from 'firebase';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const navigation = {navigate: jest.fn()};

jest.mock('firebase', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    createUserWithEmailAndPassword: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});


test('renders correctly the snapshot', () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('SignUp', () => {
  it('show text', () => {
    const wrapper = shallow(<SignUp />);
    const texts = wrapper.find('Text').at(0);
    expect(texts.props().children).toBe('REGISTER');
  })
})

describe('SignUp', () => {
  it('show text', () => {
    const wrapper = shallow(<SignUp />);
    const texts = wrapper.find('Text').at(1);
    expect(texts.props().children).toBe('Already have an account?');
  })
})

describe('SignUp', () => {
  it('show text', () => {
    const wrapper = shallow(<SignUp />);
    const texts = wrapper.find('Text').at(2);
    expect(texts.props().children).toBe('LOGIN');
  })
})

describe('SignUP', () => {
  it('check the initial state of the email', () => {
    const wrapper = shallow(<SignUp />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleEmail');
    expect(instance.state.email).toBe("");
  })
})

describe('SignUP', () => {
  it('check the initial state of the password', () => {
    const wrapper = shallow(<SignUp />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handlePassword');
    expect(instance.state.email).toBe("");
  })
})

describe('SignUP', () => {
  it('check the updated state of the email', () => {
    const wrapper = shallow(<SignUp />);
    const instance = wrapper.instance();

    const input = findByTestAttr(wrapper, "login-input");
  
    input.simulate("changeText", "any@email.com");
    wrapper.update();

    jest.spyOn(instance, 'handleEmail');
    expect(instance.state.email).toBe("any@email.com");
  })
})

describe('SignUP', () => {
  it('check if the password is not empty after the initialization', () => {
    const wrapper = shallow(<SignUp />);
    const instance = wrapper.instance();

    const input = findByTestAttr(wrapper, "login-input-pass");
  
    input.simulate("changeText", "123456");
    wrapper.update();

    jest.spyOn(instance, 'handlePassword');
    expect(instance.state.password).not.toBe("");
  })
})

describe('SignUp', () => {
  it('FireBase Test', () => {
      const navigate = jest.fn();
      const wrapper = shallow(<SignUp navigation = {navigation}/>);
      const instance = wrapper.instance();
      const input = findByTestAttr(wrapper, "login-input");
      const input2 = findByTestAttr(wrapper, "login-input-pass");
    
      input.simulate("changeText", "uswrtest@yahoo.com");
      input2.simulate("changeText", "123456");

      const button = findByTestAttr(wrapper, "press-button");
      button.simulate("press");
      wrapper.update();

      jest.spyOn(instance, 'SignUpPress');
      expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith("uswrtest@yahoo.com","123456");
  });
});








