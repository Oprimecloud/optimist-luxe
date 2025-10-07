

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

// Add Firebase products that you want to use
// import { getAuth } from 'https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js'
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8Y3x1_yY0vdDLqgYc5tv7qo0JnbsAWyo",
  authDomain: "optimistluxe-c3702.firebaseapp.com",
  projectId: "optimistluxe-c3702",
  storageBucket: "optimistluxe-c3702.appspot.com",
  messagingSenderId: "997012157455",
  appId: "1:997012157455:web:48d687beb32762317c9f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initial cloud firestore

const db = getFirestore(app);
const storage = getStorage(app);


// Product fetching
async function getProducts() {
  const productsCollection = collection(db, "products");
  const products = await getDocs(productsCollection);
  const productsArray = [];
  products.forEach((doc) => {
    productsArray.push(doc.data());
  });
  return productsArray;
}
