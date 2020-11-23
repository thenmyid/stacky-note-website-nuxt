import { subCategoryAPI } from '~/utils/endpoints/subCategory/index'
import { categoryAPI } from '~/utils/endpoints/category/index'

import { State } from './state'
import * as mutationTypes from './mutationTypes'

export const mutations = {
  [mutationTypes.SET_SUB_CATEGORY_LIST](state : State, res: subCategoryAPI.GetSubCategoryResponse) {
    state.subCategoryList = res.subCategoryList
  },

  [mutationTypes.SET_CATEGORY](state: State, res: categoryAPI.GetCategoryResponse) {
    if (!res.categoryList[0]) return
    state.category = res.categoryList[0]
  }
}

export default mutations