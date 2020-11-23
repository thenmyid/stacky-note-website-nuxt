import { stackAPI } from '~/utils/endpoints/stack/index'
import { noteAPI } from '~/utils/endpoints/note/index'

import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'

export const actions = {
  async [actionTypes.GET_STACK_LIST] (
    { commit }: { commit: Function }
  ) {
    const params: stackAPI.GetStackParameter = {
      action: 'summary'
    }
    const result = await stackAPI.getStack(params)
    commit(mutationTypes.SET_STACK_LIST, result)
  },

  [actionTypes.ADD_NOTE] (
    { commit }: { commit: Function },
    params : noteAPI.CreateNoteParameter
  ) {
    return noteAPI.createNote(params)
  }
}

export default actions