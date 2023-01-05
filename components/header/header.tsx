"use client";
import { useScroll, useTransform, m, LazyMotion } from "framer-motion";
import { useContext } from "react";
import Link from "next/link";
import { Container } from "../container";
import { GlobalContext } from "../contextProvider";
import HamburgerMenu from "./hamburger";
import Profile from "./profile";
import emptyProfile from "../../public/emptyProfile.png";
import Cart from "./cart";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/shop", label: "shop" },
];

const Header = () => {
  const { isLoggedIn, userDetails, dispatch, cartDetails, logout } =
    useContext(GlobalContext);
  const { photoUrl, email } = userDetails;
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const color = useTransform(
    scrollYProgress,
    [0, 0.3],
    [path === "/" ? "#FCFFFD" : "#003D32", "#003D32"]
  );
  const loadFeatures = () =>
    import("../utils/framerFeatures").then((res) => res.default);

  return (
    <LazyMotion features={loadFeatures}>
      <m.header
        style={{ color, borderColor: color }}
        className={` fixed  top-0 left-0 z-50 mt-3 w-full font-semibold leading-none md:mt-5`}
      >
        <Container className="flex h-16 items-center justify-center rounded-3xl leading-none">
          <Link
            href={"/"}
            className="mr-auto  flex max-h-[56px]  items-center justify-center px-1 py-4 text-center "
          >
            <p className=" text-xl font-semibold leading-none md:text-2xl">
              ryo.
            </p>
          </Link>
          <div
            className={`flex max-h-[56px] items-center justify-center gap-2  py-4`}
          >
            <nav className="hidden md:block">
              <ul
                className={`flex items-center justify-center gap-4 ${
                  isLoggedIn ? "mr-4" : "mr-2"
                }`}
              >
                {links.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className="relative transition-opacity duration-200 ease-in hover:opacity-50"
                        href={link.href}
                      >
                        <div className="absolute left-0 top-full block h-[1px] w-full overflow-hidden"></div>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                {!isLoggedIn && (
                  <li>
                    <Link
                      className="relative transition-opacity duration-200 ease-in hover:opacity-50"
                      href={"/login"}
                    >
                      <div className="absolute left-0 top-full block h-[1px] w-full overflow-hidden"></div>
                      login
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            {isLoggedIn && (
              <Profile
                photoUrl={photoUrl}
                emptyProfile={emptyProfile}
                email={email}
                logout={logout}
              />
            )}
            <Cart dispatch={dispatch} cartDetails={cartDetails} />
            <HamburgerMenu isLoggedIn={isLoggedIn} />
          </div>
        </Container>
      </m.header>
    </LazyMotion>
  );
};

export default Header;
