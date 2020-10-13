import * as actions from '../../client/actions'


test('changePage', () => {
    let action = actions.changePage('about')
    expect(action.type).toBe('CHANGE_PAGE')
    expect(action.page).toBe('about')
})
