<script>

import { store } from '@/store';

import NameToColor from '@/components/crafts/nametocolor/NameToColor'
import Greeting from '@/components/crafts/greeting/Greeting'

export default {
  name: 'CraftsRoutes',
  components: {
    NameToColor
  },
  routes: [
    {
      route: 'vilken-farg-ar-du',
      component : NameToColor
    },
    {
      route: 'godmorgon-godnatt',
      component : Greeting
    }
  ]
}
</script>
