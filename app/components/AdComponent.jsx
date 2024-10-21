import React, { useState, useEffect } from 'react';

const AdComponent = ({ startDate, endDate, adText }) => {
   // showAd is a state variable that controls whether the ad is shown.
  // setShowAd is a function to update the value of showAd.
  const [showAd, setShowAd] = useState(false);
  // useEffect runs a function when the component mounts or when startDate or endDate change.
  useEffect(() => {
    // Create a new Date object for the current time.
    const now = new Date();
    // Convert startDate string to a Date object.
    const start = new Date(startDate);
    // Convert endDate string to a Date object.
    const end = new Date(endDate);

    // Log the current, start, and end dates to the console for debugging.
    console.log('Current Date:', now);
    console.log('Start Date:', start);
    console.log('End Date:', end);
// Update showAd to true if the current date is between start and end dates, otherwise false.
    // This controls whether the ad should be displayed.
    setShowAd(now >= start && now <= end);
  }, [startDate, endDate]);

  return (
    <div className="ad-container" style={{ padding: '32px' }}>
       {/* 
        If showAd is true, render the ad text inside a paragraph element.
        The && operator is a shorthand way to conditionally render the ad text.
      */}
      {showAd && (
        <p className="ad-text">{adText}</p>
      )}
    </div>
  );
};

export default AdComponent;
