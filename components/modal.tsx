"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, X } from "react-feather";
import Button from "./button";

type Variant = "success" | "error";

export const Modal = () => {
  const [variant, setVariant] = useState<Variant>();
  const [isVisible, setIsVisible] = useState(false);
  const path = useSearchParams();
  const canceled = path.get("canceled");
  const success = path.get("success");

  const lockScroll = () => {
    document.body.classList.add("scrollLock");
  };
  const unlockScroll = () => {
    document.body.classList.remove("scrollLock");
  };

  useEffect(() => {
    if (canceled) {
      lockScroll();
      setIsVisible(true);
      setVariant("error");
    } else if (success) {
      lockScroll();
      setIsVisible(true);
      setVariant("success");
    }

    return () => {
      unlockScroll();
      setIsVisible(false);
    };
  }, [path, canceled, success]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#000E0B78]">
          <div className="flex flex-col items-center justify-center rounded-3xl bg-background p-8 md:w-[520px]">
            <div className="relative -mt-6 -mr-8 flex w-full justify-end">
              <Link href={"/"}>
                <button className="flex h-12 w-12 items-center justify-center">
                  <span className="sr-only">close modal</span>
                  <X size={24} />
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <span>
                {variant === "success" ? (
                  <CheckCircle size={48} className=" stroke-green-700" />
                ) : (
                  <AlertCircle size={48} className="stroke-rose-600" />
                )}
              </span>
              <span className="mt-6 mb-6 text-center text-lg font-semibold leading-tight">
                {variant === "success" ? (
                  <span>
                    Congrats! <br />
                    Your order has been confirmed
                  </span>
                ) : (
                  <span>{`Your order couldn't be processed`}</span>
                )}
              </span>
              <Link href={"/"}>
                <Button variant="secondary">CLOSE</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
