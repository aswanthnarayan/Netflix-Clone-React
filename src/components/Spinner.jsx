import { RotatingLines } from "react-loader-spinner";

function Spinner() {
  const color = "red";
  return (
    <div className="flex justify-center items-center h-screen bg-[#000000f1]">
      <RotatingLines
        strokeColor={color}
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Spinner;
