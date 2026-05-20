import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div className="card bg-base-200 shadow-sm py-2 mt-10 rounded-3xl px-4">
            <figure className="flex justify-start mt-7 pl-6">
                <img className="w-40 h-20"
                    src={logo}
                    alt="Company Logo" />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title font-extrabold text-2xl text-[#474747]">{job_title}</h2>
                <p className="font-semibold text-xl text-[#757575]">{company_name}</p>
                <div className="flex">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]  mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]  text-[#7E90FE]   mr-4">{job_type}</button>
                </div>
                <div className="flex text-[#757575] font-semibold text-xl">
                    <h2 className="flex mr-4"> <CiLocationOn className="text-2xl  mr-2" />{location}</h2>
                    <h2 className="flex"> <FaDollarSign className="text-2xl  mr-2" />{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn rounded-sm  text-white bg-linear-to-r from-[#7E90FE] to-[#9873FF]">View Details</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Job;