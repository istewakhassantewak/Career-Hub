const Job = ({ job }) => {
    const { logo } = job
    console.log(logo)
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Job;