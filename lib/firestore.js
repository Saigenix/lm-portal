// @ts-nocheck
import { app,storage } from "./Firebase";
import { getFirestore } from "firebase/firestore";
import { doc, addDoc,collection,updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import {query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { resolve } from "path";
const db = getFirestore(app);


