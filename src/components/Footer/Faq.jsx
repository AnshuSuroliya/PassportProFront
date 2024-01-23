import Nav from "../Navbar/Nav";
import Footer from "./Footer";

const Faq=()=>{
return(
<div>
    <Nav/>
    <div className="w-full h-screen mt-16">
<div className="flex justify-center text-2xl font-bold">
FAQs
</div>
<div className="mt-8">
<h2 className="font-bold">Q.1 What types of passports are issued in India?</h2>
<p>Following three types of passports are issued in India:
Ordinary Passport: An ordinary passport consists of 36/60 pages. Generally, for adults it is valid for 10 years from the date of issue and can be re-issued. For minors' passport, the validity is restricted to five years or till they attain the age of 18, whichever is earlier.
Diplomatic Passport: Issued to designated members authorised by the Government of India.
Official Passport: Issued to designated Government servants or any other person specifically authorised by the Government deputed abroad on official assignment.</p>
</div>
<div className="mt-4">
<h2 className="font-bold">Q.2 In case of minor's passport, whose father is abroad, is it mandatory to obtain father's consent to apply for the child's passport? If so, what is the procedure?</h2>
<p>Ideally, both the parents/legal guardian should sign Annexure ‘D’ in fresh or re-issue cases (to safeguard the interest of minor applicants). Both parents shall be present at the PSK/POPSK while applying for passport for their minor children or one parent with passports of both the parents may be present (PSK in-charge may call for other parent, if not satisfied with the signature on Annexure-D). In case either parent is resident abroad, the parent who is submitting the application in India will sign the application form and obtain the consent of other parent in Annexure-‘D’. In the cases where consent of either parent is not possible to be obtained, declaration in form of Annexure-C may be provided with applicable reason.</p>
</div>
<div className="mt-4">
<h2 className="font-bold">Q.3 What is the definition of minor for issue of passport?</h2>
<p>Applicants less than 18 years of age are considered as minor for issuance of passport.</p>
</div>
    </div>
    <Footer/>
</div>
);
}
export default Faq;