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
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userEmail = await fetch(`http://localhost:3004/users?email=${email}`);
    const user = await userEmail.json();
    if (user.length === 0) {
      alert("User not found");
      return;
    }
    if (user[0].password !== password) {
      alert("Password is incorrect");
      return;
    }
    if (user[0].password === password) {
      alert("Login successful");
      router.push("/userlist");
      return;
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
