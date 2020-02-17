import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabs: [],
        currentActive: 0,
        totalTabs: 0,
        formData: {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            national_id: '',
            kra_pin: '',
            company_name: '',
            company_location: '',
            company_revenue: ''
        }
    },
    mutations: {
        setTabs(state, value) {
            state.tabs = [...value];
        },
        setCurrentActive(state, value) {
            state.currentActive = value;
        },
        setTotalTabs(state, value) {
            state.totalTabs = value;
        },
        setFirstName(state, value) {
            state.formData.firstname = value;
        },
        setLastName(state, value) {
            state.formData.lastname = value;
        },
        setPhoneNumber(state, value) {
            state.formData.phonenumber = value;
        },
        setEmail(state, value) {
            state.formData.email = value;
        },
        setNationalID(state, value) {
            state.formData.national_id = value;
        },
        setKraPin(state, value) {
            state.formData.kra_pin = value;
        },
        setCompanyName(state, value) {
            state.formData.company_name = value;
        },
        setCompanyLocation(state, value) {
            state.formData.company_location = value;
        },
        setCompanyRevenue(state, value) {
            state.formData.company_revenue = value;
        }
    }
})