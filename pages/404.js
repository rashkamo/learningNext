import { useRouter } from "next/router";
import Link from "next/Link";
import { useEffect } from "react";

import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      console.log("redirected");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>oooooooops.....</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back The
          <Link href="/">
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
