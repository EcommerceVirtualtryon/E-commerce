/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AvatarTryOn from './pages/AvatarTryOn';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tryon" element={<AvatarTryOn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AvatarTryOn from './pages/AvatarTryOn';

// Layout wrapper to conditionally hide Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideOnPaths = ['/login', '/register','/cart','/products','/tryon'];

  const shouldHide = hideOnPaths.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <main>{children}</main>
      {!shouldHide && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tryon" element={<AvatarTryOn />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;*/
  import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AvatarTryOn from './pages/AvatarTryOn';
import BusinessDashboard from './pages/Dashboard/BusinessDashboard';
import CustomerDashboard from './pages/Dashboard/CustomerDashboard';
import CustomerLogin from './pages/Login/CustomerLogin';
import B2BLogin from './pages/Login/B2BLogin';
import UnifiedRegister from './pages/Register/UnifiedRegister';
import ForgotPassword from './pages/Login/ForgotPassword';
import ResetPassword from './pages/Login/ResetPassword';
 
import MyOrders from './pages/Dashboard/MyOrders';
import Account from './pages/Dashboard/Account';
import CustomerLayout from './pages/Dashboard/CustomerLayout';


const Layout = () => {
  const location = useLocation();
  const hideOnPaths = [
    '/login/customer',
    '/login/b2b',
    '/register',
    '/forgot-password',
    '/cart',
    '/products',
    '/tryon',
    '/reset-password'
  ];

  const shouldHide = hideOnPaths.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHide && <Footer />}
    </>
  );
};

/*function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all in Layout */
        /*<Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login/customer" element={<CustomerLogin />} />
          <Route path="login/b2b" element={<B2BLogin />} />
          <Route path="register" element={<UnifiedRegister />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="tryon" element={<AvatarTryOn />} />
          <Route path="dashboard/business" element={<BusinessDashboard />} />
          <Route path="dashboard/customer" element={<CustomerDashboard />} />
          <Route path="dashboard/orders" element={<MyOrders />} />
        <Route path="dashboard/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login/customer" element={<CustomerLogin />} />
          <Route path="login/b2b" element={<B2BLogin />} />
          <Route path="register" element={<UnifiedRegister />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="tryon" element={<AvatarTryOn />} />
          <Route path="dashboard/business" element={<BusinessDashboard />} />

          {/* ✅ Nest customer dashboard routes */}
          <Route path="dashboard/customer" element={<CustomerDashboard />}>
            <Route path="orders" element={<MyOrders />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
