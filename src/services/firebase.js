import { firebase, FieldValue } from '../lib/firebase';

export async function doseUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', userName.toLowerCase())
    .get()
    // console.log('result', result.docs.map((user) => user.length > 0));

    return result.docs.map((user) => user.length > 0); 
    // return result.docs.length > 0;

}

// get user id from the firebase where userId == userID (passed from the auth)

export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();

    const user = result.docs.map((item) => ({
      ...item.data(),
      docId: item.id
    }))
    return user;
}

// export async function getSuggestedProfiles (userId) {
//   const result = await firebase.firestore().collection('users').where('userId', '==', userId).limit(10).get();
//   console.log('result' , result);
//   return result;
// }

export async function getSuggestedProfiles(userId, following) {
  let query = firebase.firestore().collection('users');

  if (following.length > 0) {
    query = query.where('userId', 'not-in', [...following, userId]);
  } else {
    query = query.where('userId', '!=', userId);
  }
  const result = await query.limit(10).get();

  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }));

  return profiles;
}

export async function updateLoggedInUserFollowing (loggedInUserDocId, profileId, isFollowwimngPrpfile)  {
  return firebase
  .firestore()
  .collection('users')
  .doc(loggedInUserDocId)
  .update({
    following: isFollowwimngPrpfile 
    ? FieldValue.arrayRemove(profileId) 
    : FieldValue.arrayUnion(profileId)
  });
}



export async function updateLoggedInUserFollowers(profileDocId, loggedInUserDocId, isFollowwimngPrpfile)  {
  return firebase
  .firestore()
  .collection('users')
  .doc(profileDocId)
  .update({
    followers: isFollowwimngPrpfile 
    ? FieldValue.arrayRemove(loggedInUserDocId) 
    : FieldValue.arrayUnion(loggedInUserDocId)
  })
}

export async function getTimelinePhotos( userId, following) {
  const result = await firebase
  .firestore()
  .collection('photos')
  .where('userId', 'in', following)
  .get()
}

