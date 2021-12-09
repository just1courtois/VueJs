<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      You can manage all you windows, heater and rooms here.
    </p>
    <h3>What is currently working :</h3>
    <ul>
      <li><p>Load, switch, create and delete windows</p></li>
      <li><p>Load, switch and delete heaters</p></li>
     
      <li><p>Rename Windows, heaters and rooms</p></li>
      <li><p>reactive design (ctrl+shit+m on firefox)</p></li>
    </ul>
    <h3>What is not working</h3>
    <ul>
      <li><p>create new room, heater (error 500, internal server : backend issue)</p></li>
      <li><p>Buildings are currently not supported</p></li>
    </ul>
    <h3>Usefull resources</h3>
    <ul>
      <li><a href="https://dev-mind.fr/" target="_blank" rel="noopener">Dev-mind</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
