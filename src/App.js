import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedLogin from './components/ProtectedLogin';
import './assets/tailwind/index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }>
          <Route index={true} element={<HomePage />} />
        </Route>
        <Route path='/login' element={
          <ProtectedLogin>
            <LoginPage />
          </ProtectedLogin>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
