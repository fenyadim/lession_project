import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Country } from '@/5_entities/Country'
import { Currency } from '@/5_entities/Currency'
import { $api } from '@/6_shared/api/api'
import { componentRender } from '@/6_shared/lib/tests/componentRender/componentRender'
import { profileReducer } from '../../model/slice/profileSlice'
import { type Profile } from '../../model/types/profile'
import { EditableProfileCard } from './EditableProfileCard'

const profile: Profile = {
    id: '2',
    first: 'ulbi tv',
    lastname: 'asf',
    age: 465,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'ulbi tv',
    avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false
        },
        user: {
            authData: { id: '2', username: 'ulbi tv' }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableProfileCard', function () {
    test('Toggle readonly status', async () => {
        componentRender(<EditableProfileCard id="1"/>, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        )
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
            .toBeInTheDocument()
    })

    test('When cancelled, the values are reset to zero', async () => {
        componentRender(<EditableProfileCard id="1"/>, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        )
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'),
            'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        )

        expect(screen.getByTestId('ProfileCard.firstname'))
            .toHaveValue('ulbi tv')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('asf')
    })

    test('Should be error', async () => {
        componentRender(<EditableProfileCard id="1"/>, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        )
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        )

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph'))
            .toBeInTheDocument()
    })

    test('Should be request to server', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id="1"/>, options)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        )
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'),
            'user')

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        )

        expect(mockPutReq).toHaveBeenCalled()
    })
})
