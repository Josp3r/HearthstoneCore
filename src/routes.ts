import Home from './views/Home.vue'
import Battle from './views/Battle.vue'

import ClassicBattleground from './views/Battlegrounds/Classic.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/battle', name: 'Battle', component: Battle },
    {
        path: '/classic-battleground',
        name: 'ClassicBattleground',
        component: ClassicBattleground,
    }
]

export default routes