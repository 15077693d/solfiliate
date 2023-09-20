import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Container } from "@/components/common";
import { CollectionTable } from "@/components/table/CollectionTable";
import { Payment } from "@/components/table/CollectionTable/colums";

export default function Home() {
  function getData() {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ];
  }

  return (
    <Layout>
      <Container className="flex flex-col-reverse items-center md:flex-row md:justify-around">
        <div>
          <p>Share to Earn</p>
          <h1> The Affiliate NFT Platform</h1>
          <p className="mb-2">
            Turn Your Social Shares into Sales and Network with Affiliate
            Community and NFT Influencers
          </p>
          <Link href={"/create"}>
            <Button>Create NFT</Button>
          </Link>
        </div>
        <img className="mb-2 w-[250px] md:w-[350px]" src="/promotion.png" />
      </Container>
      <Container>
        <CollectionTable />
      </Container>
    </Layout>
  );
}
