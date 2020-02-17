<template>
    <div class="column is-centered is-half is-offset-one-quarter form-element">
        <ul class="steps has-content-centered">
            <li class="steps-segment" v-for="tab in this.$store.state.tabs" :class="{ 'is-active': tab.isActive }" v-bind:key="tab.name">
                <span class="steps-marker"></span>
                <div class="steps-content">
                    <p class="is-size-4">{{tab.name}}</p>
                    <p>{{tab.info}}</p>
                </div>
            </li>
        </ul>                    
        <div class="tab-details">
            <slot :formData="this.$store.state.formData"></slot>
        </div>
        <br/>
        <div class="field is-grouped">
            <div class="control" v-if="this.$store.state.currentActive > 0">
                <button @click="previousTab()" class="button is-primary">Previous</button>
            </div>
            <div class="control" v-if="this.$store.state.currentActive < this.$store.state.totalTabs - 1">
                <button @click="nextTab()" class="button is-link">Next</button>
            </div>
            <div class="control" v-if="this.$store.state.currentActive == this.$store.state.totalTabs -1" >
                <button @click="submit()" class="button is-success">Submit</button>
            </div>
        </div>
        <div :class="{ 'is-active': modalActive }" id="myModal" class="modal">
            <div class="modal-background" @click="changeRoute()"></div>
            <div class="modal-content">
                <div class="box">Hooray! Your data has been submitted successfully!</div>
                <button class="button is-success" @click="changeRoute()">OK</button>
            </div>
            <button @click="changeRoute()" class="modal-close is-large" aria-label="close"></button>
        </div>
                
    </div>
</template>


<script>
export default {
  name: 'form-wizard',
  data(){
      return{
          modalActive: true
      }
  },
    created(){
        this.$store.state.tabs = this.$children;
        this.modalActive = false;        
    },
    mounted(){
        this.$store.state.totalTabs = this.$store.state.tabs.length;
    },
    methods:{
        previousTab(){
            this.$store.state.currentActive--;
            this.$store.state.tabs.forEach(tab => {
                tab.isActive = false;
            });
                this.$store.state.tabs[this.$store.state.currentActive].isActive = true;
        },
        nextTab(){
            //Validate input
            this.$root.$validator.validate('step'+(this.$store.state.currentActive+ 1)+'.*').then(valid => {
                if (valid){
                    this.$store.state.currentActive++;
                    this.$store.state.tabs.forEach(tab => {
                        tab.isActive = false;
                    });
            
                    this.$store.state.tabs[this.$store.state.currentActive].isActive = true;
                }
            }); 
        },
        submit(){
            
            this.$root.$validator.validate('step'+this.$store.state.totalTabs+'.*').then(valid => {
                if (valid){
                    this.modalActive = true
                    this.$store.state.currentActive = 0;
                }
            });
        },
        changeRoute(){
            this.modalActive = false
            console.log('hello');
            this.$router.push('/about')
        }
    }
}
</script>


<style>
    .form-element{
        padding: 2rem !important;
        border-radius: 50px;
        background: #cfd4d7;
        box-shadow:  20px 20px 60px #b0b4b7, 
                    -20px -20px 60px #eef4f7;
    }
    .field.is-grouped{
        justify-content: center !important;
    }
    .modal{
        background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    }
</style>