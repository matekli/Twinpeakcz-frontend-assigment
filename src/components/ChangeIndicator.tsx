// This component displays a percentage change with different colors for positive and negative values.

interface ChangeIndicatorProps {
  change: number;
}

const ChangeIndicator = ({ change }: ChangeIndicatorProps) => {
  const roundedPercentage = Number(change.toFixed(2));
  return (
    <p
      className={`${
        change <= 0
          ? "bg-[#760a0c] text-[#d50606]"
          : "bg-[#274b3f] text-[#44b78e]"
      } w-max px-2 py-1 rounded-lg`}
    >
      {Math.abs(roundedPercentage) + "%"}
    </p>
  );
};

export default ChangeIndicator;
