import Vue from 'vue'
import {mapState} from 'vuex'
import { IBreadCrumbItem } from '@/types'
import * as actionTypes from '@/store/subCategory/actionTypes'

interface IData {
  category: string
}

export default Vue.extend({
  data () {
    return {
      category: ''
    } as IData
  },
  computed: {
    ...mapState('subCategory', [
      'stackList',
      'subCategory'
    ]),
    breadcrumbItems () : Array<IBreadCrumbItem> {
      return [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: this.category,
          href: `/${this.category}`
        },
        {
          text: this.subCategory.sub_category_name,
          disabled: false
        }
      ]
    }
  },
  mounted () {
    this.category = this.$route.params.category
  },
  async fetch ({store, params}) {
    await Promise.all([
      store.dispatch(`subCategory/${actionTypes.GET_SUB_CATEGORY}`, params.subcategory),
      store.dispatch(`subCategory/${actionTypes.GET_STACK_LIST}`, params.subcategory)
    ])
  }
})
