import Image from 'next/image'

import Header from '@/components/Header';
import HeroCard from '@/components/HeroCard';
import { PostData } from '../../interface';


export default async function Home() {
  const url ="https://apitest.rdedigital.com/api/v1/posts"
  const urlLatePost ="https://apitest.rdedigital.com/api/v1/latestPost"
  const urlId = "https://apitest.rdedigital.com/api/v1/posts/:id"
  const urlCategory = "https://apitest.rdedigital.com/api/v1/posts/category/:category"

  const res = await fetch(urlLatePost);
  const data = await res.json() as PostData[];

  

  return (
  <div >
  <Header />
  <div className="flex flex-col items-center justify-center">


  </div>

    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 text-center">
  <HeroCard />
      <h2 className="text-2xl font-bold underline">ultimos posts</h2>
      {data.map((post:PostData) => (
        <div key={post.id} className="flex flex-col items-center justify-center p-4 text-center w-20">
          <div className="grid gap-2">

          <h3>{post.title.rendered}</h3>
          <p>{post.author.name}</p>
          <p>{post.date}</p>
          <p>{post.author.description}</p>
          <p>{post.author.link}</p>
          {post.media && <Image src={post.media} width={704} height={397} alt={post.media} ></Image>}
          <p>{post.tags[0]}</p>
          
          
          </div>
          
        </div>
      ))}
     
    </main>
    <div className='min-h-screen'>

    </div>
      </div>
  )
}
