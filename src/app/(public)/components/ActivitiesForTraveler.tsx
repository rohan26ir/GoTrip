"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../../../../components/Dynamic/SectionHeading';
import Pagination from '../../../../components/Dynamic/Pagination';
import activitiesData from '../../../../public/json/activities.json';

// Activity type 
interface Activity {
  id: number;
  price: number;
  type: string;
  bookUrl: string;
  color: string;
  name: string;
  image: string;
  duration: string;
  location: string;
  highlights: string[];
  bestFor: string;
}

const ActivitiesForTraveler = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Get activities from JSON
  const activities: Activity[] = activitiesData.activities;

  // Calculate pagination
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = activities.slice(startIndex, endIndex);

  return (
    <div className='py-10 bg-gray-50'>
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Bangladesh Tourism"
          title="Must-Visit Tourist Experiences"
          description="Explore the best of Bangladesh with curated tours and experiences across famous destinations"
          badgeColor="#E53E3E"
          badgeTextColor="white"
        />

        {/* Activities Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentActivities.map((activity) => (
              <div
                key={activity.id}
                className="group p-3 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200"
              >
                {/* Image Section */}
                <div className="h-48 relative overflow-hidden rounded-lg">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Type Badge */}
                  <div 
                    className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: activity.color }}
                  >
                    {activity.type}
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {activity.duration}
                  </div>
                  
                  {/* Best For Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {activity.bestFor}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {activity.name}
                  </h3>
                  
                  {/* Location */}
                  <p className="text-sm text-gray-600 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {activity.location}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Tour Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {activity.highlights.slice(0, 2).map((item, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                      {activity.highlights.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{activity.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Price and Book Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-red-600">
                        ${activity.price}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">/person</span>
                    </div>
                    <button 
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold flex items-center"
                      onClick={() => window.location.href = activity.bookUrl}
                    >
                      Book Tour
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - Only shows if you add it */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            maxVisiblePages={3}
            className="mt-8"
          />
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-white hover:bg-gray-100 text-red-600 border border-red-600 px-8 py-3 rounded-lg transition-colors duration-300 font-semibold">
            Explore All Bangladesh Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesForTraveler;