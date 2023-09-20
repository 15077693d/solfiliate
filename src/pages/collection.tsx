import { ImageCard } from "@/components/card/ImageCard";
import { TextCard } from "@/components/card/TextCard";
import { Container } from "@/components/common";
import { ReferralLinkDialog } from "@/components/dialog/ReferralLinkDialog";
import { Layout } from "@/components/layout";
export default function Collection() {
  return (
    <Layout>
      <div className="absolute left-0 right-0 ml-auto mr-auto  h-[150px] w-[90%] rounded-b-lg bg-[url('/background.webp')]"></div>
      <Container className="relative z-10 mt-14">
        <div className="flex flex-col md:mb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <img className="mb-3 w-[100px] rounded" src={"/nft.png"} />

            <h2>NFT Project Name</h2>
            <span>Created by User Name</span>
            <p className="md:max-w-[700px]">
              Welcome to NFT Project Name, the hub of the NFT universe. We focus
              on promoting social celebration through digital art.
            </p>
          </div>
          <ReferralLinkDialog />
        </div>

        <div className="mb-10 grid grid-cols-3 md:grid-cols-6">
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
          <TextCard value="9" title="Items" />
        </div>
        <div className="m-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </Container>
    </Layout>
  );
}
