import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6UlPPmzpKBBGO6qZhk_ndBEN2OWKiZPo",
  authDomain: "aenzbi-metaverse-nft-generator.firebaseapp.com",
  projectId: "aenzbi-metaverse-nft-generator",
  storageBucket: "aenzbi-metaverse-nft-generator.appspot.com",
  messagingSenderId: "767147880491",
  appId: "1:767147880491:web:516934464c3111ff16fa6e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
