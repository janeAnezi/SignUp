export default function Login() {
    return (
        <>
            <div>
                <form action="#">
                    <h1>Login</h1>
                    <div>
                        <p>LogIn</p>
                        <p>SignUp</p>
                    </div>
                    <input type="text" placeholder="Email Address"/><br/><br/>
                    <input type="password" placeholder="Password"/><br/>
                    <sub>Forgot Password?</sub><br/><br/>
                    <button type="submit">LogIn</button>

                    <p>Not a member? <a href="signup.html">SignUp now</a></p>
                </form>
              
            </div>
        </>
    )
    
}