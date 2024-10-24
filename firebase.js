// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH8NuONVkg2rnRfQbdsNnckmzLO1LSryE",
  authDomain: "cardom-f3124.firebaseapp.com",
  projectId: "cardom-f3124",
  storageBucket: "cardom-f3124.appspot.com",
  messagingSenderId: "82439399080",
  appId: "1:82439399080:web:21379c01eaa834104cc49d",
  measurementId: "G-LVC0XQHE3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

const loginForm = document.getElementById('loginForm');

// التعامل مع حدث إرسال النموذج
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على البريد الإلكتروني وكلمة المرور من النموذج
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // استخدام Firebase لتسجيل الدخول
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // تسجيل الدخول ناجح
        const user = userCredential.user;
        alert("Login successful! Welcome, " + user.email);
        // يمكنك هنا إعادة توجيه المستخدم إلى صفحة أخرى بعد تسجيل الدخول
        window.location.href = 'homepage.html'; // مثال لإعادة التوجيه
    })
    .catch((error) => {
        // التعامل مع الأخطاء
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
    });
});