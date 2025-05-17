import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BarChart, Users, Award } from 'lucide-react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  isRecommended?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isRecommended = false }) => {
  // Determine the badge color based on the level
  const levelColor = {
    'Beginner': 'bg-success-100 text-success-800',
    'Intermediate': 'bg-secondary-100 text-secondary-800',
    'Advanced': 'bg-accent-100 text-accent-800',
  }[course.level];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative h-full"
    >
      <Link to={`/courses/${course.id}`} className="block h-full">
        <div className="card card-interactive h-full flex flex-col">
          {isRecommended && (
            <div className="absolute -top-2 -right-2 z-10">
              <div className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                AI Pick
              </div>
            </div>
          )}
          
          <div className="relative mb-4 rounded-lg overflow-hidden">
            <img 
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-2 left-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${levelColor}`}>
                {course.level}
              </span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          
          <p className="text-gray-600 mb-4 text-sm flex-grow">
            {course.description.length > 120 
              ? `${course.description.substring(0, 120)}...` 
              : course.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {course.topics.slice(0, 3).map((topic, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {topic}
              </span>
            ))}
            {course.topics.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                +{course.topics.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex justify-between text-sm text-gray-500 mt-auto">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.popularity}% Popular</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;