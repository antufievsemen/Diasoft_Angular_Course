import { reducer, initialState } from './auth-reducer.reducer';
import * as actions from '../actions/auth-actions.actions';
import { User } from 'src/app/domain/user';

describe('Auth Reducer', () => {
    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    it('should update state on login', () => {
        const user = { email: 'test@mail.ru', password: 'testpass' } as User;
        const expected = { ...initialState, isLoading: true, user: user };
        const action = actions.login({ user });

        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should update state on loginSuccess', () => {
        const user = { email: 'test@mail.ru', password: 'testpass' } as User;
        const prevState = { ...initialState, isLoading: true, user: user};
        const expected = { ...initialState, isLoading: false,  isAuthenticated: true};

        expect(reducer(prevState, actions.loginSuccess())).toEqual(expected);
    });

    it('should update state on logout', () => {
        const expected = { ...initialState, isLoading: true, user: undefined };
        const action = actions.logout();

        expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should update state on logoutSuccess', () => {
        const prevState = { ...initialState, isLoading: true, user: undefined, isAuthenticated: true};
        const expected = { ...initialState, isLoading: false,  isAuthenticated: false};

        expect(reducer(prevState, actions.logoutSuccess())).toEqual(expected);
    });
});