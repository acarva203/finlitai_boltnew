import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses, Course } from '../data/courses';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'popularity' | 'newest'>('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Filter courses based on search term and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = selectedLevel === null || course.level === selectedLevel;
    
    const matchesDuration = selectedDuration === null || 
                          (selectedDuration === 'short' && parseInt(course.duration.split(' ')[0]) <= 3) ||
                          (selectedDuration === 'medium' && parseInt(course.duration.split(' ')[0]) > 3 && parseInt(course.duration.split(' ')[0]) <= 5) ||
                          (selectedDuration === 'long' && parseInt(course.duration.split(' ')[0]) > 5);
    
    return matchesSearch && matchesLevel && matchesDuration;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'popularity') {
      return b.popularity - a.popularity;
    } else {
      // In a real app, this would be based on a date field
      // For demo purposes, we'll just randomize it
      return 0.5 - Math.random();
    }
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSelectedLevel(null);
    setSelectedDuration(null);
    setSortBy('popularity');
    setSearchTerm('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Financial Literacy Courses</h1>
        <p className="text-gray-600 text-lg">
          Browse our collection of courses designed to help students build financial confidence and skills.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search bar */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses, topics, or keywords..."
              className="input pl-10 py-3"
            />
          </div>
          
          <button
            onClick={toggleFilters}
            className="flex items-center btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 md:ml-4"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
        
        {/* Expanded filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty Level</label>
                <div className="flex flex-wrap gap-2">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedLevel === level
                          ? 'bg-primary-500 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Duration</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedDuration(selectedDuration === 'short' ? null : 'short')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedDuration === 'short'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Short (1-3 weeks)
                  </button>
                  <button
                    onClick={() => setSelectedDuration(selectedDuration === 'medium' ? null : 'medium')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedDuration === 'medium'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Medium (4-5 weeks)
                  </button>
                  <button
                    onClick={() => setSelectedDuration(selectedDuration === 'long' ? null : 'long')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedDuration === 'long'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Long (6+ weeks)
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortBy('popularity')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      sortBy === 'popularity'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Most Popular
                  </button>
                  <button
                    onClick={() => setSortBy('newest')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      sortBy === 'newest'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Newest
                  </button>
                </div>
              </div>
              
              <button
                onClick={resetFilters}
                className="mt-4 md:mt-0 text-sm text-gray-600 hover:text-primary-600 underline"
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
      
      {sortedCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4">
            <Search className="h-12 w-12 text-gray-400 mx-auto" />
          </div>
          <h3 className="text-xl font-medium mb-2">No courses found</h3>
          <p className="text-gray-500 mb-4">
            We couldn't find any courses matching your search criteria.
          </p>
          <button
            onClick={resetFilters}
            className="btn btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;