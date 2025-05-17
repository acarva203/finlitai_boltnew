import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Award, 
  Users, 
  CheckCircle2, 
  Calendar, 
  BookOpen, 
  PlusCircle,
  ArrowLeft, 
  Share2 
} from 'lucide-react';
import { courses, Course } from '../data/courses';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const foundCourse = courses.find(c => c.id === id) || null;
      setCourse(foundCourse);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In a real app, this would send a request to the backend
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <div className="h-8 w-48 bg-gray-200 rounded-lg mx-auto"></div>
          </div>
          <p className="text-gray-500">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the course you're looking for.
          </p>
          <Link to="/courses" className="btn btn-primary">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  // Sample syllabus modules
  const syllabus = [
    {
      title: 'Introduction to the Course',
      lessons: [
        'Welcome and Course Overview',
        'Understanding Your Financial Journey',
        'Setting Achievable Financial Goals'
      ]
    },
    {
      title: 'Core Concepts',
      lessons: [
        'Key Financial Terminology',
        'Understanding Income and Expenses',
        'The Power of Compound Interest',
        'Risk vs. Reward: Basic Principles'
      ]
    },
    {
      title: 'Practical Applications',
      lessons: [
        'Building Your First Budget',
        'Tracking Expenses Like a Pro',
        'Saving Strategies for Students',
        'Hands-on Exercise: Financial Planning'
      ]
    },
    {
      title: 'Advanced Topics',
      lessons: [
        'Long-term Financial Planning',
        'Introduction to Investments',
        'Dealing with Financial Setbacks',
        'Final Project: Personal Financial Plan'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button */}
      <div className="mb-6">
        <Link to="/courses" className="inline-flex items-center text-primary-600 hover:text-primary-700">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to courses
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Course header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                course.level === 'Beginner' 
                  ? 'bg-success-100 text-success-800' 
                  : course.level === 'Intermediate'
                    ? 'bg-secondary-100 text-secondary-800'
                    : 'bg-accent-100 text-accent-800'
              }`}>
                {course.level}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {course.duration}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800 flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {course.popularity}% Popularity
              </span>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">
              {course.description}
            </p>
            
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img 
                src={course.imageUrl} 
                alt={course.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
          
          {/* Course content */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Course syllabus */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
            
            <div className="space-y-4">
              {syllabus.map((module, moduleIndex) => (
                <div key={moduleIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 flex items-center justify-between cursor-pointer">
                    <h3 className="font-medium">
                      Module {moduleIndex + 1}: {module.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {module.lessons.length} lessons
                    </span>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start">
                          <div className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-xs">{lessonIndex + 1}</span>
                          </div>
                          <span className="text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Course requirements */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Requirements</h2>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>No prior financial knowledge required - this course is designed for beginners</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Basic math skills for simple calculations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Willingness to apply concepts to your own financial situation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>2-3 hours per week to review materials and complete exercises</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="card bg-white shadow-md mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-gray-600">Enroll now and begin your journey to financial confidence</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <span className="block font-medium">Course Duration</span>
                    <span className="text-gray-600">{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <span className="block font-medium">Start Anytime</span>
                    <span className="text-gray-600">Self-paced learning</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <span className="block font-medium">Certificate</span>
                    <span className="text-gray-600">Upon completion</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <span className="block font-medium">Includes</span>
                    <span className="text-gray-600">Videos, readings, quizzes, and exercises</span>
                  </div>
                </div>
              </div>
              
              {isEnrolled ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success-50 border border-success-200 p-4 rounded-lg text-center text-success-800 mb-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-success-500 mx-auto mb-2" />
                  <p className="font-medium">You're enrolled!</p>
                  <p className="text-sm">Access course materials in your learning dashboard</p>
                </motion.div>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="w-full btn bg-primary-600 text-white hover:bg-primary-700 mb-4"
                >
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Enroll Now - Free
                </button>
              )}
              
              <button className="w-full btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                <Share2 className="w-5 h-5 mr-2" />
                Share Course
              </button>
            </div>
            
            <div className="card bg-accent-50 border border-accent-100">
              <h3 className="font-semibold mb-4 text-accent-800">Accountability Partner</h3>
              <p className="text-accent-700 mb-4">
                Studies show that learning with a buddy increases course completion rates by 85%!
              </p>
              <Link to="/accountability" className="btn w-full bg-accent-600 text-white hover:bg-accent-700">
                Find a Study Buddy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;