import { Review } from '../home/home';

export interface ReviewFormProps {
  onSubmit: (newReview: Review) => void;
}
