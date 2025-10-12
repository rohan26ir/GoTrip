// "use client";

// import React, { useState } from 'react';
// import SectionHeading from '../../../../components/Dynamic/SectionHeading';
// import Image, { StaticImageData } from 'next/image';

// // image imports 
// import cycling from '../../../../public/activity/Cycling.png';
// import surfing from '../../../../public/activity/Surfing.png';
// import skydiving from '../../../../public/activity/Skydiving Experience.jpg';
// import swimming from '../../../../public/activity/Surfing.png';
// import horseRiding from '../../../../public/activity/Surfing.png';
// import hiking from '../../../../public/activity/Surfing.png';
// import treeClimbing from '../../../../public/activity/Surfing.png';
// import boatRide from '../../../../public/activity/Fjord Kayaking.webp';
// import Pagination from '../../../../components/Dynamic/Pagination';

// // ======Deemo how to use pagenation other page
// // const ProductsPage = () => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const productsPerPage = 12;

// //   return (
// //     <div>
// //       {/* Your products grid */}
// //       <Pagination
// //         currentPage={currentPage}
// //         totalPages={totalPages}
// //         onPageChange={setCurrentPage}
// //         maxVisiblePages={5}
// //       />
// //     </div>
// //   );
// // };
// // ===============End of demo====

// interface Activity {
//   id: number;
//   price: number;
//   type: string;
//   Book: string;
//   color: string;
//   name: string;
//   image: StaticImageData | string;
//   duration?: string;
//   location?: string;
//   highlights?: string[];
//   bestFor?: string;
// }

// const ActivitiesForTraveler = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const activities: Activity[] = [
//     { 
//       id: 1, 
//       price: 35, 
//       type: "Beach", 
//       Book: "/Book-Now", 
//       color: "#3B82F6", // blue-500
//       name: 'Cox\'s Bazar Beach Tour', 
//       image: surfing,
//       duration: 'Full day',
//       location: 'Cox\'s Bazar',
//       highlights: ['World\'s longest beach', 'Sunset viewing', 'Beach activities', 'Local seafood'],
//       bestFor: 'Family & Couples'
//     },
//     { 
//       id: 2, 
//       price: 50, 
//       type: "Hill Station", 
//       Book: "/Book-Now",  
//       color: "#10B981", // green-500
//       name: 'Bandarban Hill Trek', 
//       image: hiking,
//       duration: '2 days',
//       location: 'Bandarban',
//       highlights: ['Boga Lake', 'Nilgiri Hills', 'Tribal villages', 'Waterfalls'],
//       bestFor: 'Adventure Seekers'
//     },
//     { 
//       id: 3, 
//       price: 65, 
//       type: "Wildlife", 
//       Book: "/Book-Now",  
//       color: "#EAB308", // yellow-500
//       name: 'Sundarbans Safari', 
//       image: boatRide,
//       duration: '3 days',
//       location: 'Sundarbans',
//       highlights: ['Royal Bengal Tigers', 'Mangrove forest', 'Bird watching', 'River cruise'],
//       bestFor: 'Nature Lovers'
//     },
//     { 
//       id: 4, 
//       price: 25, 
//       type: "Island", 
//       Book: "/Book-Now",  
//       color: "#14B8A6", // teal-500
//       name: 'St. Martin\'s Island Tour', 
//       image: swimming,
//       duration: 'Full day',
//       location: 'St. Martin\'s Island',
//       highlights: ['Coral beach', 'Coconut groves', 'Snorkeling', 'Fresh seafood'],
//       bestFor: 'Beach Enthusiasts'
//     },
//     { 
//       id: 5, 
//       price: 30, 
//       type: "Cultural", 
//       Book: "/Book-Now",  
//       color: "#8B5CF6", // purple-500
//       name: 'Old Dhaka Heritage Walk', 
//       image: cycling,
//       duration: '6 hours',
//       location: 'Dhaka',
//       highlights: ['Ahsan Manzil', 'Lalbagh Fort', 'Sadarghat', 'Local street food'],
//       bestFor: 'History Buffs'
//     },
//     { 
//       id: 6, 
//       price: 40, 
//       type: "Adventure", 
//       Book: "/Book-Now",  
//       color: "#EF4444", // red-500
//       name: 'Rangamati Lake Cruise', 
//       image: boatRide,
//       duration: 'Full day',
//       location: 'Rangamati',
//       highlights: ['Kaptai Lake', 'Tribal museum', 'Suspension bridge', 'Hanging bridge'],
//       bestFor: 'Photography & Relaxation'
//     },
//     { 
//       id: 7, 
//       price: 45, 
//       type: "Tea Garden", 
//       Book: "/Book-Now",  
//       color: "#059669", // emerald-600
//       name: 'Sylhet Tea Estate Tour', 
//       image: treeClimbing,
//       duration: 'Full day',
//       location: 'Sylhet',
//       highlights: ['Tea plantation', 'Jaflong', 'Ratargul Swamp Forest', 'Seven-color tea'],
//       bestFor: 'Nature & Culture'
//     },
//     { 
//       id: 8, 
//       price: 55, 
//       type: "Archaeological", 
//       Book: "/Book-Now",  
//       color: "#F97316", // orange-500
//       name: 'Paharpur Buddhist Monastery', 
//       image: horseRiding,
//       duration: 'Full day',
//       location: 'Naogaon',
//       highlights: ['UNESCO World Heritage', 'Ancient ruins', 'Terracotta artwork', 'Museum'],
//       bestFor: 'History & Archaeology'
//     },
//   ];

