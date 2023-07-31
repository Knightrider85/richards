import { BookButton } from "../components/BookButton";
import { Employe } from "../components/Employe";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { MapLocation } from "../components/MapLocation";

export function Home() {
  return (
    <>
      <Hero />
      <BookButton />
      <MapLocation />
      <Employe />
      <Footer />
    </>
  );
}
