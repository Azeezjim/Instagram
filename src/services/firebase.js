import { firebase, FieldValue } from '../lib/firebase';

export async function doseUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', userName.toLowerCase())
    .get()
    console.log('result', result.docs.map((user) => user.length > 0));

    return result.docs.map((user) => user.length > 0); 
    // return result.docs.length > 0;

}

