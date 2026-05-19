const Banner = () => {
    return (
        <div className="flex justify-between bg-[#FFFFFF]">
            <div className="flex flex-col justify-center space-y-4">
                <h1 className="font-extrabold text-7xl">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">Dream Job</span></h1>
                <p className="font-medium text-lg text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div>
                    <button className="btn text-white rounded-lg  bg-linear-to-r from-[#7E90FE]  to-[#9873FF]">Get Started</button>
                </div>
            </div>
            <div>
                <img src="../../../public/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;