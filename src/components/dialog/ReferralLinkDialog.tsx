import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ReferralLinkDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="my-5  whitespace-nowrap"> Referral Link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Rewarded for Promoting NFTs</DialogTitle>
          <DialogDescription>
            Share this link, and earn rewards for every NFT purchased through it
          </DialogDescription>
        </DialogHeader>
        <Input id="name" value="http://localhost:3000/collection" />

        <DialogFooter>
          <Button>Copy Link</Button>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
