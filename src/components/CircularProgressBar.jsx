const CircularProgressBar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokeColor = "green",
}) => {
  // Đảm bảo size và strokeWidth hợp lệ
  const validSize = isNaN(size) ? 3 : size;
  const validStrokeWidth = isNaN(strokeWidth) ? 0.25 : strokeWidth;

  // Bán kính của vòng tròn
  const radius = validSize / 2 - validStrokeWidth;

  // Chu vi vòng tròn
  const circumference = 2 * Math.PI * radius;

  // Đảm bảo percent hợp lệ và không dẫn đến NaN
  const validPercent = isNaN(percent) ? 0 : percent;

  return (
    <div>
      <svg width={`${validSize}vw`} height={`${validSize}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${validSize / 2}vw`}
          cy={`${validSize / 2}vw`}
          strokeWidth={`${validStrokeWidth}vw`}
          stroke="white"
        ></circle>
        <circle
          r={`${radius}vw`}
          cx={`${validSize / 2}vw`}
          cy={`${validSize / 2}vw`}
          strokeWidth={`${validStrokeWidth}vw`}
          stroke={strokeColor}
          fill="none"
          strokeDasharray={`${circumference}vw`}
          strokeDashoffset={`${circumference - (validPercent / 100) * circumference}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        ></circle>
        <text
          x={`${validSize / 2}vw`}
          y={`${validSize / 2}vw`}
          fill="white"
          fontSize="1.2vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {validPercent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
