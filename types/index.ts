export interface INote {
  note_code: string
  type: string
  title: string
  description: string
  link: string
  stack_codes: Array<string>
  image: string
  created_on: string,
  author: string
}

export interface IBreadCrumbItem {
  text: string
  href?: string
  disabled?: Boolean
}

export interface ISubCategory {
  sub_category_code: string
  sub_category_name: string
  category_codes: Array<string>
  description : string
  about : string
  links: Array<ILink>
  image: string
  noteList?: Array<INote>
}

export interface ICategory {
  category_name: string
  category_code: string
  description: string
  about: string
  links: Array<ILink>
  subCategories?: Array<ISubCategory>
}

export interface INoteType {
  label: string
  value: string
}

export interface ILink {
  link: string
  type: string
}

export interface IStack {
  category_codes: Array<string>
  sub_category_codes: Array<string>
  stack_code: string
  stack_name: string
  description: string
  about: string
  image: string
  links: Array<ILink>,
  no_notes: number
}

export interface IRootState {
  navBarList: Array<ICategory>
  noteTypes: Array<INoteType>
  drawer: Boolean,
  inActiveTab: string,
  stackSummary: Array<IStack>
  noteSummary: {
    [key: string]: Array<INote>
  }
}

export interface IActionContext<S> {
  dispatch: Function;
  commit: Function;
  state: S;
  getters: any;
  rootState: IRootState;
  rootGetters: any;
}