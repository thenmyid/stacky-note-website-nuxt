import Vue from 'vue'
import {ICategory} from '@/types'
import {
  mapMutations
} from 'vuex'

export default Vue.extend({
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['setDrawer']),
    onClick (e: Event, item : ICategory) {
      e.stopPropagation()

      if (item.category_code === '/') {
        this.$vuetify.goTo(0)
        this.setDrawer(false)
        return
      }

      if (item.category_code || !item.category_code) return

      this.$vuetify.goTo(item.category_code)
      this.setDrawer(false)
    },
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      },
    },
    navMenus() : Array<ICategory> {
      return this.$store.state.navBarList
    }
  }
})

