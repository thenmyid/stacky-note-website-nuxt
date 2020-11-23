import { noteAPI } from '~/utils/endpoints/note/index'
import { stackAPI } from '~/utils/endpoints/stack/index'

import { IRootState } from '@/types'

import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'
import { IActionContext } from '@/types'

export const actions = {
  async [actionTypes.GET_NOTE_SUMMARY] (
    {
      commit,
      state
    }:
    {
      commit: Function,
      state: IRootState
    }
  ) {

    if (state.noteSummary[state.inActiveTab]) return

    const result = await noteAPI.getNoteList({
      action: 'summary',
      type: state.inActiveTab
    })
    commit(mutationTypes.SET_NOTE_SUMMARY, {
      res: result,
      inActiveTab: state.inActiveTab
    })
  },

  async [actionTypes.GET_STACK_SUMMARY] ( context : IActionContext<IRootState> ) {
    const result = await stackAPI.getStack({
      action: 'summary'
    })
    context.commit(mutationTypes.SET_STACK_SUMMARY, result || [])
  }
}

export default actions