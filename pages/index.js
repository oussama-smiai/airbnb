import Head from 'next/head'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import LargeCard from './components/LargeCard'
import MediumCard from './components/MediumCard'
import SmallCard from './components/SmallCard'

export default function Home({exploreData, cardsData}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Banner /> 
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
      <section>
        <h2 className="text-4xl font-semi-bold py-8">live anywhere</h2>
        <div className="flex space-x-3 overflow-scroll
        scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({img, title}) => {
            <MediumCard
              key={img} img={img} title={title} />
          })}
        </div>  
      </section>
      <LargeCard 
        img="https://links.papareact.com/4cj"
        title="the Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired" />
    </main>
          <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').
    then((res) => 
    res.json()
  );
  
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