//   // Calculate pagination
//   const totalPages = Math.ceil(activities.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentActivities = activities.slice(startIndex, startIndex + itemsPerPage);

//   // Handle page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     // Optional: Scroll to top when page changes
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className='py-10 bg-gray-50'>
//       <div className="container mx-auto px-4">
//         <div>
//           <SectionHeading
//             badge="Bangladesh Tourism"
//             title="Must-Visit Tourist Experiences"
//             description="Explore the best of Bangladesh with curated tours and experiences across famous destinations"
//             badgeColor="#E53E3E"
//             badgeTextColor="white"
//           />

//           {/* Section Body */}
//           <div className="mt-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-4">
//               {currentActivities.map((activity) => (
//                 <div
//                   key={activity.id}
//                   className="group p-3 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200"
//                 >
//                   <div className="h-48 relative overflow-hidden rounded-lg">
//                     <Image
//                       src={activity.image}
//                       alt={activity.name}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
//                       className="object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div 
//                       className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-semibold"
//                       style={{ backgroundColor: activity.color }}
//                     >
//                       {activity.type}
//                     </div>
//                     <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
//                       {activity.duration}
//                     </div>
//                     <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
//                       {activity.bestFor}
//                     </div>
//                   </div>
                  
//                   <div className="p-4">
//                     <h3 className="text-lg font-bold text-gray-800 mb-1">
//                       {activity.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-2 flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                       </svg>
//                       {activity.location}
//                     </p>
                    
//                     {/* Highlights */}
//                     <div className="mb-3">
//                       <p className="text-xs text-gray-500 mb-1">Tour Highlights:</p>
//                       <div className="flex flex-wrap gap-1">
//                         {activity.highlights?.slice(0, 2).map((item, index) => (
//                           <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                             {item}
//                           </span>
//                         ))}
//                         {activity.highlights && activity.highlights.length > 2 && (
//                           <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                             +{activity.highlights.length - 2} more
//                           </span>
//                         )}
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span className="text-2xl font-bold text-red-600">
//                           ${activity.price}
//                         </span>
//                         <span className="text-sm text-gray-500 ml-1">/person</span>
//                       </div>
//                       <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold flex items-center">
//                         Book Tour
//                         <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Reusable Pagination Component */}
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//               maxVisiblePages={3}
//               className="mt-8"
//             />
//           </div>

//           {/* View All Button */}
//           <div className="text-center mt-8">
//             <button className="bg-white hover:bg-gray-100 text-red-600 border border-red-600 px-8 py-3 rounded-lg transition-colors duration-300 font-semibold">
//               Explore All Bangladesh Tours
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivitiesForTraveler;