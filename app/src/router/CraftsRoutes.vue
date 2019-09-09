<script>

import { store } from '@/store';

//import NameToColor from '@/components/crafts/nametocolor/NameToColor'
//import Greeting from '@/components/crafts/greeting/Greeting'
import NameToCreature from '@/components/crafts/nametocreature/NameToCreature'
import Goodmorning from '@/components/crafts/goodmorning/Goodmorning'

export default {
  name: 'CraftsRoutes',
  components: {
  },
  routes: [
    /*{
      route: 'vilken-farg-ar-du',
      component : NameToColor
    },
    {
      route: 'godmorgon-godnatt',
      component : Greeting
    },*/
    {
      route: 'godmorgon-godnatt',
      component : Goodmorning
    },
    {
      route: 'vilket-sagovasen-ar-du',
      component : NameToCreature
    },
  ]
}
</script>
