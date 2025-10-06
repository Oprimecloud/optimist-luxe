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

// Review functions

// Upload image to Firebase Storage and return URL
async function uploadReviewImage(file) {
  if (!file) return null;
  const fileName = `review_${Date.now()}_${file.name}`;
  const imgRef = storageRef(storage, `review_images/${fileName}`);
  await uploadBytes(imgRef, file);
  return await getDownloadURL(imgRef);
}

// Add review with optional image
async function addReview({ stars, comment, imageUrl }) {
  const reviewsCollection = collection(db, "reviews");
  await addDoc(reviewsCollection, {
    stars,
    comment,
    imageUrl: imageUrl || null,
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

export { getProducts, addReview, getReviews, uploadReviewImage };
