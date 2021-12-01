<template>


  <div id ="myapp" class="heaters d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Heaters
        <i class="add bi bi-plus-square" v-on:click="createItem()"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="item in info" v-bind:key="item.id" class="list-group-item d-block">
          <strong>{{ item.name }}</strong> <br>
          Room id : {{item.roomId}}
          <div class="form-check form-switch">
            <div v-if="item.heaterStatus==='ON'">
              <input class="form-check-input" v-bind:id="item.id" type="checkbox" role="switch" v-on:click="changeStatusClosed(item)" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">{{item.heaterStatus}}</label>
            </div>
            <div v-else>
              <input class="form-check-input" v-bind:id="item.id" type="checkbox" role="switch" v-on:click="changeStatusClosed(item)">
              <label class="form-check-label" for="flexSwitchCheckChecked"  >{{item.heaterStatus}}</label>
            </div>
          </div>
          <i class="delete bi bi-dash-circle" v-on:click="deleteItemById(item)"></i>
        </li>
        
      </ul>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import 'jquery/dist/jquery.js'


const API = 'http://justin-courtois.cleverapps.io/api/heaters'
//const API = 'https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/heaters'

export default{
    name:'Heaters',
      
        data(){
          return{
            info: {}
          } 
        },
        mounted(){
          axios
            .get(API
             )
            .then((response)=>{
              (this.info=response.data),
              //console.log("data");
              console.log(response.data)
              })

            .catch((error)=>{
              //console.log("error");
              console.log(error);
            })
          },
       methods: {
          changeStatusClosed(item){
            console.log(item.id);
            axios
            .put('http://justin-courtois.cleverapps.io/api/heaters/'+item.id+'/switch ')
            .then(
              Swal.fire({
                title: 'Switched!',
                text: 'Press "Ok" to refresh',
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then(function() {location.reload()})
            )
            .catch((error)=>{
              //console.log("error");
              Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            })
          },
          deleteItemById(item){
            axios
            .delete('http://justin-courtois.cleverapps.io/api/heaters/'+item.id)
            .then(
              Swal.fire({
                title: 'Deleted!',
                text: 'Press "Ok" to refresh',
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then(function() {location.reload()})
            )
            .catch((error)=>{
              //console.log("error");
              Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            })
          },
        }
       
  
          
      };








</script>
<style scoped>

.card{
  margin-top: 5%;
  margin-bottom: 5%;
  max-height: 80%;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  position: relative;
}
ul{
  text-align: left;
}

li{
  position: relative;
  display: flex;
  
  
}
.add:hover{
  color: #42b983;
}

.delete{
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 2;
}

.delete:hover{
  color:  #dc3545;
}

</style>