import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Bell, 
  Users, 
  BarChart, 
  Clock, 
  Check, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  X
} from 'lucide-react';

const AccountabilityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'study-buddies' | 'goals'>('dashboard');
  const [showBuddyModal, setShowBuddyModal] = useState(false);
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Your Accountability Center</h1>
        <p className="text-gray-600 text-lg">
          Track your progress, connect with study buddies, and stay motivated on your financial learning journey.
        </p>
      </div>
      
      {/* Tab navigation */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'dashboard'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <BarChart className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('study-buddies')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'study-buddies'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Users className="w-5 h-5 mr-2" />
            Study Buddies
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'goals'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Financial Goals
          </button>
        </nav>
      </div>
      
      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div>
          {/* Progress Overview */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6">Your Progress Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Courses in Progress</h3>
                    <p className="text-sm text-gray-500">Currently active courses</p>
                  </div>
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Money Basics 101</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Smart Spending Habits</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Study Streak</h3>
                    <p className="text-sm text-gray-500">Consecutive days of learning</p>
                  </div>
                  <span className="text-2xl font-bold text-success-600">7</span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <span className="text-xs text-gray-500">{day}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                        index <= 6 ? 'bg-success-100 text-success-700' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {index <= 6 ? <Check className="w-4 h-4" /> : ''}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <Award className="w-4 h-4 inline mr-1 text-secondary-500" />
                    Keep going! You'll earn a badge at 10 days.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">This Week's Goals</h3>
                    <p className="text-sm text-gray-500">Your learning targets</p>
                  </div>
                  <span className="text-2xl font-bold text-secondary-600">2/4</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success-100 text-success-600 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-gray-600 line-through">Complete Module 3 of Money Basics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success-100 text-success-600 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-gray-600 line-through">Create monthly budget spreadsheet</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span className="w-3 h-3" />
                    </span>
                    <span>Finish Smart Spending quiz</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span className="w-3 h-3" />
                    </span>
                    <span>Schedule study session with buddy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Upcoming Sessions */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6">Upcoming Sessions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Study Session: Budgeting Basics</h3>
                    <p className="text-sm text-gray-500">Tomorrow, 4:00 PM - 5:00 PM</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Study buddy"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-secondary-600">+1</span>
                    </div>
                  </div>
                  <button className="text-sm text-primary-600 hover:text-primary-700">View Details</button>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-center">
                  <div className="bg-secondary-100 rounded-lg p-3 mr-4">
                    <Bell className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Assignment Due: Track Expenses</h3>
                    <p className="text-sm text-gray-500">Friday, Nov 12</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2 days remaining</span>
                  </div>
                  <button className="text-sm text-primary-600 hover:text-primary-700">View Assignment</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievement Badges */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Achievements</h2>
              <button className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="font-medium text-sm">First Course</h3>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-medium text-sm">5-Day Streak</h3>
              </div>
              <div className="text-center">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="font-medium text-sm">Perfect Quiz</h3>
              </div>
              <div className="text-center opacity-40">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium text-sm">Team Player</h3>
              </div>
              <div className="text-center opacity-40">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium text-sm">Budget Master</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Study Buddies Tab */}
      {activeTab === 'study-buddies' && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Study Buddies</h2>
              <p className="text-gray-600">Connect with peers to stay accountable and learn together.</p>
            </div>
            <button 
              onClick={() => setShowBuddyModal(true)}
              className="btn btn-primary"
            >
              Find New Buddies
            </button>
          </div>
          
          {/* Current Buddies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="card flex">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Study Buddy" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Morgan L.</h3>
                    <p className="text-sm text-gray-500">Joined 2 weeks ago</p>
                  </div>
                  <span className="bg-success-100 text-success-800 text-xs font-medium px-2 py-1 rounded-full">
                    Active Now
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Studying:</span> Money Basics 101, Smart Spending Habits
                  </p>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="btn bg-primary-50 text-primary-600 hover:bg-primary-100 text-sm py-1">
                    Message
                  </button>
                  <button className="btn bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm py-1">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card flex">
              <img 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Study Buddy" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Alex T.</h3>
                    <p className="text-sm text-gray-500">Joined 5 days ago</p>
                  </div>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                    Last active: 3h ago
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Studying:</span> Investment Basics, Credit Score Mastery
                  </p>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="btn bg-primary-50 text-primary-600 hover:bg-primary-100 text-sm py-1">
                    Message
                  </button>
                  <button className="btn bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm py-1">
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scheduled Sessions */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Upcoming Study Sessions</h2>
            
            <div className="space-y-4">
              <div className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-primary-100 rounded-lg p-3 mr-4">
                      <Calendar className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Budgeting Workshop</h3>
                      <p className="text-sm text-gray-500">Tomorrow, 4:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Study buddy"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Study buddy"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <button className="btn bg-primary-50 text-primary-600 hover:bg-primary-100">
                      Join
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-secondary-100 rounded-lg p-3 mr-4">
                      <Calendar className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Investment Basics Q&A</h3>
                      <p className="text-sm text-gray-500">Friday, 2:00 PM - 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      <img
                        src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Study buddy"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <button className="btn bg-primary-50 text-primary-600 hover:bg-primary-100">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Goals Tab */}
      {activeTab === 'goals' && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Financial Goals</h2>
              <p className="text-gray-600">Track and manage your personal finance objectives.</p>
            </div>
            <button className="btn btn-primary">
              Add New Goal
            </button>
          </div>
          
          {/* Goals List */}
          <div className="space-y-6 mb-10">
            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg mb-1">Build Emergency Fund</h3>
                  <p className="text-gray-600 mb-4">Save $1,000 for unexpected expenses</p>
                </div>
                <span className="bg-success-100 text-success-800 text-xs font-medium px-2 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span className="font-medium">70% ($700 of $1,000)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Started: Oct 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Target: Jan 15, 2024</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 flex justify-between">
                <button className="btn bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm">
                  Update Progress
                </button>
                <button className="btn bg-primary-50 text-primary-600 hover:bg-primary-100 text-sm">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg mb-1">Create a Monthly Budget</h3>
                  <p className="text-gray-600 mb-4">Track income and expenses consistently for 3 months</p>
                </div>
                <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2 py-1 rounded-full">
                  Just Started
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span className="font-medium">33% (1 of 3 months)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Started: Nov 1, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Target: Jan 31, 2024</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 flex justify-between">
                <button className="btn bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm">
                  Update Progress
                </button>
                <button className="btn bg-primary-50 text-primary-600 hover:bg-primary-100 text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Goal Ideas */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Recommended Goal Ideas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-medium">Start Investing</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Begin investing with small amounts in a low-cost index fund or ETF.
                </p>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Add This Goal
                </button>
              </div>
              
              <div className="card hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary-100 rounded-full p-2 mr-3">
                    <Check className="w-5 h-5 text-secondary-600" />
                  </div>
                  <h3 className="font-medium">Pay Down Debt</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Create a plan to systematically reduce high-interest debt.
                </p>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Add This Goal
                </button>
              </div>
              
              <div className="card hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-success-100 rounded-full p-2 mr-3">
                    <Award className="w-5 h-5 text-success-600" />
                  </div>
                  <h3 className="font-medium">Build Credit Score</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Implement strategies to improve your credit score by 50 points.
                </p>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Add This Goal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Find Study Buddy Modal */}
      {showBuddyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Find a Study Buddy</h3>
              <button 
                onClick={() => setShowBuddyModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Connect with other students who are studying the same financial topics as you.
              </p>
              
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by course, topic, or goal..."
                  className="input pl-10"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="current-courses" 
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                    defaultChecked 
                  />
                  <label htmlFor="current-courses" className="ml-2 text-sm text-gray-700">
                    Match with people studying my current courses
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="schedule" 
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded" 
                  />
                  <label htmlFor="schedule" className="ml-2 text-sm text-gray-700">
                    Match with people who have similar availability
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="goals" 
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded" 
                  />
                  <label htmlFor="goals" className="ml-2 text-sm text-gray-700">
                    Match with people who have similar financial goals
                  </label>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <h4 className="font-medium">Suggested Matches</h4>
              
              <div className="card p-4">
                <div className="flex">
                  <img 
                    src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Study Buddy" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Jamie W.</h5>
                      <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        90% Match
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Studying: Money Basics 101, Credit Score Mastery
                    </p>
                    <div className="flex space-x-2">
                      <button className="btn bg-primary-600 text-white hover:bg-primary-700 text-sm py-1 px-3">
                        Connect
                      </button>
                      <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm py-1 px-3">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-4">
                <div className="flex">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Study Buddy" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Taylor S.</h5>
                      <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        85% Match
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Studying: Smart Spending Habits, Investment Basics
                    </p>
                    <div className="flex space-x-2">
                      <button className="btn bg-primary-600 text-white hover:bg-primary-700 text-sm py-1 px-3">
                        Connect
                      </button>
                      <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm py-1 px-3">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-4">
                <div className="flex">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Study Buddy" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Jordan M.</h5>
                      <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        75% Match
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Studying: Money Basics 101, Side Hustle Starter
                    </p>
                    <div className="flex space-x-2">
                      <button className="btn bg-primary-600 text-white hover:bg-primary-700 text-sm py-1 px-3">
                        Connect
                      </button>
                      <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm py-1 px-3">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end pt-4 border-t border-gray-200">
              <button 
                onClick={() => setShowBuddyModal(false)}
                className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 mr-3"
              >
                Cancel
              </button>
              <button className="btn btn-primary">
                See More Matches
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AccountabilityPage;