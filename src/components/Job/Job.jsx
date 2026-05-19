import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div class="card bg-base-300 shadow-sm py-2 mt-10 rounded-4xl px-4">
            <figure className="flex justify-start px-6">
                <img className="w-40 h-20"
                    src={logo}
                    alt="Company Logo" />
            </figure>
            <div class="card-body space-y-4">
                <h2 class="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]  mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]  text-[#7E90FE]   mr-4">{job_type}</button>
                </div>
                <div className="mt-4 flex">
                    <h2 className="flex mr-4"> <CiLocationOn className="text-2xl  mr-2" />{location}</h2>
                    <h2 className="flex"> <FaDollarSign className="text-2xl  mr-2" />{salary}</h2>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;