<template>
  <div class="about">
    <h1>Covid and weather info</h1>
    
  </div>
  
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
//import Vue from 'vue'

let APICovid = 'http://coronavirusapifr.herokuapp.com/data/live/departement/loire'
let APIWeather = 'http://justin-courtois.cleverapps.io/api/rooms'


const requestOne = axios.get(APICovid);
const requestTwo = axios.get(APIWeather);



export default{
    name:'about',
      
        data(){
          return{
            Covidinfo: {},
            Weatherinfo: {},  
            
          } 
        },
        mounted(){
          axios
            .all([requestOne, requestTwo])
            .then(axios.spread((...responses)=>{
              (this.Covidinfo=responses[0].data),
              (this.Weatherinfo=responses[1].data),
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
} 




</script>