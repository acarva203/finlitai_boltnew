import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BookOpen, Users, BarChart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecommendationQuiz from '../components/RecommendationQuiz';
import CourseCard from '../components/CourseCard';
import { Course } from '../data/courses';

const HomePage: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Course[] | null>(null);
  
  const handleRecommendations = (courses: Course[]) => {
    setRecommendations(courses);
  };

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Build Your Financial Future, One Lesson at a Time
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                AI-powered financial literacy courses for students, with built-in accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="btn bg-white text-primary-700 hover:bg-primary-50">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse Courses
                </Link>
                <a href="#quiz" className="btn bg-primary-700 text-white hover:bg-primary-800 border border-primary-500">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Personalized Recommendations
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-5/12"
            >
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Students learning about finance" 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-5 -left-5 bg-accent-500 text-white p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <Sparkles className="w-6 h-6 mr-2" />
                    <span className="font-bold">AI-Powered</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose FinLit AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine AI technology with proven financial education to help you build skills that last a lifetime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                Our AI analyzes your goals and learning style to recommend the perfect courses for your financial journey.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Built-in Accountability</h3>
              <p className="text-gray-600">
                Set goals, track progress, and stay motivated with reminders and milestone celebrations.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with peers, find study buddies, and learn together to increase your chances of success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Recommendation Section */}
      <section id="quiz" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Course Match</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answer a few simple questions, and our AI will recommend the best financial literacy courses for your needs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {!recommendations ? (
              <RecommendationQuiz onRecommendationsGenerated={handleRecommendations} />
            ) : (
              <div>
                <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                      <Sparkles className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-primary-800 mb-2">
                        Here are your personalized course recommendations!
                      </h3>
                      <p className="text-primary-700">
                        Based on your goals and preferences, we've found these courses that would be perfect for your financial journey.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendations.map((course, index) => (
                    <CourseCard key={course.id} course={course} isRecommended={true} />
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <button 
                    onClick={() => setRecommendations(null)}
                    className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 mr-4"
                  >
                    Retake Quiz
                  </button>
                  <Link to="/courses" className="btn btn-primary">
                    See All Courses
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform has helped thousands of students build financial confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Morgan L.</h4>
                  <p className="text-sm text-gray-500">College Sophomore</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI recommendations were spot on! I found courses that actually aligned with my goals, and the accountability features helped me stay on track."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Alex T.</h4>
                  <p className="text-sm text-gray-500">High School Senior</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I was completely new to finance, but the simple explanations made everything easy to understand. Now I feel prepared to manage my money in college."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Jamie W.</h4>
                  <p className="text-sm text-gray-500">College Junior</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Finding a study buddy through the platform made a huge difference. We keep each other accountable, and I'm finally making progress on my financial goals."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Financial Future?</h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Join thousands of students building financial confidence with personalized learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Explore All Courses
              </Link>
              <a href="#quiz" className="btn bg-primary-700 border border-primary-500 text-white hover:bg-primary-800">
                Get AI Recommendations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;