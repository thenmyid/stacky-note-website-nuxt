import Vue from 'vue'
import {mapState} from 'vuex'
import { IBreadCrumbItem } from '@/types'
import * as actionTypes from '@/store/stack/actionTypes'

interface IData {}

export default Vue.extend({
  data () {
    return {} as IData
  },
  computed: {
    ...mapState('stack', [
      'stacks'
    ]),
    breadcrumbItems () : Array<IBreadCrumbItem> {
      return [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Stack',
          disabled: false
        }
      ]
    }
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch(`stack/${actionTypes.GET_STACK_LIST}`),
    ])
  }
})