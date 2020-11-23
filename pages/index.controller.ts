import Vue from 'vue'
import {mapState} from 'vuex'

import { INote, INoteType } from '@/types'
import * as actionTypes from '@/store/actionTypes'
import * as mutationTypes from '@/store/mutationTypes'

interface IData {
  stackTabButton: INoteType
}

export default Vue.extend({
  data () {
    return {
      stackTabButton: {
        label: 'Stack',
        value: 'Stack'
      }
    } as IData
  },
  methods: {
    onClickTabHandle (tabValue : string) {
      this.setInActiveTab(tabValue)
      if (tabValue !== this.stackTabButton.value) this.getNoteList()
    },
    getNoteList() {
      this.$store.dispatch(`${actionTypes.GET_NOTE_SUMMARY}`)
    },
    setInActiveTab(tabValue: string) {
      this.$store.commit(`${mutationTypes.SET_IN_ACTIVE_TAB}`, tabValue)
    }
  },
  computed: {
    ...mapState([
      'inActiveTab',
      'stackSummary',
      'noteSummary'
    ]),
    noteList () : Array<INote> {
      return this.noteSummary[this.inActiveTab] || []
    },
    tabs(): Array<INoteType> {
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
    await Promise.all([
      store.dispatch(`${actionTypes.GET_STACK_SUMMARY}`)
    ])
  }
})