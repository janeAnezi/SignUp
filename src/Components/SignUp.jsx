import { validateForm} from './src/Components/Login.jsx';
export default function SignUp({ onSwitchToLogin }) {
   
    return (
        <>
            <div className="flex justify-center items-center mt-40 ">
                <form action="#" className=" bg-white inline-block w-80 p-5 text-center rounded-lg">
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