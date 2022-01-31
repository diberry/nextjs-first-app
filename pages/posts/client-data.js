//https://spapi.dev/api/episodes/1

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
import useSWR from 'swr'

export default function ClientData() {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://spapi.dev/api/episodes', fetcher)


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  if (data && data.data) {
      console.log(typeof data)
      console.log(data)
      //console.log(typeof data.data)
      //console.log(data.data)
  }

  return (
    <>
    <Layout>
      <Head>
        <title>ClientData</title>
      </Head>

      <h1>ClientData</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <section>
        <ul >
          {data.data.map(({ id, created_at, name }) => (
            <li  key={id}>
              {name}
              <br />
              {id}
              <br />
              {created_at}
            </li>
          ))}
        </ul>      
      </section>
      </Layout>
    </>
  )
}