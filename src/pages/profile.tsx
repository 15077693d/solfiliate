import Link from "next/link";

import { Container } from "@/components/common";
import { Layout } from "@/components/layout";
import { AffiliateTable } from "@/components/table/AffiliateTable";
import ColletionTabs from "@/components/tabs/ColletionTabs";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Profile() {
  return (
    <Layout>
      <div className="absolute left-0 right-0 ml-auto mr-auto  h-[150px] w-[90%] rounded-b-lg bg-[url('/background.webp')]"></div>

      <Container className="relative z-10 mt-14">
        <div className="flex flex-col md:mb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <img className="mb-3 w-[100px] rounded" src={"/nft.png"} />

            <h2>User Name</h2>
            <div className="space-x-2">
              <span>CPTQoGb...cQennQCP</span>
              <span className="text-gray-500">Joined September 2023</span>
            </div>
            <p className="md:max-w-[700px]">
              Welcome to NFT Project Name, the hub of the NFT universe. We focus
              on promoting social celebration through digital art.
            </p>
          </div>
          <Link className="w-full md:w-[200px] my-5" href={"/create"}>
            <Button className="w-full">Create a Collection</Button>
          </Link>
        </div>
        <Tabs defaultValue="Collections">
          <TabsList className="m-auto mb-10 grid  max-w-[400px] grid-cols-2">
            <TabsTrigger value="Collections">Collections</TabsTrigger>
            <TabsTrigger className="px-5" value="Affiliates">
              Affiliate Incomes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Collections">
            <ColletionTabs />
          </TabsContent>
          <TabsContent value="Affiliates">
            <AffiliateTable />
          </TabsContent>
        </Tabs>
      </Container>
    </Layout>
  );
}
