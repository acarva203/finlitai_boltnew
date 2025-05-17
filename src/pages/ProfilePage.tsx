import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Award, 
  BookOpen, 
  Settings, 
  Bell, 
  LogOut, 
  Edit, 
  Star,
  CheckCircle,
  Clock,
  BarChart
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'courses' | 'achievements' | 'settings'>('profile');
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="md:w-1/4">
          <div className="card text-center mb-6">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-1">Taylor Smith</h2>
            <p className="text-gray-500 mb-4">College Sophomore</p>
            
            <div className="flex justify-center space-x-2 mb-4">
              <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                7-Day Streak
              </div>
              <div className="bg-success-100 text-success-800 text-xs font-medium px-2 py-1 rounded-full">
                4 Courses
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">85%</div>
                  <div className="text-xs text-gray-500">Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">12</div>
                  <div className="text-xs text-gray-500">Goals Set</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">7</div>
                  <div className="text-xs text-gray-500">Badges</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="card overflow-hidden">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center w-full p-3 text-left transition-colors ${
                activeTab === 'profile'
                  ? 'bg-primary-50 text-primary-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <User className="w-5 h-5 mr-3" />
              <span>Profile Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex items-center w-full p-3 text-left transition-colors ${
                activeTab === 'courses'
                  ? 'bg-primary-50 text-primary-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-3" />
              <span>My Courses</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex items-center w-full p-3 text-left transition-colors ${
                activeTab === 'achievements'
                  ? 'bg-primary-50 text-primary-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <Award className="w-5 h-5 mr-3" />
              <span>Achievements</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full p-3 text-left transition-colors ${
                activeTab === 'settings'
                  ? 'bg-primary-50 text-primary-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </button>
            <button
              className="flex items-center w-full p-3 text-left text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          {/* Profile Overview Tab */}
          {activeTab === 'profile' && (
            <div>
              <div className="card mb-8">
                <h2 className="text-xl font-bold mb-6">Profile Overview</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Learning Focus Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                        Basic Finance
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                        Budgeting
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                        Credit Scores
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                        Student Loans
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Financial Goals</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Build Emergency Fund</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-success-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Create Monthly Budget</span>
                          <span>33%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Learning Statistics</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800">42</div>
                        <div className="text-xs text-gray-500">Hours Spent</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800">16</div>
                        <div className="text-xs text-gray-500">Lessons Completed</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800">8</div>
                        <div className="text-xs text-gray-500">Quiz Score Avg.</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800">2</div>
                        <div className="text-xs text-gray-500">Study Buddies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card mb-8">
                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium">Completed "Creating Your First Budget" lesson</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-success-100 p-2 rounded-full mr-3">
                      <Award className="w-5 h-5 text-success-600" />
                    </div>
                    <div>
                      <p className="font-medium">Earned "Perfect Quiz" badge</p>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary-100 p-2 rounded-full mr-3">
                      <BookOpen className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <p className="font-medium">Started "Smart Spending Habits" course</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent-100 p-2 rounded-full mr-3">
                      <User className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="font-medium">Connected with Alex T. as a study buddy</p>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Upcoming Deadlines</h2>
                  <button className="text-sm text-primary-600 hover:text-primary-700">View All</button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-warning-100 p-2 rounded-full mr-3">
                        <Clock className="w-5 h-5 text-warning-600" />
                      </div>
                      <div>
                        <p className="font-medium">Track Expenses Assignment</p>
                        <p className="text-sm text-gray-500">Money Basics 101</p>
                      </div>
                    </div>
                    <div className="text-warning-600 text-sm font-medium">
                      Due in 2 days
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-secondary-100 p-2 rounded-full mr-3">
                        <BarChart className="w-5 h-5 text-secondary-600" />
                      </div>
                      <div>
                        <p className="font-medium">Budget Analysis Quiz</p>
                        <p className="text-sm text-gray-500">Smart Spending Habits</p>
                      </div>
                    </div>
                    <div className="text-secondary-600 text-sm font-medium">
                      Due in 5 days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">My Courses</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">In Progress</h3>
                
                <div className="space-y-4">
                  <div className="card p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <img 
                        src="https://images.pexels.com/photos/9660/business-money-pink-coins.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Course" 
                        className="w-full sm:w-32 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                      />
                      <div className="flex-grow">
                        <h4 className="font-medium mb-1">Money Basics 101</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-success-100 text-success-800 px-2 py-0.5 rounded-full">
                            Beginner
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            4 weeks
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>68%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Last activity: 2 hours ago</span>
                          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <img 
                        src="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Course" 
                        className="w-full sm:w-32 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                      />
                      <div className="flex-grow">
                        <h4 className="font-medium mb-1">Smart Spending Habits</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-success-100 text-success-800 px-2 py-0.5 rounded-full">
                            Beginner
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            3 weeks
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>25%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Last activity: 3 days ago</span>
                          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Completed</h3>
                
                <div className="space-y-4">
                  <div className="card p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <img 
                        src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Course" 
                        className="w-full sm:w-32 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                      />
                      <div className="flex-grow">
                        <h4 className="font-medium mb-1">Developing a Healthy Financial Mindset</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-success-100 text-success-800 px-2 py-0.5 rounded-full">
                            Beginner
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            4 weeks
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Completed on</span>
                            <span className="text-success-600">Oct 15, 2023</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-success-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400" />
                          </div>
                          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <img 
                        src="https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Course" 
                        className="w-full sm:w-32 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                      />
                      <div className="flex-grow">
                        <h4 className="font-medium mb-1">Side Hustle Starter Guide</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-success-100 text-success-800 px-2 py-0.5 rounded-full">
                            Beginner
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            3 weeks
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Completed on</span>
                            <span className="text-success-600">Sep 30, 2023</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-success-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <Star className="w-4 h-4 text-gray-300" />
                          </div>
                          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Recommended For You</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="card p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">Investment Basics for Beginners</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Learn the fundamentals of investing, different investment options, and how to start building wealth for your future.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-secondary-100 text-secondary-800 px-2 py-0.5 rounded-full">
                        Intermediate
                      </span>
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Enroll
                      </button>
                    </div>
                  </div>
                  
                  <div className="card p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">Credit Score Mastery</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Understand what makes up your credit score, how to build good credit, and why it matters for your financial future.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-secondary-100 text-secondary-800 px-2 py-0.5 rounded-full">
                        Intermediate
                      </span>
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Achievements</h2>
              
              <div className="card mb-8">
                <h3 className="text-lg font-semibold mb-4">Badges Earned</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-8 h-8 text-success-600" />
                    </div>
                    <h4 className="font-medium text-sm">First Course</h4>
                    <p className="text-xs text-gray-500">Sep 15, 2023</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-medium text-sm">5-Day Streak</h4>
                    <p className="text-xs text-gray-500">Nov 2, 2023</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Check className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h4 className="font-medium text-sm">Perfect Quiz</h4>
                    <p className="text-xs text-gray-500">Nov 5, 2023</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-8 h-8 text-accent-600" />
                    </div>
                    <h4 className="font-medium text-sm">Fast Learner</h4>
                    <p className="text-xs text-gray-500">Oct 22, 2023</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-warning-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-8 h-8 text-warning-600" />
                    </div>
                    <h4 className="font-medium text-sm">Social Learner</h4>
                    <p className="text-xs text-gray-500">Nov 1, 2023</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-medium text-sm">Goal Setter</h4>
                    <p className="text-xs text-gray-500">Oct 18, 2023</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="w-8 h-8 text-success-600" />
                    </div>
                    <h4 className="font-medium text-sm">Reviewer</h4>
                    <p className="text-xs text-gray-500">Oct 16, 2023</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Badges to Earn</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <div className="text-center opacity-40">
                    <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-sm">10-Day Streak</h4>
                    <p className="text-xs text-gray-500">In progress: 7/10</p>
                  </div>
                  
                  <div className="text-center opacity-40">
                    <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-sm">Course Champion</h4>
                    <p className="text-xs text-gray-500">Complete 5 courses</p>
                  </div>
                  
                  <div className="text-center opacity-40">
                    <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-sm">Budget Master</h4>
                    <p className="text-xs text-gray-500">Create a complete budget</p>
                  </div>
                  
                  <div className="text-center opacity-40">
                    <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-sm">Team Player</h4>
                    <p className="text-xs text-gray-500">Study with 3+ buddies</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Certificates</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Developing a Healthy Financial Mindset</h4>
                        <p className="text-sm text-gray-500">Completed Oct 15, 2023</p>
                      </div>
                      <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Side Hustle Starter Guide</h4>
                        <p className="text-sm text-gray-500">Completed Sep 30, 2023</p>
                      </div>
                      <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6">
                    <p className="text-gray-500 mb-4">Complete your current courses to earn more certificates!</p>
                    <div className="flex justify-center">
                      <div className="w-32 h-1 bg-primary-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              
              <div className="card mb-8">
                <h3 className="font-semibold mb-4">Profile Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Taylor Smith"
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue="taylor@example.com"
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                    <select className="input">
                      <option>College (Undergraduate)</option>
                      <option>High School</option>
                      <option>College (Graduate)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea
                      rows={3}
                      defaultValue="College sophomore interested in building financial literacy skills while studying."
                      className="input"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
              
              <div className="card mb-8">
                <h3 className="font-semibold mb-4">Notifications</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Course Reminders</p>
                      <p className="text-sm text-gray-500">Get reminders for upcoming lessons and assignments</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Study Buddy Messages</p>
                      <p className="text-sm text-gray-500">Get notified when you receive messages from study buddies</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Achievement Alerts</p>
                      <p className="text-sm text-gray-500">Get notified when you earn badges or certificates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive a weekly summary of your progress</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn btn-primary">
                    Save Preferences
                  </button>
                </div>
              </div>
              
              <div className="card">
                <h3 className="font-semibold mb-4">Account Security</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="input"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn btn-primary">
                    Update Password
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-red-600 mb-2">Danger Zone</h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="btn bg-white border border-red-300 text-red-600 hover:bg-red-50">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;