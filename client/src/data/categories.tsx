import { AlgorithmIcon } from "../components/icons/AlgorithmIcon";
import { BrainTeaserIcon } from "../components/icons/BrainTeaserIcon";
import { CloudComputingIcon } from "../components/icons/CloudComputingIcon";
import { DatabaseIcon } from "../components/icons/DatabaseIcon";
import { DetectiveIcon } from "../components/icons/DetectiveIcon";
import { LuckyIcon } from "../components/icons/LuckyIcon";
import { StylingIcon } from "../components/icons/StylingIcon";
import { TheoryIcon } from "../components/icons/TheoryIcon";
import { TriviaIcon } from "../components/icons/TriviaIcon";
import { Category } from "../models/Category";

export const categories: Category[] = [
  {
    id: 1,
    name: "_VOIS Trivia",
    description: "Do you know about _VOIS? This is your chance to prove it!",
    icon: <TriviaIcon iconStyle={{ width: "5em", height: "5em" }} />,
  },
  {
    id: 2,
    name: "Brain Teasers",
    description:
      "Misleading puzzling questions posed as problems to be solved.",
    icon: <BrainTeaserIcon iconStyle={{ width: "4em", height: "5em" }} />,
  },
  {
    id: 3,
    name: "Databases",
    description: "Organizing your stuff so you can easily find it later.",
    icon: <DatabaseIcon iconStyle={{ width: "4em", height: "5em" }} />,
  },
  {
    id: 4,
    name: "Debugging",
    description:
      "Being the detective in a crime where you are also the criminal.",
    icon: <DetectiveIcon iconStyle={{ width: "4em", height: "5em" }} />,
  },
  {
    id: 5,
    name: "Styling",
    description: "Because HTML is not enough. Who wouldn't want to fix this?",
    icon: <StylingIcon iconStyle={{ width: "5em", height: "5em" }} />,
  },
  {
    id: 6,
    name: "Theory",
    description: "When you know everything, but nothing works.",
    icon: <TheoryIcon iconStyle={{ width: "4em", height: "5em" }} />,
  },
];
