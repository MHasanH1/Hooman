export interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export interface FaqProps {
  question: string;
  answer: string;
  isOpen: boolean;
  index: number;
}