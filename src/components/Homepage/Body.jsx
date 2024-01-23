import { useNavigate } from "react-router-dom";

const Body=()=>{
    
    
    return(
        <div>
        <div className="flex flex-col lg:flex-row md:flex-row w-full m-4 py-10">
            
            <div className="lg:flex lg:justify-end ml-8">
                <img className="rounded-2xl" src="https://res.cloudinary.com/storylens/image/upload/v1704433750/b7br9cxlnynhr5p82pfw.jpg" height="900" width="500"/>
            </div>
            <div className="flex flex-col lg:w-1/2 ml-12 lg:mt-24">
                <div>
                    <p className="text-4xl font-serif font-bold">Real-Time Verification Check</p>
                </div>
                <div className="mt-4 text-lg font-sans">
                    Verify your passport in real time without compromising security and privacy.
                </div>
                {/* <div className="mt-4">
                    <button className="bg-stone-950 rounded-full px-6 py-3 text-white font-bold" onClick={handleClick}>Verify Now</button>
                </div> */}
            </div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row w-full m-4 py-10">
        <div className="flex flex-col lg:w-1/2 ml-12 lg:mt-24">
                <div>
                    <p className="text-4xl font-serif font-bold">Secure Data Infrastructure</p>
                </div>
                <div className="mt-4 text-lg font-sans">
                Your personal data is safeguarded within our secure infrastructural ecosystem.
                </div>
            </div>
            <div className="lg:flex lg:justify-end ml-6 mr-4">
                <img className="rounded-2xl" src="https://res.cloudinary.com/storylens/image/upload/v1704433750/ebpmylutb4wlo0knvsbz.jpg" height="900" width="500"/>
            </div>
            
        </div>
        </div>
    )
}
export default Body;