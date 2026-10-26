import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('accessToken');

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    navigate('/login');
  };

  const categories = [
    { name: 'Top Offers', icon: '🏷️' },
    { name: 'Mobiles', icon: '📱' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Beauty', icon: '💄' },
    { name: 'Home & Kitchen', icon: '🏠' },
    { name: 'Appliances', icon: '🔌' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Grocery', icon: '🛒' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Container */}
      <header className="header-wrapper">
        <div className="header-container">
          
          {/* Logo */}
          <Link to="/" className="custom-brand-logo">
            🛒 <span className="custom-brand-highlight">EmptyCart</span>
          </Link>

          {/* Search Bar */}
          <div className="header-search-box">
            <span className="header-search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
            <input 
              type="text" 
              placeholder="Search for Products, Brands and More" 
              className="header-search-input"
            />
          </div>

          {/* Navigation Actions */}
          <div className="custom-nav-actions">
            {/* Become a Seller (Header Placement) */}
            <Link to="/register?role=seller" className="seller-nav-link">
              <span></span> Become a Seller
            </Link>
            {token ? (
              <>
                <Link to="/profile" className="nav-link">Profile</Link>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 font-medium px-4 py-1.5 rounded-lg hover:bg-gray-200 transition text-sm cursor-pointer"
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
            <div className="nav-link flex items-center gap-1 cursor-pointer">
              🛒 Cart
            </div>
          </div>
        </div>

       
       {/* Category Sub-Bar */}
<div className="category-bar-wrapper">
  <div className="category-bar-container">
    {categories.map((cat, idx) => (
      <div key={idx} className="category-item">
        <span className="category-item-icon">{cat.icon}</span>
        <span className="category-item-label">{cat.name}</span>
      </div>
    ))}
  </div>
</div>
      </header>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      {/* Professional Marketplace Footer */}
<footer className="footer-wrapper">
  <div className="footer-container">
    <div className="footer-grid">
      <div>
        <h5 className="footer-column-title">About EmptyCart</h5>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Company Info</a></li>
          <li><a href="#" className="footer-link">Careers</a></li>
          <li><a href="#" className="footer-link">Press Releases</a></li>
        </ul>
      </div>

      <div>
        <h5 className="footer-column-title">Help & Support</h5>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Track Orders</a></li>
          <li><a href="#" className="footer-link">Shipping Rates</a></li>
          <li><a href="#" className="footer-link">Returns & Replacements</a></li>
        </ul>
      </div>

      <div>
        <h5 className="footer-column-title">Become a Partner</h5>
        <ul className="footer-links">
          <li>
                  <Link to="/register?role=seller" className="footer-link footer-seller-highlight">
                    Sell on EmptyCart (Become a Seller)
                  </Link>
                </li>
          {/* <li><a href="#" className="footer-link">Sell on EmptyCart</a></li> */}
          <li><a href="#" className="footer-link">Supply to Us</a></li>
          <li><a href="#" className="footer-link">Affiliate Program</a></li>
        </ul>
      </div>

      <div>
        <h5 className="footer-column-title">Consumer Policy</h5>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Terms of Use</a></li>
          <li><a href="#" className="footer-link">Security & Privacy</a></li>
          <li><a href="#" className="footer-link">EPR Compliance</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      &copy; 2026 EmptyCart, Inc. All rights reserved.
    </div>
  </div>
</footer>
      {/* <footer className="bg-white border-t border-amber-100 py-6 text-center text-sm text-gray-500">
        &copy; 2026 EmptyCart. All rights reserved.
      </footer> */}
    </div>
  );
}


// import React from 'react';
// import { Outlet, Link, useNavigate } from 'react-router-dom';

// export default function Layout() {
//   const navigate = useNavigate();
//   const token = sessionStorage.getItem('accessToken');

//   const handleLogout = () => {
//     sessionStorage.removeItem('accessToken');
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar Header using Custom CSS */}
//       <header className="custom-navbar-wrapper">
//         <nav className="custom-navbar-container">
//           <Link to="/" className="custom-brand-logo">
//             🛒 <span className="custom-brand-highlight">EmptyCart</span>
//           </Link>
          
//           <div className="custom-nav-actions">
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
//                 <Link to="/register" className="custom-nav-btn-accent">
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

// // import React from 'react';
// // import { Outlet, Link, useNavigate } from 'react-router-dom';

// // export default function Layout() {
// //   const navigate = useNavigate();
// //   // Read token directly from storage to safely avoid AuthContext null crashes
// //   const token = sessionStorage.getItem('accessToken');

// //   const handleLogout = () => {
// //     sessionStorage.removeItem('accessToken');
// //     navigate('/login');
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Navbar Header */}
// //       <header className="bg-white border-b border-amber-100 shadow-xs">
// //         <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// //           <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
// //             🛒 <span className="text-amber-600">EmptyCart</span>
// //           </Link>
          
// //           <div className="flex items-center space-x-2">
// //             <Link to="/" className="nav-link">Home</Link>
            
// //             {token ? (
// //               <>
// //                 <Link to="/profile" className="nav-link">Profile</Link>
// //                 <button 
// //                   onClick={handleLogout}
// //                   className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer"
// //                 >
// //                   Logout
// //                 </button>
// //               </>
// //             ) : (
// //               <>
// //                 <Link to="/login" className="nav-link">Login</Link>
// //                 <Link to="/register" className="bg-amber-500 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition">
// //                   Register
// //                 </Link>
// //               </>
// //             )}
// //           </div>
// //         </nav>
// //       </header>

// //       {/* Main Content Area */}
// //       <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8">
// //         <Outlet />
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-white border-t border-amber-100 py-6 text-center text-sm text-gray-500">
// //         &copy; 2026 EmptyCart. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }