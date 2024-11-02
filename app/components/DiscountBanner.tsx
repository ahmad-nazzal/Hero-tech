interface Props {
  startDate: string;
  endDate: string;
  promotionMessage?: string;
}

const DiscountBanner: React.FC<Props> = ({
  startDate,
  endDate,
  promotionMessage,
}) => {
  const isDateInRange = (
    startDate: string,
    endDate: string,
    currentDate: Date = new Date()
  ): boolean => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return currentDate >= start && currentDate <= end;
  };

  return (
    <div
      style={{
        padding: "32px",
        display: "grid",
        placeItems: "center",
        background: "#462576",
        color: "white",
      }}
    >
      {isDateInRange(startDate, endDate) ? (
        <h1 style={{ fontSize: "40px" }}>{promotionMessage}</h1>
      ) : (
        <p>No current promotions.</p>
      )}
    </div>
  );
};

export default DiscountBanner;
