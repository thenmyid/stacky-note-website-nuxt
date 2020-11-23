import { stackAPI } from '~/utils/endpoints/stack/index'

import { State } from './state'
import * as mutationTypes from './mutationTypes'

export const mutations = {
  [mutationTypes.SET_STACK_LIST](state: State, res: stackAPI.GetStackResponse) {
    state.stackList = res.stackList.map(stack => stackAPI.setStackVariable(stack))
  }
}

export default mutations