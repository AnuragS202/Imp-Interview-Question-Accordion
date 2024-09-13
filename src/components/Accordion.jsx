import { useState } from "react";
export default function Accordion({ qna }) {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion">
      <h3>
        {qna.question}{" "}
        <span className="open" onClick={() => setShow(!show)}>
          {show ? "- " : "+ "}
        </span>
      </h3>
      {show ? <p>{qna.answer}</p> : ""}
    </div>
  );
}
