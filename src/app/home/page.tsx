'use client'
import About from '@/components/layout/About'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import StackList from '@/components/ui/StackList'
import { useGetRepoQuery } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const { data, error, isLoading } = useGetRepoQuery()
  const order = data?.toReversed()
  const boxGlow = ['cyan-box', 'amber-box']
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <h2>Ocorreu um erro</h2>
  }
  return (
    <>
      <Header />
      <div className="w-full h-auto p-12 bg-tertiary text-quaternary border-b-2 border-secondary pt-24">
        <h2 className="text-4xl text-center">Phillip Menezes</h2>
        <h2 className="text-2xl text-center mt-4 mb-4">Desenvolvedor Web</h2>
        <StackList />
      </div>
      <h2 className="text-justify mt-8 m-auto w-10/12 lg:w-5/12">
        Este portfólio foi construído com integração direta à API do GitHub e a
        uma API pessoal desenvolvida por mim. Aqui você encontra uma seleção
        especial dos meus projetos — escolhidos a dedo para mostrar um pouco do
        que gosto de criar e explorar no mundo do desenvolvimento!
      </h2>
      <div className="w-full h-auto p-8 bg-primary text-quaternary border-b-2 border-t-2 border-tertiary mt-4">
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
      <About />
    </>
  )
}
