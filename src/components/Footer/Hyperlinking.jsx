import Nav from "../Navbar/Nav";
import Footer from "./Footer";

const Hyperlinking=()=>{
return(
<div>
    <Nav/>
    <div className="w-full h-screen mt-16">
<div className="flex justify-center text-2xl font-bold">Hyperlinking Policy</div>
<div className="mt-8">At many places in this website, you shall find links to other websites/portals. These links have been placed to enhance your user experience and are presented for information purposes only or for purposes apparent in the link. PaassportPro is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over availability of linked pages.</div>
    <div className="mt-4">However, by providing hyperlinks to an external website or webpage, PassportPro shall not be deemed to endorse, recommend, approve, guarantee or introduce any third parties or the services/ products they provide on their websites.</div>
    <div className="mt-4">
    PassportPro will in any way be responsible or liable for the content of any externally linked website or webpage. You use or follow these links at your own risk and PassportPro is not responsible for any damages or losses incurred or suffered by you arising out of or in connection with your use of the link. PassportPro is not a party to any contractual arrangements entered into between you and the provider of the external website unless otherwise expressly specified or agreed to by PassportPro.
    </div>
    </div>
   
    <Footer/>
</div>
);
}
export default Hyperlinking;