"use client"
import Image from "next/image"
import { useState } from "react";
import { jobListing } from "../helpers/data"
const Jobcard = () => {
    const [ filterTags, setFilterTags ] = useState([])

    jobListing.map(job => {
        job.tags = [job.role, job.level, ...job.languages, ...job.tools]
        return job
    })

    const addFilterTags = (filterText) => {
        if(!filterTags.includes(filterText)) {
            setFilterTags([...filterTags, filterText])
        }
    }
    const removeFilterTags = (filterText) => {
        setFilterTags(filterTags.filter(text => text !== filterText));
    };
    const clearFilterTags = () => {
        setFilterTags([]);
    };

    const filteredCardData = jobListing.filter(card => {
        return filterTags.every(filter => card.tags.includes(filter));
    }); 

    return (
        <>
            {
                filterTags.length > 0 &&
                <div className="px-6 sm:px-24">
                    <div className="flex justify-between items-center shadow-2xl rounded-lg bg-white -mt-9 mb-6 py-5 px-8">
                        <div className="flex flex-wrap gap-4">
                            {
                                filterTags.map((tag, index) => {
                                    return (
                                        <div  key={index} className="flex align-center">
                                            <p
                                                className="text-primary-cyan hover:text-white px-3 py-1.5 bg-filter-tab-light-cyan hover:bg-primary-cyan rounded"
                                            >
                                                {tag}
                                            </p>
                                            <button className='text-white font-bold bg-primary-cyan hover:bg-very-dark-cyan px-2 rounded-r-md' onClick={() => removeFilterTags(tag)}>X</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <span onClick={clearFilterTags} className="underline text-dark-cyan hover:text-primary-cyan font-bold">clear</span>
                    </div>
                </div>
            }
            
            <div className=" mt-4 lg:mt-0">
                {
                    filteredCardData.map((jobDetails) => {
                        return (
                            <div key={jobDetails.id} className="py-5 lg:py-4 sm:px-24 px-6 ">
                                <div className={`lg:flex lg:justify-between items-center shadow-2xl rounded-lg bg-white py-6 px-7 ${jobDetails.featured && 'border-l-[5px] border-primary-cyan'}`}>
                                    <div className="lg:flex items-center pb-3 lg:pb-0 border-b-[1px] border-gray-400 lg:border-none ">
                                        <div className="-mt-12 lg:mt-0 pb-3">
                                            <Image
                                                src={jobDetails.logo}
                                                width={100}
                                                height={100}
                                                alt="logo"
                                                className="w-12 lg:w-4/5"
                                            />
                                        </div>
                                        <div >
                                            <div className="flex font-bold font-medium items-center gap-x-2.5 pb-4"> 
                                                <h1 className="text-primary-cyan">{jobDetails.company}</h1>
                                                { jobDetails.new &&
                                                    <span 
                                                        // onClick={() => addFilterTags(tag)}
                                                        className="text-white bg-primary-cyan px-2.5 py-1 rounded-full"
                                                    >
                                                        NEW!
                                                    </span>
                                                }
                                                { jobDetails.featured &&
                                                    <p
                                                        // onClick={() => addFilterTags(tag)} 
                                                        className='text-white bg-very-dark-cyan rounded-full px-2 py-1'
                                                    >
                                                        FEATURED
                                                    </p>
                                                }
                                            </div>
                                            <div className="pb-3">
                                                <h3 className="font-bold text-very-dark-cyan hover:text-primary-cyan ">{jobDetails.position}</h3>
                                            </div>
                                            <div className="text-dark-cyan font-bold flex gap-2.5">
                                                <ul className="text-dark-cyan flex  gap-6">
                                                    <li>{jobDetails.postedAt}</li>
                                                    <li className="list-disc">{jobDetails.contract}</li>
                                                    <li className="list-disc">{jobDetails.location}</li>
                                                </ul>
                                                {/* <p>1d ago</p>
                                                <p className="before:content-['.'] ">full time</p>
                                                <p className="before:content-['.'] before:mx-1 ">usa only</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 flex-wrap font-bold pt-5 lg:pt-0">
                                        {
                                            jobDetails.tags.map((tag, index) => {
                                                return (
                                                    <button  
                                                        onClick={() => addFilterTags(tag)}
                                                        key={index} 
                                                        className="text-primary-cyan hover:text-white px-3 py-1.5 bg-light-cyan-bg hover:bg-primary-cyan rounded"
                                                    >
                                                        {tag}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
            
    )
}

export default Jobcard