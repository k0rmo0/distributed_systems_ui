<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

    <h1>SuperSonic</h1>
    </v-app-bar>

    <v-main>
      <MeasuredList/>
    </v-main>
  </v-app>
</template>

<script>
import MeasuredList from './components/MeasuredList';

export default {
  name: 'App',

  components: {
    MeasuredList,
  },

  data: () => ({
    //
  }),
};
</script>
