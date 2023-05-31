// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";

// // const UserUpdate = ({ id }) => {
// //   const router = useRouter();
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:3004/users/${id}`);
// //         const data = await response.json();
// //         setUser(data);
// //       } catch (error) {
// //         console.error("Error fetching user:", error);
// //       }
// //     };

// //     fetchUser();
// //   }, [id]);

// //   const handleUpdateUser = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch(`http://localhost:3004/users/${id}`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(user),
// //       });

// //       if (response.ok) {
// //         console.log("User updated successfully");
// //         router.push("/userlist");
// //       } else {
// //         console.error("Error updating user");
// //       }
// //     } catch (error) {
// //       console.error("Error updating user:", error);
// //     }
// //   };

// //   if (!user) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="max-w-md mx-auto mt-8">
// //       <h1 className="text-2xl font-bold mb-4">User Update</h1>
// //       <form onSubmit={handleUpdateUser}>
// //         <div className="mb-4">
// //           <label className="block mb-2">Name:</label>
// //           <input
// //             type="text"
// //             value={user.name}
// //             onChange={(e) => setUser({ ...user, name: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Email:</label>
// //           <input
// //             type="email"
// //             value={user.email}
// //             onChange={(e) => setUser({ ...user, email: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Phone:</label>
// //           <input
// //             type="text"
// //             value={user.phone}
// //             onChange={(e) => setUser({ ...user, phone: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Role:</label>
// //           <input
// //             type="text"
// //             value={user.role}
// //             onChange={(e) => setUser({ ...user, role: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Status:</label>
// //           <input
// //             type="text"
// //             value={user.status}
// //             onChange={(e) => setUser({ ...user, status: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md"
// //         >
// //           Update
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UserUpdate;
// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";

// // const UserUpdate = ({ id }) => {
// //   const router = useRouter();
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:3004/users/${id}`);
// //         const data = await response.json();
// //         setUser(data);
// //       } catch (error) {
// //         console.error("Error fetching user:", error);
// //       }
// //     };

// //     fetchUser();
// //   }, [id]);

// //   const handleUpdateUser = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch(`http://localhost:3004/users/${id}`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(user),
// //       });

// //       if (response.ok) {
// //         console.log("User updated successfully");
// //         router.push("/userlist");
// //       } else {
// //         console.error("Error updating user");
// //       }
// //     } catch (error) {
// //       console.error("Error updating user:", error);
// //     }
// //   };

// //   if (!user) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="max-w-md mx-auto mt-8">
// //       <h1 className="text-2xl font-bold mb-4">User Update</h1>
// //       <form onSubmit={handleUpdateUser}>
// //         <div className="mb-4">
// //           <label className="block mb-2">Name:</label>
// //           <input
// //             type="text"
// //             value={user.name}
// //             onChange={(e) => setUser({ ...user, name: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Email:</label>
// //           <input
// //             type="email"
// //             value={user.email}
// //             onChange={(e) => setUser({ ...user, email: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Phone:</label>
// //           <input
// //             type="text"
// //             value={user.phone}
// //             onChange={(e) => setUser({ ...user, phone: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Role:</label>
// //           <input
// //             type="text"
// //             value={user.role}
// //             onChange={(e) => setUser({ ...user, role: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Status:</label>
// //           <input
// //             type="text"
// //             value={user.status}
// //             onChange={(e) => setUser({ ...user, status: e.target.value })}
// //             className="border border-gray-300 px-3 py-2 rounded-md w-full"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md"
// //         >
// //           Update
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // UserUpdate.getInitialProps = ({ query }) => {
// //   return { id: query.userId };
// // };

// // export default UserUpdate;

// "use client";
// import React, { useState, useEffect } from "react";
// import UserCard from "@/components/UserList/UserCard";
// import { useRouter } from "next/navigation";
// const UserUpdate = () => {
//   const UserUpdate = ({ id }) => {
//     const router = useRouter();
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//       const fetchUser = async () => {
//         try {
//           const response = await fetch(`http://localhost:3004/users/${id}`);
//           const data = await response.json();
//           setUser(data);
//         } catch (error) {
//           console.error("Error fetching user:", error);
//         }
//       };

//       fetchUser();
//     }, [id]);

//     const handleUpdateUser = async (e) => {
//       e.preventDefault();

//       try {
//         const response = await fetch(`http://localhost:3004/users/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         });

//         if (response.ok) {
//           console.log("User updated successfully");
//           router.push("/userlist");
//         } else {
//           console.error("Error updating user");
//         }
//       } catch (error) {
//         console.error("Error updating user:", error);
//       }
//     };

//     if (!user) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="max-w-md mx-auto mt-8">
//         <h1 className="text-2xl font-bold mb-4">User Update</h1>
//         <form onSubmit={handleUpdateUser}>
//           <div className="mb-4">
//             <label className="block mb-2">Name:</label>
//             <input
//               type="text"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               className="border border-gray-300 px-3 py-2 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Email:</label>
//             <input
//               type="email"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               className="border border-gray-300 px-3 py-2 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Phone:</label>
//             <input
//               type="text"
//               value={user.phone}
//               onChange={(e) => setUser({ ...user, phone: e.target.value })}
//               className="border border-gray-300 px-3 py-2 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Role:</label>
//             <input
//               type="text"
//               value={user.role}
//               onChange={(e) => setUser({ ...user, role: e.target.value })}
//               className="border border-gray-300 px-3 py-2 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Status:</label>
//             <input
//               type="text"
//               value={user.status}
//               onChange={(e) => setUser({ ...user, status: e.target.value })}
//               className="border border-gray-300 px-3 py-2 rounded-md w-full"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     );
//   };

//   UserUpdate.getInitialProps = ({ query }) => {
//     return { id: query.userId };
//   };
// };
// export default UserUpdate;
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserUpdate = ({ id }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const handleToggle = () => {
    setStatus(!status);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3004/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  // const handleUpdateUser = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(`http://localhost:3004/users/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });

  //     if (response.ok) {
  //       console.log("User updated successfully");
  //       router.push("/userlist");
  //     } else {
  //       console.error("Error updating user");
  //     }
  //   } catch (error) {
  //     console.error("Error updating user:", error);
  //   }
  // };
  const handleUpdateUser = (userId) => {
    const updatedUser = {
      id: userId,
      name,
      email,
      password,
      phone,
      role,
      status,
    };

    fetch(`http://localhost:3004/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (response.ok) {
          console.log("User updated successfully");
          // Perform any additional actions or navigate to another page if needed
        } else {
          console.log("Error updating user");
        }
      })
      .catch((error) => {
        console.log("Server error", error);
      });
  };
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-row-reverse">
      <div className=" flex w-3/4  flex-col  justify-center items-center h-screen">
        <form
          className="p-6 bg-white shadow-2xl shadow-blue-700 rounded-md w-80"
          onSubmit={handleUpdateUser}
        >
          <h2 className="text-2xl font-semibold mb-6">Update User</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone:</label>
            <input
              type="string"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Role:</label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={status}
                onChange={handleToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {status ? "Active" : "Inactive"}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 m-5 rounded-md hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserUpdate;
