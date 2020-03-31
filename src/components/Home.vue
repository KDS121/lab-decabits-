<template>
<div class="home" id="Home">
                        
  <v-app>
      <v-app-bar
      color="FFFFFF"
      fixed
      >
      <v-app-bar-nav-icon @click="drawer =! drawer"> </v-app-bar-nav-icon>
      <v-img src="../assets/decabitslogo.svg"
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
          <v-list  class="list">
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i" router :to="item.route"
            @click="showContact(item.name)"
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
      <comments  style="display:none;" id="cmnt"/>
    </v-content> 
  </v-app>
  <router-view/>
      <b-modal  class="contactUS"  ref="my-modal" size="lg" centered hide-footer title="Contact Us !">
      <div class="d-block text-center">
        <p>Want to discuss some work? Just drop a message below</p>
      </div>
      <form action="https://formspree.io/xgezgyyw" ref="form" class="contactModal" method="POST">
        
        <div>
          <b-form-input 
            id="name-input"
            required 
            placeholder="  Name"
          ></b-form-input>
          <b-form-input
            id="email-input"
            v-model="email"
            required 
            placeholder="  Email"
          ></b-form-input>
          <b-form-input
            id="phone-input"
            v-model="name"
            required 
            placeholder=" Phone No."
          ></b-form-input>
        </div>
        <div>
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Your message..."
      rows="5"
    ></b-form-textarea>
    </div>
      </form>
      <b-button class="mt-3 mx-auto" variant="primary">Submit</b-button>
    </b-modal>
    <!-- <div class="modal fade" ref="my-modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
 
  </div>
   
</template>

<script>
 import Banner from './Banner';
 import Textarea from './Textarea';
 import Cards from './Cards';
 import Projectdescription from './Projectdescription';
 import comments from './comments';
 
export default {
  name: 'Home',
  components: {
     Banner,
    Textarea,
     Cards,
    Projectdescription,
    comments,
  },
  methods:{
    showContact(name){
       console.log(name);
       if(name == 'contactus'){
       this.$refs['my-modal'].show()
       }
    },
    onchildClick(value) {
      
      document.getElementById("pdesc").style.display="";
      document.getElementById("cmnt").style.display="";
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
      { icon: 'mdi-home', route: '/',name:'home' },
      {icon: 'mdi-account',name:'contactus' },
      { icon: 'mdi-cogs', route: '/services',name:'services' },
       
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

.contactModal input{
  margin-bottom:12px;
  width: 60%;
}
.contactModal textarea{
  margin-bottom:12px;
  width: 80%;
}

/* .modal-backdrop {
   background-color: red;
}

.contactModal{
display: flex;
justify-content: space-around;
}

.contactModal input{
  margin-bottom:12px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding: 0;
  outline:none;
  box-shadow:none !important;
  width: 100%;
  transition: all 0.2s linear;
  margin: 0 auto;
}

.contactModal textarea{
  margin-top:12px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding: 0;
  outline:none;
   box-shadow:none !important;
  width: 100%;
  transition: all 0.2s linear;
  margin: 0 auto;
}

.contactModal textarea:focus{
  width: 140%;
  border-bottom: 1px solid black;
}

.contactModal input:focus{
  width: 140%;
  border-bottom: 1px solid black;
} */
</style>