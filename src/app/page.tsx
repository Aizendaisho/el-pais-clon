import Image from 'next/image'

import Header from '@/components/Header';
import HeroCard from '@/components/HeroCard';
import { PostData } from '../../interface';


export default async function Home() {
  const url ="https://apitest.rdedigital.com/api/v1/posts"
  const urlLatePost ="https://apitest.rdedigital.com/api/v1/latestPost"
  const urlId = "https://apitest.rdedigital.com/api/v1/posts/:id"
  const urlCategory = "https://apitest.rdedigital.com/api/v1/posts/category/:category"

  const res = await fetch(urlLatePost,{
    cache: 'no-cache', 
  });
  const data = await res.json() as PostData[];

  

  

  return (
  <div >
 
  <div className="flex flex-col items-center justify-center">


  </div>

    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 text-center gap-4">

      {data.map((post:PostData) => (
        
        <HeroCard key={post.id} image={post.media} title={post.title.rendered}  author={post.author.name}  content={post.excerpt.rendered} description={post.content.rendered} id={post.id} finalConent={post.category} />
      
      ))}
     
    </main>
    <div className='min-h-screen'>

    </div>
      </div>
  )
}
