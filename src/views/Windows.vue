<template>


  <div id ="myapp" class="windows d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Windows
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="item in info" v-bind:key="item.id" class="list-group-item">
          {{ item.name }}
          <div class="form-check form-switch">
            <div v-if="item.windowStatus==='OPEN'">
              <input class="form-check-input" v-bind:id="item.id" type="checkbox" role="switch" v-on:click="changeStatusClosed(item)" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">{{item.windowStatus}}</label>
            </div>
            <div v-else>
              <input class="form-check-input" v-bind:id="item.id" type="checkbox" role="switch" v-on:click="changeStatus(item.id)">
              <label class="form-check-label" for="flexSwitchCheckChecked"  >{{item.windowStatus}}</label>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

//const API = 'http://justin-courtois.cleverapps.io/api/windows' don't work CORS issue
const API = 'https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/windows'

export default{
    name:'Windows',
      
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
            .put('https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/windows/' + item.id + '/switch')
             
          }
        }
       
  
          
      };








</script>
<style scoped>
ul{
  text-align: left;
}
</style>