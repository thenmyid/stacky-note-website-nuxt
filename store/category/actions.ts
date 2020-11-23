import { subCategoryAPI } from '~/utils/endpoints/subCategory/index'
import { categoryAPI } from '~/utils/endpoints/category/index'

import { State } from './state'
import * as actionTypes from './actionTypes'
import * as mutationTypes from './mutationTypes'
import { IActionContext } from '@/types'

export const actions = {
  async [actionTypes.GET_SUB_CATEGORY_LIST] (
    { commit }: { commit: Function },
    categoryId: string
  ) {
    const params: subCategoryAPI.GetSubCategoryParameter = {
      action: 'category',
      code: categoryId
    }
    const result = await subCategoryAPI.getSubCategory(params)
    commit(mutationTypes.SET_SUB_CATEGORY_LIST, result)
  },

  async [actionTypes.GET_CATEGORY] ( context : IActionContext<State>, categoryId:string) {
    const params: categoryAPI.GetCategoryParameter = {
      action: 'code',
      code: categoryId
    }
    const result = await categoryAPI.getCategory(params)
    context.commit(mutationTypes.SET_CATEGORY, result)
  }
}

export default actions