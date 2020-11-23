import { get } from '../../api'
import { IStackResponse } from './types'

export interface GetStackParameter {
  action: string
  code?: string
}

export interface GetStackResponse {
  statusCode: Number
  stack_code: string
  category_code: string
  sub_category_code: string
  stackList: Array<IStackResponse>
}

export const setStackVariable = (stackRes: IStackResponse) => {
  return {
    category_codes: stackRes.category_codes || [],
    sub_category_codes: stackRes.sub_category_codes || [],
    stack_code: stackRes.stack_code || "",
    stack_name: stackRes.stack_name || "",
    description: stackRes.description || "",
    about: stackRes.about || "",
    links: stackRes.links || [],
    no_notes: stackRes.no_notes || 0,
    image: stackRes.image || ""
  }
}

export const getStack = (params: GetStackParameter) => {
  const apiEndpoint: string = 'stack'
  return get(apiEndpoint, params)
}
