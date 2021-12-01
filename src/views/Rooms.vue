<template>


  <div id ="myapp" class="rooms d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Rooms
        <i class="add bi bi-plus-square" v-on:click="createItem()"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="item in info" v-bind:key="item.id" class="list-group-item d-block">
          <strong>{{ item.name }}</strong> <br>
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


const API = 'http://justin-courtois.cleverapps.io/api/rooms'
//const API = 'https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/rooms'

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
          deleteItemById(item){
            axios
            .delete('http://justin-courtois.cleverapps.io/rooms/'+item.id)
            .then(
              Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
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