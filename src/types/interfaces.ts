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

export interface Comment {
  sender: string;
  text: string;
  date: string;
  replies: Comment[];
}

export interface BlogCard {
  id: number;
  category: string;
  title: string;
  author: string;
  comments: Comment[];
}

export interface Blog extends BlogCard {
  text: string;
  readTime: number;
  date: string;
  likeNum: number;
}
