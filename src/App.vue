<template>
  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Faircorp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/windows">Windows</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/heaters">Heaters</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rooms">Rooms</router-link>
          </li>
          <li class="nav-item disabled">
            <router-link class="nav-link disabled" to="#">Buildings</router-link>
          </li>
        </ul>
      </div>
    </div>
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
