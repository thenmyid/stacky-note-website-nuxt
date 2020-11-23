import { noteAPI } from '~/utils/endpoints/note/index'
import { stackAPI } from '~/utils/endpoints/stack/index'

import { State } from './state'
import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'
import { IActionContext } from '@/types'

export const actions = {
  async [actionTypes.GET_NOTE_LIST] (
    {
      commit,
      state
    }:
    {
      commit: Function,
      state: State
    },
    stackId: string
  ) {
    const params: noteAPI.GetNoteParameter = {
      action: 'stack',
      code: stackId
    }
    const result = await noteAPI.getNoteList(params)
    commit(mutationTypes.SET_NOTE_LIST, {
      res: result,
      inActiveTab: state.inActiveTab
    })
  },

  async [actionTypes.GET_STACK] ( context : IActionContext<State>, stackId:string) {
    const params: stackAPI.GetStackParameter = {
      action: 'code',
      code: stackId
    }
    const result = await stackAPI.getStack(params)
    context.commit(mutationTypes.SET_STACK, result || '')
  },

  async [actionTypes.GET_STACK_LIST] ( context : IActionContext<State>) {
    const params: stackAPI.GetStackParameter = {
      action: 'summary'
    }
    const result = await stackAPI.getStack(params)
    context.commit(mutationTypes.SET_STACK_LIST, result || '')
  }

}

export default actions