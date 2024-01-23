import Nav from "../Navbar/Nav";
import Footer from "./Footer";

const Terms=()=>{
return(
<div>
    <Nav/>
    <div className="w-full h-screen mt-16">
<div className="flex justify-center font-bold text-2xl">Terms of Use and Privacy</div>
<div className="mt-8">This website has been developed and maintained by PassportPro for PSP Division of Ministry of External Affairs, Government of India (MEA). Though all efforts have been made to keep the content on this website accurate and up-to-date, the same should not be construed as a statement of law or used for any legal purposes. PassportPro accepts no responsibility in relation to the accuracy, completeness, usefulness or otherwise, of the contents. Users are therefore advised to verify/check any information with PassportPro before acting on information provided in this website.</div>
   <div className="mt-4">
   In no event will PassportPro will be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
   </div>
    </div>
    <Footer/>
</div>
);
}
export default Terms;