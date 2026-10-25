import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
  <div>
    {/* Promotional Banner Grid */}
    <div className="banner-grid-container">
      <div className="banner-card-amber">
        <div>
          <span className="bg-black/10 text-xs px-2 py-1 rounded font-semibold">BIG SALE</span>
          <h2 className="text-2xl font-bold mt-2">Smart Appliances</h2>
          <p className="text-sm opacity-90 mt-1">Up to 40% off on energy-saving double door fridges.</p>
        </div>
        <button className="banner-btn">Explore Now</button>
      </div>

      <div className="banner-card-emerald">
        <div>
          <span className="bg-white/20 text-xs px-2 py-1 rounded font-semibold">NEW LAUNCH</span>
          <h2 className="text-2xl font-bold mt-2">5G Smartphones</h2>
          <p className="text-sm opacity-90 mt-1">High performance with 50MP dual camera systems.</p>
        </div>
        <button className="banner-btn">Buy Now</button>
      </div>

      <div className="banner-card-indigo">
        <div>
          <span className="bg-white/20 text-xs px-2 py-1 rounded font-semibold">TRENDING</span>
          <h2 className="text-2xl font-bold mt-2">Fashion Styles</h2>
          <p className="text-sm opacity-90 mt-1">Fresh arrivals for your wardrobe this season.</p>
        </div>
        <button className="banner-btn">Discover</button>
      </div>
    </div>

    {/* Featured Products Section */}
    <div className="products-section">
      <h2 className="products-section-title">Featured Products</h2>
      <div className="products-grid">
        {[
          { name: 'Wireless Headphones', price: '$79.99', rating: '★ 4.5', icon: '🎧' },
          { name: 'Smart Fitness Watch', price: '$129.99', rating: '★ 4.7', icon: '⌚' },
          { name: 'Ergonomic Office Chair', price: '$249.99', rating: '★ 4.6', icon: '🪑' },
          { name: 'Portable Bluetooth Speaker', price: '$49.99', rating: '★ 4.4', icon: '🔊' }
        ].map((product, idx) => (
          <div key={idx} className="product-card">
            <div>
              <div className="product-image-box">{product.icon}</div>
              <h3 className="product-title">{product.name}</h3>
              <div className="product-price-row">
                <span className="product-price">{product.price}</span>
                <span className="product-rating">{product.rating}</span>
              </div>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>

    {/* Trust Badges Section */}
<div className="trust-section">
  <div className="trust-grid">
    <div className="trust-item">
      <span className="trust-icon">🤝</span>
      <div>
        <h4 className="trust-title">Multi-Vendor Variety</h4>
        <p className="trust-desc">Explore thousands of unique products curated from verified independent sellers.</p>
      </div>
    </div>
    <div className="trust-item">
      <span className="trust-icon">⚡</span>
      <div>
        <h4 className="trust-title">Fast & Reliable Delivery</h4>
        <p className="trust-desc">Optimized fulfillment pipelines to get your orders delivered right on time.</p>
      </div>
    </div>
    <div className="trust-item">
      <span className="trust-icon">🔒</span>
      <div>
        <h4 className="trust-title">Secure Checkout</h4>
        <p className="trust-desc">Protected transactions with advanced encryption and secure token authentication.</p>
      </div>
    </div>
  </div>
</div>
  </div>

  
} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import ProfilePage from './pages/ProfilePage';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* <Route index element={
//             <div className="custom-banner-box mt-10">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to EmptyCart</h1>
//               <p className="text-gray-600">Your warm, modern e-commerce destination.</p>
//             </div>
//           } /> */
//            <Route index element={
//   <div className="space-y-8 py-4">
//     {/* Hero Banner */}
//     <div className="custom-banner-box">
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Welcome to EmptyCart 🛒</h1>
//       <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
//         Discover top-quality products from multiple vendors with our warm, modern e-commerce destination.
//       </p>
//       <button className="bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-amber-500 transition cursor-pointer">
//         Shop Now
//       </button>
//     </div>

//     {/* Dummy Categories */}
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop by Category</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {['Electronics', 'Fashion', 'Home & Living', 'Books'].map((cat, i) => (
//           <div key={i} className="bg-white p-6 rounded-xl border border-amber-100 shadow-xs text-center hover:shadow-md transition cursor-pointer">
//             <span className="text-3xl mb-2 block">📦</span>
//             <span className="font-semibold text-gray-800">{cat}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// } />
//           }
//           <Route path="login" element={<LoginPage />} />
//           <Route path="register" element={<RegisterPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }