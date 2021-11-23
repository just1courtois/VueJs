<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-center" id="nav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/windows">Windows</router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
