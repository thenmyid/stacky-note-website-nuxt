import {
  IStack,
  INote
} from '@/types'

export interface State {
  stack: IStack
  notes: {
    [key: string]: Array<INote>
  },
  inActiveTab: string,
  stacks: Array<IStack>
}

export const state = () : State => ({
  notes: {},
  stack: {
    category_codes: [],
    sub_category_codes: [],
    stack_code: "",
    stack_name: "",
    description: "",
    about: "",
    links: [],
    image: "",
    no_notes: 0
  },
  inActiveTab: 'articles',
  stacks: []
})

export default state