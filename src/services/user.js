import firebase from 'firebase'

const get = (id) => {
  return firebase.database().ref(`user/${id}`)
      .once('value')
      .then((snapshot) => {
        return snapshot.val()
      })
}

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
  list
}
