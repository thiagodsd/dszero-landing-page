import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAypyZN6k3U96zD5Ebcdvj3r0jggL1X-n0",
    authDomain: "dszero-landing-page.firebaseapp.com",
    projectId: "dszero-landing-page",
    storageBucket: "dszero-landing-page.appspot.com",
    messagingSenderId: "1000981406553",
    appId: "1:1000981406553:web:fc5416de22c594ae7e2248",
    measurementId: "G-VVDW84XK4Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };