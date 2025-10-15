'use client'
import Container from '@/components/layout/Container'
import HomeBackground from '@/components/ui/HomeBackground'
import { useGetProfileQuery } from '@/services/api'

export default function Home() {
  const username = process.env.NEXT_PUBLIC_USERNAME
  const { data, error, isLoading } = useGetProfileQuery(
    username ? username : ''
  )
  const profilePic = () => {
    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro ao carregar</p>
    return (
      <img
        src={data.avatar_url}
        alt="imagem perfil"
        className="m-auto rounded-full ring-4 ring-tertiary sm:inline-block w-1/2 lg:w-1/5"
      />
    )
  }
  return (
    <>
      <HomeBackground />
      <Container>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 p-4 max-w-7xl w-full">
          {profilePic()}
          <h2 className="text-tertiary text-7xl sm:text-6xl lg:text-8xl xl:text-9xl text-center lg:text-left">
            Olá,
            <br />
            visitante!
          </h2>
          <div className="flex flex-col gap-4 lg:gap-6 max-w-2xl w-full text-xl">
            <p>Seja Bem vindo ao meu portfolio pessoal</p>
            <p>
              Criei este portfolio para que você possa aproximar dos meus
              desenvolvimentos em uma interface totalmente pensada em uma boa
              experiência.
            </p>
            <p>Todo o texto dentro dele tenta refletir essa ideia.</p>
            <p>
              Você encontrará “conquistas” ou “missões” que mostram o progresso
              da minha vida profissional e estão relacionadas ao que estou
              trabalhando no momento.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
