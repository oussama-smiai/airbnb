import Head from 'next/head'
import Banner from './components/Banner'
import Header from './components/Header'
import SmallCard from './components/SmallCard'

export default function Home({exploreData}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Banner/> 
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Explore Near By</h2>
        {/* full some data from the server - API end point*/ }
        {exploreData?.map( ({img, distance, location}) =>(
          <SmallCard
            key={img}
            img={img}
            distance={distance}
            location={location}
          />
        ))}
      </section>
    </main>
    </div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData
    }
  }
}
