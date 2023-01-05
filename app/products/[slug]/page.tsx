import { query, collection, getDocs, getDoc, doc } from "firebase/firestore";
import Image from "next/image";
import { cache } from "react";
import { Container } from "../../../components/container";
import { Teas } from "../../../components/contextProvider";
import PageWrapper from "../../../components/pageWrapper";
import Section from "../../../components/section";
import { base64BlurredImages } from "../../../components/utils/base64BlurredImages";
import { client } from "../../../components/utils/sanity";
import { db } from "../../../firebase/config";
import AddToCart from "./addToCart";

const fetchTeas = cache(async () => {
  const query = `*[_type == 'teas' ]{name,attributes,slug,price,description,image{
    asset->{
      ...,
      metadata
    }
  }}`;
  const teas = await client.fetch(query);
  return teas as Teas[];
});

export async function generateStaticParams() {
  const teas = await fetchTeas();
  return teas.map((tea) => ({
    slug: tea.slug.current,
  }));
}

interface ParamProps {
  slug: string;
}

const fetchSingleTea = async (slug: string) => {
  const query = `*[_type == 'teas' && slug.current == '${slug}' ]{name,attributes,slug,price,description,image{
    asset->{
      ...,
      metadata
    }
  }}`;
  const tea = await client.fetch(query);

  return { ...tea[0] } as Teas;
};

export default async function IndividualTea({
  params,
}: {
  params: ParamProps;
}) {
  const { slug } = params;
  const tea = await fetchSingleTea(slug);

  return (
    <PageWrapper>
      <Section>
        <Container>
          <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-[#E3E7DC]  text-background md:h-[80vh] md:rounded-[3rem] lg:flex-row ">
            <figure className="relative h-full  max-h-80  w-full overflow-hidden max-[766px]:aspect-w-1 max-[766px]:aspect-h-1 max-[490px]:aspect-1 md:max-h-full md:rounded-[3rem] ">
              <Image
                src={tea.image.asset.url}
                alt={tea.name}
                fill
                placeholder="blur"
                blurDataURL={tea.image.asset.metadata.lqip}
                className=" h-full w-full object-cover"
                quality={100}
                priority
              />
            </figure>
            <article className="relative flex h-full w-full flex-col justify-center rounded-3xl bg-primary px-8 py-10 md:rounded-[3rem] md:px-20 md:py-16">
              <p className="w-full text-2xl font-semibold text-neon">{`$${tea.price}`}</p>
              <p className=" mt-1 w-full text-4xl font-semibold  lg:text-5xl">
                {tea.name}
                <span className="pl-2 text-sm tracking-wider">100g</span>
              </p>
              <p className="mt-4 text-base leading-normal opacity-90 md:max-w-[50ch] md:text-lg">
                {tea.description}
              </p>
              <AddToCart
                name={tea.name}
                image={tea.image}
                price={tea.price}
                slug={tea.slug.current}
              />
            </article>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
