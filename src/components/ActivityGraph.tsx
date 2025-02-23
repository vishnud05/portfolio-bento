import { FaCircleDot, FaGlobe, FaRegCircleDot } from "react-icons/fa6";

const ActivityGraph = () => {
  return (
    <div className="col-span-3 flex flex-col row-span-2 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center gap-1 py-1 border-b-2 border-gray-600/20">
          <h2 className="text-muted text-xs flex gap-1">
            <FaGlobe size={16} className="text-accent" />
            My Portfolio
          </h2>
          <h1 className="text-sm">Activity Graph</h1>
        </div>
        <div className="grid grid-cols-[repeat(23,minmax(0,1fr))] grid-rows-4 gap-1 h-full">
          {Array.from(Array(90).keys()).map((day) => {
            const isMarked = Math.random() > 0.2;
            return (
              <div
                key={day}
                className={`${
                  isMarked ? "bg-accent" : "bg-gray-600/20"
                } rounded-lg`}
              >
                {isMarked ? (
                  <FaCircleDot size={16} className="text-accent" />
                ) : (
                  <FaRegCircleDot size={16} className="text-accent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityGraph;
