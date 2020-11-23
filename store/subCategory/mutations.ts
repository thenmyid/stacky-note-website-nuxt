import { stackAPI } from '~/utils/endpoints/stack/index'
import { IStack } from '~/types'
import { subCategoryAPI } from '~/utils/endpoints/subCategory/index'

import { State } from './state'
import * as mutationTypes from './mutationTypes'

export const mutations = {
  [mutationTypes.SET_STACK_LIST](state: State, res: stackAPI.GetStackResponse) {

    state.stackList = res.stackList.map(stack => stackAPI.setStackVariable(stack))

  },

  [mutationTypes.GET_SUB_CATEGORY](state: State, res: subCategoryAPI.GetSubCategoryResponse) {
    const subCategory = res.subCategoryList[0]
    if (!subCategory) return
    state.subCategory = subCategory
  }
}

export default mutations