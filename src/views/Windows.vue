<template>


  <div id ="myapp" class="windows ">
    <div class="card d-flex justify-content-center"  style="width: 18rem;">
      <div class="card-header">
        Windows
        <i class="add bi bi-plus-square" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="item in info" v-bind:key="item.id" class="list-group-item d-block">
          
          <strong>{{ item.name }}</strong>
          <i class="bi bi-pencil-fill" data-bs-toggle="modal" data-bs-target="#RenameModal"></i><br>
          Room id : {{item.roomId}}
          <div class="form-check form-switch">
            <div v-if="item.windowStatus==='OPEN'">
              <input class="form-check-input" v-bind:id="item.id" type="checkbox" role="switch" v-on:click="changeStatusClosed(item)" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">{{item.windowStatus}}</label>
            </div>
            <div v-else>
              <input class="form-check-input" v-bind:id="item.id" type="checkbox" role="switch" v-on:click="changeStatusClosed(item)">
              <label class="form-check-label" for="flexSwitchCheckChecked"  >{{item.windowStatus}}</label>
            </div>
          </div>
              <i class="delete bi bi-dash-circle" v-on:click="deleteItemById(item)"></i>
              
        </li>
        
      </ul>
      
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create a new window in room id {{ picked }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div v-for="item in roomList" v-bind:key="item.id" class="form-check justify-content-center">
               <input class="form-check-input" type="radio" name="flexRadioDefault" v-bind:value="item.id" v-model="picked">  {{item.id}}    
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" v-on:click="createItem()">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- Modal end-->
      <div class="modal fade" id="RenameModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Select an ID/Name</h5>
                
              </div>
              <div class="modal-body">
                <div v-for="item in info" v-bind:key="item.id" class="d-flex">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" v-bind:value="item.id" v-model="picked">{{item.name}} Room: {{item.roomId}}
                </div>
                <input class="form-control me-2" type="text" name="flexRadioDefault" v-model="message" placeholder="Rename">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="renameItem()">Rename</button>
              </div>
            
          
        </div>
      </div>
    <!-- Modal -->
      
  
   </div>
  </div>
      
</template>


<script>
import axios from 'axios'
import Swal from 'sweetalert2'
//import Vue from 'vue'

let APIwindows = 'http://justin-courtois.cleverapps.io/api/windows'
let APIrooms = 'http://justin-courtois.cleverapps.io/api/rooms'


const requestOne = axios.get(APIwindows);
const requestTwo = axios.get(APIrooms);



export default{
    name:'Windows',
      
        data(){
          return{
            info: {},
            roomList: {},  
            picked:'[tick an id]', 
          } 
        },
        mounted(){
          axios
            .all([requestOne, requestTwo])
            .then(axios.spread((...responses)=>{
              (this.info=responses[0].data),
              (this.roomList=responses[1].data),
              //console.log("data");
              console.log(responses)/*,
              
              Swal.fire({
                title: 'Succes',
                text: "content loaded",
                icon: 'success',
                confirmButtonText: 'Ok'
              })*/
            }))
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
        methods: {
          changeStatusClosed(item){
            console.log(item.id);
            axios
            .put('http://justin-courtois.cleverapps.io/api/windows/'+item.id+'/switch ')
            .then(
              Swal.fire({
                title: 'Succes!',
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
            .delete('http://justin-courtois.cleverapps.io/api/windows/'+item.id)
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
          createItem(){
            var id = parseFloat(this.picked);
             axios.post('http://justin-courtois.cleverapps.io/api/windows/createByRoom/'+id)
             .then(
              Swal.fire({
                title: 'Created',
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
          renameItem(){
            var id = parseFloat(this.picked);
            var name = this.message;
            axios.put('http://justin-courtois.cleverapps.io/api/windows/rename/'+id+'/{name}?name='+name)
             .then(
              Swal.fire({
                title: 'Created',
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
          }
        }
       
  
          
      };








</script>
<style scoped>

.card{
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
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