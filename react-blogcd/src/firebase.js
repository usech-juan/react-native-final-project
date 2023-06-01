
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDrScy8207Og4LmC_hTAnBRtzcWRWfN0hw",
  authDomain: "react-ca474.firebaseapp.com",
  projectId: "react-ca474",
  storageBucket: "react-ca474.appspot.com",
  messagingSenderId: "642347598906",
  appId: "1:642347598906:android:032831f840ad31b48d2103"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addToFirebase = async (objectToSave, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), objectToSave);
    console.log("Documento agregado a la colección " + collectionName + " con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar el documento: ", e);
  }
};

const getFromFirebase = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return documents;
  } catch (e) {
    console.error("Error al obtener los documentos: ", e);
    return null;
  }
};


const updateFromFirebase = async (docId, objectToUpdate, collectionName) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, objectToUpdate);
    console.log("Documento actualizado en la colección " + collectionName + " con ID: ", docId);
  } catch (e) {
    console.log("Error al actualizar el documento: ", e);
  }
};

const getFromFirebaseID = async (collectionName, id) => {
  try {
    const documentRef = doc(db, collectionName, id);
    const documentSnapshot = await getDoc(documentRef);
    if (documentSnapshot.exists()) {
      return { id: documentSnapshot.id, ...documentSnapshot.data() };
    } else {
      console.log('No se encontró el documento');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
    return null;
  }
};

const deleteFromFirebase = async (docId, collectionName) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Documento eliminado de la colección " + collectionName + " con ID: " + docId);
  } catch (e) {
    console.error("Error al eliminar el documento: ", e);
  }
};


export {
  addToFirebase,
  getFromFirebase,
  updateFromFirebase,
  deleteFromFirebase,
  getFromFirebaseID
};
