import {
  IStack
} from '@/types'

export interface State {
  stackList: Array<IStack>
}

export const state = () : State => ({
  stackList: []
})

export default state