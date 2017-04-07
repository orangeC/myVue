<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <h2>vue Blog</h2>
    <h3>{{ this.$store.state.count }}</h3>
    <Button v-on:click="userNameChange" type="primary">-1</Button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Blog to Your Vue.js App'
    }
  },
  methods: {
    userNameChange () {
      this.$store.commit('unincrement')
    }
  },
  computed: mapGetters([
    'alert'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
