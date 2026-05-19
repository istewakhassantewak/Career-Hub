import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            console.log(jobsApplied)
        }

    }, [])
    return (
        <div>

            <div className="mt-20">
                {
                    appliedJobs.map(job => <div key={job.id} className="card card-side rounded-lg bg-base-100 shadow-sm mb-6">
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