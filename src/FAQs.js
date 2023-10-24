import React , { useState }  from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
function FAQs(){
    
    const [faqs, setFaqs] = useState([
        {
          question: 'Question 1',
          answers: ['Answer 1-1', 'Answer 1-2', 'Answer 1-3'],
          isOpen: false,
        },
        {
          question: 'Question 2',
          answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
          isOpen: false,
        },
        {
            question: 'Question 2',
            answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
            isOpen: false,
          },
          {
            question: 'Question 2',
            answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
            isOpen: false,
          },
          {
            question: 'Question 2',
            answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
            isOpen: false,
          },
          {
            question: 'Question 2',
            answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
            isOpen: false,
          },
          {
            question: 'Question 2',
            answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
            isOpen: false,
          },
          {
            question: 'Question 2',
            answers: ['Answer 2-1', 'Answer 2-2', 'Answer 2-3'],
            isOpen: false,
          },

        // Add more questions and answers as needed
      ]);
    
      const toggleFAQ = (index) => {
        const newFaqs = [...faqs];
        newFaqs[index].isOpen = !newFaqs[index].isOpen;
        setFaqs(newFaqs);
      };
      
    return(
        <>
        <NavBar />
       <div className="flex">
       <div className="w-1/4 p-4">
        <h3 className="mb-4">Table of Contents</h3>
        <ul className="list-none">
          <li className="mb-2">
            <a href="#subheading1" className="text-blue-500 hover:text-blue-700">
              Subheading 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#subheading2" className="text-blue-500 hover:text-blue-700">
              Subheading 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#subheading3" className="text-blue-500 hover:text-blue-700">
              Subheading 3
            </a>
          </li>
          <li className="mb-2">
            <a href="#subheading4" className="text-blue-500 hover:text-blue-700">
              Subheading 4
            </a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div className="border rounded-lg p-4 flex justify-between items-center">
              <h5 className="w-3/4 text-start">{faq.question}</h5>
              <div onClick={() => toggleFAQ(index)}>
                {faq.isOpen ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </div>
            </div>
            {faq.isOpen && (
              <ul className="border rounded-lg p-4 mt-2 text-start">
                {faq.answers.map((answer, i) => (
                  <li key={i} className="mb-2">
                    {answer}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
        <Footer />
        </>
    );
};
export default FAQs;