import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../User/reducers/Auth";
import Nav from "../Navbar/Nav";
import  Footer  from "../Footer/Footer"
const Register=()=>{
    const [data,setData]=useState({firstName:""});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const registerData=useSelector((state)=>state.register.user);
    const [message1,setMessage1]=useState();
    const [message2,setMessage2]=useState();
    const [message3,setMessage3]=useState();
    const [message4,setMessage4]=useState();
    const [valid,setValid]=useState(true);
    const [valid1,setValid1]=useState(true);
   
    const regEx1=/^[a-zA-Z.']{1,}$/;
    const handleChange1=(e)=>{
      setData({ ...data, [e.target.name]: e.target.value });
        if(regEx1.test(e.target.value))
        {
          setMessage1("")
          setValid1(true);
         
        }
        
        else if(!regEx1.test(e.target.value))
        {
          setMessage1("First name contains alphabets")
          setValid1(false);
        }
        else{
          setMessage1("");
        }
    }
    const handleChange2=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx1.test(e.target.value))
        {
          setMessage2("")
          setValid1(true);
          
        }
        
        else if(!regEx1.test(e.target.value))
        {
          setMessage2("Last name contains alphabets")
          setValid1(false);
        }
        else{
          setMessage2("");
        }
    }
    const handleChange3=(e)=>{
        const rgExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/
        setData({ ...data, [e.target.name]: e.target.value });
        if(rgExp.test(e.target.value))
        {
          setMessage3("")
          setValid1(true);
          
        }
        else if(!rgExp.test(e.target.value))
        {
          setMessage3("Email must be like test@example.com");
          setValid1(false);
        }
        else{
          setMessage3("");
        }
    }
    const regEx2=/^[9876]\d{9}$/
    const handleChange4=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx2.test(e.target.value))
        {
          setMessage4("")
          setValid1(true);
         
        }
        
        else if(!regEx2.test(e.target.value))
        {
          setMessage4("Provide a valid Phone Number")
          setValid1(false);
        }
        
        else{
          setMessage4("");
        }
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        setValid(
            
            /[a-z]/.test(e.target.value) && 
            /[A-Z]/.test(e.target.value) && 
            /[0-9]/.test(e.target.value)  &&
            e.target.value.length >= 8  
          );
          if(/[a-z]/.test(e.target.value) && 
          /[A-Z]/.test(e.target.value) && 
          /[0-9]/.test(e.target.value)  &&
          e.target.value.length >= 8){
            setValid1(true);
          }
          else setValid1(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(registerUser(data));
        if(registerData.message==="User Registered Successfully"||registerData.message==="User Already Present"){
        setTimeout(()=>{
          navigate("/login");
        },1000)
      }
    }
return(
<div className="bg-gradient-to-br from-zinc-200 to-zinc-100 w-full py-1">
      <Nav/>
           
            <div className="flex justify-center mx-auto w-96 bg-white md:mt-24 shadow-2xl rounded-md mb-24 mt-44">
            
                <form className="w-80 max-w-sm mt-4" method="POST" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-sans font-bold flex justify-center mb-6">Create Your Account</h2>
                <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg></div>
  <div class="flex items-center ">
            <input name="firstName" maxLength="20" className="appearance-none bg-transparent border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text"  placeholder="First Name" onChange={handleChange1}/>
                </div>
                <div><p className="text-red-500 text-xs italic">{message1}</p></div>
                <div className="flex items-center mt-2">
            <input name="lastName" maxLength="20" className="appearance-none bg-transparent border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500 " required type="text" placeholder="Last Name"  onChange={handleChange2}/>
                </div>
                <div><p className="text-red-500 text-xs italic">{message2}</p></div>
                <div class="flex items-center mt-2">
            <input name="email" className="appearance-none bg-transparent  border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="email" placeholder="Email"  onChange={handleChange3}/>
                </div>
                <div><p className="text-red-500 text-xs italic">{message3}</p></div>
                <div className="flex items-center mt-2">
            <input type="text" maxLength="10" name="phoneNumber" className="appearance-none bg-transparent border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required="required"  placeholder="Contact Number"  onChange={handleChange4}/>
                </div>
                <div><p className="text-red-500 text-xs italic">{message4}</p></div>
                <div className="flex items-center mt-2">
            <input name="password" maxLength="24" className="appearance-none bg-transparent border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500 " required type="password" placeholder="Password"  onChange={handleChange}/>
                </div>
                {valid ? <div className="mt-2">
                    <p className="text-xs text-green-500 italic"> 
         
        </p>
                </div>:<div className="mt-2">
                    <p className="text-xs text-red-500 italic"> 
          Password should be at least 8 characters long and contain lowercase
          letters, uppercase letters, and numbers.
        </p>
                </div>
                }
                {registerData.success ? <div className="flex justify-center mt-2">
                    <p className="text-green-500 font-serif ">{registerData.message}</p>
                    </div> : <div className="flex justify-center mt-2">
                    <p className="text-red-500 font-serif ">{registerData.message}</p>
                    </div>}
                
                <div className="flex justify-center mt-8 mb-4">
                <button class={`flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded  ${!valid1 ? 'opacity-50 cursor-not-allowed hover:none' : ''}`} type="submit" disabled={!valid1}>
                    Sign Up
                </button>
                </div>
            </form>
                
            </div>
         <Footer/>
</div>
);
}
export default Register;