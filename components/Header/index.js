import React, { useEffect } from 'react';
import './styles.css';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, loading]);

  function logoutFnc() {
    try {
        signOut(auth)
            .then(() => {
                // Sign-out successful
                toast.success("Logged out successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error);
                // An error happened
            });
    } catch (e) {
        toast.error(e.message);
    }
  }



  return (
    <div className="navbar">
      <p className="logo">Uni-Wallet.</p>
      {user && (
        <p className="logo link" onClick={logoutFnc}>
          Logout
        </p>
      )}
    </div>
  );
}

export default Header;
