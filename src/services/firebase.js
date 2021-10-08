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

async function updateCurrentUserFollowing(currentUserDocId, profileId, isFollowing){
  await firebase
  .firestore()
  .collection("users")
  .doc(currentUserDocId)
  .update({
    following: isFollowing ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
  });
};

async function updateSuggestedUserFollowers(profileDocId, currentUserId, isFollowed){
  await firebase
  .firestore()
  .collection("users")
  .doc(profileDocId)
  .update({
    followers: isFollowed ? FieldValue.arrayRemove(currentUserId) : FieldValue.arrayUnion(currentUserId)
  });
};

export {
   doesUsernameExist, 
   getUserByUserId, 
   getSuggestedProfiles, 
   updateCurrentUserFollowing, 
   updateSuggestedUserFollowers,
  };
