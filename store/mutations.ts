import { IRootState } from '@/types'
import * as mutationTypes from './mutationTypes'
import Vue from 'vue'
import { noteAPI } from '~/utils/endpoints/note/index'
import { stackAPI } from '~/utils/endpoints/stack/index'
import { INote } from 'types'

export const mutations = {
  [mutationTypes.setDrawer](state: IRootState, payload: boolean) {
    state.drawer = payload
  },

  [mutationTypes.toggleDrawer](state: IRootState) {
    state.drawer = !state.drawer
  },

  [mutationTypes.SET_NOTE_SUMMARY](state: IRootState, {
    res,
    inActiveTab
  }: {
      res: noteAPI.GetNoteResponse,
      inActiveTab: string
    }) {
    const noteList : Array<INote> = res.noteList
    Vue.set(state.noteSummary, inActiveTab, noteList)
  },

  [mutationTypes.SET_STACK_SUMMARY](state: IRootState, res: stackAPI.GetStackResponse) {
    state.stackSummary = res.stackList
  },

  [mutationTypes.SET_IN_ACTIVE_TAB](state: IRootState, tabValue: string) {
    state.inActiveTab = tabValue
  }
}

export default mutations