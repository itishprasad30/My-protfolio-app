import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavoriteProjects";
import Hero from "../components/Hero";
import LatestCode from "../components/LatestCode";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";

export default function Home({ repositories }) {
  // console.log(repositories);
  return (
    <ContainerBlock
      title="Itish Prasad "
      description="Just exploreing the new things"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}
export const getServerSideProps = async () => {
  const repositories = await getLatestRepos(userData);
  // console.log("repo:::", repositories);
  return {
    props: {
      repositories,
    },
  };
};
