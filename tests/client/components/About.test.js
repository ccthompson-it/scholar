import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import About from '../../../client/components/About'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

Enzyme.configure({ adapter: new Adapter() })


describe("<Home /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(() => {
    dispatch = jest.fn()
    wrapper = shallow(<About dispatch={dispatch} />)
    instance = wrapper.instance()
  })

  test("pressing button calls dispatch with the right page and action", () => {
    expect.assertions(3)
    let button = wrapper.find('button')
    button.simulate('click')
    expect(dispatch.mock.calls.length).toBe(1)
    expect(dispatch.mock.calls[0][0].type).toBe("CHANGE_PAGE")
    expect(dispatch.mock.calls[0][0].page).toBe("home")
  })
})
