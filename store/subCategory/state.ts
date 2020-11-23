import {
  ISubCategory,
  IStack
} from '@/types'

export interface State {
  subCategory: ISubCategory
  stackList: Array<IStack>
}

export const state = () : State => ({
  stackList: [],
  subCategory: {
    sub_category_code: "",
    sub_category_name: "" ,
    category_codes: [],
    description : "",
    about : "",
    links: [],
    image: ""
  },
})

export default state