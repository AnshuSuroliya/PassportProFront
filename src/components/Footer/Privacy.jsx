import Nav from "../Navbar/Nav";
import Footer from "./Footer";

const Privacy=()=>{
return(
<div>
    <Nav/>
    <div className="w-full h-screen mt-16">
        <div className="w-full text-2xl font-bold flex justify-center">Privacy Policy</div>
        <div className="mt-8">As a general rule, this web site does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information, unless you choose to provide such information. Any Personal information collected shall be used only for the purpose for which you have provided it. In very exceptional cases, data could be shared with other government agencies, but this will be done only after following the due process. This site may contain links to third party sites whose data protection and privacy practices may differ from ours. We therefore have no responsibility for the content, privacy practices and activities of other websites and encourage you to consult the privacy notices of those sites.</div>
    
    </div>
    <Footer/>
</div>
);
}
export default Privacy;