import App from './App.vue'
import './style.css'

import { createApp, provide, h } from "vue"

import { DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "./api/hasura-apollo-client"

// import authPlugin from "./auth/authPlugin"

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

// app.use(authPlugin)
// app.use(router)
app.mount("#app")