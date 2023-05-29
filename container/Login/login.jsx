// import styles from "./login.module.css";
// import Link from "next/link";

// export default function LoginContainer() {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.login_form}>
//           <h1 className={styles.header}>Giriş Yap</h1>
//           <div className={styles.login_steps}>
//             <form className={styles.form}>
//               <label htmlFor="email">Email</label>
//               <input type="text" id="email" name="email" placeholder="Email" />
//               <label htmlFor="password">Şifre</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//               />
//               <div className={styles.detail}>
//                 <div className={styles.remember_credentials}>
//                   <input type="checkbox" id="checkbox" />
//                   <label htmlFor="checkbox">Açık kalsın</label>
//                 </div>
//                 <Link href="/forgot-password">Şifreni mi unuttun?</Link>
//               </div>
//               <button className={styles.login_button}>Giriş yap</button>
//             </form>
//             <div className={styles.divider}>
//               <div className={styles.line} />
//               <p>veya</p>
//               <div className={styles.line} />
//             </div>
//             <div className={styles.buttons}>
//               <button>Şifresiz giriş yap</button>
//               <button>Google ile giriş yap</button>
//               <button>Apple ile giriş yap</button>
//               <button>Facebook ile giriş yap</button>
//             </div>
//             <div className={styles.sign_up}>
//               <p>Hesabın yok mu?</p>
//               <Link href="/sign-up">Hemen oluştur</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/LoginPage.js

// pages/LoginPage.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false); // Track the login state

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would typically make an API call to authenticate the user with the provided email and password
    // For simplicity, we will check if either email or password is provided
    if (email && password) {
      setLoggedIn(true); // Update the login state to true
    } else {
      alert("Please enter email and password");
    }
  };

  // Redirect to the user list page if the user is logged in
  if (isLoggedIn) {
    router.push("/userlist");
    return null;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
