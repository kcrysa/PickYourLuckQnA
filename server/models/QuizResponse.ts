export interface QuizResponse {
  questionNumber: number;
  correctAnswer: number;
  selectedAnswer: number;
  categoryId: number;
  isCorrect: boolean;
  aborted: boolean;
  date: string;
}
