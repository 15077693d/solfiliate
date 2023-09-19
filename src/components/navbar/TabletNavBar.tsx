import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "@/utils";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);
type IProps = React.HTMLAttributes<HTMLElement>;

export default function TabletNavBar({ className }: IProps) {
  const { publicKey } = useWallet();
  return (
    <nav className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center space-x-2">
        <h3 className="w mr-5 inline p-0">Solfiliate</h3>
        <Button variant={"link"}>Home</Button>
        <Button variant={"link"}>Create</Button>
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
        <Button>
          <ShoppingCartIcon className="w-4" />
        </Button>
      </div>
    </nav>
  );
}
