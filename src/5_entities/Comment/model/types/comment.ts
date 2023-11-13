import { type User } from '5_entities/User'

export interface CommentType {
    id: string
    user: User
    text: string
}
