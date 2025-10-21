import Image from 'next/image'
import React from 'react'
import ErrorImage from '../ui/ErrorImage'
import LoadingSpinner from '../ui/LoadingSpinner'
import Container from './Container'
import Link from 'next/link'
import { useGetUserQuery } from '@/services/api'

function Header() {
  const { data, error, isLoading } = useGetUserQuery()

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
    <div className="w-full p-2 bg-primary border-b-2">
      <Container>
        <div className="w-full grid justify-around lg:flex">
          <Link
            href="/"
            className="relative w-32 h-32 m-auto lg:m-0 flex justify-center items-center"
          >
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
          </Link>
          <div className="flex flex-wrap justify-center lg:flex-col">
            <ul className="flex gap-4 mt-4 lg:grid-cols-2">
              <li className="text-center">
                <Link
                  href={`${data?.whatsapp}`}
                  className="bg-tertiary text-primary px-4 py-2 rounded-bl-2xl rounded-tr-2xl"
                  target="_blank"
                >
                  Whatsapp
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href={`${data?.linkedin}`}
                  className="bg-tertiary text-primary px-4 py-2 rounded-bl-2xl rounded-tr-2xl"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href={`${data?.github}`}
                  className="bg-tertiary text-primary px-4 py-2 rounded-bl-2xl rounded-tr-2xl"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
