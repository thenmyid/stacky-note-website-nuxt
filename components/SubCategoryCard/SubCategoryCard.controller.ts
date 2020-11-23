import Vue, { PropType } from 'vue'
import {ISubCategory} from '@/types'

export default Vue.extend({
  props: {
    subCategory: {
      type: Object as PropType<ISubCategory>,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    navigate () {
      this.$router.push({path: `${this.$route.params.category}/${this.subCategory.sub_category_code}`})
    },
  }
})