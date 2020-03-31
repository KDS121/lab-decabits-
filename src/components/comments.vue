<template>
<div>
    <p  @click="onChange" class="comments">Comments</p>
        <v-col cols="12" style="width:85%; margin:0 auto; " >
        <v-textarea id="commentVAL" style="border-radius:16px;"
         @change="e => showContact()"
          solo
          name="input-7-4"
          label="Write your comment here"
        ></v-textarea>
            <v-btn @change="showContact()"  rounded color="#2496FF" dark style="width:130px; border-radius:16px;">Submit</v-btn>
        <hr/>

      </v-col>
</div>
</template>
<script>
export default {
    methods: {
         showContact(e){
       console.log(e.target.value);
       const com =document.getElementById("commentVAL")
       console.log(com)
    },
    }
}
</script>