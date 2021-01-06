import Vue from 'vue'
import Router from 'vue-router'
import landingA from '@/components/pages/landingA'
import landingB from '@/components/pages/landingB'
import privacy from '@/components/pages/privacy'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'landingB', component: landingB
    },
    { path: '/landingA', name: 'landingA', component: landingA
    },
    // { path: '/landingB', name: 'landingB', component: landingB
    // },
    { path: '/privacy', name: 'privacy', component: privacy
    }
  ]
})
