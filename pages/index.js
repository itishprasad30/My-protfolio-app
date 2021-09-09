import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavoriteProjects";
import Hero from "../components/Hero";
import { LatestCode } from "../components/LatestCode";

export default function Home() {
  return (
    <ContainerBlock
      title="Itish Prasad "
      description="Just exploreing the new things"
    >
      <Hero />
      <FavouriteProjects />
      {/* <LatestCode /> */}
    </ContainerBlock>
  );
}
