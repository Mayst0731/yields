"use client";

import { useState } from "react";

const FAQListItems = ({ qa }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <li key={qa.question}>
                  {/* 1. Question is clickable */}
                  <button 
                    className="py-5 font-semibold border-b w-full text-left flex items-center justify-between"
                    onClick={() => setIsOpen(!isOpen)}>
                        <p>{qa.question}</p>
                        {
                            isOpen ? 
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>

                                ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                ) 
                        }
                    </button>
                  {/* 2. Answer */}
                  {
                    <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6 opacity-90`}>{qa.answer}</div>
                  }
        </li>
    )
}

export default FAQListItems;
