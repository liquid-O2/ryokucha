import { Container } from "../../components/container";
import PageWrapper from "../../components/pageWrapper";
import DisplayWishlist from "./displayWishlist";

const Store = () => {
  return (
    <PageWrapper>
      <Container className=" mt-56">
        <h1 className="mb-10 w-full px-8 text-center text-5xl font-semibold">
          Your Wishlist
        </h1>
        <DisplayWishlist />
      </Container>
    </PageWrapper>
  );
};

export default Store;
