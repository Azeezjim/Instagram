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

export async function getSuggestedProfiles (userId, following) {
  const result = await firebase.firestore().collection('users').where('userId', '==', userId).limit(10).get();
  console.log('result' , result);
  return result;
}