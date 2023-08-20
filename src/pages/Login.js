// import { useState } from "react";
// import { auth } from "../config/firebase";
// import { Link,useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";

// export default function Login(){
//     const [email,setemail]=useState();
//     const [pass,setpass]=useState();
//     const history=useNavigate();
//     const singup=async(e)=>{
//         e.preventDefault();
//         await signInWithEmailAndPassword(auth,email,pass);
       
//     };
//     return(<form style={{textAlign:"center",marginTop:200} }>
//     <h1>login</h1>
//     <input  type="mail" onChange={(e)=>{setemail(e.target.value)}}/><br/><br/>
//     <input type="password" onChange={(e)=>{setpass(e.target.value)}}/>
//     <br/><br/>
//     <button onClick={singup} type="submit">login</button>
//     <br/>
    
//     <p>create new account?
//         <Link to="/signup">sigup</Link>
//     </p>
//     </form>)
// }
import "../pagecss/Login.css"
import { useState } from "react";
import { Auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate  } from "react-router-dom";
function Login(){
    const [Email,setEmail]=useState();
    const [Pass,setPass]=useState();
   async function Authentication(e){
        e.preventDefault();
        if(Pass==" " || Pass==null || Pass.length<6 ||Email==null){
            alert("Enter detail correctly");
            return ;
        }
        try{
            await signInWithEmailAndPassword(Auth,Email,Pass);
            
        }
        catch{
            alert("Mail id Not found");
        }
    }
    return(
        <>
        <div className="login">
        <form >
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
        <br></br>
        <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"/>
        <br/>
        <button onClick={Authentication} >Login</button>
        </form>
        <p className="para">Don't have an account? <Link to={'/Signup'}>Sign up</Link></p>
        </div>
        </>
    )
}
export default Login;