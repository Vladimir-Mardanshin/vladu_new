import { createStore } from 'vuex'
import user from './modules/user'
import event from './modules/event'
import peoples from './modules/people'
import space from './modules/space'
import reservation from './modules/reservation'

export default createStore({
  modules: {
    user,
    peoples,
    space,
    reservation,
    event
  }
})
