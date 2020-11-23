import {get, post} from '../../api'
import {INote} from '~/types'

export interface GetNoteParameter {
  action: string
  code?: string
  type?: string
}

export interface CreateNoteParameter {
  title: string
  author: string
  link: string
  image: string
  description: string
  type: string
  stacks: Array<string>
}

export interface GetNoteResponse {
  statusCode: Number
  stack_code: string
  category_code: string
  sub_category_code: string
  noteList: Array<INote>
}

export const getNoteList = (params: GetNoteParameter) => {
  const apiEndpoint: string = 'note'
  return get(apiEndpoint, params)
}

export const createNote = (params: CreateNoteParameter) => {
  const apiEndpoint: string = 'note'
  return post(apiEndpoint, params)
}
