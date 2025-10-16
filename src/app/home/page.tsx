'use client'
import Header from '@/components/layout/Header'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { useRepoFilter } from '@/hooks/useRepoFilter'
import { useGetProfileQuery } from '@/services/api'

export default function HomePage() {
  const username = process.env.NEXT_PUBLIC_USERNAME
  const { data } = useGetProfileQuery(username ? username : '')
  const { repoList, error, isLoading } = useRepoFilter()
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
        <h2 className="text-2xl text-center mt-4">Desenvolvedor Web</h2>
        <h2 className="text-2xl text-center mt-4">{data?.bio}</h2>
      </div>
      <div className="flex flex-wrap justify-center p-8 gap-4 w-100 m-auto">
        {repoList?.map((repo, index) => {
          const colorClass = boxGlow[index % boxGlow.length]

          return (
            <div
              key={repo.id}
              className={`rounded-2xl basis-1/3 border p-4 bg-primary w-42 h-32 ${colorClass}`}
            >
              <p className="text-center">{repo.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
