import React from "react";
import "./form.css";

function QuizzChoice({ quizList, uid, onQuizzSelection }) {
  //Filter availables quiz for user "uid"
  const filteredQuizzes = quizList.filter((list) =>
    list.userList.includes(uid)
  );

  const handleSelectChange = (event) => {
    const quizId = parseInt(event.target.value);
    //Renvoyer id du quizz sélectionné
    onQuizzSelection(quizId);
  };

  return (
    <div className="container">
      {filteredQuizzes.length > 0 ? (
        <form>
          <label htmlFor="quizSelect">Choose a quiz:</label>
          <select id="quizSelect" onChange={handleSelectChange}>
            <option value="">Select a quiz</option>
            {filteredQuizzes.map((quiz) => (
              <option key={quiz.id} value={quiz.id}>
                {quiz.title}
              </option>
            ))}
          </select>
        </form>
      ) : (
        <p>No quizzes available for you.</p>
      )}
    </div>
  );
}

export default QuizzChoice;
