import LastWorks from "@/components/lastWorks/LastWorks";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <div className="flex items-start justify-between p-2">
        <div className="text-2xl p-4">Alejandro Ontiveros</div>
        <Navbar />
      </div>
      <LastWorks />
    </div>
  );
};

export default Home;
