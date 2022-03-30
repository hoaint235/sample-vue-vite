import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '../../node_modules/primeflex/primeflex.css';
import 'primevue/resources/themes/fluent-light/theme.css';


import { App } from 'vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import AvatarGroup from 'primevue/avatargroup';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Menubar from 'primevue/menubar';

const components = [
  Dialog,
  AvatarGroup,
  Button,
  InputMask,
  InputText,
  Sidebar,
  Menubar
]

const toKebabCase = (str: string) => str
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

export function initPrime(app: App<Element>) {
  app.use(PrimeVue);
  components.forEach(component => {
    const nameComponent = toKebabCase(component.name);
    if(!nameComponent) return;
    console.log(`p-${nameComponent}`)
    app.component(`p-${nameComponent}`, component);
  })
}