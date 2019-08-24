import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify, {
  theme: {
    themes: {
      light: {
        primary: colors.green.accent2, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: "#ccccccc" // #3F51B5
      },
    },
  },
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
