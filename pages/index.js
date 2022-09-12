import { Fragment } from "react";
import Head from "next/head";

import Modal from "../components/Modal";

export default function Example() {
  return (
    <Fragment>
      <Head>
        <title>
          Edit Modal | Made by Himanshu Srivastava | Inspired by Tom
          Heidrich&apos;s Edit Modal component
        </title>
        <meta name="description" content="Responsive Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Modal />
      </main>
    </Fragment>
  );
}
