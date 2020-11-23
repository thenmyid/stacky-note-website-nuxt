import { subCategoryAPI } from '~/utils/endpoints/subCategory/index'
import { stackAPI } from '~/utils/endpoints/stack/index'

import { State } from './state'
import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'
import { IActionContext } from '@/types'

export const actions = {
  async [actionTypes.GET_STACK_LIST] (
    { commit }: { commit: Function },
    subCategoryId: string
  ) {
    const params: stackAPI.GetStackParameter = {
      action: 'subCategory',
      code: subCategoryId
    }
    const result = await stackAPI.getStack(params)
    commit(mutationTypes.SET_STACK_LIST, result)
  },

  async [actionTypes.GET_SUB_CATEGORY] ( context : IActionContext<State>, subCategoryId : string) {
    const params: subCategoryAPI.GetSubCategoryParameter = {
      action: 'code',
      code: subCategoryId
    }
    const result = await subCategoryAPI.getSubCategory(params)
    context.commit(mutationTypes.GET_SUB_CATEGORY, result || '')
  }
}

export default actions