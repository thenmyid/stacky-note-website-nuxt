import {
  ICategory,
  ISubCategory
} from '@/types'

export interface State {
  category: ICategory
  subCategoryList: Array<ISubCategory>
}

export const state = () : State => ({
  subCategoryList: [],
  category: {
    category_name: "",
    category_code: "",
    description: "",
    about: "",
    links: []
  },
})

export default state