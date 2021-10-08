import { firebase, FieldValue } from '../lib/firebase';

async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return result.docs.length > 0;
};

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

async function getSuggestedProfiles(userId, following){
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '!=', userId)
    .limit(10)
    .get()
    .then(res => res.docs.map(user => ({...user.data(), docId: user.id })))
    .then(profiles => profiles.filter(profile => !following.includes(profile.userId)));
  
  return result;
};

async function addUserToCurrentUserFollowing(currentUserDocId, profileId){
  await firebase
  .firestore()
  .collection("users")
  .doc(currentUserDocId)
  .update({
    following: FieldValue.arrayUnion(profileId)
  });
};

async function addUserToSuggestedUserFollowers(profileDocId, currentUserId){
  await firebase
  .firestore()
  .collection("users")
  .doc(profileDocId)
  .update({
    followers: FieldValue.arrayUnion(currentUserId)
  });
};

async function removeUserFromCurrentUserFollowing(currentUserDocId, profileId){
  await firebase
  .firestore()
  .collection("users")
  .doc(currentUserDocId)
  .update({
    following: FieldValue.arrayRemove(profileId)
  });
};

async function removeUserFromSuggestedUserFollowers(profileDocId, currentUserId){
  await firebase
  .firestore()
  .collection("users")
  .doc(profileDocId)
  .update({
    followers: FieldValue.arrayRemove(currentUserId)
  });
};

export {
   doesUsernameExist, 
   getUserByUserId, 
   getSuggestedProfiles, 
   addUserToCurrentUserFollowing, 
   addUserToSuggestedUserFollowers,
   removeUserFromCurrentUserFollowing,
   removeUserFromSuggestedUserFollowers
  };
