'use client'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import ErrorImage from '@/components/ui/ErrorImage'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { useGetProfileQuery } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'

function Index() {
  const username = process.env.NEXT_PUBLIC_USERNAME
  const { data, error, isLoading } = useGetProfileQuery(
    username ? username : ''
  )

  if (isLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    )
  if (error)
    return (
      <ErrorImage className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10" />
    )
  return (
    <div className="animate-fade-in">
      <Container>
        <div
          className="
    flex flex-col lg:flex-row items-center justify-center gap-4
    p-4 max-w-7xl w-full mx-auto min-h-screen
  "
        >
          <div className="relative flex justify-center items-center">
            <div className="absolute w-40 h-40 rounded-full bg-teal-500/30 blur-2xl animate-pulse" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
              {data?.avatar_url ? (
                <Image
                  src={data.avatar_url}
                  alt="imagem perfil"
                  fill
                  className="relative z-10 rounded-full ring-4 ring-transparent animate-fade-in object-cover"
                />
              ) : (
                <ErrorImage />
              )}
            </div>
          </div>

          <h2 className="text-tertiary text-7xl sm:text-6xl lg:text-8xl xl:text-9xl text-center lg:text-left">
            Olá,
            <br />
            visitante!
          </h2>

          <div className="flex flex-col gap-2 lg:max-w-2xl w-full text-xl sm:text-lg">
            <p>
              Meu nome é <span className="text-glow">Phillip</span>, um
              desenvolvedor <span className="text-glow">Front-End</span>{' '}
              apaixonado por criar soluções digitais que fazem a diferença, e
              seja bem-vindo ao meu{' '}
              <span className="text-glow">portfólio pessoal</span>.
            </p>
            <p>
              Desenvolvi este espaço utilizando{' '}
              <span className="text-glow">TypeScript</span> e{' '}
              <span className="text-glow">React</span>, combinando boas práticas
              com um fluxo moderno de desenvolvimento.
            </p>
            <p>
              Aqui, você verá o poder do{' '}
              <span className="text-glow">Redux</span> aliado ao{' '}
              <span className="text-glow">RTK Query</span> para o gerenciamento
              eficiente de dados, além de uma base sólida de testes com{' '}
              <span className="text-glow">Testing Library</span>,{' '}
              <span className="text-glow">Jest</span> e{' '}
              <span className="text-glow">Cypress</span>.
            </p>
            <p>
              Toda a interface foi construída com{' '}
              <span className="text-glow">Tailwind</span>. Mas aqui você irá
              encontrar projetos a base de um{' '}
              <span className="text-glow">Design System</span> próprio,
              estilizado com{' '}
              <span className="text-glow">Styled-components</span>, focando em
              desempenho, otimização e uma experiência visual agradável.
            </p>
            <p>
              Cada detalhe deste portfólio reflete minha evolução como
              desenvolvedor e o cuidado em transformar código em experiências
              significativas.
            </p>
            <Link href="home">
              <Button className="mt-2 w-full">Vamos começar :)</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Index
