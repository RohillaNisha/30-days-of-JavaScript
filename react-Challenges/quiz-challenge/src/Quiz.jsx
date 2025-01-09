import React, { useState, useEffect } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};



function Quiz() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [allAnswered, setAllAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [feedback, setFeedback] = useState("");


    const handleSelectionChange = (e) =>{

    setSelectedOption( e.target.value);

    }

    const handleQuestionChange = () => {
        setFeedback("");
        setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex+1);


    }


    const handleNextQuestion = (e) => {
        

        if(currentQuestionIndex >= questions.length - 1){
            setAllAnswered(true);
           
        }

        if(currentQuestion.correct === selectedOption){
            setScore((prevScore) => prevScore+1);
            setFeedback("Correct Answer");
        }
        else{
            setFeedback("Wrong Answer");
        }

        setTimeout(handleQuestionChange, 1000);
      


        
    }

    

    const questions = [
        {
          question: 'What is the capital of France?',
          options: ['London', 'Paris', 'Berlin', 'Madrid'],
          correct: 'Paris',
        },
        {
          question: 'What is the capital of Germany?',
          options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
          correct: 'Berlin',
        },
      ];
    const currentQuestion = questions[currentQuestionIndex];

    
  return (

    <div style={style.container}>
    {allAnswered && feedback === "" ? 
        <div  style={style.container}> 
        <h1>Quiz Over </h1>
            <h3>
            Total Score is: {score} 
            </h3>
          </div> : 
    <div style={style.container}>
      <div id="question" style={style.question}>
      <h1> Question No. {currentQuestionIndex + 1} : </h1>
        {currentQuestion.question}
        {currentQuestion?.options.map((option, index) => (
            <div key={index} style={style.options}>
            <label>
            <input
             type="radio"
             name="option"
             value={option}
             checked={selectedOption === option}
             onChange={handleSelectionChange} />
             {option}
            </label>
            </div>
        ))}

      </div>
      <div style={style.options}>

      </div>
      <button style={style.button} id="submitBtn" onClick={handleNextQuestion} >
        Submit
      </button>
      <div id="feedback" style={style.feedback}>
          <h4> Feedback: {feedback}</h4>
      </div>
      </div>
    }
    </div>
  );

}

export default Quiz