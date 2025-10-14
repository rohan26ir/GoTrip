import React, { useState } from 'react';

interface SearchFilterProps<T> {
  data: T[];
  onFilteredData: (filtered: T[]) => void;
  searchFields?: (keyof T)[];
  typeField?: keyof T;
  priceField?: keyof T;
  locationField?: keyof T;
  className?: string;
}

function SearchFilter<T extends Record<string, unknown>>({
  data,
  onFilteredData,
  searchFields = [],
  typeField,
  priceField,
  locationField,
  className = '',
}: SearchFilterProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Get unique types from data
  const getUniqueTypes = (): string[] => {
    if (!typeField) return [];
    const types = data.map(item => String(item[typeField]));
    return ['all', ...Array.from(new Set(types))];
  };

  // Get unique locations from data
  const getUniqueLocations = (): string[] => {
    if (!locationField) return [];
    const locations = data.map(item => String(item[locationField]));
    return ['all', ...Array.from(new Set(locations))];
  };

  // Apply all filters
  const applyFilters = (
    search: string,
    type: string,
    sort: string,
    location: string
  ) => {
    let filtered = [...data];

    // Search filter
    if (search.trim() !== '') {
      filtered = filtered.filter(item => {
        return searchFields.some(field => {
          const value = item[field];
          if (typeof value === 'string') {
            return value.toLowerCase().includes(search.toLowerCase());
          }
          if (Array.isArray(value)) {
            return value.some((v: unknown) => 
              String(v).toLowerCase().includes(search.toLowerCase())
            );
          }
          return false;
        });
      });
    }

    // Type filter
    if (type !== 'all' && typeField) {
      filtered = filtered.filter(item => String(item[typeField]) === type);
    }

    // Location filter
    if (location !== 'all' && locationField) {
      filtered = filtered.filter(item => String(item[locationField]) === location);
    }

    // Price sort
    if (sort !== 'default' && priceField) {
      filtered.sort((a, b) => {
        const priceA = Number(a[priceField]) || 0;
        const priceB = Number(b[priceField]) || 0;
        return sort === 'low-high' ? priceA - priceB : priceB - priceA;
      });
    }

    onFilteredData(filtered);
  };

  // Handle search
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    applyFilters(value, selectedType, sortOrder, selectedLocation);
  };

  // Handle type filter
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    applyFilters(searchQuery, value, sortOrder, selectedLocation);
  };

  // Handle sort
  const handleSortChange = (value: string) => {
    setSortOrder(value);
    applyFilters(searchQuery, selectedType, value, selectedLocation);
  };

  // Handle location filter
  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    applyFilters(searchQuery, selectedType, sortOrder, value);
  };

  // Reset all filters
  const handleReset = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSortOrder('default');
    setSelectedLocation('all');
    onFilteredData(data);
  };

  const types = getUniqueTypes();
  const locations = getUniqueLocations();

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search Input */}
        {searchFields.length > 0 && (
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search tours..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Type Filter */}
        {typeField && types.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Location Filter */}
        {locationField && locations.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price Sort */}
        {priceField && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort by Price
            </label>
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
            >
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        )}
      </div>

      {/* Active Filters & Reset */}
      {(searchQuery || selectedType !== 'all' || sortOrder !== 'default' || selectedLocation !== 'all') && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                Search: {searchQuery}
                <button
                  onClick={() => handleSearch('')}
                  className="ml-2 hover:text-red-900"
                >
                  ×
                </button>
              </span>
            )}
            {selectedType !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                Type: {selectedType}
                <button
                  onClick={() => handleTypeChange('all')}
                  className="ml-2 hover:text-blue-900"
                  aria-label="Clear type filter"
                >
                  ×
                </button>
              </span>
            )}
            {selectedLocation !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                Location: {selectedLocation}
                <button
                  onClick={() => handleLocationChange('all')}
                  className="ml-2 hover:text-green-900"
                  aria-label="Clear location filter"
                >
                  ×
                </button>
              </span>
            )}
            {sortOrder !== 'default' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                Sort: {sortOrder === 'low-high' ? 'Low to High' : 'High to Low'}
                <button
                  onClick={() => handleSortChange('default')}
                  className="ml-2 hover:text-purple-900"
                  aria-label="Clear sort"
                >
                  ×
                </button>
              </span>
            )}
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
          >
            Reset All
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;