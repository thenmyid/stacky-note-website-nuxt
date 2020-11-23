import { noteAPI } from '~/utils/endpoints/note/index'
import { stackAPI } from '~/utils/endpoints/stack/index'
import {INote} from '~/types'

import { State } from './state'
import * as mutationTypes from './mutationTypes'
import Vue from 'vue'

export const mutations = {
  [mutationTypes.SET_NOTE_LIST](state: State, {
    res,
    inActiveTab
  }: {
      res: noteAPI.GetNoteResponse,
      inActiveTab: string
    }) {
    const noteList : Array<INote> = res.noteList

    Vue.set(state.notes, inActiveTab, noteList)

  },

  [mutationTypes.SET_STACK](state: State, res: stackAPI.GetStackResponse) {
    const stack = res.stackList[0]
    if (!stack) return
    state.stack = stackAPI.setStackVariable(stack)
  },

  [mutationTypes.SET_STACK_LIST](state: State, res: stackAPI.GetStackResponse) {
    state.stacks = res.stackList
  },

  [mutationTypes.SET_IN_ACTIVE_TAB](state: State, tabValue: string) {
    state.inActiveTab = tabValue
  }
}

export default mutations