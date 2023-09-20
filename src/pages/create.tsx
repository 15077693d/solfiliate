import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { MintForm } from "@/components/form/MintForm";
import { Layout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Container } from "@/components/common";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Create() {
  return (
    <Layout>
      <Container>
        <Link className="flex items-center space-x-2" href={"/collection"}>
          <ArrowLeftIcon className="mr-2" />
          My Collections
        </Link>
        <h1 className="my-5">Crete Your NFT Collection</h1>
        <MintForm />
      </Container>
    </Layout>
  );
}
