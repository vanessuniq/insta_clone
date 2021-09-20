import { firebase } from '../lib/firebase';

async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return result.docs.length > 0;
}
async function getUserByUserId(userId){
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get()
    .then(res => res.docs[0]);
  
  const user = {...result.data(), docId: result.id }
  return user;
};
export { doesUsernameExist, getUserByUserId };
