import firebase from 'firebase'
import { Observable } from 'rxjs'

// const get = (id) => {
//   return firebase.database().ref(`user/${id}`)
//       .once('value')
//       .then((snapshot) => {
//         return snapshot.val()
//       })
// }

const get = (id) => Observable.create((o) => {
  const ref = firebase.database().ref(`user/${id}`)
  const fn = ref.on('value', (snapshot) => {
    o.next(snapshot.val())
  }, (err) => { o.error(err) })
  return () => ref.off('value', fn)
})

const getUsers = () => Observable.create((o) => {
  const ref = firebase.database().ref(`user`)
  const fn = ref.on('value', (snapshots) => {
    const result = []
    snapshots.forEach((snapshot) => {
      const user = snapshot.val()
      user.$id = snapshot.key
      result.push(user)
    })
    o.next(result)
  }, (err) => { o.error(err) })
  return () => ref.off('value', fn)
})

const getOnce = (id) => get(id).first()

const set = (id, data) => {
  return firebase.database().ref(`user/${id}`).set(data)
}

const subscribe = (id, cb) => {
  firebase.database().ref(`user/${id}`)
    .on('value', snapshot => {
      cb(snapshot.val())
    })
}

const list = (cb) => {
  firebase.database().ref('user')
    .on('value', (snapshots) => {
      const result = []
      snapshots.forEach((snapshot) => {
        const user = snapshot.val()
        user.$id = snapshot.key
        result.push(user)
      })
      cb(result)
    })
}

export default {
  get,
  set,
  subscribe,
  list,
  getOnce,
  getUsers
}
