import React from 'react'
import Container from './Container'
import { useGetUserQuery } from '@/services/api'
import LoadingSpinner from '../ui/LoadingSpinner'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaFileDownload } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'

function About() {
  const { data, error, isLoading } = useGetUserQuery()
  const { isDarkTheme } = useTheme()
  if (isLoading) return <LoadingSpinner />
  if (error) notFound()

  return (
    <Container>
      <div className="w-full max-w-5xl mx-auto p-6 bg-primary border-2 rounded-br-4xl rounded-tl-4xl flex flex-col md:flex-row gap-6 items-center justify-center border-tertiary">
        <div className="relative w-40 h-40 md:w-60 md:h-60 flex-shrink-0 border-2 border-primary rounded-full overflow-hidden">
          {data?.avatar_url ? (
            <Image
              src={data.avatar_url}
              alt="imagem perfil"
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">Sem imagem</span>
            </div>
          )}
        </div>
        <div className={`${isDarkTheme ? 'text-tertiary' : 'text-secondary'}`}>
          <h2 className="text-4xl">Phillip Menezes</h2>
          <h3 className="text-3xl">Desenvolvedor Júnior Front-End</h3>
          <p>
            Meu nome é <span className="text-glow">Phillip</span>, desenvolvedor{' '}
            <span className="text-glow">Front-End</span> apaixonado por
            tecnologia e por criar soluções digitais que fazem a diferença. Seja
            bem-vindo ao meu <span className="text-glow">portfólio</span>!
          </p>
          <p>
            Este portfólio foi construído com{' '}
            <span className="text-glow">TypeScript</span>,{' '}
            <span className="text-glow">React</span>,{' '}
            <span className="text-glow">Next.js</span>,{' '}
            <span className="text-glow">Redux</span> e{' '}
            <span className="text-glow">RTK Query</span>, estilizado com{' '}
            <span className="text-glow">Tailwind CSS</span>. Os dados são
            consumidos de uma <span className="text-glow">API própria</span>{' '}
            desenvolvida com <span className="text-glow">Next.js</span> e
            hospedada na <span className="text-glow">Vercel</span>, integrada
            diretamente com a <span className="text-glow">API do GitHub</span>.
          </p>
          <p>
            Tenho foco em criar experiências consistentes, acessíveis e
            escaláveis, aplicando testes com{' '}
            <span className="text-glow">Testing Library</span>,{' '}
            <span className="text-glow">Jest</span> e{' '}
            <span className="text-glow">Cypress</span>. Aqui você encontrará
            projetos baseados em um{' '}
            <span className="text-glow">Design System</span> próprio,
            estilizados com <span className="text-glow">Styled-components</span>{' '}
            e <span className="text-glow">Bootstrap</span>.
          </p>
          <p>
            Atualmente, estou expandindo meus conhecimentos para{' '}
            <span className="text-glow">back-end</span>, estudando{' '}
            <span className="text-glow">Node.js</span>,{' '}
            <span className="text-glow">Python</span>,{' '}
            <span className="text-glow">Docker</span> e bancos de dados{' '}
            <span className="text-glow">SQL</span> e{' '}
            <span className="text-glow">MongoDB</span>, fortalecendo minha visão{' '}
            <span className="text-glow">fullstack</span>.
          </p>
          <p>
            Busco constantemente evoluir e contribuir com projetos que unam
            performance, qualidade e uma ótima experiência do usuário.
          </p>
          <div className="mt-6">
            <a
              href="/portfolio/curriculo.pdf"
              download="Phillip_Menezes_Curriculo.pdf"
              className={`${isDarkTheme ? 'bg-tertiary text-primary hover:bg-secondary hover:text-tertiary' : 'bg-secondary text-primary hover:bg-tertiary hover:text-secondary'} px-6 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2`}
            >
              <FaFileDownload />
              Baixe meu Currículo
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
