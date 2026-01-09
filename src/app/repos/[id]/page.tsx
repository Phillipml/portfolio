'use client'
import Container from '@/components/layout/Container'
import Header from '@/components/layout/Header'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { useTheme } from '@/hooks/useTheme'
import { useGetRepoByIdQuery } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

function RepoId() {
  const params = useParams()
  const { id } = params
  const { data, error, isLoading } = useGetRepoByIdQuery(
    id ? id.toString() : ''
  )
  const [markdown, setMarkdown] = useState('')
  const { isDarkTheme } = useTheme()

  useEffect(() => {
    async function fetchMarkdown() {
      if (!data?.readme) return
      const res = await fetch(data.readme, {
        headers: { Accept: 'application/vnd.github.v3.raw' }
      })
      const text = await res.text()
      setMarkdown(text)
    }
    fetchMarkdown()
  }, [data])

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    notFound()
  }
  return (
    <>
      <Header />
      <div className="pt-24">
        <Container>
          <div className="m-auto w-32 h-32 mt-8 mb-8 relative">
            <h2 className="text-center text-3xl text-glow mt-8">
              {data?.repoName}
            </h2>
            <Image
              src={data?.thumbnail || ''}
              alt={`${data?.repoName} imagem`}
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`p-4 ${isDarkTheme ? 'bg-primary' : 'bg-secondary text-primary'} rounded-2xl border-2 border-secondary m-auto mb-12`}
          >
            <ul>
              <li className="mb-8">
                <span className="text-tertiary text-3xl">Tecnologias:</span>{' '}
                <span>{data?.technologies.join(', ')}</span>
              </li>
              <li className="mb-8">
                <span className="text-tertiary text-3xl">
                  Tipo de desenvolvimento:
                </span>{' '}
                <span>{data?.role}</span>
              </li>
              <li className="mt-2 mb-2">
                {data?.demo_url ? (
                  <Link
                    href={`${data?.demo_url}`}
                    className={`mr-4 bg-tertiary ${isDarkTheme ? 'text-primary' : 'text-secondary'} p-2 mb-2 rounded-bl-2xl border-2 border-tertiary hover:bg-primary hover:border-tertiary hover:text-tertiary transition`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visite o site
                  </Link>
                ) : null}
                <Link
                  href={`${data?.html_url}`}
                  className={`mr-4 bg-tertiary ${isDarkTheme ? 'text-primary' : 'text-secondary'} p-2 mb-2 rounded-bl-2xl border-2 border-tertiary hover:bg-primary hover:border-tertiary hover:text-tertiary transition`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o repositório
                </Link>
              </li>
            </ul>
          </div>
          <h2 className="text-glow text-5xl text-center mt-12 mb-4">
            Meu Objetivo:
          </h2>
          <p className="mb-12">{data?.description}</p>

          {markdown ? (
            <div
              className={`p-4 ${isDarkTheme ? 'bg-primary' : 'bg-secondary text-primary'} rounded-2xl border-2 border-secondary m-auto w-full max-w-full overflow-hidden`}
            >
              <div
                className="
    prose prose-invert max-w-none break-words
    text-lg sm:text-xl leading-relaxed
    [&>p]:text-lg [&>li]:text-lg
    [&>pre]:overflow-x-auto [&>pre]:break-normal
    [&>pre]:whitespace-pre-wrap [&>code]:break-words
    [&>img]:max-w-full [&>img]:h-auto
    [&>table]:overflow-x-auto [&>table]:block
    [&>p]:break-words
  "
              >
                <h2 className="text-tertiary text-5xl text-center mb-24">
                  ReadMe do Projeto:
                </h2>
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <p>Carregando README...</p>
          )}
        </Container>
      </div>
    </>
  )
}

export default RepoId
