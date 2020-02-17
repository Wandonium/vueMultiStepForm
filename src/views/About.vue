<template>
  <div class="about">
    <div class="card colum is-half is-offset-one-quarter has-content-centered">
      <div class="card-content is-centered">
        <div class="media">
          <div class="media-left">
            <span class="icon has-text-success is-large">
              <i class="fas fa-3x fa-user"></i>
            </span>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ this.$store.state.formData.firstname }}</p>
            <p class="subtitle is-6">{{ this.$store.state.formData.lastname }}</p>
          </div>
        </div>

        <div class="content">
          The following is the data you entered into the form. Please
          confirm that it is correct. Press the back button to go back and correct it
          if any of it is wrong.
          <br><br>
          <div class="tile is-ancestor">
            <ul class="tile is-parent is-vertical">
              <li class="tile is-child notification is-primary">Phone Number: </li>
              <li class="tile is-child notification is-primary">Email: </li>
              <li class="tile is-child notification is-primary">National ID: </li>
              <li class="tile is-child notification is-primary">KRA Pin: </li>
              <li class="tile is-child notification is-primary">Company Name: </li>
              <li class="tile is-child notification is-primary">Company Location: </li>
              <li class="tile is-child notification is-primary">Company Revenue: </li>
            </ul>
            <ul class="tile is-parent is-vertical">
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.phonenumber }} </li>
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.email }} </li>
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.national_id }} </li>
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.kra_pin }}</li>
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.company_name }}</li>
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.company_location }}</li>
              <li class="tile is-child notification is-info">{{ this.$store.state.formData.company_revenue }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
  @import url('../../node_modules/@fortawesome/fontawesome-free/css/all.css');
   .card{
    max-width: 50%;
    margin: 0 auto;
  }

</style>
