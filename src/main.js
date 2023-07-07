import { createApp } from 'vue'
import App from './App.vue'
import eventBus from './event-bus'


const app = createApp(App)
app.use(eventBus)


app.mount("#app")

