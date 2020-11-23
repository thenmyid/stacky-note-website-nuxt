import Vue, {PropType} from 'vue'
import {IStack} from '@/types'
interface IData {}

export default Vue.extend({
  props: {
    stack: {
      type: Object as PropType<IStack>,
      required: true,
      default: () : IStack => {
        return {
          category_codes: [],
          sub_category_codes: [],
          stack_code: "",
          stack_name: "",
          description: "",
          about: "",
          links: [],
          image: '',
          no_notes: 0
        }
      }
    }
  },
  data () {
    return {} as IData
  },
  methods: {
    navigate() {
      this.$router.push({path: `/stack/${this.stack.stack_code}`})
    },
  },
  computed: {
    numbertOfNotes() : string {
      let result : string = this.stack.no_notes > 10 ? '10+' : this.stack.no_notes.toString()
      result += this.stack.no_notes > 1 ? 'Notes' : 'note'
      return result
    }
  }
})