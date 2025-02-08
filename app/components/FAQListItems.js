
const FAQListItems = ({ qa }) => {
    return (
        <li key={qa.question}>
                  {/* 1. Question is clickable */}
                  <button onClick>{qa.question}</button>
                  {/* 2. Answer */}
                  <div>{qa.answer}</div>
        </li>
    )
}

export default FAQListItems;
