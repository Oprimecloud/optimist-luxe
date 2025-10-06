import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

// Add Firebase products that you want to use
// import { getAuth } from 'https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js'
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
  apiKey: "AIzaSyAc3D8DQMbZ9vem-oYmHIxs6jbgcLbl4nQ",
  authDomain: "optimistluxe-c5c71.firebaseapp.com",
  projectId: "optimistluxe-c5c71",
  storageBucket: "optimistluxe-c5c71.firebasestorage.app",
  messagingSenderId: "843154964897",
  appId: "1:843154964897:web:ae4cff1213957d6c04cbe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initial cloud firestore
const db = getFirestore(app);


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

// Review functions
async function addReview({ stars, comment }) {
  const reviewsCollection = collection(db, "reviews");
  await addDoc(reviewsCollection, {
    stars,
    comment,
    createdAt: serverTimestamp(),
  });
}

async function getReviews() {
  const reviewsCollection = collection(db, "reviews");
  const q = query(reviewsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  const reviews = [];
  snapshot.forEach((doc) => {
    reviews.push(doc.data());
  });
  return reviews;
}

export { getProducts, addReview, getReviews };
