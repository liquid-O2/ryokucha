import { query, collection, getDocs } from "firebase/firestore";
import { cache } from "react";
import { Container } from "../../components/container";
import { Teas } from "../../components/contextProvider";
import { db } from "../../firebase/config";
import DisplayStore from "./displayStore";
import { sortArray } from "../../components/utils/sort";
import PageWrapper from "../../components/pageWrapper";
import { client } from "../../components/utils/sanity";

const fetchTeas = cache(async () => {
  const query = `*[_type == 'teas' ]{name,attributes,slug,price,description,image{
  asset->{
    ...,
    metadata
  }
}}`;
  const teas = await client.fetch(query);
  const alphabeticalTeas = sortArray(teas, "name", false);
  return alphabeticalTeas as Teas[];
});

const Store = async () => {
  const fetchedTeas = await fetchTeas();
  return (
    <PageWrapper>
      <Container className=" pt-56">
        <h1 className="w-full px-8 text-center text-5xl font-semibold">
          Browse Our Products
        </h1>
        <DisplayStore fetchedTeas={fetchedTeas} />
      </Container>
    </PageWrapper>
  );
};

export default Store;
