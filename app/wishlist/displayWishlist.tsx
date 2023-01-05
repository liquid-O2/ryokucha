"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Coffee } from "react-feather";
import { Container } from "../../components/container";
import { GlobalContext, Teas } from "../../components/contextProvider";
import Card from "../../components/productCard";
import { client } from "../../components/utils/sanity";

const DisplayWishlist = () => {
  const { userDetails, isLoggedIn } = useContext(GlobalContext);
  const router = useRouter();
  const { likedTeas } = userDetails;
  const [favouriteTeas, setFavouriteTeas] = useState<Teas[]>([]);

  useEffect(() => {
    if (!isLoggedIn) router.push("/");

    const fetchTea = async (slug: string) => {
      const query = `*[_type == 'teas' && slug.current == '${slug}']{name,attributes,slug,price,description,image{
        asset->{
          ...,
          metadata
        }
      }}`;
      const teas = await client.fetch(query);
      const tea = { ...teas[0] };

      return tea as Teas;
    };

    const getFavouriteTeas = async () => {
      const teaIds = likedTeas.filter((slug) => slug !== "");
      const res = teaIds.map((slug) => fetchTea(slug));
      const data = Promise.all(res);
      const teas = await data;
      return teas;
    };
    getFavouriteTeas().then((res) => setFavouriteTeas([...res]));
  }, [likedTeas]);

  return (
    <Container className="flex flex-col items-center justify-center">
      {favouriteTeas.length === 0 && (
        <div className="my-10 flex h-[367px] w-full flex-col items-center justify-center gap-4 rounded-3xl bg-tertiary-light bg-opacity-[0.01] p-10 text-center md:rounded-[3rem]">
          <span className="opacity-60">
            <Coffee size={24} />
          </span>
          <p className="px-6 text-lg font-normal leading-snug opacity-90">
            You have no items saved to your Wishlist, add some from the shop to
            see them here
          </p>
        </div>
      )}
      <div className="grid w-full grid-cols-4 gap-x-4  gap-y-14 pb-32 pt-8 max-[1200px]:grid-cols-3 max-[910px]:grid-cols-2 max-[517px]:grid-cols-1  lg:gap-x-6">
        {favouriteTeas.map((tea: Teas) => {
          const { name, image, price, attributes, slug } = tea;
          return (
            <Card
              key={name}
              image={image}
              name={name}
              price={price}
              slug={slug.current}
              attributes={attributes}
              className={"cursor-pointer overflow-hidden rounded-2xl"}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default DisplayWishlist;
