import firebase from 'firebase'
import Auth from './auth'
import { Observable } from 'rxjs'

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

const getTweets = () => Observable.create((o) => {
  const ref = firebase.database().ref(`tweet`)
  const fn = ref.on('value', (snapshots) => {
    const result = []
    snapshots.forEach((snapshot) => {
      result.push(snapshot.val())
    })
    o.next(result)
  }, (err) => { o.error(err) })
  return () => ref.off('value', fn)
})

const post = (content) => {
  return firebase.database().ref('tweet').push({
    content,
    owner: Auth.getCurrentUser().uid,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
}

export default {
  list,
  post,
  getTweets
}
