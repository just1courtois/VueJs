<template>


  <div id ="myapp" class="heaters d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Heaters
        <i class="add bi bi-plus-square"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="item in info" v-bind:key="item.id" class="list-group-item d-block">
          <strong>{{ item.name }}</strong>
          <i class="add bi bi-pencil-fill" data-bs-toggle="modal" data-bs-target="#RenameModal"></i><br>
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
  <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create a new heater in room id {{ picked }}</h5>
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
      <!-- Modal -->
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
      </div>
    <!-- Modal -->
</template>


<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import 'jquery/dist/jquery.js'


let APIheaters = 'http://justin-courtois.cleverapps.io/api/heaters'
let APIrooms = 'http://justin-courtois.cleverapps.io/api/rooms'


const requestOne = axios.get(APIheaters);
const requestTwo = axios.get(APIrooms);

export default{
    name:'Heaters',
      
        data(){
          return{
            info: {}
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
          createItem(){ //axios didn't work so I used
            var id = parseFloat(this.picked);
             fetch('http://justin-courtois.cleverapps.io/api/heaters/createByRoom/'+id, {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"id":0,"name":"new room","roomName":"room","heaterStatus":"OFF"})
            })
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
            axios.put('http://justin-courtois.cleverapps.io/api/heaters/rename/'+id+'/{name}?name='+name)
             .then(
              Swal.fire({
                title: 'Renamed',
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