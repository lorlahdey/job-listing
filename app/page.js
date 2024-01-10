"use client"

import { useState } from "react";
import Header from './components/Header'
import Jobcard from './components/Jobcard'

export default function Home() {
    const [ filterTags, setFilterTags ] = useState([])

    const addFilterTags = (filterText) => {
        if(!filterTags.includes(filterText)) {
            setFilterTags([...filterTags, filterText])
        }
    }
    const clearFilters = () => {
        setFilterTags([]);
    };

    return (
        <main className="min-h-screen bg-light-cyan-bg ">
            <Header />
            <div className="max-w-screen-xl mx-auto ">
                <Jobcard 
                    // addFilterTags={addFilterTags}
                />
            </div>
        </main>
    )
}
