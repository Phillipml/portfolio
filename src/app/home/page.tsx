'use client'
import Header from '@/components/layout/Header'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import StackList from '@/components/ui/StackList'
import { useGetRepoQuery } from '@/services/api'
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
      <div className="w-full h-auto p-12 bg-tertiary text-quaternary border-b-2 border-secondary">
        <h2 className="text-4xl text-center">Phillip Menezes</h2>
        <h2 className="text-2xl text-center mt-4 mb-4">Desenvolvedor Web</h2>
        <StackList />
      </div>
      <h2 className="text-justify mt-8 m-auto w-10/12  lg:w-5/12">
        Este portfólio foi construído com integração direta à API do GitHub e a
        uma API pessoal desenvolvida por mim. Aqui você encontra uma seleção
        especial dos meus projetos — escolhidos a dedo para mostrar um pouco do
        que gosto de criar e explorar no mundo do desenvolvimento!
      </h2>
      <div className="flex flex-wrap justify-between p-8 gap-4 lg:w-1/2 m-auto">
        {order?.map((repo, index) => {
          const colorClass = boxGlow[index % boxGlow.length]

          return (
            <Link
              href={`repos/${repo.id}`}
              key={repo.id}
              className={`flex-1 basis-1/4 rounded-2xl grid justify-center border p-4 bg-primary w-auto h-auto ${colorClass}`}
            >
              <img src={repo.thumbnail} alt="" className="w-12 m-auto" />
              <p className="text-center">{repo.repoName}</p>
            </Link>
          )
        })}
      </div>
    </>
  )
}
