import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "@/utils";
import { Input } from "../ui/input";
import Link from "next/link";
import { useRouter } from "next/router";
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  {
    ssr: false,
  },
);
type IProps = React.HTMLAttributes<HTMLElement>;

export default function TabletNavBar({ className }: IProps) {
  const { publicKey } = useWallet();
  const data = useRouter();
  return (
    <nav className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h3 className="w mr-5 inline p-0">Solfiliate</h3>
        </Link>
        <Link href={"/"}>
          <Button
            className={data.route === "/" ? "underline" : ""}
            variant={"link"}
          >
            Home
          </Button>
        </Link>
        <Link href={"/create"}>
          <Button
            className={data.route === "/create" ? "underline" : ""}
            variant={"link"}
          >
            Create
          </Button>
        </Link>
      </div>
      <div className="flex w-[60%] space-x-2">
        <Input
          className="flex-grow pl-8"
          icon={
            <MagnifyingGlassIcon className="relative left-[30px] top-[8px] h-5 w-5" />
          }
          placeholder="Search Collection, Creators, NFTs"
        />
        <WalletMultiButtonDynamic className="" />
        {publicKey && (
          <Link href={"/profile"}>
            <Button>
              <UserCircleIcon className="w-5" />
            </Button>
          </Link>
        )}
        <Button>
          <ShoppingCartIcon className="w-4" />
        </Button>
      </div>
    </nav>
  );
}
