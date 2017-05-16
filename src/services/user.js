import firebase from 'firebase'

const get = (id, cb) => {
  firebase.database().ref(`user/${id}`)
    .once('value', snapshot => {
      cb(snapshot.val())
    })
}

const set = (id, data) => {
  return firebase.database().ref(`user/${id}`).set(data)
}

export default {
  get,
  set
}
