<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="getItems()">Refresh</v-btn>
        <v-btn @click="changeStatus()" class="ml-2" v-if="diodeState == 'ugasi'" color = #B22222>Diode</v-btn>
        <v-btn @click="changeStatus()" class="ml-2" v-if="diodeState == 'upali'">Diode</v-btn>
      </v-col>
      <v-col cols="12" md="12">
        <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
        :items-per-page="-1"
        :loading="loading"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MeasuredList',
    data () {
      return {
        headers: [
          {text: 'ID', value: 'id', sortable: false},
          {text: 'Distance', value: 'distance', sortable: false},
          {text: 'Time', value: 'time', sortable: false}
        ]
      }
    },

    computed: {
      items () {
        return this.$store.state.values
      },
      loading () {
        return this.$store.state.loading
      },
      diodeState () {
        return this.$store.state.diodeStatus
      }
    },
    methods: {
      getItems() {
       this.$store.dispatch('getValues')   
      },
      changeStatus() {
        this.$store.dispatch('changeStatus', this.$store.state.diodeStatus)
      }
    },
    created () {
      this.getItems()
    },
  }
</script>
