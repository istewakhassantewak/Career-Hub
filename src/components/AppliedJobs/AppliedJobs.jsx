import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    const handleJobFilter = filter => {
        if (filter === 'All') {
            setDisplayJobs(appliedJobs)
        } else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'On Site') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(remoteJobs)
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)

            setDisplayJobs(jobsApplied)
        }

    }, [jobs])
    return (
        <div>
            <h4 className="font-extrabold text-3xl text-center my-28">Applied Jobs</h4>
            <div>
                <div className="flex justify-end mb-6">
                    <details className="dropdown">
                        <summary className="btn m-1">Filter <MdKeyboardArrowDown /></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => handleJobFilter('All')}><a>All</a></li>
                            <li onClick={() => handleJobFilter('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobFilter('On Site')}><a>On Site</a></li>
                        </ul>
                    </details>
                </div>
                {
                    displayJobs.map(job => <div key={job.id} className="card card-side rounded-lg bg-base-100 shadow-sm mb-6">
                        <figure className="w-60 h-60  p-8 " >
                            <img
                                className="w-full h-full rounded-lg object-contain bg-[#F4F4F4] p-8"
                                src={job.logo}
                                alt="Movie"
                            />
                        </figure>
                        <div className="card-body justify-center space-y-2.5">
                            <h2 className="card-title">{job.job_title}</h2>
                            <p className="flex  grow-0">{job.company_name}</p>
                            <div>
                                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]  mr-4">{job.remote_or_onsite}</button>
                                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]  text-[#7E90FE]">{job.job_type}</button>
                            </div>
                            <div className="flex text-[#757575] font-semibold text-xl">
                                <h2 className="flex mr-4"> <CiLocationOn className="text-2xl  mr-2" />{job.location}</h2>
                                <h2 className="flex"> <FaDollarSign className="text-2xl  mr-2" />{job.salary}</h2>
                            </div>
                        </div>
                        <div className="flex items-center mr-5 justify-end">
                            <button className="btn rounded-md  text-white bg-linear-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;