import Cards from "../Components/Cards";
import Footar from "../Components/Footar";
import Header from "../Components/Header";
import { FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-blue-100 h-60 sticky top-14 flex  flex-col justify-center items-center gap-10 ">
          <p className="text-5xl font-semibold items-center">
            How can we help?
          </p>
          <div className="relative flex items-center w-96 h-8 bg-white rounded-md">
            <input
              type="text"
              className="w-full pl-3 pr-10 border border-black rounded-md"
            />
            <FaArrowRight className="absolute right-2 text-gray-500" />
          </div>
        </div>
        <div className="flex justify-center p-4 overflow-scroll pt-10 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </main>
      <Footar />
    </div>
  );
}

export default Home;
