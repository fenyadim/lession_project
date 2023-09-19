import { classNames } from './classNames'

describe('classNames', function () {
    test('with only first name', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional class', () => {
        const result = 'someClass cls1 cls2'
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(result)
    })
    test('with additional class and mods', () => {
        const result = 'someClass cls1 cls2 mods1 mods2'
        expect(classNames('someClass', { mods1: true, mods2: true }, ['cls1', 'cls2'])).toBe(result)
    })
    test('with additional class and mods 1 false params', () => {
        const result = 'someClass cls1 cls2 mods1'
        expect(classNames('someClass', { mods1: true, mods2: false }, ['cls1', 'cls2'])).toBe(result)
    })
})
