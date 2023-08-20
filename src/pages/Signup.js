// import { useState } from "react"
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";
// import {Link} from "react-router-dom"

import { useState } from "react";
import {createUserWithEmailAndPassword} from'firebase/auth'
import { Auth } from "../config/firebase";
import { Link } from "react-router-dom";
import '../pagecss/Signup.css'

// export default function Signup(){
//     const [email,setemail]=useState();
//     const [pass,setpass]=useState();
//     const [err,seterr]=useState();

//     const singup=async(e)=>{
//         e.preventDefault();
//     await createUserWithEmailAndPassword(auth,email,pass);
        
       
//     };

//     return(<>
//     <form style={{textAlign:"center",marginTop:200}}>
//     <h1>signup</h1>
//     <input  type="mail" onChange={(e)=>{setemail(e.target.value)}}/><br/><br/>
//     <input type="password" onChange={(e)=>{setpass(e.target.value)}}/>
//     <br/><br/>
//     <input onClick={singup} type="submit" value="login"/>
//     <br/>
//     <p>{err}</p>
//     <p>create new account?
//         <Link to="/">login</Link>
//     </p>
//     </form>
//     </>)
// }
function Signup(){
    const [Email,setEmail]=useState();
    const [Pass,setPass]=useState();
    const [err,seterr]=useState();
  async function Authentication(e){
        console.log("HIII");
        e.preventDefault();
        if(Pass==" " || Pass==null || Pass.length<6 ||Email==null){
            alert("Enter detail correctly");
            return ;
        }
        try{
            await createUserWithEmailAndPassword(Auth,Email,Pass);
        }
        catch{
            alert("Email already exits");
        }
    }
    return(
        <>
        <div className="signup">
        <form>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
        <br></br>
        <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"/>
        <br/>
        <button onClick={Authentication} >Sigup</button>
        <p>{err}</p>
        </form>
        <p className="para">Do you have an account? <Link to={'/'}>Log in</Link></p>
        </div>
        </>
        )
}
export default Signup;