import { createApp } from 'vue'
import App from './App'
import '/assets/style.scss'
import components from "@/components/UI";
import router from "@/router/router"
import Vintersection from '@/directives/Vintersection'
import derectives from '@/directives'
console.log(components)

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})
derectives.forEach(derective => {
    app.directive(derective.name, derective)
})

app
    .use(router) 
    .mount('#app')
