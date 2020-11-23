import { get } from '../../api'
import {ISubCategory} from '~/types'

export interface GetSubCategoryParameter {
  action: string
  code?: string
}

export interface GetSubCategoryResponse {
  status: Number
  category_code?: string
  sub_category_code?: string
  subCategoryList: Array<ISubCategory>
}

export const getSubCategory = (params: GetSubCategoryParameter) => {
  const apiEndpoint: string = 'sub-category'
  return get(apiEndpoint, params)
}
