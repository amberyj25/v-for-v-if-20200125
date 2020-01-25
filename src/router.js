import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import setGet from "./setGet"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component: App,
            children:[
                {
                    path:"setGet",
                    name:"setGet",
                    component: setGet 
                }
            ]
        }
    ]
})