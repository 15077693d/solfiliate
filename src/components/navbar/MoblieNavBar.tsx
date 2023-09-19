import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "@/utils";
// add this
const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false },
);
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);
type IProps = React.HTMLAttributes<HTMLElement>;
export default function MoblieNavBar({ className }: IProps) {
  const { publicKey } = useWallet();
  return (
    <nav className={cn("flex items-center justify-between", className)}>
      <div className="space-x-2">
        <Button>
          <HamburgerMenuIcon />
        </Button>
        <h3 className="inline p-0">Solfiliate</h3>
      </div>
      <div className="space-x-2">
        <Button>
          <MagnifyingGlassIcon />
        </Button>
        <Button>
          <ShoppingCartIcon className="w-4" />
        </Button>
      </div>
    </nav>
  );
}
