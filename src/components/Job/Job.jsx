const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job

    return (
        <div class="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={logo}
                    alt="Company Logo" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{job_title}</h2>
                <p>company_name</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]  mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]  text-[#7E90FE]   mr-4">{job_type}</button>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;