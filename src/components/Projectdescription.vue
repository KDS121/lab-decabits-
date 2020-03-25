<template >
  <div class="project">
    <v-container class="container"  fill-height=true fluid content-space-between=true 
                  style="margin-top:50px; 
                        margin-left:120px; 
                        width:90%;"
     >
  <v-row>
      <v-col cols="8">
          <p class="headingPr">{{pname.pname}}</p>
          <v-card 
        style="border-radius:11px; ">
        <v-img
         class="white--text align-end"
         height="400px"
         v-bind:src="pname.img"
        >
        </v-img>

        <v-card-text class="text--primary">
        <p>{{pname.description}}</p>
        </v-card-text>
        </v-card></v-col>
        <v-col cols="4">
            <v-select color="#2496FF" 
           style="width: 394px;
                  height: 48px;
                  box-sizing: border-box;
                  border-radius: 6px;"
                  :items="review"
                  label="Quick Review"
                  outlined>
        </v-select>
        
        <p style=" font-family: Roboto;
                   font-style: normal; 
                   font-size:32px; 
                   font-weight:light;
                   margin-top:10px; 
                   margin-bottom:0; 
                   color: #333333;">Rate this Project :</p>
      <v-rating style=" margin:0;"
         v-model="rating"
         background-color="orange lighten-3"
         color="orange"
         large
       >
       </v-rating>
       <p style=" font-family: Roboto; 
                  font-style: normal;  
                  font-size:32px; 
                  font-weight:light; 
                   margin-top:10px; 
                   color: #333333;">Give your Feedback:</p>
       <v-textarea
           solo
           name="input-7-4"
           label="Write your feedback here"
           style="width: 394px; "
          ></v-textarea>
        <v-btn rounded color="#2695FF" style="color:white; text-transform:capitalize; font-weight:normal;">Submit</v-btn>
        </v-col>
      <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="review"
            label="Outlined style"
            outlined
          ></v-select>
        </v-col>
    <!-- <v-col cols="8" class="text" style=" padding-right:25px;background-color:orange"><p style="">Project Title</p>
      <v-card 
        style="border-radius:11px; ">
        <v-img
         class="white--text align-end"
         height="400px"
         src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-text class="text--primary">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </v-card-text>
        </v-card>
    </v-col> -->
    <!-- <v-col cols="4" style="position:relative; ">
        <v-select color="#2496FF" 
           style="width: 394px;
                  height: 48px;
                  box-sizing: border-box;
                  border-radius: 6px;"
                  :items="items"
                  label="Quick Review"
                  outlined>
        </v-select>
        <p style=" font-family: Roboto;
                   font-style: normal; 
                   font-size:32px; 
                   font-weight:light;
                   margin-top:10px; 
                   margin-bottom:0; 
                   color: #333333;">Rate this Project :</p>
      <v-rating style=" margin:0;"
         v-model="rating"
         background-color="orange lighten-3"
         color="orange"
         large
       >
       </v-rating>
       <p style=" font-family: Roboto; 
                  font-style: normal;  
                  font-size:32px; 
                  font-weight:light; 
                   margin-top:10px; 
                   color: #333333;">Give your Feedback:</p>
       <v-textarea
           solo
           name="input-7-4"
           label="Write your feedback here"
           style="width: 394px; "
          ></v-textarea>
        <v-btn rounded color="#2695FF" style="color:white; text-transform:capitalize; font-weight:normal;">Submit</v-btn>
        </v-col> -->
        
  </v-row>
  </v-container>
 <div>
  <p class="desc"> Project Description</p>
  <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing
       and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing
       and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing
       and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing
       and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing
       and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing
       and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       </p>
</div>
</div>

</template>
<script>
export default {
  
    data: () => ({
      review: ['Good', 'Awesome', 'Loved it', 'Not Good'],
    }),
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.desc{
  font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-size: 38px;
        font-weight: light;
        margin-top:50px; margin-left:128px; width:90%;
        color: #333333;
        
}
.headingPr{
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 38px;
    }

/* .theme--light.v-label {
  color:red
}
.theme--light.v-icon{
  color:red
}
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{
  color:red
} */
.rate{
        color: #333333;
        position: absolute;
        width: 652px;
        height: 122px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 66px;
    }
.content{
         margin-top:50px; 
         margin-left:128px;
         width:85%;
        }
/* .project{
    margin-top:900px;
} */
</style>
<script>
import Cards from './Cards';
export default {

components:{
  Cards,
},
props: {
    pname: Object,
    stringProp: String,
    title: String
  },
  methods: {
    vclick(){
        console.log(this.props);
    }
  }
}

</script>
