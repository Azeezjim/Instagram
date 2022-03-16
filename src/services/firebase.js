import { firebase, FieldValue } from '../lib/firebase';

export async function doseUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', userName)
    .get()
    console.log('result', result);

    return result.docs.map((user) => user.data().length > 0); 
}