import {ICategory, INoteType, IRootState} from '@/types'

const navBarList: Array<ICategory> = [
  {
    category_name: 'Full Stack',
    category_code: 'full-stack',
    description: "",
    about: "",
    links: [],
    subCategories: [
      {
        category_codes : [],
        sub_category_code : "lamp",
        sub_category_name : "LAMP",
        description : "",
        about : "",
        links: [],
        image: ""
      },
      {
        category_codes : [],
        sub_category_code : "lemp",
        sub_category_name : "LEMP",
        description : "",
        about : "",
        links: [],
        image: ""
      },
      {
        category_codes : [],
        sub_category_code : "mern",
        sub_category_name : "MERN",
        description : "",
        about : "",
        links: [],
        image: ""
      },
      {
        category_codes : [],
        sub_category_code : "mevn",
        sub_category_name : "MEVN",
        description : "",
        about : "",
        links: [],
        image: ""
      },
      {
        category_codes : [],
        sub_category_code : "elk",
        sub_category_name : "ELK",
        description : "",
        about : "",
        links: [],
        image: ""
      }
    ]
  },
  // {
  //   label: 'Application',
  //   value: 'application',
  //   subCategories: [
  //     { label: 'Architecture', value: 'architecture' },
  //     { label: 'Programming Lang', value: 'programming-lang' }
  //   ]
  // },
  // {
  //   label: 'Data',
  //   value: 'data',
  //   subCategories: [
  //     { label: 'SQL Database', value: 'sql-database' },
  //     { label: 'NoSQL Database', value: 'nosql-database' }
  //   ]
  // },
  // {
  //   label: 'DevOps',
  //   value: 'devops',
  //   subCategories: [
  //     { label: 'Ci/CD', value: 'ci-cd' }
  //   ]
  // },
  // {
  //   label: 'Design',
  //   value: 'design',
  //   subCategories: [
  //     { label: 'UI/UX', value: 'ui-ux' }
  //   ]
  // },
  // {
  //   label: 'Management',
  //   value: 'management',
  //   subCategories: [
  //     { label: 'Project Management', value: 'project-management' },
  //     { label: 'Team Management', value: 'team-management' },
  //     { label: 'Resource Management', value: 'resource-management' },
  //     { label: 'Productivity', value: 'productivity' }
  //   ]
  // }
]

const noteTypes: Array<INoteType> = [
  {
    label: 'Articles',
    value: 'articles'
  },
  {
    label: 'Books',
    value: 'books'
  },
  {
    label: 'Talks',
    value: 'talks'
  },
  {
    label: 'Examples',
    value: 'examples'
  }
]

export const state = () : IRootState => ({
  navBarList,
  noteTypes,
  drawer: false,
  inActiveTab: 'Stack',
  stackSummary: [],
  noteSummary: {}
})

export default state