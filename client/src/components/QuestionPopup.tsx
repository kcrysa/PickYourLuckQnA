import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  colors,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import _ from "lodash";
import { FC, useCallback, useEffect, useState } from "react";
import { IAnswer } from "../models/Answer";
import { IQuestion } from "../models/Question";
import { CloseIcon } from "./icons/CloseIcon";

interface IQuestionPopup {
  open: boolean;
  question: IQuestion;
  handleQuizEnd: (answerId: number, callback: Function) => void;
  handleCancel: () => void;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const QuestionPopup: FC<IQuestionPopup> = ({
  open,
  question,
  handleQuizEnd,
  handleCancel,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>();
  const [shuffledAnswers, setShuffledAnswers] = useState<IAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setSelectedAnswer(null);
      setIsSubmitted(false);
      setShuffledAnswers(_.shuffle(question.answers));
    }
  }, [open, question.answers]);

  useEffect(() => {
    if (isSubmitted && selectedAnswer !== null) {
      setTimeout(() => {
        handleQuizEnd(selectedAnswer!, quizEndCallback);
      }, 4000);
    }
  }, [isSubmitted, selectedAnswer]);

  const quizEndCallback = () => {
    setIsSubmitted(false);
    setSelectedAnswer(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(Number((event.target as HTMLInputElement).value));
  };

  const handleModalClose = (event: {}, reason: string) => {
    if (reason === "backdropClick") {
      return;
    }
    handleCancel();
  };

  return (
    <Dialog
      open={open}
      onClose={handleModalClose}
      fullWidth
      disableEscapeKeyDown
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: colors.common.black,
          color: colors.common.white,
        },
      }}
    >
      <DialogTitle>
        <IconButton
          disabled={isSubmitted}
          onClick={(event: any) => handleModalClose(event, "closeButton")}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div style={{ fontSize: "1.2em", marginBottom: "20px" }}>
          {question.text}
        </div>
        <FormControl>
          <RadioGroup
            name="answers-group"
            value={selectedAnswer}
            onChange={handleChange}
          >
            {shuffledAnswers.map((answer: IAnswer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                label={answer.text}
                control={
                  <Radio
                    disabled={isSubmitted}
                    sx={{
                      color:
                        isSubmitted && question.answerId === answer.id
                          ? colors.green[800]
                          : colors.grey[400],
                      "&.Mui-checked": {
                        color:
                          isSubmitted && question.answerId === answer.id
                            ? colors.green[800]
                            : colors.grey[400],
                      },
                      "&.Mui-disabled": {
                        color:
                          isSubmitted && question.answerId === answer.id
                            ? colors.green[300]
                            : colors.grey[700],
                      },
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-around" }}>
        {!isSubmitted && (
          <ColorButton
            variant="contained"
            size="large"
            className="submit-button"
            onClick={() => setIsSubmitted(true)}
            disabled={selectedAnswer === null}
          >
            Submit
          </ColorButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default QuestionPopup;
