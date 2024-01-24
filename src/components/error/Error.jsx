import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";

const Error=()=>{
    return(
<div>
    <Nav/>
    <div className="flex justify-center bg-[#1e1e1e] w-full h-screen mt-16">
        <h2 className="text-3xl text-white mt-72">Sorry for the inconvinience, We are under maintainance.</h2>
    </div>
    <Footer/>
</div>

    );
}
export default Error;