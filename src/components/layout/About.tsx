import React from 'react'
import Container from './Container'
import { useGetUserQuery } from '@/services/api'
import LoadingSpinner from '../ui/LoadingSpinner'
import Image from 'next/image'
import { notFound } from 'next/navigation'

function About() {
  const { data, error, isLoading } = useGetUserQuery()
  
  if (isLoading) return <LoadingSpinner />
  if (error) notFound()
  
  return (
    <Container>
      <div className="w-full max-w-5xl mx-auto p-6 bg-tertiary border-2 border-secondary rounded-br-4xl rounded-tl-4xl flex flex-col md:flex-row gap-6 items-center justify-center">
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
        <div className="text-primary">
          <h2 className="text-4xl">Phillip Menezes</h2>
          <h3 className="text-3xl">Desenvolvedor Júnior Front-End</h3>
          <p className="text-lg">
            Sou apaixonado por tecnologia e atualmente atuo no desenvolvimento
            de interfaces modernas e responsivas utilizando TypeScript, React,
            Redux, RTK Query, Styled-components, Bootstrap e TailwindCSS. <br />
            Tenho foco em criar experiências consistentes, acessíveis e
            escaláveis, aplicando boas práticas de código e testes com Testing
            Library, Jest e Cypress. <br />
            Nos últimos meses, venho expandindo meus conhecimentos para o
            back-end, estudando Node.js, Python e Docker, além de bancos de
            dados SQL e MongoDB. Essa jornada tem fortalecido minha visão
            fullstack, permitindo compreender melhor todo o ciclo de
            desenvolvimento de uma aplicação e integrar soluções de ponta a
            ponta. Busco constantemente evoluir como desenvolvedor, contribuir
            com projetos que unam performance, qualidade e uma ótima experiência
            do usuário, e crescer profissionalmente dentro de times
            colaborativos e inovadores.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default About
