import React, { useState } from 'react';
import { loginUser } from '../api/authApi';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(form);
      // Assuming your login returns a token (adjust based on your backend response structure)
      const token = response.data.token || response.data.accessToken || response.data;
      if (token) {
        sessionStorage.setItem('accessToken', token);
      }
      setMessage('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/profile');
      }, 1000);
    } catch (err) {
      setMessage('Error: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="app-card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="Enter your password" 
            value={form.password} 
            onChange={e => setForm({...form, password: e.target.value})} 
            required
          />
        </div>
        
        <button type="submit" className="btn-primary mt-2">
          Login
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center text-sm font-medium ${message.includes('Error') ? 'text-red-500' : 'text-amber-600'}`}>
          {message}
        </p>
      )}

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account? <Link to="/register" className="text-amber-600 font-semibold hover:underline">Register</Link>
      </p>
    </div>
  );
}

// import React, { useState } from 'react';
// import { loginUser } from '../api/authApi';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';

// export default function LoginPage() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await loginUser(form);
//       const token = res.data.accessToken || res.data;
//       login(token, { email: form.email });
//       setMessage('Login successful!');
//       setTimeout(() => navigate('/'), 1000);
//     } catch (err) {
//       setMessage('Error: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Empty Cart</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//           <input 
//             type="email" 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
//             placeholder="Enter your email" 
//             value={form.email} 
//             onChange={e => setForm({...form, email: e.target.value})} 
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//           <input 
//             type="password" 
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
//             placeholder="Enter your password" 
//             value={form.password} 
//             onChange={e => setForm({...form, password: e.target.value})} 
//           />
//         </div>
//         <button 
//           type="submit" 
//           className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
//         >
//           Login
//         </button>
//       </form>
//       {message && <p className="mt-4 text-center text-sm font-medium text-gray-600">{message}</p>}
//       <p className="mt-4 text-center text-sm text-gray-600">
//         Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
//       </p>
//     </div>
//   );
// }
