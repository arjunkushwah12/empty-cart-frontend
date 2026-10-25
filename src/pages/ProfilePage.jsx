import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../api/userApi';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getUserProfile()
      .then(res => {
        const userData = res.data.data || res.data;
        setProfile(userData);
      })
      .catch(err => setError('Failed to load profile: ' + (err.response?.data?.message || err.message)));
  }, []);

  return (
    <div className="app-card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Profile</h2>
      
      {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
      
      {profile ? (
        <div className="space-y-4">
          <div className="border-b border-amber-100 pb-3">
            <span className="block text-sm text-gray-500">Name</span>
            <span className="text-lg font-medium text-gray-800">{profile.name || 'N/A'}</span>
          </div>
          <div className="border-b border-amber-100 pb-3">
            <span className="block text-sm text-gray-500">Email</span>
            <span className="text-lg font-medium text-gray-800">{profile.email || 'N/A'}</span>
          </div>
          <div className="pb-3">
            <span className="block text-sm text-gray-500">Role</span>
            <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mt-1">
              {profile.role || 'CUSTOMER'}
            </span>
          </div>
        </div>
      ) : !error && (
        <p className="text-center text-gray-500 py-4">Loading profile...</p>
      )}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { getUserProfile } from '../api/userApi';

// export default function ProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     getUserProfile()
//       .then(res => {
//         // Since your response is nested inside res.data.data (or directly res.data)
//         const userData = res.data.data || res.data;
//         setProfile(userData);
//       })
//       .catch(err => setError('Failed to load profile: ' + (err.response?.data?.message || err.message)));
//   }, []);

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
      
//       {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
      
//       {profile ? (
//         <div className="space-y-4">
//           <div className="border-b pb-3">
//             <span className="block text-sm text-gray-500">Name</span>
//             <span className="text-lg font-medium text-gray-800">{profile.name || 'N/A'}</span>
//           </div>
//           <div className="border-b pb-3">
//             <span className="block text-sm text-gray-500">Email</span>
//             <span className="text-lg font-medium text-gray-800">{profile.email || 'N/A'}</span>
//           </div>
//           <div className="pb-3">
//             <span className="block text-sm text-gray-500">Role</span>
//             <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mt-1">
//               {profile.role || 'CUSTOMER'}
//             </span>
//           </div>
//         </div>
//       ) : !error && (
//         <p className="text-center text-gray-500">Loading profile...</p>
//       )}
//     </div>
//   );
// }

// // import React, { useEffect, useState } from 'react';
// // import { getUserProfile } from '../api/userApi';
// // import { useAuth } from '../context/AuthContext';

// // export default function ProfilePage() {
// //   const [profile, setProfile] = useState(null);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     getUserProfile()
// //       .then(res => {
// //         console.log("Profile API Response:", res.data); // Look at browser F12 console to see exact keys!
// //         setProfile(res.data);
// //       })
// //       .catch(err => setError('Failed to load profile: ' + (err.response?.data?.message || err.message)));
// //   }, []);

// //   return (
// //     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
      
// //       {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
      
// //       {profile ? (
// //         <div className="space-y-4">
// //           <div className="border-b pb-3">
// //             <span className="block text-sm text-gray-500">Name / Username</span>
// //             <span className="text-lg font-medium text-gray-800">{profile.name || profile.username || 'N/A'}</span>
// //           </div>
// //           <div className="border-b pb-3">
// //             <span className="block text-sm text-gray-500">Email</span>
// //             <span className="text-lg font-medium text-gray-800">{profile.email || 'N/A'}</span>
// //           </div>
// //           <div className="pb-3">
// //             <span className="block text-sm text-gray-500">Role</span>
// //             <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mt-1">
// //               {profile.role || 'CUSTOMER'}
// //             </span>
// //           </div>
// //         </div>
// //       ) : !error && (
// //         <p className="text-center text-gray-500">Loading profile...</p>
// //       )}
// //     </div>
// //   );
// // }

// // // import React, { useEffect, useState } from 'react';
// // // import { getUserProfile } from '../api/userApi';
// // // import { useAuth } from '../context/AuthContext';

// // // export default function ProfilePage() {
// // //   const [profile, setProfile] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const { logout } = useAuth();

// // //   useEffect(() => {
// // //     getUserProfile()
// // //       .then(res => setProfile(res.data))
// // //       .catch(err => setError('Failed to load profile: ' + (err.response?.data?.message || err.message)));
// // //   }, []);

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
// // //       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
      
// // //       {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
      
// // //       {profile ? (
// // //         <div className="space-y-4">
// // //           <div className="border-b pb-3">
// // //             <span className="block text-sm text-gray-500">Username</span>
// // //             <span className="text-lg font-medium text-gray-800">{profile.username}</span>
// // //           </div>
// // //           <div className="border-b pb-3">
// // //             <span className="block text-sm text-gray-500">Email</span>
// // //             <span className="text-lg font-medium text-gray-800">{profile.email}</span>
// // //           </div>
// // //           <div className="pb-3">
// // //             <span className="block text-sm text-gray-500">Role</span>
// // //             <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mt-1">
// // //               {profile.role}
// // //             </span>
// // //           </div>
// // //         </div>
// // //       ) : !error && (
// // //         <p className="text-center text-gray-500">Loading profile...</p>
// // //       )}
// // //     </div>
// // //   );
// // // }