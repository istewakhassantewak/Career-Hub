const Banner = () => {
    return (
        <div className="flex flex-col  md:flex-row justify-between bg-[#FFFFFF]">
            <div className="flex flex-col justify-center space-y-4">
                <h1 className="font-extrabold text-3xl lg:text-7xl">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">Dream Job</span></h1>
                <p className="font-medium text-base lg:text-lg text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div>
                    <button className="btn text-white rounded-lg  bg-linear-to-r from-[#7E90FE]  to-[#9873FF]"><a href="#jobc">Get Started</a></button>
                </div>
            </div>
            <div className="flex items-center">
                <img src="../../../public/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;