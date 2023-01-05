import { Dispatch, SetStateAction, useState } from "react";
import { Teas } from "../../components/contextProvider";
import { ChevronDown } from "react-feather";
import { AnimatePresence, LazyMotion, motion } from "framer-motion";
import { sortArray } from "../../components/utils/sort";

const SortBtns = ({
  setTeas,
}: {
  setTeas: Dispatch<SetStateAction<Teas[]>>;
}) => {
  const [btnState, setBtnState] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const handleFilter = (filterCriteria: string, btnType: string) => {
    if (filterCriteria === "alphabetical") {
      setTeas((teas) => sortArray(teas, "name", false));
      setBtnState({ first: true, second: false, third: false });
    }
    if (filterCriteria === "price" && btnType === "second") {
      setTeas((teas) => sortArray(teas, "price", true));
      setBtnState({ first: false, second: true, third: false });
    }
    if (filterCriteria === "price" && btnType === "third") {
      setTeas((teas) => sortArray(teas, "price", false));
      setBtnState({ first: false, second: false, third: true });
    }
  };

  const loadFeatures = () =>
    import("../../components/utils/framerFeatures").then((res) => res.default);

  return (
    <div className="relative w-full">
      <div className="sorting-section hidden  w-full  flex-wrap justify-end gap-4 max-[643px]:text-sm md:flex  ">
        <button
          onClick={() => handleFilter("alphabetical", "first")}
          className={` rounded-full border border-primary/30 px-6  py-3 ${
            btnState.first && "bg-primary text-background"
          }`}
        >
          Alphabetical
        </button>
        <button
          onClick={() => handleFilter("price", "second")}
          className={` rounded-full border border-primary/30 px-6 py-3 ${
            btnState.second && "bg-primary text-background"
          }`}
        >
          Price - High to Low
        </button>
        <button
          onClick={() => handleFilter("price", "third")}
          className={` rounded-full border border-primary/30 px-6 py-3 ${
            btnState.third && "bg-primary text-background"
          }`}
        >
          Price - Low to High
        </button>
      </div>
      <div className="flex w-full items-center justify-end md:hidden">
        <button
          className="flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3"
          onClick={() => setSelectIsOpen(!selectIsOpen)}
        >
          Sort by
          <div
            className={
              selectIsOpen
                ? "rotate-180 transition-transform duration-200 ease-in"
                : "rotate-0 transition-transform duration-200 ease-out"
            }
          >
            <ChevronDown />
          </div>
        </button>
        <div className="absolute top-full right-0 z-50 mt-4 overflow-hidden rounded-3xl  md:hidden">
          <LazyMotion features={loadFeatures}>
            <AnimatePresence initial={false}>
              {selectIsOpen && (
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: "-100%", opacity: 0 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className=" z-50 m-2  flex w-[296px] flex-col items-start justify-start  gap-3 rounded-3xl bg-background px-6 py-4 shadow-md shadow-primary-dark/10"
                >
                  <button
                    onClick={() => {
                      setSelectIsOpen(false);
                      handleFilter("alphabetical", "first");
                    }}
                    className={` w-full rounded-full border border-primary/30 px-6  py-3 ${
                      btnState.first && "bg-primary text-background"
                    }`}
                  >
                    Alphabetical
                  </button>
                  <button
                    onClick={() => {
                      setSelectIsOpen(false);
                      handleFilter("price", "second");
                    }}
                    className={` w-full rounded-full border border-primary/30 px-6 py-3 ${
                      btnState.second && "bg-primary text-background"
                    }`}
                  >
                    Price - High to Low
                  </button>
                  <button
                    onClick={() => {
                      setSelectIsOpen(false);
                      handleFilter("price", "third");
                    }}
                    className={` w-full rounded-full border border-primary/30 px-6 py-3 ${
                      btnState.third && "bg-primary text-background"
                    }`}
                  >
                    Price - Low to High
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default SortBtns;
