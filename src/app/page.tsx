import Container from '@/components/layout/Container'
import HomeBackground from '@/components/ui/HomeBackground'

export default function Home() {
  return (
    <>
      <HomeBackground />
      <Container>
        <div className="w-6x1 h-max border-2 border-l-tertiary grid sm:flex w-auto justify-around">
          <h2 className="text-tertiary text-9xl">Olá!</h2>
          <div className="grid gap-6 w-2xl">
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
