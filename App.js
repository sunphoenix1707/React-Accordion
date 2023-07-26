import {useState} from 'react';
import './App.css';

function App() {
  const [selected,setSelected] = useState(null)
  const toggle= i => {
    if(selected==i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className="wrapper">
     <div className="accordian">
      {data.map((item,i) => (
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span>{selected==i ? '-' :'+'}</span>
            </div>
          <div className={selected==i ? 'content show' :'content'}>{item.answer}</div>
          </div>
      ))}
     </div>
    </div>
  );
}
const data= [
  {
  question : 'Question 1',
  answer : 
  ' standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

  },
  {
    question : 'Question 2',
    answer : 
    ' standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
  {
    question : 'Question 3',
    answer : 
    ' standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      question : 'Question 4',
      answer : 
      ' standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }, 
]
export default App;
