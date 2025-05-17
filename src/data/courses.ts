export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  imageUrl: string;
  popularity: number;
  completionRate: number;
}

export const courses: Course[] = [
  {
    id: 'money-basics-101',
    title: 'Money Basics 101',
    description: 'Learn the foundations of personal finance, including budgeting, saving, and understanding how money works in everyday life.',
    level: 'Beginner',
    duration: '4 weeks',
    topics: ['Budgeting', 'Saving', 'Banking Basics', 'Financial Goals'],
    imageUrl: 'https://images.pexels.com/photos/9660/business-money-pink-coins.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 98,
    completionRate: 85
  },
  {
    id: 'smart-spending-habits',
    title: 'Smart Spending Habits',
    description: 'Develop healthy spending habits and learn how to make thoughtful purchasing decisions that align with your financial goals.',
    level: 'Beginner',
    duration: '3 weeks',
    topics: ['Needs vs. Wants', 'Impulse Control', 'Value Shopping', 'Expense Tracking'],
    imageUrl: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 92,
    completionRate: 78
  },
  {
    id: 'debt-management',
    title: 'Debt Management for Students',
    description: 'Understand different types of debt, learn strategies to manage student loans, and create a plan to avoid unnecessary debt.',
    level: 'Intermediate',
    duration: '5 weeks',
    topics: ['Student Loans', 'Credit Cards', 'Debt Repayment Strategies', 'Interest Calculations'],
    imageUrl: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 85,
    completionRate: 72
  },
  {
    id: 'investment-basics',
    title: 'Investment Basics for Beginners',
    description: 'Learn the fundamentals of investing, different investment options, and how to start building wealth for your future.',
    level: 'Intermediate',
    duration: '6 weeks',
    topics: ['Stocks', 'Bonds', 'ETFs', 'Compound Interest', 'Risk Management'],
    imageUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 78,
    completionRate: 65
  },
  {
    id: 'credit-score-mastery',
    title: 'Credit Score Mastery',
    description: 'Understand what makes up your credit score, how to build good credit, and why it matters for your financial future.',
    level: 'Intermediate',
    duration: '4 weeks',
    topics: ['Credit Reports', 'Credit Utilization', 'Payment History', 'Credit Building'],
    imageUrl: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 82,
    completionRate: 70
  },
  {
    id: 'side-hustle-starter',
    title: 'Side Hustle Starter Guide',
    description: 'Discover ways to earn extra income, explore entrepreneurship opportunities, and learn how to manage your side income effectively.',
    level: 'Beginner',
    duration: '3 weeks',
    topics: ['Freelancing', 'Online Platforms', 'Time Management', 'Tax Considerations'],
    imageUrl: 'https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 90,
    completionRate: 75
  },
  {
    id: 'financial-mindset',
    title: 'Developing a Healthy Financial Mindset',
    description: 'Build a positive relationship with money by understanding financial psychology and developing habits that lead to financial well-being.',
    level: 'Beginner',
    duration: '4 weeks',
    topics: ['Money Scripts', 'Financial Behaviors', 'Goal Setting', 'Financial Well-being'],
    imageUrl: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 86,
    completionRate: 80
  },
  {
    id: 'tax-basics',
    title: 'Tax Basics for Young Adults',
    description: 'Learn the fundamentals of income taxes, deductions, credits, and how to prepare for tax season with confidence.',
    level: 'Advanced',
    duration: '5 weeks',
    topics: ['Income Tax', 'Tax Forms', 'Deductions', 'Credits', 'Filing Status'],
    imageUrl: 'https://images.pexels.com/photos/5668394/pexels-photo-5668394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popularity: 75,
    completionRate: 68
  }
];