import { useEffect, useState } from "react";

const CategoryList = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    console.log(datas)
    return (
        <div>
            <h2 className="text-5xl font-extrabold mt-20 text-center">Job Category List</h2>
            <p className="font-medium text-lg mt-4 text-[#757575] text-center">Explore Thousand of Job opportunity withh all the informaion you need. Its your future</p>
            <div className="grid grid-cols-4 gap-4 mt-20">
                {
                    datas.map(data => <div key={data.id} className="p-6 bg-[#7E90FE]/5 rounded-2xl border border-[#7E90FE]/10 flex flex-col items-start gap-4 transition-all hover:shadow-md">
                        {/* Icon/Logo Wrapper */}
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <img className="w-8 h-8 object-contain" src={data.logo} alt={`${data.category_name} logo`} />
                        </div>

                        {/* Text Content Container */}
                        <div className="space-y-1">
                            <h3 className="font-extrabold text-xl text-gray-800 leading-tight">
                                {data.category_name}
                            </h3>
                            <p className="font-medium text-base text-[#A3A3A3]">
                                {data.availability}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryList;