import React, { useState, useEffect } from "react";
import "../CSS/Kuis.css";

const KuisPage = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch("http://localhost:3000/quiz/detail/1");
        const data = await response.json();
        setQuizData(data.body[0]);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      Id: quizData.Id,
      MateriId: quizData.MateriId,
      Title: quizData.Title,
      TimeLimit: quizData.TimeLimit,
      finishedTime: quizData.finishedTime,
      quizQuestions: quizData.quizQuestions.map(question => {
        const selectedOption = document.querySelector(
          `input[name="question_${question.Id}"]:checked`
        );

        const selectedOptionId = selectedOption
          ? parseInt(selectedOption.value, 10)
          : null;

        const isCorrect = question.quizQuestionDetails.every(option => {
          return option.IsAnswer === (option.Id === selectedOptionId);
        });

        return {
          Id: question.Id,
          Question: question.Question,
          quizQuestionDetails: question.quizQuestionDetails.map(option => ({
            Id: option.Id,
            Choice: option.Choice,
            Description: option.Description,
            IsAnswer: option.IsAnswer,
            isSelected: option.Id === selectedOptionId,
          })),
          isCorrect: isCorrect,
        };
      }),
    };

    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/quiz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Submit response:", response);
      // You can add any additional logic you need after submission here
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  return (
    <div>
      {quizData ? (
        <div>
          <h1>{quizData.Title}</h1>
          <p>Time Limit: {quizData.TimeLimit} seconds</p>
          <form onSubmit={handleSubmit}>
            {quizData.quizQuestions.map(question => (
              <div key={question.Id}>
                <p>{question.Question}</p>
                <ul>
                  {question.quizQuestionDetails.map(option => (
                    <li key={option.Id}>
                      <label>
                        <input
                          type="radio"
                          name={`question_${question.Id}`}
                          value={option.Id}
                        />
                        {option.Description}
                      </label>
                    </li>
                  ))}
                </ul>
                {question.isCorrect !== undefined && (
                  <p>{question.isCorrect ? "Correct" : "Incorrect"}</p>
                )}
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default KuisPage;
