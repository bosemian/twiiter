import firebase from 'firebase'

const getCurrentUser = () => {
  return firebase.auth().currentUser
}

export default {
  getCurrentUser
}
