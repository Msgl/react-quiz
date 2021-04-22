import React, { useState } from 'react';
import { quizData } from './data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Toast';

export const Quiz = () => {
  // The initial state for the toggle button
  const [open, setOpen] = useState(false);
  // The initial state for retrieving the data from our json file
  const [count, setCount] = useState(0);

  // Create handlePrevious event handler
  const handlePrevious = () => {
    setCount((prevCount) =>
      prevCount - 1 >= 0 ? prevCount - 1 : quizData.length - 1
    );
  };

  //Create handleNext event handler
  const handleNext = () => {
    setCount((prevCount) =>
      prevCount + 1 <= quizData.length - 1 ? prevCount + 1 : (prevCount = 0)
    );
  };

  return (
    <Card className='mx-auto my-5'>
      <Card.Body>
        {/* Optional chaining ?.  */}
        <h4>{quizData[count]?.question}</h4>
        <textarea className='my-5 form-control' rows='7'></textarea>
        <Button variant='outline-primary' onClick={() => setOpen(!open)}>
          Show Answer
        </Button>
        {/* More on transition here: https://react-bootstrap.github.io/utilities/transitions/*/}
        <Card className='my-3' show={open} onClose={() => setOpen(false)}>
          <Card.Header>
            <strong className='mr-auto'>Answer</strong>
          </Card.Header>
          <Card.Body>
            {quizData[count]?.answer}
            <p>Resources: {quizData[count]?.resources}</p>
          </Card.Body>
        </Card>
        <br></br>
        {/* */}
        <Button
          className='mx-2'
          variant='outline-primary my-3'
          onClick={handlePrevious}
        >
          PREVIOUS
        </Button>
        <Button
          className='mx-2'
          variant='outline-primary my-3'
          onClick={handleNext}
        >
          NEXT
        </Button>
      </Card.Body>
    </Card>
  );
};

//Helpful resources on Hooks:
//https://daveceddia.com/intro-to-hooks/
//https://daveceddia.com/usestate-hook-examples/
//https://reactjs.org/docs/hooks-state.html
//https://reactjs.org/docs/hooks-rules.html
//https://reactjs.org/docs/hooks-faq.html
//https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/#usestate
//https://reactjs.org/docs/hooks-reference.html
//onClick = {() => setCount((prevCount) => prevCount - 1)}
//onClick={() => setCount((prevCount) => prevCount + 1)}
