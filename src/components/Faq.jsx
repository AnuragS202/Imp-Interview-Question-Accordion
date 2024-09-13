import data from "../data.json";
import Accordion from "./Accordion";

export default function Faq() {
  return (
    <div>
      <h1>Imp Interview Questions</h1>
      {data.questions.map((obj, index) => {
        return <Accordion key={index} qna={obj} />;
      })}
    </div>
  );
}
