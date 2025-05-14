import EvenCard from "./components/EventCard";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white flex-wrap">
          <EvenCard />
          <EvenCard />
          <EvenCard />
          <EvenCard />
    </div>
  );
}
