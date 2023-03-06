import React, { useState } from "react";
import Login from "./Login.js";
import QuizChoice from "./QuizChoice.js";
import Quiz from "./Quiz.js";

//Simulate database
import quizList from "./fakeDatabaseQuiz.json";
import quizQuestions from "./fakeDatabaseQuestions.json";

function App() {
  //State utilisateur logged, false by default
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //State with name and UID of user, empty by default
  const [userInfo, setUserInfo] = useState({});
  //State with quiz selected, null by default
  const [selectedQuiz, setSelectedQuiz] = useState(false);
  //State with list of questions for selected quizz
  const [questionsList, setquestionsList] = useState(null);

  //Call this in the handleSubmit of Login Component after submitting the form
  const handleLogin = (userInfo) => {
    //Set state user as logged
    setIsLoggedIn(true);
    //Set state userinfo (uid + login)
    setUserInfo(userInfo);
  };

  //Call this in the handleSubmit of QuizzSelection Component after submitting the form
  const handleQuizzSelection = (quizId) => {
    //Set state SelectedQuizz because user clicked on a quizz
    setSelectedQuiz(true);
    //Define question list
    const questionList = quizQuestions.filter(
      (question) => question.quizId === quizId
    );
    //Set state of the questions list corresponding to the selected quiz
    setquestionsList(questionList);
  };

  //Utilisation de content temporairement pour simplifier la compréhension
  let content;
  //Si user is logged
  if (isLoggedIn) {
    //Si user is logged + quiz choosen, display quizz + pass list of questions
    if (selectedQuiz) {
      content = <Quiz questionsList={questionsList} />;
    } else {
      content = (
        <QuizChoice
          quizList={quizList}
          uid={userInfo.uid}
          onQuizzSelection={handleQuizzSelection}
        />
      );
    }
    //sinon display login page
  } else {
    content = <Login onLogin={handleLogin} />;
  }

  //Retourner content
  return <div>{content}</div>;
}

export default App;
