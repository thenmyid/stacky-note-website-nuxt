import Vue from 'vue'
import {mapState} from 'vuex'
import { IBreadCrumbItem, INoteType, INote } from '@/types';
import * as actionTypes from '@/store/stack/actionTypes'
import * as mutationTypes from '@/store/stack/mutationTypes'

interface IData {
  // inActiveTab: string
}

export default Vue.extend({
  data () {
    return {} as IData
  },

  methods: {
    onClickTabHandle(tabValue: string) {
      this.setInActiveTab(tabValue)
      this.getNoteList()
    },
    setInActiveTab(tabValue: string) {
      this.$store.commit(`stack/${mutationTypes.SET_IN_ACTIVE_TAB}`, tabValue)
    },
    getNoteList() {
      const stackId = this.$route.params.id
      this.$store.dispatch(`stack/${actionTypes.GET_NOTE_LIST}`, stackId)
    }
  },

  computed: {
    ...mapState('stack', [
      'stack',
      'notes',
      'inActiveTab'
    ]),
    noteList () : Array<INote> {
      return this.notes[this.inActiveTab] || []
    },
    breadcrumbItems () : Array<IBreadCrumbItem> {
      return [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Stack',
          href: '/stack'
        },
        {
          text: this.stack.stack_name,
          disabled: false
        }
      ]
    },
    tabs () : Array<INoteType> {
      return this.$store.state.noteTypes
    }
  },

  mounted () {
    const hashParam = (location.hash).substring(1)
    if (this.tabs.find(e => e.value == hashParam)) {
      this.setInActiveTab(hashParam)
      this.getNoteList()
    }
  },

  async fetch({ store, params }) {
    const stackId = params.id
    await Promise.all([
      store.dispatch(`stack/${actionTypes.GET_STACK}`, stackId),
      store.dispatch(`stack/${actionTypes.GET_NOTE_LIST}`, stackId)
    ])
  }
})