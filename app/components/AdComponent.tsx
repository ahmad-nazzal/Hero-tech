import React from "react";

interface Props {
  startDate: Date;
  endDate: Date;
  adText: string;
}
const AdComponent: React.FC<Props> = ({ startDate, endDate, adText }) => {
  const isValidDate = (
    startDate: Date,
    endDate: Date,
    currentDate: Date = new Date()
  ): boolean => {
    return currentDate >= startDate && currentDate <= endDate;
  };

  return (
    <div
      className="ad-container"
      style={{
        padding: "32px",
        display: "grid",
        placeItems: "center",
        background: "#462576",
        color: "white",
      //  border: "2px solid red"
      }}
    >
      {isValidDate(startDate, endDate) && (
        <h1 style={{ fontSize: "1.5vw" }}>{adText}</h1>
      )}
    </div>
  );
};

export default AdComponent;
