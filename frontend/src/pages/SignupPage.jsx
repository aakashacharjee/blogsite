import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const navigate = useNavigate();

    const signUp= async () => {
        try{
            if (password!==confirmPassword){
                setError('Password and confirm password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(),email,password);
            navigate('/articles');

        } catch(e){
            setError(e.message);
        }
    }


    return (
        <div>
        <h1>SignUp</h1>
        {error && <p className="error">{error}</p>}
        <input
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="password"
            placeholder="Reenter your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={signUp}>Signup</button>
        <Link to="/login">Already have an accourt? Login here</Link>
        </div>
    );
};
export default SignupPage;
