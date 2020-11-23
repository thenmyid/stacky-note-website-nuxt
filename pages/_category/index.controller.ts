import Vue from 'vue'
import { mapState } from 'vuex'
import * as actionTypes from '~/store/category/actionTypes'
import {IBreadCrumbItem} from '@/types'

interface IData {}

export default Vue.extend({
  data () {
    return {} as IData
  },
  methods: {},
  computed: {
    ...mapState('category', [
      'category',
      'subCategoryList'
    ]),
    breadcrumbItems () : Array<IBreadCrumbItem> {
      return [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: this.category.category_name,
          disabled: false
        }
      ]
    }
  },
  async fetch ({store, params}) {
    await Promise.all([
      store.dispatch(`category/${actionTypes.GET_CATEGORY}`, params.category),
      store.dispatch(`category/${actionTypes.GET_SUB_CATEGORY_LIST}`, params.category),
    ])
  }
})
