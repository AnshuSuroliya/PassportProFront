import Nav from "../Navbar/Nav";
import Footer from "./Footer";

const Copyright=()=>{
return(
<div>
    <Nav/>
    <div className=" h-screen w-full mt-16">
    <h2 className="text-2xl font-bold font-sans">The contents of this website may not be reproduced partially or fully, without due permission from MEA. If referred to as a part of another publication, the source must be appropriately acknowledged. The contents of this website cannot be used in any misleading or objectionable context.</h2>
    </div>
    <Footer/>
</div>
);
}
export default Copyright;