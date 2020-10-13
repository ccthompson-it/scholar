import page from '../../client/reducers/page';
import { changePage } from '../../client/actions';

describe('page', () => {
  test('inital state is home', () => {
    let state = page(undefined, { type: '@@INIT' });
    expect(state).toBe("home");
  });
  test('changePage changes the state', () => {
    let state = page('home', changePage('about'));
    expect(state).toBe('about');
  });
});

