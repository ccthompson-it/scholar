import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../../client/components/App'
import Home from '../../../client/components/Home'
import About from '../../../client/components/About'


jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

Enzyme.configure({ adapter: new Adapter() })


describe("<App /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(() => {
    dispatch = jest.fn()
    wrapper = shallow(<App dispatch={dispatch} />)
    instance = wrapper.instance()
  })

  test('only the home comp displays when page is "home"', () => {
    expect.assertions(3)
    expect(wrapper.containsMatchingElement(<Home />)).toBe(false)
    wrapper.setProps({ page: 'home' })
    expect(wrapper.containsMatchingElement(<About />)).toBe(false)
    expect(wrapper.containsMatchingElement(<Home />)).toBe(true)
  })

  test('only the about comp displays when page is "about"', () => {
    expect.assertions(3)
    expect(wrapper.containsMatchingElement(<About />)).toBe(false)
    wrapper.setProps({ page: 'about' })
    expect(wrapper.containsMatchingElement(<Home />)).toBe(false)
    expect(wrapper.containsMatchingElement(<About />)).toBe(true)
  })
})

