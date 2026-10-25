import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('accessToken');

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Header using Custom CSS */}
      <header className="custom-navbar-wrapper">
        <nav className="custom-navbar-container">
          <Link to="/" className="custom-brand-logo">
            🛒 <span className="custom-brand-highlight">EmptyCart</span>
          </Link>
          
          <div className="custom-nav-actions">
            <Link to="/" className="nav-link">Home</Link>
            
            {token ? (
              <>
                <Link to="/profile" className="nav-link">Profile</Link>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="custom-nav-btn-accent">
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-100 py-6 text-center text-sm text-gray-500">
        &copy; 2026 EmptyCart. All rights reserved.
      </footer>
    </div>
  );
}

// import React from 'react';
// import { Outlet, Link, useNavigate } from 'react-router-dom';

// export default function Layout() {
//   const navigate = useNavigate();
//   // Read token directly from storage to safely avoid AuthContext null crashes
//   const token = sessionStorage.getItem('accessToken');

//   const handleLogout = () => {
//     sessionStorage.removeItem('accessToken');
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar Header */}
//       <header className="bg-white border-b border-amber-100 shadow-xs">
//         <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
//             🛒 <span className="text-amber-600">EmptyCart</span>
//           </Link>
          
//           <div className="flex items-center space-x-2">
//             <Link to="/" className="nav-link">Home</Link>
            
//             {token ? (
//               <>
//                 <Link to="/profile" className="nav-link">Profile</Link>
//                 <button 
//                   onClick={handleLogout}
//                   className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="nav-link">Login</Link>
//                 <Link to="/register" className="bg-amber-500 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition">
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* Main Content Area */}
//       <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-amber-100 py-6 text-center text-sm text-gray-500">
//         &copy; 2026 EmptyCart. All rights reserved.
//       </footer>
//     </div>
//   );
// }