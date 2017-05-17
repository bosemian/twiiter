import firebase from 'firebase'
import { BehaviorSubject } from 'rxjs'
const getCurrentUser = () => {
  return firebase.auth().currentUser
}

const requireUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      if (user) {
        resolve(user)
        return
      }
      reject()
    })
  })
}

const $currentUser = new BehaviorSubject(undefined)

const init = () => {
  firebase.auth().onAuthStateChanged((user) => {
    $currentUser.next(user)
  })
}

export default {
  getCurrentUser,
  requireUser,
  init,
  currentUser () {
    return $currentUser.filter((x) => x !== undefined)
  }
}
