import {mapGetters, mapActions} from "vuex";

export const vueAppMixin = {

  data () {
    return {

    }
  },
  methods: {
    isActiveRoute (routeName, exceptions = []) {
      let routes = this.$route.matched
      let active = false
      routes.forEach(route => {
        if (route.name === routeName) {
          active = true
        }
      })
      routes.forEach(route => {
        if (exceptions.includes(route.name)) {
          active = false
        }
      })
      return active
    },

    goBack () {
      this.$router.go(-1)
      // console.log('go back')
    },

    showModal (modalName = null) {
      return $(`#` + `${modalName}`).modal('show')
    },

    hideModal (modalName = null) {
      return $(`#` + `${modalName}`).modal('hide')
    },


  },

  computed: {
    ...mapGetters([
    ]),
  }
}
