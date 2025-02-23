export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  message: string;
  timestamp: string;
}

const testimonials: Review[] = [
  {
    id: 1,
    name: "Suv Patra",
    role: "Founder",
    company: "Sondor Life Inc.",
    avatar: "",
    message:
      "Working with you has been a game-changer for our platform. Your technical expertise and problem-solving skills are outstanding!",
    timestamp: "Feb 2024",
  },
];

export default testimonials;
