import React from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, update, ref, push, get, onValue } from 'firebase/database';

const firebaseLogic = () => {

  const firebaseConfig = {
    databaseURL: "https://estatery-ebaec-default-rtdb.firebaseio.com"
  }

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
  const reference = ref(database, 'UserData')

  return {
    initializeApp,
    getDatabase,
    ref,
    update,
    push,
    get,
    onValue,
    firebaseConfig,
    reference,
    database
  }
}

export default firebaseLogic