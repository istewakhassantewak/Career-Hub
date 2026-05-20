
export default function BlogPage() {
    const blogs = [
        {
            id: 1,
            title: "Top Resume Tips for 2026",
            category: "Career Tips",
            date: "May 2026",
            description:
                "Learn how to optimize your resume with ATS-friendly formatting, keywords, and structure to get more interviews.",
        },
        {
            id: 2,
            title: "Frontend Interview Preparation Guide",
            category: "Interview",
            date: "May 2026",
            description:
                "Master React, JavaScript, and system design basics to crack frontend developer interviews easily.",
        },
        {
            id: 3,
            title: "Remote Job Safety Guide",
            category: "Job Search",
            date: "May 2026",
            description:
                "Find real remote jobs safely and avoid scams with proven strategies and trusted platforms.",
        },
        {
            id: 4,
            title: "High Demand Skills in Tech Industry",
            category: "Skills",
            date: "May 2026",
            description:
                "Explore the most in-demand skills like React, Node.js, cloud computing, and AI to boost your career.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold">Job Blog & Insights</h1>
                    <p className="mt-3 text-white/90">
                        Career tips, interview guides, and job market updates
                    </p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {blogs.map((blog) => (
                    <article
                        key={blog.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                        <div>
                            {/* CATEGORY */}
                            <span className="text-xs font-semibold text-[#7E90FE] bg-[#7E90FE]/10 px-3 py-1 rounded-full inline-block">
                                {blog.category}
                            </span>

                            {/* TITLE */}
                            <h2 className="text-lg font-bold mt-3 text-gray-800 leading-snug">
                                {blog.title}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                {blog.description}
                            </p>
                        </div>

                        {/* DATE (Clean bottom alignment) */}
                        <div className="mt-4 pt-3 border-t border-gray-50 text-xs font-medium text-gray-400">
                            {blog.date}
                        </div>
                    </article>
                ))}

            </section>
        </div>
    );
}