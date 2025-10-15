import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  alignment?: 'center' | 'start' | 'end';
  badgeColor?: string;
  badgeTextColor?: string;
  h2Textcolor?: string;
  descriptionClolor?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  alignment = 'center',
  badgeColor = '#5BBF31',
  badgeTextColor = 'black',
  h2Textcolor = 'black',
  descriptionClolor = 'gray',
  className = ''
}) => {
  // Alignment classes
  const alignmentClasses = {
    start: 'text-left items-start',
    center: 'text-center items-center',
    end: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} gap-2 ${className}`}>
      {/* Badge */}
      {badge && (
        <div className="flex justify-center">
          <span
            className="inline-block py-2 px-5 rounded-full font-bold text-sm md:text-base"
            style={{
              backgroundColor: badgeColor,
              color: badgeTextColor
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className="text-2xl md:text-lg lg:text-4xl font-bold leading-tight max-w-4xl"
        style={{ color: h2Textcolor }}
      >
        {title}
      </h2>


      {/* Description */}
      {description && (
        <p className="text-base md:text-lg text-gray-500 max-w-3xl mt-1"
          style={{ color: descriptionClolor }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;