import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import Shop from './components/Shop/Shop';
import useFirebase from './hooks/useFirebase';
import Login from './components/Login/Login';
import PrivateOutlet from './components/PrivateRoute/PrivateOutlet';
import AuthProvider from './Context/AuthProvider';

function App() {
  const { user } = useFirebase();
  console.log(user.providerId);
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Shop />} />;
            <Route path='/home' element={<Shop />} />;
            <Route path='/login' element={<Login />} />;
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path='review' element={<ReviewOrder />} />;
              <Route path='order-success' element={<OrderSuccess />} />;
              <Route path='manage' element={<Inventory />} />;
            </Route>;
            {/* <Route path='/review'
            element={
              <PrivateOutlet>
                <ReviewOrder />
              </PrivateOutlet>
            } />
          <Route path='/order-success'
            element={
              <PrivateOutlet>
                <OrderSuccess />
              </PrivateOutlet>
            } />
            <Route path='/manage'
            element={
              <PrivateOutlet>
                <Inventory/>
              </PrivateOutlet>
            } /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
