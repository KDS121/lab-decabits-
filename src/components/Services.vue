<template>
    <div class="services">
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
    </div>
</template>


<script>
    export default{
        data(){
            return{
                drawer: false,
                items: [
                    { icon: 'mdi-home', route: '/',name:'home' },
                    {icon: 'mdi-account',name:'contactus' },
                    { icon: 'mdi-cogs', route: '/services',name:'services' },
                ]
            }
        },
        methods:{
            showContact(name){
            console.log(name);
            if(name == 'contactus'){
            this.$refs['my-modal'].show()
            }
            }
        }
    }
    
</script>
