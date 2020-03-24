<template>
    <div class="cards">
      <v-container fluid>
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
            style="border-radius:16px"
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
</template>
 <script>

  export default {
   methods: {
     reserve: function({item,i}){
       console.log(item,i);
     }
   },
    data(){
        return {
            items : [
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