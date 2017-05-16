import firebase from 'firebase'
import Auth from './auth'

const list = (cb) => {
  firebase.database().ref('tweet')
    .on('value', (snapshots) => {
      const result = []
      snapshots.forEach((snapshot) => {
        result.push(snapshot.val())
      })
      cb(result.reverse())
    })
}

const post = (content) => {
  return firebase.database().ref('tweet').push({
    content,
    owner: Auth.getCurrentUser().uid,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
}

export default {
  list,
  post
}
