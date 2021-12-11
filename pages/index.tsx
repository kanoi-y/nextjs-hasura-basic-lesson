import { VFC } from 'react'
import { Layout } from '../components/Layout'

const Home: VFC = () => {
  return (
    <Layout title="home">
      <p className="text-3xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}

export default Home
