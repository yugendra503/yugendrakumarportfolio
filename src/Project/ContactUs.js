// import React, { useState } from "react";
// import axios from "axios";

// const ContactUs = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const addServiceData = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     // Simple email validation
//     const emailPattern = /\S+@\S+\.\S+/;
//     if (!emailPattern.test(email)) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);
//     setStatus("");

//     try {
//       // 🔹 Update API endpoint as per your backend
//       await axios.post("http://localhost:4000/contactus", {
//         name,
//         email,
//         message,
//       });

//       setStatus("✅ Mail Sent Successfully!");
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Error: Unable to send email");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main>
//       {/* Header Section */}
//       <section>
//         <div className="container">
//           <h1 className="my-4 text-center">Contact Us</h1>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-5">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-7">
//               <form onSubmit={addServiceData}>
//                 <div className="row">
//                   <div className="col-md-6 mb-4">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6 mb-4">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <textarea
//                     className="form-control"
//                     placeholder="Message"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     rows="3"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="mb-3">
//                   <button
//                     type="submit"
//                     className="btn btn-success d-flex align-items-center justify-content-center gap-2"
//                     disabled={loading}
//                   >
//                     {loading && (
//                       <div
//                         className="spinner-border spinner-border-sm text-light"
//                         role="status"
//                       >
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                     )}
//                     {loading ? "Sending..." : "Send Message"}
//                   </button>
//                 </div>

//                 {/* Show Status Message */}
//                 {status && (
//                   <p
//                     className={`mt-3 fw-bold ${
//                       status.includes("✅") ? "text-success" : "text-danger"
//                     }`}
//                   >
//                     {status}
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactUs;
