import { useState } from "react";
import "./App.css";

const faqs = [
  {
    id: 1,
    question: "WHAT IS HTML?",
    answer:
      "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  },
  {
    id: 2,
    question: "WHAT IS CSS?",
    answer:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    id: 3,
    question: "WHAT IS JAVASCRIPT?",
    answer:
      "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
  },
  {
    id: 4,
    question: "WHAT IS REACT?",
    answer:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
];

function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      {data.map((el, i) => (
        <AccordainItems
          num={i}
          key={el.question}
          question={el.question}
          curOpen={curOpen}
          onCurOpen={setCurOpen}
        >
          {el.answer}
        </AccordainItems>
      ))}
    </div>
  );
}

function AccordainItems({ num, question, children, curOpen, onCurOpen }) {
  const isOpen = num === curOpen;

  const handleClick = () => {
    onCurOpen(isOpen ? null : num);
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <p>{num < 5 ? `0${num + 1}` : num}</p>
      <p>{question}</p>
      <p>{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default App;
