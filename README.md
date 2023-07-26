# React-Accordion
It is Accordion made with help of React. It is made with help of useState(). UseState in react is used to change the state. when we click on the plus icon it will show the hidden contents and when we click on the minus icon it hides the content.
Working :
  <div className="title" onClick={() => toggle(i)}>
  when we click on the title each title has a unique index number. Suppose I clicked on the 0th index 
  then it will pass to toggle function
   const toggle= i => {
    if(selected==i) {
      return setSelected(null);
    }
    setSelected(i);
    In toggle function if 0th title is already selected then it will unset the 0th title otherwise it will set hidden title here set means showing hidden content.
      <span>{selected==i ? '-' :'+'}</span>
            </div>
          <div className={selected==i ? 'content show' :'content'}>{item.answer}</div>
          here first line means : if 0th title is already selected '+' icon will be changed to '-'
          otherwise '-' will be changed to '+'
          third line means if 0th title is already selected then call css property content show otherwise call css property content
          where we have set maxheight to 0 which means content is hidden.
          
