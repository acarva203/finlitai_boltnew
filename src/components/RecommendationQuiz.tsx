import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, BrainCircuit } from 'lucide-react';
import { FinancialGoal, ExperienceLevel, UserPreferences, recommendCourses } from '../utils/aiRecommendation';
import { Course } from '../data/courses';

interface RecommendationQuizProps {
  onRecommendationsGenerated: (courses: Course[]) => void;
}

const RecommendationQuiz: React.FC<RecommendationQuizProps> = ({ onRecommendationsGenerated }) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [preferences, setPreferences] = useState<UserPreferences>({
    goals: [],
    experience: 'None',
    timeAvailable: 3,
    learningStyle: 'Visual',
  });

  // Available goals for selection
  const availableGoals: FinancialGoal[] = [
    'Save for emergencies',
    'Manage student loans',
    'Build credit',
    'Learn investing basics',
    'Make extra income',
    'Create a budget',
    'Improve spending habits',
    'Understand taxes',
  ];

  // Available experience levels
  const experienceLevels: ExperienceLevel[] = ['None', 'Some', 'Moderate', 'Extensive'];

  // Handle goal selection/deselection
  const toggleGoal = (goal: FinancialGoal) => {
    setPreferences(prev => {
      if (prev.goals.includes(goal)) {
        return {
          ...prev,
          goals: prev.goals.filter(g => g !== goal),
        };
      } else {
        // Limit to 3 goals max
        if (prev.goals.length < 3) {
          return {
            ...prev,
            goals: [...prev.goals, goal],
          };
        }
        return prev;
      }
    });
  };

  // Handle experience level selection
  const selectExperience = (level: ExperienceLevel) => {
    setPreferences(prev => ({
      ...prev,
      experience: level,
    }));
  };

  // Handle time available slider change
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences(prev => ({
      ...prev,
      timeAvailable: parseInt(e.target.value),
    }));
  };

  // Handle learning style selection
  const selectLearningStyle = (style: 'Visual' | 'Practical' | 'Reading' | 'Interactive') => {
    setPreferences(prev => ({
      ...prev,
      learningStyle: style,
    }));
  };

  // Handle next step
  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      generateRecommendations();
    }
  };

  // Generate course recommendations based on preferences
  const generateRecommendations = () => {
    setIsProcessing(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const recommended = recommendCourses(preferences);
      onRecommendationsGenerated(recommended);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {isProcessing ? (
        <div className="text-center py-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="inline-block"
          >
            <BrainCircuit className="w-12 h-12 text-primary-500" />
          </motion.div>
          <h3 className="text-lg font-medium mt-4 mb-2">Finding your perfect courses...</h3>
          <p className="text-gray-500">Our AI is analyzing your preferences to find the best matches for your financial learning journey.</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Find Your Perfect Financial Course</h2>
              <div className="text-sm text-gray-500">Step {step} of 4</div>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4">What are your financial goals?</h3>
              <p className="text-gray-500 mb-4">Select up to 3 goals that matter most to you right now.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {availableGoals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      preferences.goals.includes(goal)
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4">What's your financial knowledge level?</h3>
              <p className="text-gray-500 mb-4">Select the option that best describes your current understanding.</p>
              
              <div className="space-y-3 mb-6">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => selectExperience(level)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      preferences.experience === level
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{level}</span>
                    <span className="block text-sm mt-1">
                      {level === 'None' && "I'm completely new to financial topics"}
                      {level === 'Some' && "I understand basic concepts like budgeting"}
                      {level === 'Moderate' && "I'm comfortable with most financial topics"}
                      {level === 'Extensive' && "I have advanced knowledge and looking to deepen it"}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4">How much time can you commit per week?</h3>
              <p className="text-gray-500 mb-4">This helps us recommend courses that fit your schedule.</p>
              
              <div className="px-2 mb-6">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={preferences.timeAvailable}
                  onChange={handleTimeChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 hour</span>
                  <span>5 hours</span>
                  <span>10+ hours</span>
                </div>
                
                <div className="text-center mt-4">
                  <span className="text-lg font-medium text-primary-600">{preferences.timeAvailable} hours</span>
                  <p className="text-sm text-gray-500 mt-1">per week</p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4">How do you prefer to learn?</h3>
              <p className="text-gray-500 mb-4">Select the learning style that works best for you.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {(['Visual', 'Practical', 'Reading', 'Interactive'] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => selectLearningStyle(style)}
                    className={`p-4 rounded-lg border transition-all ${
                      preferences.learningStyle === style
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{style}</div>
                    <div className="text-sm mt-1">
                      {style === 'Visual' && "I learn best through videos and diagrams"}
                      {style === 'Practical' && "I prefer hands-on exercises and examples"}
                      {style === 'Reading' && "I enjoy reading articles and books"}
                      {style === 'Interactive' && "I like quizzes, games, and discussions"}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            <button
              onClick={handleNextStep}
              disabled={step === 1 && preferences.goals.length === 0}
              className={`btn btn-primary flex items-center ${
                step === 1 && preferences.goals.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {step === 4 ? (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Find Courses
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendationQuiz;