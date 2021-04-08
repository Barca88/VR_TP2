<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      VR TP2
      <v-spacer></v-spacer>
      <v-btn 
        rounded
        v-if="this.$store.state.token"
        @click="logout()"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.commit('setToken', null);
      this.$router.push('/')
    }
  }
}
</script>