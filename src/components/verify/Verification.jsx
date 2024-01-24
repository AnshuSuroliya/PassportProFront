import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { verifyPassport } from "../../User/reducers/Verify";
import { authenticateWithGoogle, handleCallback, listFiles } from "../../User/Gdrive";
import useDrivePicker from "react-google-drive-picker";
import { gapi } from 'gapi-script'
import { FileInput, Label } from 'flowbite-react';
import axios from "axios";
import Nav from "../Navbar/Nav";
import { useDropzone } from 'react-dropzone';
import Footer from "../Footer/Footer";
import { Country, State, City }  from 'country-state-city';
import { Controller, useForm } from 'react-hook-form';
import { getUser } from "../../User/reducers/Auth";

const Verification=()=>{
    const dispatch=useDispatch();
   
    const [file,setFile]=useState();
    const [message,setMessage]=useState();
    const [message1,setMessage1]=useState();
    const [message2,setMessage2]=useState();
    const [message3,setMessage3]=useState();
    const [message4,setMessage4]=useState();
    const [message5,setMessage5]=useState();
    const [message6,setMessage6]=useState();
    const [message7,setMessage7]=useState();
    const [message8,setMessage8]=useState();
    const [message9,setMessage9]=useState();
    const [valid,setValid]=useState(true);
    let stateData=State.getStatesOfCountry("IN");
    // const [state,setState]=useState();
    // const [city,setCity]=useState();
    const currentDate = new Date();
    const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
    const email=localStorage.getItem("email");
    const userData=useSelector((state)=>state.register.userData);
    const [fetchedImage, setFetchedImage] = useState(null);
  const [showGoogleDriveFields, setShowGoogleDriveFields] = useState(false);
  const [passportNumberDrive, setPassportNumberDrive] = useState('');
    const [isImageDropped, setIsImageDropped] = useState(false);
    useEffect(()=>{
      dispatch(getUser(email));
    },[])
 
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const imageFile = acceptedFiles[0];
      setData({ ...data, passportDoc: imageFile });
      setIsImageDropped(true);
    },
  });
 
  const removeImage = () => {
    setData({ ...data, passportDoc: null });
    setIsImageDropped(false);
  };
 const handleRemove1=()=>{
  setData({...data,passportDoc:null})
  setFetchedImage(null);
 }
 
  const dropzoneStyle = {
    border: isDragActive ? '1px dashed black' : '1px dashed black',
    borderRadius: '1px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '20px',
  };
  const [data,setData]=useState({});
    const navigate=useNavigate();
    const passportData=useSelector((state)=>state.verify.PassportData);
    const checkValidation=(e)=>{
        const rgExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/
        setData({ ...data, [e.target.name]: e.target.value });
        if(rgExp.test(data.email))
        {
          setMessage("")
          setValid(true);
        }
       
        else if(!rgExp.test(data.email))
        {
          setMessage("Email is not valid")
          setValid(false);
        }
        else{
          setMessage("");
        }
      }
      const regEx=/^[a-zA-Z]+$/
      const handleChange1=(e)=>{
        
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx.test(data.firstName))
        {
          setMessage1("")
          setValid(true);
        }
        
        else if(!regEx.test(data.firstName))
        {
          setMessage1("First Name is not valid")
          setValid(false);
        }
        else{
          setMessage1("");
        }
      }
      const handleChange9=(e)=>{
        
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx.test(data.lastName))
        {
          setMessage9("")
          setValid(true);
        }
        
        else if(!regEx.test(data.lastName))
        {
          setMessage9("Last Name is not valid")
          setValid(false);
        }
        else{
          setMessage9("");
        }
      }
      const regEx2=/^[0-9]+$/
      const handleChange2=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx3.test(e.target.value))
        {
          setMessage2("")
          setValid(true);
        }
       
        else if(!regEx3.test(e.target.value))
        {
          setMessage2("Address is not valid")
          setValid(false);
        }
        else{
          setMessage2("");
        }
      }
      const handleChange3=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx2.test(e.target.value ))
        {
          setMessage3("")
          setValid(true);
        }
        
        else if(!regEx2.test(e.target.value ))
        {
          setMessage3("Zipcode must contain numbers only")
          setValid(false);
        }
        else{
          setMessage3("");
        }
      }
      const regEx7=/^[]+[1-9]$/
      const handleChange4=(e)=>{

        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx7.test(e.target.value))
        {
          setMessage4("")
          setValid(true);
        }
        
        else if(!regEx7.test(e.target.value))
        {
          setMessage4("Age is not valid")
          setValid(false);
        }
        else{
          setMessage4("");
        }
      }

     
      const regEx3=/^[a-zA-Z0-9\s.,#-]+$/
      const handleChange7=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx3.test(e.target.value))
        {
          setMessage7("")
          setValid(true);
        }
        
        else if(!regEx3.test(e.target.value))
        {
          setMessage7("Address is not valid")
          setValid(false);
        }
        else{
          setMessage7("");
        }
      }
      const regEx4=/^[A-Z0-9]+$/
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(regEx4.test(e.target.value))
        {
          setMessage8("")
          setValid(true);
        }
        
        else if(!regEx4.test(e.target.value))
        {
          setMessage8("Passport Number must contain capital letter and numbers")
          setValid(false);
        }
        else{
          setMessage8("");
        }
    }
    const handleGoogleDriveClick = () => {
      setShowGoogleDriveFields(true);
    };
    const { control, handleformSubmit, formState: { errors }, setError } = useForm({
   
    });
    const [passportNumb,setPassportNumb]=useState();
    const handleVerifyImage = async () => {
      const apiKey = 'AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA';
      const folderId = '1Z-4gQyp36NUizoLee3jxICNNMtbDaLr0';
   
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`
        );
            console.log(response);
        if (response && response.data && response.data.files && response.data.files.length > 0) {
          const matchedImage = response.data.files.find((file) =>
            file.name.startsWith(`${passportNumb}.`)
            
          );
          console.log(passportNumb);
          if (matchedImage) {
            const fetchedFileId = matchedImage.id;
   
            const imageResponse = await axios.get(
              `https://www.googleapis.com/drive/v3/files/${fetchedFileId}?alt=media&key=${apiKey}`,
              {
                responseType: 'blob',
              }
            );
   
            const imageUrl = URL.createObjectURL(imageResponse.data);
            console.log(imageUrl);
            setFetchedImage(imageUrl);
          } else {
            console.error('No matching image found for the given Passport number.');
          }
        } else {
          console.error('No files found in the folder.');
        }
      } catch (error) {
        console.error('Error fetching image from Google Drive:', error);
      }
      setPassportNumberDrive(passportNumb);
    };
   
   
    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(userData);
        console.log(data);
        let fdata=new FormData();
        
        fdata.append('firstName',userData.firstName);
        fdata.append('lastName',userData.lastName);
        fdata.append('email',userData.email);
        fdata.append('phoneNumber',userData.phoneNumber);
        fdata.append('addressLine1',data.addressLine1);
        fdata.append('addressLine2',data.addressLine2);
        fdata.append('city',data.city);
        fdata.append('state',data.state);
        fdata.append('zipcode',data.zipcode);
        fdata.append('dob',data.dob);
        fdata.append('passportNumber',data.passportNumber);
        fdata.append('validity',data.validity);
        if (data.passportDoc) {
          data.append('passportDoc',data.passportDoc);
        } else if (fetchedImage) {
          const fetchedImageBlob = await fetch(fetchedImage).then((res) => res.blob());
          const fetchedImageFile = new File([fetchedImageBlob], 'fetched_passport_image.jpg');
   
          fdata.append('passportDoc', fetchedImageFile);
        }
        console.log([...fdata.entries()]);
        dispatch(verifyPassport(fdata));
        if(passportData.message=="Registered Successfully"){
        setTimeout(()=>{
            navigate("/");
        },1000)
    }
    }
     
  
  

