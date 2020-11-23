import Vue from 'vue'
import {mapMutations} from 'vuex'
import {ICategory} from '@/types'

export default Vue.extend({
  data () {
    return {
      notesNumber: 'asdfasd'
    }
  },
  methods: {
    navigate (url: string) {
      this.$router.push({path: url})
    },
    ...mapMutations(['toggleDrawer']),
  },
  computed: {
    navMenus() : Array<ICategory> {
      return this.$store.state.navBarList
    }
  }
})