import React, { useState } from 'react';
import { registerUser } from '../api/authApi';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMessage('Error: ' + (err.response?.data?.message || JSON.stringify(err.response?.data?.errors || err.message)));
    }
  };

  return (
    <div className="app-card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create an Account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-input"
            placeholder="Enter your name" 
            value={form.name} 
            onChange={e => setForm({...form, name: e.target.value})} 
            required
          />
        </div>
        
        <div>
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-input"
            placeholder="Enter your email" 
            value={form.email} 
            onChange={e => setForm({...form, email: e.target.value})} 
            required
          />
        </div>
        
        <div>
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-input"
            placeholder="Create a password" 
            value={form.password} 
            onChange={e => setForm({...form, password: e.target.value})} 
            required
          />
        </div>
        
        <button type="submit" className="btn-primary mt-2">
          Register
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center text-sm font-medium ${message.includes('Error') ? 'text-red-500' : 'text-amber-600'}`}>
          {message}
        </p>
      )}

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account? <Link to="/login" className="text-amber-600 font-semibold hover:underline">Login</Link>
      </p>
    </div>
  );
}

// import React, { useState } from 'react';
// import { registerUser } from '../api/authApi';
// import { Link, useNavigate } from 'react-router-dom';

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(form);
//       setMessage('Registration successful! Redirecting to login...');
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (err) {
//       setMessage('Error: ' + (err.response?.data?.message || JSON.stringify(err.response?.data?.errors || err.message)));
//     }
//   };

//   // Uniform style for all form inputs and links to keep everything simple
//   const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none";
//   const linkClass = "text-gray-700 font-medium px-3 py-2";

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//           <input 
//             type="text" 
//             className={inputClass}
//             placeholder="Enter your name" 
//             value={form.name} 
//             onChange={e => setForm({...form, name: e.target.value})} 
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//           <input 
//             type="email" 
//             className={inputClass}
//             placeholder="Enter your email" 
//             value={form.email} 
//             onChange={e => setForm({...form, email: e.target.value})} 
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//           <input 
//             type="password" 
//             className={inputClass}
//             placeholder="Create a password" 
//             value={form.password} 
//             onChange={e => setForm({...form, password: e.target.value})} 
//           />
//         </div>
//         <button 
//           type="submit" 
//           className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium shadow"
//         >
//           Register
//         </button>
//       </form>
//       {message && <p className="mt-4 text-center text-sm font-medium text-gray-600">{message}</p>}
//       <p className="mt-4 text-center text-sm text-gray-600">
//         Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
//       </p>
//     </div>
//   );
// }

// // import React, { useState } from 'react';
// // import { registerUser } from '../api/authApi';

// // export default function RegisterPage() {
// //   const [form, setForm] = useState({ name: '', email: '', password: '' });
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await registerUser(form);
// //       setMessage('Registration successful! User ID: ' + res.data.id);
// //     } catch (err) {
// //       setMessage('Error: ' + (err.response?.data?.message || err.message));
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2>Register</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
// //         <input className="form-control mb-2" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
// //         <input className="form-control mb-2" type="password" placeholder="Password (min 8)" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
// //         <button className="btn btn-primary" type="submit">Register</button>
// //       </form>
// //       {message && <p className="mt-3">{message}</p>}
// //     </div>
// //   );
// // }