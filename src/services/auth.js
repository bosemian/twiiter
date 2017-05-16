import firebase from 'firebase'

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

export default {
  getCurrentUser,
  requireUser
}
