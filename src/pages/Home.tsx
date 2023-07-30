import { BookButton } from "../components/BookButton";
import { Employe } from "../components/Employe";
import { Hero } from "../components/Hero";
import { MapLocation } from "../components/MapLocation";

export function Home() {
  return (
    <>
      <Hero />
      <BookButton />
      <MapLocation />
      <Employe />
    </>
  );
}
