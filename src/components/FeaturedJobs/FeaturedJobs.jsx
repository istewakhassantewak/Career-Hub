import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div id="feature">
            <div className="text-center">
                <h2 className="text-5xl font-extrabold mt-20">Featured Jobs</h2>
                <p className="font-medium text-lg mt-4 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center items-center mt-20'} onClick={() => { setDataLength(jobs.length) }}>
                <button className="btn text-white rounded-sm  bg-linear-to-r from-[#7E90FE]  to-[#9873FF]">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;