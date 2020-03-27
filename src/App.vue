
<template>
<div class="home" id="app">
                        
  <v-app>
      <v-app-bar
      color="FFFFFF"
      fixed
      >
      <v-app-bar-nav-icon @click="drawer =! drawer"> </v-app-bar-nav-icon>
      <v-img src="./assets/decabitslogo.svg"
        max-height="60"
        contain
        class=icon>
        </v-img>
      <v-text-field style="border-radius:11px;"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search.."
        v-model="search"
        class="hidden-sm-and-down searchbox"
      />   
        </v-app-bar>
        <v-navigation-drawer   v-model="drawer" app class="indogo navdrawer" color="#2496FF" width="80px"> 
        <v-app-bar-nav-icon @click="drawer =! drawer" color="white" class="navicon mx-4 my-4"> </v-app-bar-nav-icon>
        <!-- <v-list class="list" >
            <v-list-title>
            <v-list-title-action>
                <v-img src=""></v-img>            
            </v-list-title-action>     
            <v-list-title-action>
                <v-img src=""></v-img>            
            </v-list-title-action>   
            <v-list-title-action>
                <v-img src=""></v-img>            
            </v-list-title-action> 
            <v-list-title-action>
                <v-img src=""></v-img>            
            </v-list-title-action>   
            </v-list-title>    
          </v-list> -->
          <v-list  class="list">
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i" router :to="(item,i).route"
          >
            <v-list-item-icon>
              <v-icon nav min-width color="white" light v-text="item.icon" class=icons ></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
        </v-navigation-drawer>

      <v-content>
        
       <Banner/>
       <Textarea/>
       <a  href="#desc" v-smooth-scroll="{duration:3000}" style="text-decoration:none;">
        <Cards v-on:cardClicked="onchildClick" v-on:AllItems="storeData" :Itemfilter="filteredItems" v-on:AllTags="storeTags"/> 
       </a>
       <div id="desc" style="height:20px;">
        </div>
      <Projectdescription :pname="singleItem" style="display:none;" id="pdesc" />
    </v-content> 
  </v-app>
  </div>
</template>

<script>
  import Banner from './components/Banner';
 import Textarea from './components/Textarea';
 import Cards from './components/Cards';
 import Projectdescription from './components/Projectdescription';
 

export default {
  name: 'App',
  components: {
     Banner,
    Textarea,
     Cards,
    Projectdescription,
  },
  methods:{
    onchildClick(value) {
      
      document.getElementById("pdesc").style.display="";
      console.log(this.singleItem)
       this.singleItem.pname = value.item.pname;
         this.singleItem.img = value.item.img;
         this.singleItem.description = value.item.description;
    },
    storeData(e){
      this.cardData = e
    },
    storeTags(e){
      this.tagData = e
    }
  },
    
  data: () => ({
    search :'',
    tagData:[],
    cardData:[],
    singleItem:{
      pname:'',
      img:'',
      description:''
    },
    drawer: false,
    // item: 1,
    items: [
      { icon: 'mdi-home', route: '/' },
      {icon: 'mdi-account', route: '/contactus' },
      { icon: 'mdi-cogs', route: '/services' },
       
    ],
  }),
  computed: {
    filteredItems: function(){
      return this.cardData.filter((d) => {
        // // for (var i = 0; i <d.tags.length; i++) {
        //   return d.tags[i].toLowerCase().match(this.search)
        // // }
        return d.pname.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
};
</script>
<style>
.navdrawer{
        box-shadow: 2px 0px 4px rgba(78, 78, 78, 0.25);
        border-radius : 0px;
        border:0; 
          }
.navicon{
        transform : rotate(90deg);
        }
.searchbox{
        position: absolute;
        left: 76.04%;
        right: 1.46%;
        top: 14.00%;
        bottom: 24.73%; 
        background: #FAFAFA;
          }
.list{
        width: 70%;
        margin: 6px;
      }
  .icons{
    margin-bottom: 20px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}

</style>