import { type StateSchema } from '1_app/provides/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

export const getScrollSavePosition = (state: StateSchema) => state.scrollSave.scroll

export const getScrollSaveByPath = createSelector(
    getScrollSavePosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)
