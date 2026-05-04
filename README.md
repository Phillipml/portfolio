# 💼 Portfolio - Phillip Menezes

Um portfólio moderno e interativo construído com Next.js, TypeScript e Tailwind CSS. Interface responsiva com sistema de temas, integração com GitHub API e apresentação dinâmica de projetos.

# 📸 Screenshots

# 🌞 Tema Claro

![Screenshot Tema Claro](https://raw.githubusercontent.com/Phillipml/portfolio/main/public/screenshotLightTheme.png)
_Interface do portfólio em tema claro com apresentação profissional_

# 🌙 Tema Escuro

![Screenshot Tema Escuro](https://raw.githubusercontent.com/Phillipml/portfolio/main/public/screenshotDarkTheme.png)
_Interface do portfólio em tema escuro com design moderno_

# 🚀 Funcionalidades

## 🏠 **Página Inicial Interativa:**

- Apresentação pessoal com animações
- Sistema de temas dinâmico
- Design responsivo e moderno

## 📁 **Catálogo de Projetos:**

- Lista dinâmica de repositórios do GitHub
- Destaques especiais para projetos principais
- Navegação fluida entre projetos

## 🔍 **Páginas de Detalhes:**

- Visualização completa de cada projeto
- Renderização automática de README
- Links para demo e repositório
- Stack tecnológico detalhado

## 🎨 **Sistema de Temas:**

- Toggle entre tema claro/escuro
- Persistência da preferência
- Transições suaves
- Design consistente

## 📱 **Design Responsivo:**

- Otimizado para desktop, tablet e mobile
- Layout adaptativo
- Componentes flexíveis

## ⚡ **Performance Otimizada:**

- Lazy loading de imagens
- Cache inteligente com RTK Query
- Animações performáticas
- SEO otimizado

## 🤖 **Assistente de IA Integrado:**

- Chatbot com IA usando Llama 3.3 70B via Groq API
- Respostas contextuais sobre projetos e habilidades
- Formatação inteligente de listas e descrições
- Integração com dados do perfil e repositórios
- Interface conversacional para recrutadores e clientes

# 🛠️ Tecnologias Utilizadas

## **Frontend:**

- **Next.js 15.5.5**: Framework React com App Router
- **React 19.1.0**: Biblioteca para construção da interface
- **TypeScript 5.8.3**: Superset do JavaScript com tipagem estática
- **Tailwind CSS 4**: Framework CSS utilitário
- **React Icons 5.5.0**: Biblioteca de ícones

## **Gerenciamento de Estado:**

- **Redux Toolkit 2.9.0**: Gerenciamento de estado global
- **RTK Query**: Cache e sincronização de dados
- **React Redux 9.2.0**: Integração React-Redux

## **Integração e APIs:**

- **GitHub API**: Integração direta com repositórios
- **API Pessoal**: Backend customizado para dados
- **Groq API**: Modelo Llama 3.3 70B para chatbot inteligente
- **OpenAI SDK**: Integração com API de IA
- **Vercel Analytics**: Métricas de performance

## **Desenvolvimento:**

- **ESLint**: Linting e qualidade de código
- **Prettier**: Formatação automática
- **TypeScript ESLint**: Linting específico para TS

# 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Chave de API do Groq (para o chatbot funcionar)

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
GROQ_API_KEY=sua_chave_aqui
```

Para obter uma chave de API gratuita, acesse: [https://console.groq.com](https://console.groq.com)

# 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Phillipml/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e acesse `http://localhost:3000`

# 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Gera build de produção com Turbopack
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint com correções automáticas

# 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   │   └── chatbot/       # API do chatbot com IA
│   │       └── route.ts   # Rota POST para processar mensagens
│   ├── home/              # Página principal do portfólio
│   ├── repos/[id]/        # Páginas dinâmicas de projetos
│   ├── layout.tsx         # Layout raiz da aplicação
│   └── page.tsx           # Página inicial
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── About.tsx      # Seção sobre mim
│   │   ├── Chatbot.tsx    # Componente do chatbot com IA
│   │   ├── Container.tsx # Container responsivo
│   │   ├── Header.tsx     # Cabeçalho da aplicação
│   │   └── ThemeButton.tsx # Botão de alternância de tema
│   └── ui/                # Componentes de interface
│       ├── Button.tsx     # Botão customizado
│       ├── ErrorImage.tsx # Imagem de erro
│       ├── HomeBackground.tsx # Fundo animado
│       ├── LoadingSpinner.tsx # Spinner de carregamento
│       └── StackList.tsx  # Lista de tecnologias
├── context/               # Contextos React
│   └── ThemeContext.ts    # Contexto de tema
├── hooks/                 # Hooks customizados
│   └── useTheme.tsx       # Hook para gerenciamento de tema
├── providers/             # Provedores de contexto
│   ├── AppProvider.tsx    # Provedor principal
│   ├── ChatbotProvider.tsx # Provedor do chatbot (Redux)
│   ├── ReduxProvider.tsx  # Provedor Redux
│   └── ThemeProvider.tsx  # Provedor de tema
├── services/              # Integração com APIs
│   ├── api.ts             # Configuração RTK Query
│   └── chatbotApi.ts      # API do chatbot
├── store/                 # Configuração Redux
│   └── store.ts           # Store Redux
├── types/                 # Definições TypeScript
│   └── apiTypes.ts        # Tipos da API
└── utils/                 # Utilitários
    └── theme.ts           # Utilitários de tema
```

# 🎯 Como Usar

1. **Explore o Portfólio**: Navegue pela página inicial para conhecer o desenvolvedor
2. **Visualize Projetos**: Acesse a seção "home" para ver todos os projetos
3. **Detalhes dos Projetos**: Clique em qualquer projeto para ver detalhes completos
4. **Alterne Temas**: Use o botão de tema para alternar entre modo claro/escuro
5. **Navegação**: Use o menu para navegar entre seções
6. **Assistente de IA**: Clique no ícone do robô no canto inferior direito para conversar com o assistente sobre projetos e habilidades

# 🏪 Funcionalidades do Portfólio

# 👨‍💻 **Apresentação Pessoal**

- Biografia interativa e animada
- Stack tecnológico destacado
- Links para redes sociais
- Design profissional e moderno

# 📂 **Catálogo de Projetos**

- Integração direta com GitHub API
- Destaques para projetos principais
- Filtros por tecnologia
- Navegação intuitiva

# 📄 **Páginas de Detalhes**

- README renderizado automaticamente
- Stack tecnológico detalhado
- Links para demo e código
- Descrição completa do projeto

# 🎨 **Sistema de Temas**

- Toggle entre tema claro/escuro
- Persistência da preferência
- Transições suaves
- Design consistente

# ⚡ **Performance e SEO**

- Otimização automática de imagens
- Lazy loading inteligente
- Cache eficiente com RTK Query
- SEO otimizado para busca

# � **Assistente de IA (Chatbot)**

## Como Funciona

O assistente de IA é um chatbot integrado ao portfólio que permite conversar sobre os projetos e habilidades do desenvolvedor:

- **Interface**: Botão flutuante no canto inferior direito com ícone de robô
- **Modelo**: Llama 3.3 70B executado via Groq API
- **Dados**: Integração com API pessoal contendo perfil e repositórios GitHub
- **Contexto**: Respostas sempre baseadas nos projetos e habilidades reais do desenvolvedor

## Recursos

- ✅ Respostas contextuais sobre projetos específicos
- ✅ Busca inteligente por tecnologias (React, Python, Django, etc.)
- ✅ Formatação automática em listas numeradas
- ✅ Detecção de palavras-chave nos repositórios
- ✅ Fallback para os 5 projetos mais relevantes quando não encontra correspondência exata
- ✅ Prompt engineering para evitar respostas genéricas

## Exemplo de Uso

```
Usuário: "Liste projetos com Python"
IA: "Aqui estão os projetos que utilizam Python:

1. Django Personal Blog
   Blog pessoal completo com Django...

2. Bookstore API
   API REST com Django REST Framework..."
```

# � Qualidade de Código

O projeto segue as melhores práticas de desenvolvimento:

- **TypeScript**: Tipagem estática completa
- **ESLint**: Linting rigoroso com regras customizadas
- **Prettier**: Formatação automática de código
- **Arquitetura Limpa**: Separação clara de responsabilidades
- **Componentes Reutilizáveis**: Design system consistente

```bash
# Executar linting
npm run lint

# Verificar tipos TypeScript
npx tsc --noEmit
```

# 🎨 Características do Design

- **Tailwind CSS**: Estilização utilitária e responsiva
- **Design System**: Componentes reutilizáveis e acessíveis
- **Responsividade**: Adaptação automática para diferentes dispositivos
- **Temas Dinâmicos**: Sistema completo de temas claro/escuro
- **Animações**: Transições suaves e micro-interações
- **UX Otimizada**: Interface intuitiva e moderna

# 📊 Integração com APIs

## **GitHub API:**

- Busca automática de repositórios
- Dados atualizados em tempo real
- Cache inteligente para performance

## **API Pessoal:**

- Backend customizado para dados específicos
- Controle total sobre apresentação
- Integração com múltiplas fontes

## **Groq API (Chatbot):**

- Modelo Llama 3.3 70B para processamento de linguagem natural
- Respostas rápidas e contextualizadas
- Custo zero com tier gratuito da Groq
- System prompt customizado para manter foco nos projetos do desenvolvedor
- Integração via OpenAI SDK com baseURL customizado

# 🚀 Deploy e Produção

- **Vercel**: Deploy automático e otimizado
- **Analytics**: Métricas de performance integradas
- **CDN Global**: Distribuição mundial de conteúdo
- **HTTPS**: Segurança garantida

# 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

**Desenvolvido por:**
Phillip Menezes

**Email:**
contato.phillip.menezes@gmail.com  
**LinkedIn:**
[Phillip Menezes](https://www.linkedin.com/in/phillip-menezes-063a39227/)  
**GitHub:**
[Phillipml](https://github.com/Phillipml/)

---

**Nota**: Este é um portfólio profissional desenvolvido com as melhores práticas de Next.js, TypeScript e design moderno. O **Assistente de IA integrado** é uma feature diferenciada que demonstra habilidades em integração de APIs, prompt engineering e desenvolvimento full stack.
