import Vue from 'vue'
import Vuetify from 'vuetify'

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#e84393',
        secondary: '#2d3436',
        accent: '#74b9ff',
        error: '#d63031',
        info: '#0984e3',
        success: '#00b894',
        warning: '#fdcb6e'
      }
    },
  },
})

Vue.use(vuetify)