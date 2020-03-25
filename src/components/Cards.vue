<template>
<div>
    <div  class="cards">
     
  <div id="skl" style="padding-top:70px">
    <v-row>
      <v-col  v-for="(item,i) in items" :key="i" cols="6" sm="4">
        <v-skeleton-loader 
              
              class="mx-auto"
              max-width="300"
              type="card,paragraph,button"
            ></v-skeleton-loader>
            </v-col>
            </v-row>
     </div>

 

      <v-container  id="crd" style="display:none" fluid>
        <v-row  no-gutters>

        <v-col cols="6" sm="4" v-for="(item,i) in items" :key="i">
           
          <v-hover
            v-slot:default="{ hover }"
            close-delay="200"
          >
          <v-card
            :elevation="hover ? 16 : 2"
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            style="border-radius:16px;"
            @click="reserve({item})"
          >
          <v-img
            height="250"
            v-bind:src="item.img"
          >
          </v-img>
          <v-card-title>{{item.pname}}</v-card-title>
          <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          <v-rating
            :value=4
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          >
          </v-rating>
          <div class="grey--text ml-4">4.5 ({{item.numberOfPeopleRated}})</div>
          </v-row>
          <div>{{item.description}}</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
          <v-chip-group
              column 
          >
          <v-chip 
            color="#3389C2"
            text-color="white">react</v-chip>
          <v-chip color="#3389C2" text-color="white" v-for="tag in item.tags" :key="tag">{{tag}}</v-chip>
          </v-chip-group>
          </v-card-text>
          <v-card-actions>
          <v-btn 
            style="border-radius:11px"
            color="#2496FF" dark
            text
            @click="reserve({item})"   
          >
            Read More
          </v-btn>
          </v-card-actions>
          </v-card>
          </v-hover>
          </v-col>
          </v-row>
          </v-container>
          </div>
          </div>
</template>
 <script>

  export default {
   methods: {
     reserve: function({item,i}){
       this.$emit("cardClicked",{item,i})
     }
   },
   mounted(){
     setTimeout( () => {
       console.log("3s elapsed!")
        document.getElementById("crd").style.display=="none"?document.getElementById("crd").style.display="":null
        document.getElementById("skl").style.display==""? document.getElementById("skl").style.display="none":null
     }, 3000)
   },
    data(){
        return {
            items :  [
                { 
                 img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' , 
                 pname: 'Project Title',
                 rating: 4, 
                 numberOfPeopleRated: 143,
                 description : 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', 
                 tags: ["javascript", "css","html"]
                }
               ,{
                 img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' , 
                 pname: 'Project Title',
                 rating: 4, 
                 numberOfPeopleRated: 143,
                 description : 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', 
                 tags: ["javascript", "css","html"]
                 }
               ,{
                  img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' , 
                 pname: 'Project Title',
                 rating: 4, 
                 numberOfPeopleRated: 143,
                 description : 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', 
                 tags: ["javascript", "css","html"] 
                 }
                ,{
                 img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' , 
                 pname: 'Project Title',
                 rating: 4, 
                 numberOfPeopleRated: 143,
                 description : 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', 
                 tags: ["javascript", "css","html"]
                }
                ,{
                 img: 'https://i.picsum.photos/id/964/300/300.jpg' , 
                 pname: 'SURYA MAHLA',
                 rating: 4, 
                 numberOfPeopleRated: 143,
                 description : 'Mudit aur Sid ki prem katha </3', 
                 tags: ["javascript", "css","html"]
                }
                ,{
                 img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' , 
                 pname: 'Project Title',
                 rating: 4, 
                 numberOfPeopleRated: 143,
                 description :'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', 
                 tags: ["javascript", "css","html"]
                }
            ]
        }
    }
}  
</script>
<style>
.cards{
  margin-top: 400px;
}
</style>