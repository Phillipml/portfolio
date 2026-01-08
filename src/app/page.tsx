'use client'
import About from '@/components/layout/About'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ErrorImage from '@/components/ui/ErrorImage'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import StackList from '@/components/ui/StackList'
import { useGetRepoQuery } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  const { data, error, isLoading } = useGetRepoQuery()
  const order = data?.toReversed()
  const boxGlow = ['cyan-box', 'amber-box']
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return (
      <ErrorImage className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10" />
    )
  }
  return (
    <>
      <Header />
      <div className="w-full h-auto text-quaternary border-b-2 border-secondary pt-34">
        <About />
      </div>
      <div className="w-full h-auto p-12 bg-tertiary text-quaternary border-b-2 border-secondary">
        <h2 className="text-4xl text-center">Phillip Menezes</h2>
        <h2 className="text-2xl text-center mt-4 mb-4">Desenvolvedor Web</h2>
        <StackList />
      </div>
      <div className="w-full h-auto p-8 bg-primary text-quaternary border-b-2 border-tertiary">
        <Container>
          <h2 className="text-center text-3xl text-glow ">Destaques</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {data?.map((repo) =>
              repo.highlight ? (
                <Link
                  href={`repos/${repo.id}`}
                  key={repo.id}
                  className={`rounded-2xl grid justify-center border p-4 bg-tertiary w-32 h-auto`}
                >
                  <div className="w-12 h-12 relative m-auto">
                    <Image
                      src={repo.thumbnail}
                      alt={`${repo.repoName} image`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center mt-4">{repo.repoName}</p>
                </Link>
              ) : null
            )}
          </div>
        </Container>
      </div>
      <div className="flex flex-wrap justify-between p-8 gap-4 lg:w-1/2 m-auto">
        <h2 className="flex-1 basis-11/12 text-center text-3xl text-glow mb-4">
          Alguns dos meus projetos:
        </h2>
        {order?.map((repo, index) => {
          const colorClass = boxGlow[index % boxGlow.length]

          return (
            <Link
              href={`repos/${repo.id}`}
              key={repo.id}
              className={`flex-1 basis-1/4 rounded-2xl grid justify-center border p-4 bg-primary w-auto h-auto ${colorClass}`}
            >
              <div className="w-12 h-12 relative m-auto">
                <Image
                  src={repo.thumbnail}
                  alt={`${repo.repoName} image`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center mt-4">{repo.repoName}</p>
            </Link>
          )
        })}
      </div>
      <Footer />
    </>
  )
}
