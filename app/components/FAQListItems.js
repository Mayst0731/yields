"use client";

import { useState } from "react";

const FAQListItems = ({ qa }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <li key={qa.question}>
                  {/* 1. Question is clickable */}
                  <button onClick={() => setIsOpen(!isOpen)}>{qa.question}</button>
                  {/* 2. Answer */}
                  {
                    <div className={`${isOpen ? "block" : "hidden"}`}>{qa.answer}</div>
                  }
        </li>
    )
}

export default FAQListItems;
