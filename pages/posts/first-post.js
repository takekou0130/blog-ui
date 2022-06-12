import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
      <Image
        src="/images/science.jpg"
        height={144}
        width={144}
        alt="science image"
      />
    </Layout>
  );
}