return(
    <div className="bg-gradient-to-br from-zinc-200 to-zinc-100 w-full p-1">
        
               <Nav/>
               
            <div className="w-full md:w-8/12 lg:w-5/12 sm:w-10/12 flex justify-center mx-auto bg-white mt-44 md:mt-24 shadow-2xl rounded-md mb-6 sm:px-8">
                <form className="w-full max-w-sm mt-4" method="POST" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-sans font-bold flex justify-center mb-6">Verify Passport</h2>
                <div className="flex flex-row">
                <div class="flex items-center  mr-4">
            <input name="firstName" className="appearance-none bg-transparent py-2 border-b border-teal-500 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" value={userData.firstName} onChange={(e)=>setData({...data,[e.target.name]:userData.firstName})} disabled/>
            </div>
            <div class="flex items-center">
            <input name="lastName" className="appearance-none bg-transparent py-2 border-b border-teal-500 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" value={userData.lastName} disabled  onChange={(e)=>setData({...data,[e.target.name]:userData.lastName})}/>
                </div>
                
            </div>
            <div className="flex flex-row"><div><p className="text-red-500 text-xs italic">{message1}</p></div>
            <div><p className="text-red-500 text-xs italic ml-24">{message9}</p></div>
            </div>
  
                {/* <div className="flex items-center border-b border-teal-500 py-2">
           
                </div> */}
                <div class="flex items-center mt-2">
            <input name="email" className="appearance-none  py-2 bg-transparent border-b border-teal-500 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="email" value={userData.email} disabled onChange={(e)=>setData({...data,[e.target.name]:userData.email})}/>
                </div>
                <div className=""><p className="text-red-500 text-xs italic">{message}</p></div>
                <div className="flex items-center mt-2">
            <input name="phoneNumber" className="appearance-none bg-transparent border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" value={userData.phoneNumber} disabled maxLength="10" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}/>
                </div>
                {/* <div className=""><p className="text-red-500 text-xs italic">{message2}</p></div> */}
                <div className="flex flex-row mt-2">
                <div className="flex items-center  mr-4">
            <input name="addressLine1" maxLength="24" className="appearance-none bg-transparent border-b border-teal-500 focus:border-b-2 py-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" placeholder="AddressLine1"  onChange={handleChange7}/>
                </div>
                <div className="flex items-center">
            <input name="addressLine2" maxLength="24" className="appearance-none bg-transparent  border-b border-teal-500 focus:border-b-2 py-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" placeholder="AddressLine2"  onChange={handleChange2}/>
                </div>
                </div>
                <div className="inline"><p className="text-red-500 text-xs italic float-left">{message7}</p><p className="float-right text-xs text-red-500 italic mr-4">{message2}</p></div>
                <div className="flex flex-row mt-4">
                
 <div className="flex items-center mr-4">
                
                    <select
                      required
                      name="city"
                      
                      onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
                      className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm border-b border-teal-500 py-2 focus:border-b-2 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 px-2 mr-4"
 
                    >
                      <option value="">City</option>
                      {City &&
                        City.getCitiesOfCountry("IN").map((item) => (
                          <option key={item.isoCode} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <div className="flex items-center ml-4">
                <select
                    required
                    name="state"
                    
                    onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
                    className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm border-b border-teal-500 py-2 focus:border-b-2 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 px-2 mr-4"
 
                  >
                    <option value="">State</option>
                    {State &&
                      State.getStatesOfCountry("IN").map((item) => (
                        <option key={item.isoCode} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                  </select>
 
 
 </div>
                    </div>
                
                {/* <div className="flex items-center border-b border-teal-500 py-2 mr-4">
            <input name="city" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="City"  onChange={handleChange5}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="state" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="State"  onChange={handleChange6}/>
                </div>
                </div>
                <div className="flex flex-row"><div className=""><p className="text-red-500 text-xs italic">{message5}</p></div>
                <div className=""><p className="text-red-500 text-xs italic ml-32">{message6}</p></div></div> */}
                </div>

                <div className="flex flex-row mt-2"> 
                <div className="flex items-center  border-b border-teal-500 py-2 mr-5">
                  <label className="text-sm">DOB:</label>
            <input name="dob" min="1923-01-01" max={formatDate(oneMonthAgo)} className="appearance-none bg-transparent w-full text-gray-700 px-2 leading-tight focus:outline-none outline-blue-500" required type="date" placeholder="DOB"  onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}/>
                </div>
                <div className="flex items-center ml-2">
            <input name="zipcode" className="appearance-none bg-transparent border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" maxLength="6" placeholder="Zipcode"  onChange={handleChange3}/>
                </div>
                
                </div>
                <div className="flex justify-end mr-8"><p className="text-red-500 text-xs italic float-left">{message3}</p>
                
                </div>
                <div className="flex flex-row mt-2"> 
                <div className="flex items-center mt-5">
            <input name="passportNumber" maxLength="8" className="appearance-none bg-transparent  border-b border-teal-500 py-2 focus:border-b-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none outline-blue-500" required type="text" placeholder="Passport Number"  onChange={handleChange}/>
                </div>
                <div className="flex items-center  border-b border-teal-500 py-2">
                  <label className="text-sm">Valid Till:</label>
            <input name="validity" min={formatDate(currentDate)} className="appearance-none bg-transparent w-full text-gray-700 px-2 leading-tight focus:outline-none outline-blue-500" required type="date" placeholder="validity"  onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}/>
                </div>
                </div>
                <div className=""><p className="text-red-500 text-xs italic">{message8}</p></div>
                {/* <div id="fileUpload" className="max-w-md mt-2">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload Passport Image" />
      </div>
      <FileInput id="file" name="passportDoc" onChange={handleFile}/>
    </div> */}
    <div {...getRootProps()} style={dropzoneStyle}>
  <input {...getInputProps()} />
  {isDragActive ? (
    <p>Drop the Passport image here</p>
  ) : (
    <>
      {data.passportDoc ? (
        <div style={{ display: 'flex', alignItems: 'center',position:'center', justifyContent: 'center' }}>
          <p className="text-sm">{data.passportDoc.name}</p>
          <button
            onClick={removeImage}
            style={{
              borderRadius: '90%',
              padding: '10px', // Adjust the width and height as needed
              height: '30px',
              fontSize: '12px',
              // background: 'linear-gradient(to right, rgb(2, 13, 81), rgb(30, 146, 182))',
              color: 'black',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
            type="button"
          >
            X
          </button>
        </div>
      ) : (
        <p className="text-sm italic text-gray-600">Drag 'n' drop Passport image, or Upload (Note: Accepted file types .png, .jpeg, .jpg)</p>
      )}
    </>
  )}
</div> 
          <div className="mt-2 mb-1 flex justify-center font-sans italic">OR</div>
              <div className="flex justify-center">
              {showGoogleDriveFields && (
      <>
        <Controller
          name="passportNumberDrive"
          control={control}
          defaultValue={passportNumberDrive}
          render={({ field }) => (
            <input

              className="bg-transparent border-b border-teal-500  focus:border-b-2 mt-4 focus:outline-none w-32"
              required
              name="passportNumb"
              onChange={(e)=>setPassportNumb(e.target.value)}
              label="Passport Number"
            />
          )}
        />
        <button type="button" 
                onClick={handleVerifyImage} className="bg-teal-500 hover:bg-teal-700 text-white rounded px-1 py-1 ml-2 mt-4">
          Fetch Image
        </button>
      </>
    )}
  
  </div>
  <div className="flex justify-center mt-2">
  
    {fetchedImage && (
      <div className="flex flex-row">
        <img
          src={fetchedImage}
          alt="Fetched Passport Image"
          className="w-24"
        />
        <button type="button" className="ml-4" onClick={handleRemove1}>X</button>
        </div>
    )} 
    
    
          {!showGoogleDriveFields && (
            <button
              type="button"
              // className="button_btn__navbar"
              onClick={handleGoogleDriveClick}
              disabled={showGoogleDriveFields}
             
             className="px-2 py-1 rounded text-white bg-teal-500 hover:bg-teal-700 mt-2"
            >
              <div className="flex flex-row">
              <img src="https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-PNG-Picture.png" className="w-6"/>
              <p>Google Drive</p></div>
            </button>
          )}
        
              </div>
   
                {passportData.success ?  <div className="flex justify-center mt-4"><p className="text-green-500  font-serif">{passportData.message}</p></div>
                :
                 <div className="flex justify-center mt-4"><p className="text-red-500  font-serif">{passportData.message}</p></div>}
                
                <div className="flex justify-center mt-6 mb-4">
                
                <button className={`flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-5 rounded ${!valid ? 'opacity-50 cursor-not-allowed hover:none' : ''}`} type="submit" disabled={!valid}>
                    Verify
                </button>
                </div>
            </form> 
            <div>
      
    </div>
        </div>
        <Footer/>
    </div>
)
}
export default Verification;