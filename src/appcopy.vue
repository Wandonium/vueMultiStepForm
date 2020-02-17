<template>
  <div id="app">
    <form-wizard>
      <template v-slot="{formData}">
        <tab name="Step 1" info="Your personal details" :selected="true" :formData="$store.state.formData">
          <div id="form-step-1" >
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" name="First Name" type="text" placeholder="E.g. John"  v-model="formData.firstname" data-vv-scope="step1" v-validate="'required'">
                <p class="help is-danger" v-show="errors.has('step1.First Name')">
                        {{ errors.first('step1.First Name') }}
                </p>
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" name="Last Name" type="text" placeholder="E.g. Kamau"  v-model="formData.lastname" data-vv-scope="step1" v-validate="'required'">
                <p class="help is-danger" v-show="errors.has('step1.Last Name')">
                        {{ errors.first('step1.Last Name') }}
                </p>
              </div>
            </div>
            <div class="field">
              <label class="label">Phone Number</label>
              <div class="control">
                <input class="input" name="Phone Number" type="tel" placeholder="E.g. +254701020304"  v-model="formData.phonenumber" data-vv-scope="step1" v-validate="'phoneNumber'">
                <p class="help is-danger" v-show="errors.has('step1.Phone Number')">
                        {{ errors.first('step1.Phone Number') }}
                </p>
              </div>
            </div>
  
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" name="email"  type="email"  v-model="formData.email" placeholder="E.g. johnkamau@gmail.com" data-vv-scope="step1" v-validate="'required|email'">
                <p class="help is-danger" v-show="errors.has('step1.email')">
                      {{ errors.first('step1.email') }}
                </p>
              </div>
            </div>
          </div>
        </tab>
        <tab name="Step 2" info="Your Identity" data-vv-scope="step2">
          <div id="form-step-2">
            <div class="field">
              <label class="label">National ID</label>
              <div class="control">
                <input class="input" name="National ID"  type="number"  v-model="formData.national_id" placeholder="E.g. 20278296" data-vv-scope="step2" v-validate="'required|integer|digits:8'">
                <p class="help is-danger" v-show="errors.has('step2.National ID')">
                      {{ errors.first('step2.National ID') }}
                </p>
              </div>
            </div>
            <div class="field">
              <label class="label">KRA Pin</label>
              <div class="control">
                <input class="input" name="KRA Pin"  type="text" v-model="formData.kra_pin" placeholder="E.g. A093695589N" data-vv-scope="step2" v-validate="'required|min:11'">
                <p class="help is-danger" v-show="errors.has('step2.KRA Pin')">
                      {{ errors.first('step2.KRA Pin') }}
                </p>
              </div>
            </div>
          </div>
        </tab>
        <tab name="Step 3" info="Your Company Information" >
          <div id="form-step-3">
            <div class="field">
              <label class="label">Company Name</label>
              <div class="control">
                <input class="input" name="Company Name"  type="text"  v-model="formData.company_name" placeholder="E.g Safaricom LTD" data-vv-scope="step3" v-validate="'required'">
                <p class="help is-danger" v-show="errors.has('step3.Company Name')">
                      {{ errors.first('step3.Company Name') }}
                </p>
              </div>
            </div>               
            <div class="field">
              <label class="label">Company Location</label>
              <div class="control">
                <input class="input" name="Company Location"  type="text"  v-model="formData.company_location" placeholder="E.g. Nairobi CBD at Telcom Towers" data-vv-scope="step3" v-validate="'required'">
                <p class="help is-danger" v-show="errors.has('step3.Company Location')">
                      {{ errors.first('step3.Company Location') }}
                </p>
              </div>
            </div>               
            <div class="field">
              <label class="label">Company Revenue</label>
              <div class="control">
                <div class="select" name="Company Revenue">
                  <select v-model="formData.company_revenue" v-validate="'required'" name="Company Revenue" data-vv-scope="step3">
                    <option value="">Select</option>
                    <option value="KES 0 - KES 100,000">KES 0 - KES 100,000</option>
                    <option value="KES 100,000 - KES 500,000">KES 100,000 - KES 500,000</option>
                    <option value="KES 500,000 - KES 1000,000">KES 500,000 - KES 1000,000</option>
                    <option value="KES 1000,000 +">KES 1000,000 +</option>
                  </select>
                </div>
              </div>
              <p class="help is-danger" v-show="errors.has('step3.Company Revenue')">
                      {{ errors.first('step3.Company Revenue') }}
              </p>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" name="terms" v-model="formData.terms" data-vv-scope="step3" v-validate="'required'">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
              <p class="help is-danger" v-show="errors.has('step3.terms')">
                      {{ errors.first('step3.terms') }}
              </p>
            </div>              
          </div>
        </tab>
      </template>
    </form-wizard>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
//import * as VeeValidate from 'vee-validate';
import PhoneNumber from 'awesome-phonenumber';
import FormWizard from './components/FormWizard.vue';
import Tab from './components/Tab.vue';
import 'bulma/css/bulma.css'

const phoneNumber = {
  getMessage: field => `${field} is not a valid phone number`,
  validate (value) {
    return new Promise(resolve => {
      let phone = new PhoneNumber(value);
      resolve({ valid: phone.isValid() })
    })
  }
}
 
Validator.extend('phoneNumber', phoneNumber)

Vue.use(VeeValidate, {
  useConstraintAttrs: false
});

export default {
  name: 'app',
  components: {
    FormWizard, Tab
  },
}
</script>

<style lang="scss">
  @import "./../node_modules/bulma/bulma.sass";
  @import "./../node_modules/bulma-steps-component/bulma-steps.sass";
  body{
    padding: 40px;
  }
  // [v-cloak] { display: none; }
</style>
