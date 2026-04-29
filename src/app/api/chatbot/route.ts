import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1'
})

function findRelevantRepos(question: string, repos: any[]) {
  const q = question.toLowerCase()
  const filtered = repos.filter((repo) => {
    const blob =
      `${repo.repoName} ${repo.description} ${repo.mainFocus} ${(repo.technologies || []).join(' ')}`.toLowerCase()
    return q.split(' ').some((word) => word.length > 3 && blob.includes(word))
  })

  // ✅ Se não encontrar nada específico, retorna os 5 primeiros para a IA ter do que falar
  return filtered.length > 0 ? filtered.slice(0, 5) : repos.slice(0, 5)
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // Aqui você já está acessando a mesma API que o api.ts usa,
    // a diferença é que aqui usamos fetch puro porque estamos no servidor.
    const [profile, repos] = await Promise.all([
      fetch('https://phillipml-personal-api.vercel.app/api/profile', {
        cache: 'no-store'
      }).then((r) => r.json()),
      fetch('https://phillipml-personal-api.vercel.app/api/repos', {
        cache: 'no-store'
      }).then((r) => r.json())
    ])

    const relevantRepos = findRelevantRepos(message, repos)

    const systemPrompt = `
Você é o assistente de IA do portfólio do Phillip. Seu objetivo é vender o trabalho dele para recrutadores e clientes.

REGRAS CRÍTICAS:
1. Use as informações abaixo para responder. 
2. Se o usuário perguntar "o que você faz", "quais seus projetos" ou "sobre você", use a seção PROFILE e RELEVANT PROJECTS.
3. Se não encontrar um projeto EXATO, sugira o projeto mais próximo ou mencione as tecnologias que ele domina.
4. Nunca diga que não tem acesso a informações se houver dados nos projetos fornecidos.
5. Responda sempre no mesmo idioma do usuário.

DADOS DO PERFIL:
${JSON.stringify(profile, null, 2)}

PROJETOS DISPONÍVEIS PARA CITAR:
${JSON.stringify(relevantRepos, null, 2)}
`

    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      temperature: 0.6,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ]
    })

    return Response.json({ answer: completion.choices[0].message.content })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Erro interno' }, { status: 500 })
  }
}
