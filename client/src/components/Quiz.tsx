import { Grid, IconButton, Paper, Typography, colors } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import "../App.css";
import { categories } from "../data/categories";
import { questions } from "../data/questions";
import { Category } from "../models/Category";
import { IQuestion } from "../models/Question";
import { IQuizResponse } from "../models/QuizResponse";
import QuestionPopup from "./QuestionPopup";
import QuizResult from "./QuizResult";

const Quiz: React.FC = () => {
  const [questionPopupOpen, setQuestionPopupOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<number | null>(null);
  const [question, setQuestion] = useState<IQuestion | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const onShowQuestionHandler = (option: number) => {
    let questionsByCategory = questions.filter(
      (question: IQuestion) => question.categoryId === option
    );

    const questionNumber = Math.floor(
      Math.random() * questionsByCategory.length
    );

    setCategory(option);
    setQuestion(questionsByCategory[questionNumber]);
    setQuestionPopupOpen(true);
  };

  const onQuizEndHandler = async (answerId: number, callback: Function) => {
    const isCorrect = question!.answerId === answerId;

    const quizResponse: IQuizResponse = {
      questionNumber: question!.id,
      correctAnswer: question!.answerId,
      selectedAnswer: answerId,
      categoryId: category!,
      isCorrect: isCorrect,
      aborted: false,
      date: moment().format("DD.MM.YYYY HH:mm:ss"),
    };
    await axios.post("/api/responses", quizResponse);

    setQuestionPopupOpen(false);
    setQuestion(null);
    setIsCorrectAnswer(isCorrect);

    setTimeout(() => {
      setCategory(null);
      setIsCorrectAnswer(null);
      callback();
    }, 8000);
  };

  const onQuizCancel = async () => {
    const quizResponse: IQuizResponse = {
      questionNumber: question!.id,
      correctAnswer: question!.answerId,
      selectedAnswer: 0,
      categoryId: category!,
      isCorrect: false,
      aborted: true,
      date: moment().format("DD.MM.YYYY HH:mm:ss"),
    };
    await axios.post("/api/responses", quizResponse);

    setQuestionPopupOpen(false);
    setQuestion(null);
  };

  return (
    <div className="content">
      {isCorrectAnswer === null && (
        <Grid
          container
          maxWidth="80%"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 20,
          }}
          padding="50px"
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {categories.map((category: Category) => (
            <Grid item lg={4} xs={6} padding={2} key={category.id}>
              <IconButton
                onClick={() => onShowQuestionHandler(category.id)}
                style={{ height: "90%" }}
              >
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: colors.common.white,
                    color: colors.common.black,
                    padding: 20,
                    height: "100%",
                  }}
                >
                  <Stack direction="column">
                    <Typography variant="h4" color="#E60000">
                      {category.name}
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h6" style={{ maxWidth: "60%" }}>
                        {category.description}
                      </Typography>
                      {category.icon}
                    </Stack>
                  </Stack>
                </Paper>
              </IconButton>
            </Grid>
          ))}
        </Grid>
      )}
      {question && (
        <QuestionPopup
          open={questionPopupOpen}
          question={question}
          handleQuizEnd={onQuizEndHandler}
          handleCancel={onQuizCancel}
        />
      )}
      {isCorrectAnswer !== null && (
        <QuizResult isCorrectAnswer={isCorrectAnswer} />
      )}
    </div>
  );
};

export default Quiz;
