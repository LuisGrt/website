import Layout from 'shared/components/Layout';
import Landing from 'components/Landing';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Luis Germán | Software Developer</title>
            </Head>
            <Layout>
                <Landing/>
            </Layout>
        </>
  );
}
