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

  return isDateInRange(startDate, endDate) ? (
    <div
      style={{
        padding: "32px",
        display: "grid",
        placeItems: "center",
        background: "#462576",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>{promotionMessage}</h1>
    </div>
  ) : null;
};

export default DiscountBanner;
