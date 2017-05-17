import User from './user'
import Auth from './auth'

const getId = () => Auth.getCurrentUser().uid

const get = () =>
  Auth.currentUser()
    .flatMap((user) => User.get(user.uid))

const set = (data) => {
  return User.set(getId(), data)
}

export default {
  get,
  set
}
