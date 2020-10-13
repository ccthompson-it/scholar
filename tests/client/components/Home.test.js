import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '../../../client/components/Home'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

jest.mock('../../../client/apiClient', () => {
  return {
    getQuotes: jest.fn(() => {
      return Promise.resolve({ quotes: ['quote1', 'quote2'] })
    })
  }
})

Enzyme.configure({ adapter: new Adapter() })


describe("<Home /> component", () => {
  let dispatch, wrapper, instance
  beforeEach(async () => {
    dispatch = jest.fn()
    wrapper = shallow(<Home dispatch={dispatch} />)
    instance = wrapper.instance()
    await instance.componentDidMount()
  })

  test("Quotes loaded into state when comp mounts", () => {
    expect.assertions(2)
    expect(instance.state.quotes.length).toBe(2)
    expect(instance.state.quotes[1]).toBe('quote2')
  })

  test("pressing button calls dispatch with the right page and action", () => {
    expect.assertions(3)
    let button = wrapper.find('button')
    button.simulate('click')
    expect(dispatch.mock.calls.length).toBe(1)
    expect(dispatch.mock.calls[0][0].type).toBe("CHANGE_PAGE")
    expect(dispatch.mock.calls[0][0].page).toBe("about")
  })
})
