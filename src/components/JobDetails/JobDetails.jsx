import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../utility/localStorage";
const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const job = jobs.find(job => job.id === parseInt(id))
    const handleApplyJob = () => {
        saveJobApplication(parseInt(id))
        toast('You have applied successfully')
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-16 px-6">
                <h4 className="font-extrabold text-3xl text-center">Job Details</h4>
            </div>

            <div className="grid gap-4  md:grid-cols-5 mt-20">
                <div className="md:col-span-3 space-y-6 p-6 pt-0">
                    <p className="font-medium text-lg text-[#757575]"><span className="text-black font-extrabold">Job Description : </span>{job.job_description}</p>
                    <p className="font-medium text-lg text-[#757575]"><span className="text-black font-extrabold">Job Responsibility : </span>{job.job_responsibility}</p>
                    <p className="font-medium text-lg text-[#757575]"><span className="text-black font-extrabold">Educational Requirements : </span>{job.educational_requirements}</p>
                    <p className="font-medium text-lg text-[#757575]"><span className="text-black font-extrabold">Experiences : </span>{job.experiences}</p>
                </div>
                <div className=" md:col-span-2 ">
                    <div className="bg-linear-to-r from-[#7E90FE]/10 to-[#9873FF]/10 p-8 space-y-6  rounded-lg mb-6">
                        <h1 className="font-extrabold text-xl">Job Details</h1>
                        <hr />
                        <p className="text-xl font-medium text-[#474747]"><span className="font-bold text-[#757575]">Salary : </span>{job.salary}</p>
                        <p className="text-xl font-medium text-[#474747]"><span className="font-bold text-[#757575]">Job Title : </span>{job.job_title}</p>

                        <h1 className="font-extrabold text-xl">Contact Information</h1>
                        <hr />
                        <p className="text-xl font-medium text-[#474747]"><span className="font-bold text-[#757575]">Phone : </span>{job.contact_information.phone}</p>
                        <p className="text-xl font-medium text-[#474747]"><span className="font-bold text-[#757575]">Email : </span>{job.contact_information.email}</p>
                        <p className="text-xl font-medium text-[#474747]"><span className="font-bold text-[#757575]">Address : </span>{job.contact_information.address}</p>

                    </div>
                    <button onClick={handleApplyJob} className="btn w-full py-5 rounded-lg bg-linear-to-r text-white from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;