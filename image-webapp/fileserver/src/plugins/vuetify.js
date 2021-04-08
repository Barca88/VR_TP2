import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#f26819',
          secondary: '#dd880e' ,
          anchor: '#ff2b24',
        },
      },
    },
  })
  
export default vuetify

