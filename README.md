# 📝 Gerenciador de Tarefas (To-Do List)

Uma aplicação moderna de gerenciamento de tarefas desenvolvida para praticar os conceitos mais recentes do **Next.js (App Router)**, comunicação com banco de dados utilizando **Prisma ORM** e persistência de dados com **PostgreSQL**.

🚀 **[Visualize o projeto online na Vercel](https://lista-de-tarefas-hjk85javt-my-projects-7f3c.vercel.app/)**

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org)
- **Linguagem:** [TypeScript](https://typescriptlang.org)
- **Banco de Dados:** [PostgreSQL](https://postgresql.org)
- **ORM:** [Prisma](https://prisma.io)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com)
- **Componentes UI:** [shadcn/ui](https://shadcn.com) (Baseado em Radix UI)
- **Ícones:** [Lucide React](https://lucide.dev)

---

## ⚡ Funcionalidades Principais

- **CRUD Completo:** Criação, listagem, atualização de status (concluída/pendente) e exclusão de tarefas.
- **Filtros reativos via URL:** Filtragem de tarefas (*Todas*, *Não finalizadas* e *Concluídas*) utilizando `searchParams` do Next.js, mantendo o estado do filtro compartilhável.
- **Server Components & Server Actions:** Operações de mutação de dados executadas diretamente no servidor através de formulários nativos do HTML, reduzindo o bundle de JavaScript no cliente.
- **Múltipla Deleção:** Modal de confirmação (`AlertDialog` do shadcn) para apagar todas as tarefas concluídas de uma vez só.
- **Métricas em tempo real:** Contador de tarefas e barra de progresso dinâmica baseada no percentual de conclusão.

---

## 📦 Como rodar o projeto localmente

### 1. Clonar o repositório
```bash
git clone https://github.com
cd SEU_REPOSITORIO
```

### 2. Instalar as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configurar as variáveis de ambiente
Crie um arquivo chamado `.env` na raiz do seu projeto e adicione a URL de conexão do seu banco de dados PostgreSQL:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

### 4. Rodar as Migrations do Prisma
Para criar as tabelas necessárias no seu banco de dados PostgreSQL, execute:
```bash
npx prisma migrate dev
```

### 5. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido por [Lucas Mendes](https://github.com/lucasmendesti)
