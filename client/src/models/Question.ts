import { IAnswer } from "./Answer";

export interface IQuestion {
  id: number;
  categoryId: number;
  text: React.ReactNode;
  answers: IAnswer[];
  answerId: number;
}
