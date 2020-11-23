import Vue, { PropType } from 'vue'
import {INote} from 'types'

interface IData {}

export default Vue.extend({
  props: {
    note: {
      type: Object as PropType<INote>
    }
  },
  data () {
    return {} as IData
  }
})