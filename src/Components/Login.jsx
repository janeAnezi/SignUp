export default function Login() {
    return (
        <>
            <div className="flex justify-center items-center mt-40 ">
                <form action="#" className=" bg-white inline-block w-80 p-5 text-center rounded-lg">
                    <h1 className="text-2xl font-bold tracking-wider">Login</h1>
                    <div className="flex border justify-between mt-4 rounded-xl">
                        <p className="bg-slate-900 text-white p-2 rounded-xl">LogIn</p>
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