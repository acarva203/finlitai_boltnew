import { Course, courses } from '../data/courses';

// Financial goals that can be selected by the user
export type FinancialGoal = 
  | 'Save for emergencies'
  | 'Manage student loans'
  | 'Build credit'
  | 'Learn investing basics'
  | 'Make extra income'
  | 'Create a budget'
  | 'Improve spending habits'
  | 'Understand taxes';

// Experience levels that can be selected by the user
export type ExperienceLevel = 'None' | 'Some' | 'Moderate' | 'Extensive';

// User preferences used for course recommendations
export interface UserPreferences {
  goals: FinancialGoal[];
  experience: ExperienceLevel;
  timeAvailable: number; // hours per week
  learningStyle: 'Visual' | 'Practical' | 'Reading' | 'Interactive';
}

// Map goals to relevant course topics
const goalToTopicsMap: Record<FinancialGoal, string[]> = {
  'Save for emergencies': ['Saving', 'Budgeting', 'Financial Goals'],
  'Manage student loans': ['Student Loans', 'Debt Repayment Strategies', 'Interest Calculations'],
  'Build credit': ['Credit Reports', 'Credit Utilization', 'Payment History', 'Credit Building'],
  'Learn investing basics': ['Stocks', 'Bonds', 'ETFs', 'Compound Interest', 'Risk Management'],
  'Make extra income': ['Freelancing', 'Online Platforms', 'Time Management', 'Tax Considerations'],
  'Create a budget': ['Budgeting', 'Expense Tracking', 'Financial Goals', 'Banking Basics'],
  'Improve spending habits': ['Needs vs. Wants', 'Impulse Control', 'Value Shopping', 'Expense Tracking'],
  'Understand taxes': ['Income Tax', 'Tax Forms', 'Deductions', 'Credits', 'Filing Status']
};

// Map experience levels to course levels
const experienceToLevelMap: Record<ExperienceLevel, ('Beginner' | 'Intermediate' | 'Advanced')[]> = {
  'None': ['Beginner'],
  'Some': ['Beginner', 'Intermediate'],
  'Moderate': ['Intermediate', 'Advanced'],
  'Extensive': ['Advanced', 'Intermediate']
};

/**
 * Recommends courses based on user preferences
 */
export function recommendCourses(preferences: UserPreferences): Course[] {
  // Extract relevant topics based on user goals
  const relevantTopics = preferences.goals.flatMap(goal => goalToTopicsMap[goal]);
  
  // Determine appropriate course levels based on experience
  const appropriateLevels = experienceToLevelMap[preferences.experience];
  
  // Score each course based on relevance to user preferences
  const scoredCourses = courses.map(course => {
    let score = 0;
    
    // Score based on matching topics
    const matchingTopics = course.topics.filter(topic => 
      relevantTopics.includes(topic)
    );
    score += matchingTopics.length * 3; // Higher weight for topic matches
    
    // Score based on appropriate level
    if (appropriateLevels.includes(course.level)) {
      score += 2;
    }
    
    // Score based on time commitment
    // Assuming shorter courses (fewer weeks) are better for those with less time
    const weeksToDuration = parseInt(course.duration.split(' ')[0]);
    if (preferences.timeAvailable < 3 && weeksToDuration <= 3) {
      score += 1;
    } else if (preferences.timeAvailable >= 3 && preferences.timeAvailable <= 5 && weeksToDuration <= 5) {
      score += 1;
    } else if (preferences.timeAvailable > 5) {
      // More time available, so duration is less of a constraint
      score += 0.5;
    }
    
    // Add slight boost for popular courses with high completion rates
    score += (course.popularity / 100) + (course.completionRate / 100);
    
    return { course, score };
  });
  
  // Sort by score (descending) and return top results
  return scoredCourses
    .sort((a, b) => b.score - a.score)
    .map(item => item.course)
    .slice(0, 4); // Return top 4 recommendations
}