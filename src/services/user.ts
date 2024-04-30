export type TUser = {
    id?: number
    name?: string
    email?: string
    level?: string
    desc?: string
    stuffs?: Array<any>
    created_at?: number
    modified_at?: number
}

import { useStorage } from '@vueuse/core'

export const user = useStorage<TUser>('user-data', null)
export const token = useStorage<string>('user-token', '')