import type { User } from '../../../src/5_entities/User'
import { USER_LOCALSTORAGE_KEY } from '../../../src/6_shared/const/localStorage'
import { selectByTestid } from '../../helpers/selectByTestid'

export const login = (
    username: string = 'testuser',
    password: string = '123',
) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            )
            return body
        })
}

export const getByTestId = (testId: string) => cy.get(selectByTestid(testId))

declare global {
    namespace Cypress {
        interface Chainable {
            login: (username?: string, password?: string) => Chainable<User>
            getByTestId: (testId: string) => Chainable<JQuery<HTMLElement>>
        }
    }
}
