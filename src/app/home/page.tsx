import Button from '@/components/ui/Button'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 text-center">
        <h2 className="mb-5">Página em desenvolvimento. </h2>
        <Link href="/">
          <Button className="w-25 h-auto">Voltar</Button>
        </Link>
      </div>
      <LoadingSpinner />
    </>
  )
}
