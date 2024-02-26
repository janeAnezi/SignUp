
export default function SignUp({ onSwitchToLogin }) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({});

    // const validateForm = () => {
    //     const errors = {};
    //     if (!email) {
    //         errors.email = 'Email is required';
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         errors.email = 'Email address is not valid';
    //     }

    //     // check length
    //     if(password.length < 8) {
    //         errors.password = ('Password must be at least 8 characters long');
    //     }
    //     // check for uppercase letters
    //     if(!/[A-Z]/.test(password)) {
    //         errors.password = ('Password must contain at least one uppercase letter');
    //     }
    //     // check for lowercase letters
    //     if(!/[a-z]/.test(password)) {
    //         errors.push('Password must contain at least one lowercase letter');
    //     }
    //     // check for numbers
    //     if (!/\d/.test(password)) {
    //         errors.password = ('Password must contain at least one number');
    //     }
    //     // Check for special characters
    //     if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    //         errors.password = ('Password must contain at least one special character');
    //     }
  
    //     if(Object.keys(errors).length === 0) {
    //         // Clear errors
    //             setErrors({});
    //     }

    //     return errors;
    // };
   
    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value);
    //     // Clear email error when typing
    //     if (errors.email) {
    //         setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    //     }
    // };

    //  const handleChangePassword = (e) => {
    //     setPassword(e.target.value);
    //     // Clear email error when typing
    //     if (errors.password) {
    //         setErrors(prevErrors => ({ ...prevErrors, password: '' }));
    //     }
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const errors = validateForm();
    //     if(Object.keys(errors).length === 0) {
    //         // Clear email and password states
    //             setEmail('');
    //             setPassword('');

    //         // submit to server here 
    //         alert('Form submitted successfully');
    //     } else {
    //         setErrors(errors);
    //     }
    // }
    return (
        <>
            <div className="flex justify-center items-center mt-40 ">
                <form className=" bg-white inline-block w-80 p-5 text-center rounded-lg">
                    <h1 className="text-2xl font-bold tracking-wider">SignUp</h1>
                    <div className="flex my-4 rounded-xl">
                        <p onClick={onSwitchToLogin} className=" p-2 rounded-xl inline-block w-36 cursor-pointer">LogIn</p>
                        <p className="p-2 rounded-xl bg-gradient-to-r from-blue-300 to-blue-900 text-white inline-block w-36 cursor-pointer">SignUp</p>
                    </div>
                    <input className="border-dotted border-2 w-72 px-3 rounded-xl py-1" type="text" placeholder="Email Address"/><br/><br/>
                    <input className="border-dotted border-2 w-72 px-3 rounded-xl py-1" type="password" placeholder="Password"/><br/><br/>
                    <input className="border-dotted border-2 w-72 px-3 rounded-xl py-1" type="password" placeholder="confirm Password"/><br/><br/>
                   
                    <button className="bg-gradient-to-r from-blue-300 to-blue-900 text-white font-bold w-72 px-3 rounded-xl py-1 mb-4" type="submit">SignUp</button>

                    <p>Already a member? <a onClick={onSwitchToLogin} className="text-blue-700 font-semibold" href='#'>Login</a></p>
                </form>
              
            </div>
        </>
    )
    
}