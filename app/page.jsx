import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home/page";


export const metadata = {
  title: "Niya Voyage - Explore Marrakech Activities, Tours, Golf, and Holidays in Morocco",
  description: 
    "Discover the best activities, tours, and golf experiences in Marrakech with Niya Voyage. Book your tickets online and explore the top attractions and destinations in Morocco. Your trusted travel agency for unforgettable holidays in Marrakech and beyond.",
};


export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
