import Vue, { PropType } from 'vue'
import {ILink} from '@/types'
export default Vue.extend({
  props: {
    title: String,
    description: {
      type: String,
      default: () => `This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.`
    },
    about: {
      type: String,
      default: () => `It uses utility classes for typography and spacing to space content out within the larger
      container.`
    },
    links: {
      type: Array as PropType<Array<ILink>>,
      default: () : Array<ILink> => []
    },
    image: {
      default: () => null
    }
  }
})