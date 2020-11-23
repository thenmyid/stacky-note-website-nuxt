import { get } from '../../api'
import { ICategory } from '~/types'

// START GET CATEGORY API REQUEST
export interface GetCategoryParameter {
  action: string
  code?: string
}

export interface GetCategoryResponse {
  status: Number,
  category_code?: string,
  categoryList: Array<ICategory>
}

export const getCategory = (params: GetCategoryParameter) => {
  const apiEndpoint: string = 'category'
  return get(apiEndpoint, params)
}

// END GET CATEGORY API REQUEST
