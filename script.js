/* =====================================================================
   GITHUB DO ZERO — script.js
   Organização:
     1. DADOS        (módulos, glossário, comandos, desafio, quiz, FAQ)
     2. UTILITÁRIOS  (seletores, armazenamento seguro)
     3. MÓDULOS      (trilha de aprendizado)
     4. GLOSSÁRIO    (busca e filtro)
     5. COMANDOS     (guia rápido com botão copiar)
     6. DESAFIO      (checklist)
     7. QUIZ
     8. FAQ
     9. INTERFACE    (tema, menu, rolagem, animações)
    10. CONTA        (cadastro, login, progresso por usuário)
    11. CERTIFICADO  (requisitos, geração, download e impressão)
   ===================================================================== */


/* =====================================================================
   1. DADOS
   ===================================================================== */

const lessonData = [
  {
    title: "Conhecendo o GitHub",
    subtitle: "Conceitos essenciais",
    time: "10–15 MIN",
    intro: "Antes de criar seu primeiro projeto, vamos entender o que é a plataforma e conhecer os termos que aparecem durante o uso.",
    goals: ["Diferenciar Git e GitHub", "Entender o que é um repositório", "Reconhecer commit, branch e Pull Request"],
    body: `
      <h4>O que é GitHub?</h4>
      <p>O GitHub é uma plataforma online para armazenar, organizar e compartilhar projetos. Ele permite que pessoas acompanhem alterações e trabalhem juntas no mesmo projeto, sem sobrescrever o trabalho umas das outras.</p>

      <h4>Git é diferente de GitHub?</h4>
      <p>Sim! Os nomes são parecidos, mas são coisas diferentes que trabalham juntas:</p>
      <div class="compare">
        <div class="compare-item"><b>Git</b><p>Sistema de controle de versão. Roda no seu computador e registra cada mudança feita nos arquivos.</p></div>
        <div class="compare-item"><b>GitHub</b><p>Plataforma online que hospeda projetos Git e facilita o compartilhamento e a colaboração.</p></div>
      </div>

      <h4>Para que as pessoas usam o GitHub?</h4>
      <ul>
        <li><b>Trabalhos em grupo:</b> todos editam o mesmo projeto com um histórico organizado.</li>
        <li><b>Portfólio:</b> mostrar seus projetos para recrutadores e colegas.</li>
        <li><b>Código aberto:</b> contribuir com projetos usados no mundo todo.</li>
        <li><b>Histórico e backup:</b> voltar a uma versão anterior quando algo dá errado.</li>
      </ul>

      <h4>O que é um repositório?</h4>
      <p>É o espaço onde ficam os arquivos de um projeto e todo o seu histórico. Pense nele como uma pasta com memória. Ele pode ser <b>público</b>, visível para qualquer pessoa, ou <b>privado</b>, acessível apenas ao proprietário e às pessoas autorizadas.</p>

      <h4>README e Markdown</h4>
      <p>O <code>README.md</code> é a "capa" do projeto: apresenta o objetivo, os integrantes, as tecnologias e as instruções de uso. Ele é escrito em <b>Markdown</b>, uma forma simples de formatar textos usando símbolos.</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Você escreve</th><th>O resultado</th></tr></thead>
          <tbody>
            <tr><td><code># Título</code></td><td>Título grande</td></tr>
            <tr><td><code>## Subtítulo</code></td><td>Título de seção</td></tr>
            <tr><td><code>**texto**</code></td><td><b>Texto em negrito</b></td></tr>
            <tr><td><code>*texto*</code></td><td><i>Texto em itálico</i></td></tr>
            <tr><td><code>- item</code></td><td>Item de lista</td></tr>
            <tr><td><code>[nome](https://site.com)</code></td><td>Link clicável</td></tr>
          </tbody>
        </table>
      </div>

      <h4>Commit, branch, Pull Request e merge</h4>
      <ul>
        <li><b>Commit:</b> registro de uma alteração, com uma mensagem que explica o que foi feito.</li>
        <li><b>Branch:</b> linha de trabalho separada da versão principal.</li>
        <li><b>Pull Request:</b> proposta para revisar e incorporar alterações de uma branch em outra.</li>
        <li><b>Merge:</b> integração das alterações na branch de destino.</li>
      </ul>

      <h4>Compartilhamento seguro</h4>
      <p>Você pode compartilhar o link do repositório ou convidar colaboradores. Nunca publique senhas, tokens, códigos de autenticação ou dados pessoais desnecessários.</p>
      <div class="lesson-callout"><b>Resumindo:</b> o Git guarda a história, o GitHub coloca essa história na internet e ajuda pessoas a trabalharem juntas.</div>`
  },
  {
    title: "Criando seu repositório",
    subtitle: "Primeiros passos",
    time: "15–20 MIN",
    intro: "Agora vamos colocar a mão na massa. Todas as etapas principais podem ser feitas pelo navegador, sem instalar o Git.",
    goals: ["Criar uma conta e um repositório", "Adicionar e editar arquivos", "Fazer commits e convidar colaboradores"],
    body: `
      <h4>1. Criar uma conta</h4>
      <ol>
        <li>Acesse <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com</a>.</li>
        <li>Clique em <b>Sign up</b> e informe os dados solicitados.</li>
        <li>Escolha um nome de usuário e crie uma senha segura.</li>
        <li>Conclua o cadastro e confirme seu e-mail, se solicitado.</li>
      </ol>
      <div class="lesson-callout tip"><b>Dica:</b> seu nome de usuário fará parte do endereço dos seus projetos (<code>github.com/seu-usuario</code>). Escolha algo simples e profissional.</div>

      <h4>2. Criar um repositório</h4>
      <ol>
        <li>Entre na sua conta e clique em <b>New</b>, ou acesse <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">github.com/new</a>.</li>
        <li>Digite um nome, como <code>meu-primeiro-projeto</code>, e uma descrição curta.</li>
        <li>Escolha se será <b>Public</b> (público) ou <b>Private</b> (privado).</li>
        <li>Marque <b>Add a README file</b> para iniciar com uma apresentação.</li>
        <li>Clique em <b>Create repository</b>.</li>
      </ol>
      <h4>Como escolher um bom nome?</h4>
      <div class="do-dont">
        <div class="do"><b>✓ Prefira</b><p><code>meus-estudos</code><br><code>site-do-grupo</code><br><code>calculadora-simples</code></p></div>
        <div class="dont"><b>✗ Evite</b><p><code>Projeto Novo 2 (final)</code><br><code>teste123</code><br><code>asdfgh</code></p></div>
      </div>
      <p>Use letras minúsculas, sem acentos nem espaços (troque espaços por hífens) e escolha um nome que explique o projeto.</p>

      <h4>3. Adicionar arquivos</h4>
      <ol>
        <li>Dentro do repositório, clique em <b>Add file</b>.</li>
        <li>Escolha <b>Create new file</b> para criar um arquivo ou <b>Upload files</b> para enviar um arquivo existente.</li>
        <li>Digite o nome ou selecione o arquivo e inclua o conteúdo.</li>
        <li>Escreva uma mensagem e confirme em <b>Commit changes</b>.</li>
      </ol>

      <h4>4. Escrever boas mensagens de commit</h4>
      <p>A mensagem do commit explica o que mudou. Ela será lida por você no futuro e pelas pessoas do seu grupo.</p>
      <div class="do-dont">
        <div class="do"><b>✓ Claras</b><p>Adiciona lista de tarefas ao README<br>Corrige erro de digitação no título</p></div>
        <div class="dont"><b>✗ Vagas</b><p>mudanças<br>ajustes finais agora vai</p></div>
      </div>

      <h4>5. Editar e consultar alterações</h4>
      <p>Abra um arquivo e selecione o ícone de lápis (<b>Edit</b>). Faça a alteração e registre um commit. Para ver o histórico, abra a área de commits do repositório (o ícone de relógio, com o número de commits) e selecione um registro para conferir autor, data e mudanças — o que foi removido aparece em vermelho e o que foi adicionado, em verde.</p>

      <h4>6. Convidar colaboradores</h4>
      <ol>
        <li>Abra <b>Settings</b> no repositório.</li>
        <li>Procure <b>Collaborators</b> ou a área de acesso e colaboração.</li>
        <li>Selecione <b>Add people</b>, pesquise pelo usuário e envie o convite.</li>
        <li>A pessoa deverá aceitar para ter acesso.</li>
      </ol>
      <div class="lesson-callout">Os nomes e a posição dos menus podem mudar com as atualizações do GitHub. Consulte a documentação oficial se a tela estiver diferente.</div>`
  },
  {
    title: "Colaborando em equipe",
    subtitle: "Branches e revisões",
    time: "15–20 MIN",
    intro: "O GitHub ajuda várias pessoas a contribuir para um mesmo projeto sem misturar todas as alterações de uma vez.",
    goals: ["Criar e usar uma branch", "Abrir um Pull Request", "Revisar e fazer o merge com segurança"],
    body: `
      <h4>A ideia por trás das branches</h4>
      <p>Imagine que a branch <code>main</code> é a versão "oficial" do projeto. Em vez de mexer direto nela, cada pessoa cria uma cópia de trabalho (uma branch), faz suas alterações com tranquilidade e só depois propõe incluí-las na versão oficial.</p>
      <div class="branch-diagram" aria-label="Diagrama: a branch melhoria-guia sai da main e volta por merge">
        <div class="branch-row"><span class="branch-name main">main</span><span class="dot"></span><span class="line"></span><span class="dot"></span><span class="line"></span><span class="dot"></span><span class="line"></span><span class="dot merge"></span></div>
        <div class="branch-row branch-offset"><span class="branch-name feature">melhoria-guia</span><span class="line short"></span><span class="dot"></span><span class="line"></span><span class="dot"></span><span class="line short"></span></div>
      </div>

      <h4>1. Criar uma branch</h4>
      <ol>
        <li>Abra o repositório e localize o seletor de branch, geralmente identificado como <code>main</code>.</li>
        <li>Digite um nome para a nova branch, por exemplo <code>melhoria-guia</code>.</li>
        <li>Escolha criar a branch a partir da principal.</li>
      </ol>

      <h4>2. Fazer uma alteração</h4>
      <p>Confirme que está na branch nova (o nome aparece no seletor). Abra o arquivo, clique em <b>Edit</b>, faça uma melhoria e registre um commit com uma mensagem clara, como <code>Melhora explicação sobre README</code>.</p>

      <h4>3. Abrir um Pull Request</h4>
      <ol>
        <li>Acesse a aba <b>Pull requests</b> e clique em <b>New pull request</b>.</li>
        <li>Compare a branch que contém suas alterações com a branch de destino, geralmente <code>main</code>.</li>
        <li>Confira as diferenças e selecione <b>Create pull request</b>.</li>
        <li>Adicione um título e explique o que foi alterado.</li>
      </ol>

      <h4>4. Revisar e fazer o merge</h4>
      <p>Outro integrante deve analisar o conteúdo, comentar e solicitar correções se necessário. Quando estiver tudo certo e as regras do repositório permitirem, use <b>Merge pull request</b> para incorporar as mudanças.</p>

      <h4>Por que revisar?</h4>
      <p>A revisão ajuda a encontrar erros, melhorar a clareza e garantir que a mudança esteja de acordo com o objetivo do projeto. Também permite que todos aprendam uns com os outros.</p>

      <h4>Como dar um bom feedback</h4>
      <ul>
        <li>Comece pelo que está bom e seja específico: aponte a linha e explique o motivo.</li>
        <li>Sugira em vez de ordenar: "E se trocássemos…?" funciona melhor que "Está errado".</li>
        <li>Critique o trabalho, nunca a pessoa.</li>
      </ul>

      <h4>E se aparecer um conflito?</h4>
      <p>Um <b>conflito de merge</b> acontece quando duas pessoas alteram a mesma linha de um arquivo. O GitHub avisa e mostra os dois trechos para você escolher qual manter (ou combinar os dois). Respire: é normal e tem solução.</p>

      <h4>Issues, forks e outras formas de colaborar</h4>
      <ul>
        <li><b>Issues:</b> aba usada para registrar tarefas, dúvidas e problemas do projeto.</li>
        <li><b>Fork:</b> sua própria cópia de um repositório de outra pessoa — o caminho para contribuir com projetos em que você não é colaborador.</li>
      </ul>
      <div class="lesson-callout"><b>Dica:</b> antes do merge, confira se o Pull Request compara as branches corretas e se as alterações exibidas são exatamente as que o grupo deseja incorporar.</div>`
  },
  {
    title: "Boas práticas e próximos passos",
    subtitle: "Organização e publicação",
    time: "10–15 MIN",
    intro: "Com o básico dominado, pequenos hábitos fazem seus projetos parecerem — e serem — muito mais profissionais.",
    goals: ["Organizar commits e arquivos", "Publicar uma página com GitHub Pages", "Saber por onde continuar estudando"],
    body: `
      <h4>1. Commits pequenos e frequentes</h4>
      <p>Prefira vários commits pequenos, cada um com um propósito, a um commit gigante com tudo misturado. Fica mais fácil entender o histórico e desfazer algo se necessário.</p>

      <h4>2. Um README completo</h4>
      <p>Um bom README responde, em poucos segundos, às perguntas de quem chega ao projeto:</p>
      <ul>
        <li><b>O que é?</b> Nome e objetivo do projeto.</li>
        <li><b>Como usar?</b> Instruções de instalação ou de acesso.</li>
        <li><b>Quem fez?</b> Integrantes e contatos.</li>
        <li><b>Quais tecnologias?</b> Linguagens, ferramentas e referências.</li>
      </ul>

      <h4>3. O arquivo .gitignore</h4>
      <p>Lista o que o Git deve ignorar: arquivos temporários, pastas de configuração e, principalmente, <b>segredos</b>. Exemplo de conteúdo:</p>
      <pre class="code-block"><code># arquivos que não devem ir para o GitHub
.env
node_modules/
.DS_Store</code></pre>

      <h4>4. Escolha uma licença</h4>
      <p>Se o projeto for público, uma licença (como a MIT) informa o que as outras pessoas podem ou não fazer com o seu código. Ao criar o repositório, é possível escolher uma no campo <b>Add license</b>.</p>

      <h4>5. Publique seu site com GitHub Pages</h4>
      <p>Se o seu repositório tiver um arquivo <code>index.html</code>, o GitHub pode transformá-lo em um site gratuito:</p>
      <ol>
        <li>Abra <b>Settings → Pages</b>.</li>
        <li>Em <b>Build and deployment</b>, escolha <b>Deploy from a branch</b>.</li>
        <li>Selecione a branch <code>main</code> e a pasta <code>/ (root)</code>, e clique em <b>Save</b>.</li>
        <li>Aguarde alguns minutos: o endereço do site aparecerá na mesma página.</li>
      </ol>
      <div class="lesson-callout tip"><b>Curiosidade:</b> este minicurso é um site estático e pode ser publicado exatamente assim!</div>

      <h4>6. Proteja sua conta</h4>
      <p>Ative a verificação em duas etapas e nunca compartilhe tokens ou senhas. Veja a seção de segurança mais abaixo.</p>

      <h4>Para onde ir agora?</h4>
      <ul>
        <li>Conclua o <b>desafio final</b> e faça o <b>quiz</b>.</li>
        <li>Contribua com um projeto de código aberto procurando por issues com o rótulo <code>good first issue</code>.</li>
        <li>Faça os cursos do <a href="https://skills.github.com/" target="_blank" rel="noopener noreferrer">GitHub Skills</a>.</li>
        <li>Experimente o Git no terminal usando o guia de comandos desta página.</li>
      </ul>`
  }
];

const glossaryData = [
  { term: "Repository", pt: "Repositório", group: "Básico", def: "Espaço onde ficam os arquivos de um projeto e todo o seu histórico de alterações.", example: "github.com/seu-usuario/meus-estudos" },
  { term: "README", pt: "Leia-me", group: "Básico", def: "Arquivo de apresentação do projeto. Aparece automaticamente na página inicial do repositório.", example: "README.md" },
  { term: "Markdown", pt: "Linguagem de marcação", group: "Básico", def: "Forma simples de formatar texto usando símbolos, como # para títulos e ** para negrito.", example: "**olá** → olá em negrito" },
  { term: "Commit", pt: "Registro de alteração", group: "Básico", def: "Um 'retrato' do projeto em determinado momento, acompanhado de uma mensagem explicando a mudança.", example: "Adiciona página de contato" },
  { term: "Branch", pt: "Ramificação", group: "Colaboração", def: "Linha de trabalho paralela, separada da versão principal, para testar mudanças com segurança.", example: "melhoria-guia" },
  { term: "Main", pt: "Branch principal", group: "Colaboração", def: "A branch padrão do repositório, considerada a versão oficial e estável do projeto.", example: "main" },
  { term: "Pull Request", pt: "Pedido de integração", group: "Colaboração", def: "Proposta para que as alterações de uma branch sejam revisadas e incorporadas em outra.", example: "melhoria-guia → main" },
  { term: "Merge", pt: "Mesclar / integrar", group: "Colaboração", def: "Ato de juntar as alterações de uma branch na branch de destino.", example: "Merge pull request #1" },
  { term: "Fork", pt: "Bifurcação", group: "Colaboração", def: "Cópia de um repositório de outra pessoa para a sua conta, onde você pode experimentar à vontade.", example: "Botão Fork, no canto superior direito" },
  { term: "Issue", pt: "Tarefa / problema", group: "Colaboração", def: "Registro de uma tarefa, dúvida, sugestão ou erro dentro do repositório.", example: "Issue #4: corrigir link quebrado" },
  { term: "Clone", pt: "Clonar", group: "Terminal", def: "Baixar uma cópia completa de um repositório do GitHub para o seu computador.", example: "git clone <endereço>" },
  { term: "Push / Pull", pt: "Enviar / Baixar", group: "Terminal", def: "Push envia seus commits para o GitHub. Pull baixa para o seu computador as novidades que outras pessoas enviaram.", example: "git push · git pull" },
  { term: ".gitignore", pt: "Lista de ignorados", group: "Terminal", def: "Arquivo que diz ao Git quais arquivos e pastas não devem ser registrados no repositório.", example: ".env" },
  { term: "Conflito", pt: "Conflito de merge", group: "Colaboração", def: "Situação em que duas pessoas mudaram o mesmo trecho e é preciso escolher qual versão manter.", example: "<<<<<<< ======= >>>>>>>" }
];

const commandData = [
  {
    group: "Configurar",
    items: [
      { cmd: 'git config --global user.name "Seu Nome"', desc: "Define o nome que aparecerá nos seus commits (faça uma vez)." },
      { cmd: 'git config --global user.email "voce@email.com"', desc: "Define o e-mail dos seus commits (faça uma vez)." },
      { cmd: "git --version", desc: "Confere se o Git está instalado e mostra a versão." }
    ]
  },
  {
    group: "Começar",
    items: [
      { cmd: "git init", desc: "Transforma a pasta atual em um repositório Git." },
      { cmd: "git clone https://github.com/usuario/repositorio.git", desc: "Baixa uma cópia de um repositório do GitHub." },
      { cmd: "git remote add origin https://github.com/usuario/repositorio.git", desc: "Liga a pasta local a um repositório no GitHub." }
    ]
  },
  {
    group: "Dia a dia",
    items: [
      { cmd: "git status", desc: "Mostra quais arquivos foram alterados e o que será commitado." },
      { cmd: "git add .", desc: "Prepara todas as alterações para o próximo commit." },
      { cmd: 'git commit -m "Adiciona página inicial"', desc: "Registra as alterações preparadas, com uma mensagem." },
      { cmd: "git log --oneline", desc: "Lista o histórico de commits de forma resumida." },
      { cmd: "git diff", desc: "Mostra exatamente o que mudou nos arquivos." }
    ]
  },
  {
    group: "Branches",
    items: [
      { cmd: "git branch", desc: "Lista as branches existentes (a atual aparece com *)." },
      { cmd: "git switch -c melhoria-guia", desc: "Cria uma branch nova e já muda para ela." },
      { cmd: "git switch main", desc: "Volta para a branch principal." },
      { cmd: "git merge melhoria-guia", desc: "Traz as alterações da branch indicada para a atual." }
    ]
  },
  {
    group: "Sincronizar",
    items: [
      { cmd: "git push -u origin main", desc: "Envia seus commits ao GitHub (o -u só na primeira vez)." },
      { cmd: "git pull", desc: "Baixa e integra as novidades do GitHub." },
      { cmd: "git fetch", desc: "Baixa as novidades sem integrá-las ainda." }
    ]
  }
];

const taskData = [
  { title: "Criar o repositório", code: "meus-estudos", hint: "Acesse github.com/new, dê o nome e clique em Create repository." },
  { title: "Escrever um README com o objetivo", hint: "Marque 'Add a README file' ou edite o README.md e conte o que você vai estudar." },
  { title: "Adicionar o arquivo", code: "anotacoes.md", hint: "Add file → Create new file. Anote três coisas que aprendeu usando Markdown." },
  { title: "Registrar uma alteração com commit", hint: "Edite um arquivo e confirme em Commit changes com uma mensagem clara." },
  { title: "Compartilhar o projeto com um colega", hint: "Envie o link do repositório ou convide a pessoa em Settings → Collaborators." },
  { title: "Criar uma branch e abrir um Pull Request", hint: "Crie a branch, altere um arquivo e use New pull request. Se puder, peça uma revisão!" }
];

const questions = [
  { q: "Qual é a principal função do Git?",
    options: ["Hospedar sites na internet", "Registrar e controlar alterações nos arquivos", "Criar imagens para o projeto"],
    answer: 1, explain: "Isso mesmo! O Git é um sistema de controle de versão." },
  { q: "Qual é a diferença entre Git e GitHub?",
    options: ["São dois nomes para a mesma coisa", "O Git controla versões; o GitHub hospeda projetos Git na internet", "O GitHub só funciona sem o Git e vice-versa"],
    answer: 1, explain: "Correto! O Git é a ferramenta; o GitHub é a plataforma que hospeda e facilita a colaboração." },
  { q: "O que é um repositório no GitHub?",
    options: ["Um espaço para armazenar arquivos e histórico de um projeto", "Uma senha de acesso", "Um tipo de linguagem de programação"],
    answer: 0, explain: "Correto! O repositório reúne os arquivos e o histórico do projeto." },
  { q: "Para que serve o arquivo README.md?",
    options: ["Guardar as senhas do projeto", "Apresentar o projeto: objetivo, integrantes e instruções", "Apagar arquivos antigos"],
    answer: 1, explain: "Exato! O README é a página de apresentação do repositório." },
  { q: "O que é um commit?",
    options: ["O registro de uma alteração, acompanhado de uma mensagem", "Um convite para um colaborador", "Uma cópia do repositório de outra pessoa"],
    answer: 0, explain: "Muito bem! Cada commit guarda uma versão do projeto e explica o que mudou." },
  { q: "Por que usar uma branch em vez de editar direto a main?",
    options: ["Para deixar o projeto mais lento", "Para trabalhar em mudanças sem afetar a versão principal", "Porque o GitHub exige"],
    answer: 1, explain: "Perfeito! A branch isola o seu trabalho até que ele seja revisado e integrado." },
  { q: "Para que serve um Pull Request?",
    options: ["Apagar uma branch", "Solicitar a revisão e integração de alterações", "Criar uma conta no GitHub"],
    answer: 1, explain: "Perfeito! O Pull Request propõe mudanças para revisão antes de integrá-las." },
  { q: "Qual destes itens NUNCA deve ser publicado em um repositório?",
    options: ["Um README bem escrito", "Senhas e tokens de acesso", "Uma imagem de capa do projeto"],
    answer: 1, explain: "Correto! Segredos vazados podem comprometer sua conta, e o histórico do Git guarda tudo." }
];

const faqData = [
  { q: "Preciso saber programar para usar o GitHub?",
    a: "Não. O GitHub guarda qualquer tipo de arquivo — textos, imagens, planilhas, apresentações. Muita gente usa para organizar trabalhos escolares e documentos em grupo." },
  { q: "O GitHub é gratuito?",
    a: "Sim, o plano gratuito permite criar repositórios públicos e privados e já oferece tudo o que este curso usa. Existem planos pagos com recursos extras, voltados a empresas." },
  { q: "Preciso instalar o Git no computador?",
    a: "Para este curso, não: todas as atividades principais são feitas pelo site. O Git no terminal é um complemento útil quando você quiser trabalhar com mais velocidade — veja o guia de comandos." },
  { q: "Qual a diferença entre repositório público e privado?",
    a: "Um repositório público pode ser visto por qualquer pessoa na internet. Um privado só é visto por você e pelas pessoas que você convidar. Na dúvida, comece privado e revise tudo antes de tornar público." },
  { q: "Fiz um commit errado. Dá para desfazer?",
    a: "Dá, sim. O histórico existe justamente para isso. Pelo site, você pode editar o arquivo e fazer um novo commit corrigindo o erro. Pelo terminal, há comandos como git revert. O importante é nunca esconder o erro: o Git ajuda a corrigi-lo." },
  { q: "Postei uma senha sem querer. E agora?",
    a: "Troque a senha ou revogue o token imediatamente, pois apagar o arquivo não remove o segredo do histórico. Depois, avise a pessoa responsável pelo projeto e consulte a documentação do GitHub sobre remoção de dados sensíveis." },
  { q: "O que é o main e por que antes se chamava master?",
    a: "É o nome da branch principal. O GitHub passou a usar main como padrão nos novos repositórios; repositórios antigos ainda podem usar master, e funciona do mesmo jeito." },
  { q: "Meu progresso some se eu trocar de computador?",
    a: "O progresso deste minicurso fica salvo no navegador que você usa, então não é sincronizado entre dispositivos. Se limpar os dados do navegador, ele será reiniciado." }
];


/* =====================================================================
   2. UTILITÁRIOS
   ===================================================================== */

const $  = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/* Chaves de progresso: ficam separadas por usuário quando há alguém conectado */
const PROGRESS_KEYS = ["ghdz-completed", "ghdz-tasks", "ghdz-quiz-best", "ghdz-cert"];
const USERS_KEY = "ghdz-users";
const SESSION_KEY = "ghdz-session";
let sessionUserId = null;
try {
  const savedId = JSON.parse(localStorage.getItem(SESSION_KEY));
  const savedUsers = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  if (savedId && savedUsers.some(u => u.id === savedId)) sessionUserId = savedId;
} catch (e) {}

const scopeKey = key => (sessionUserId && PROGRESS_KEYS.includes(key)) ? `${key}@${sessionUserId}` : key;

/* localStorage pode falhar (modo privado, bloqueio de cookies): nunca quebra o site */
const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(scopeKey(key));
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(scopeKey(key), JSON.stringify(value)); } catch (e) {} },
  remove(key)     { try { localStorage.removeItem(scopeKey(key)); } catch (e) {} }
};

const pad = n => String(n).padStart(2, "0");
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));


/* =====================================================================
   3. MÓDULOS
   ===================================================================== */

let activeModule = 0;
const completedModules = new Set(store.get("ghdz-completed", []).filter(i => i < lessonData.length));

function buildModuleTabs() {
  const list = $("#moduleList");
  const tip = $(".module-tip", list);
  lessonData.forEach((data, i) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "module-tab";
    tab.setAttribute("role", "tab");
    tab.dataset.module = i;
    tab.id = `moduleTab${i}`;
    tab.innerHTML = `
      <span class="tab-number">${pad(i + 1)}</span>
      <span class="tab-text"><b>${data.title}</b><small>${data.subtitle} · ${data.time.toLowerCase()}</small></span>
      <span class="tab-state" aria-hidden="true">↗</span>`;
    tab.addEventListener("click", () => renderModule(i));
    tab.addEventListener("keydown", event => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (!(event.key in keys)) return;
      event.preventDefault();
      const next = (i + keys[event.key] + lessonData.length) % lessonData.length;
      renderModule(next);
      $(`#moduleTab${next}`).focus();
    });
    list.insertBefore(tab, tip);
  });
}

function renderModule(index) {
  activeModule = index;
  const data = lessonData[index];
  const done = completedModules.has(index);

  $("#lessonTag").textContent = `MÓDULO ${pad(index + 1)}`;
  $("#lessonTime").textContent = `◷ ${data.time}`;
  $("#lessonTitle").textContent = data.title;
  $("#lessonIntro").textContent = data.intro;
  $("#lessonGoals").innerHTML = data.goals.map(goal => `<li>${goal}</li>`).join("");
  $("#lessonBody").innerHTML = data.body;
  $("#lessonStatus").textContent = done ? "Módulo concluído. Muito bem!" : "Leia e marque quando terminar.";
  $("#markComplete").innerHTML = done ? "Concluído ✓" : 'Concluir módulo <span aria-hidden="true">✓</span>';
  $("#markComplete").classList.toggle("is-done", done);
  $("#prevModule").disabled = index === 0;
  $("#nextModule").disabled = index === lessonData.length - 1;
  $("#lessonCard").setAttribute("aria-labelledby", `moduleTab${index}`);

  $$(".module-tab").forEach((tab, i) => {
    const selected = i === index;
    tab.classList.toggle("selected", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  updateModuleProgress();
}

function updateModuleProgress() {
  const total = lessonData.length;
  const count = completedModules.size;
  const percent = Math.round(count / total * 100);
  $("#progressLabel").textContent = `${percent}%`;
  $("#overallBar").style.width = `${percent}%`;
  $("#overallTrack").setAttribute("aria-valuenow", percent);
  $("#progressDetail").textContent = `${count} de ${total} módulos concluídos`;
  $$(".module-tab").forEach((tab, i) => {
    const done = completedModules.has(i);
    tab.classList.toggle("completed", done);
    $(".tab-state", tab).textContent = done ? "✓" : "↗";
  });
  updateCertificateSection();
}

function initModules() {
  buildModuleTabs();
  $("#markComplete").addEventListener("click", () => {
    if (completedModules.has(activeModule)) completedModules.delete(activeModule);
    else completedModules.add(activeModule);
    store.set("ghdz-completed", [...completedModules]);
    renderModule(activeModule);
  });
  const go = delta => {
    renderModule(activeModule + delta);
    $("#lessonCard").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  $("#prevModule").addEventListener("click", () => go(-1));
  $("#nextModule").addEventListener("click", () => go(1));
  renderModule(0);
}


/* =====================================================================
   4. GLOSSÁRIO
   ===================================================================== */

let glossaryGroup = "Todos";

function renderGlossary() {
  const query = $("#glossarySearch").value.trim().toLowerCase();
  const items = glossaryData.filter(item => {
    const matchesGroup = glossaryGroup === "Todos" || item.group === glossaryGroup;
    const text = `${item.term} ${item.pt} ${item.def}`.toLowerCase();
    return matchesGroup && text.includes(query);
  });
  $("#glossaryGrid").innerHTML = items.map(item => `
    <article class="term-card">
      <div class="term-top"><h3>${escapeHTML(item.term)}</h3><span class="term-group">${item.group}</span></div>
      <p class="term-pt">${item.pt}</p>
      <p>${item.def}</p>
      <code>${escapeHTML(item.example)}</code>
    </article>`).join("");
  $("#glossaryEmpty").hidden = items.length > 0;
}

function initGlossary() {
  const groups = ["Todos", ...new Set(glossaryData.map(item => item.group))];
  const filter = $("#glossaryFilter");
  filter.innerHTML = groups.map((group, i) =>
    `<button type="button" class="chip${i === 0 ? " active" : ""}" aria-pressed="${i === 0}" data-group="${group}">${group}</button>`).join("");
  filter.addEventListener("click", event => {
    const button = event.target.closest(".chip");
    if (!button) return;
    glossaryGroup = button.dataset.group;
    $$(".chip", filter).forEach(chip => {
      const active = chip === button;
      chip.classList.toggle("active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderGlossary();
  });
  $("#glossarySearch").addEventListener("input", renderGlossary);
  $("#statTerms").textContent = pad(glossaryData.length);
  renderGlossary();
}


/* =====================================================================
   5. COMANDOS
   ===================================================================== */

function renderCommands(groupIndex) {
  const group = commandData[groupIndex];
  $$(".command-tab").forEach((tab, i) => {
    tab.classList.toggle("selected", i === groupIndex);
    tab.setAttribute("aria-selected", String(i === groupIndex));
  });
  $("#commandPanel").innerHTML = group.items.map((item, i) => `
    <div class="command-row">
      <div class="command-info"><b>${item.desc}</b></div>
      <button type="button" class="command-code" data-index="${i}" title="Clique para copiar">
        <code><span class="prompt">$</span> ${escapeHTML(item.cmd)}</code>
        <span class="copy-label">Copiar</span>
      </button>
    </div>`).join("");

  $$(".command-code", $("#commandPanel")).forEach(button => {
    button.addEventListener("click", async () => {
      const text = group.items[Number(button.dataset.index)].cmd;
      const label = $(".copy-label", button);
      try {
        await navigator.clipboard.writeText(text);
        label.textContent = "Copiado ✓";
      } catch (e) {
        label.textContent = "Selecione e copie";
      }
      button.classList.add("copied");
      setTimeout(() => { label.textContent = "Copiar"; button.classList.remove("copied"); }, 1600);
    });
  });
}

function initCommands() {
  $("#commandTabs").innerHTML = commandData.map((group, i) =>
    `<button type="button" role="tab" class="command-tab" aria-selected="false" data-group="${i}">${group.group}</button>`).join("");
  $$(".command-tab").forEach(tab => tab.addEventListener("click", () => renderCommands(Number(tab.dataset.group))));
  renderCommands(0);
}


/* =====================================================================
   6. DESAFIO (checklist)
   ===================================================================== */

const savedTasks = new Set(store.get("ghdz-tasks", []).filter(i => i < taskData.length));

function updateTasks() {
  const total = taskData.length;
  const count = savedTasks.size;
  const percent = count / total * 100;
  $("#taskCount").textContent = `${count}/${total}`;
  $("#taskBar").style.width = `${percent}%`;
  $("#taskTrack").setAttribute("aria-valuenow", Math.round(percent));
  $("#taskMessage").textContent = count === total
    ? "Desafio concluído! Excelente trabalho. ✦"
    : count === 0 ? "Cada etapa concluída é um avanço!" : `Faltam ${total - count} para terminar. Continue assim!`;
  $("#taskCard").classList.toggle("complete", count === total);
  $$("[data-task]").forEach(input => { input.checked = savedTasks.has(Number(input.dataset.task)); });
  updateCertificateSection();
}

function initTasks() {
  $("#taskItems").innerHTML = taskData.map((task, i) => `
    <label class="task-item">
      <input type="checkbox" data-task="${i}">
      <span class="custom-check" aria-hidden="true"></span>
      <span class="task-text">
        <span class="task-title">${task.title}${task.code ? ` <code>${task.code}</code>` : ""}.</span>
        <small>${task.hint}</small>
      </span>
    </label>`).join("");

  $$("[data-task]").forEach(input => input.addEventListener("change", () => {
    const id = Number(input.dataset.task);
    if (input.checked) savedTasks.add(id); else savedTasks.delete(id);
    store.set("ghdz-tasks", [...savedTasks]);
    updateTasks();
  }));
  $("#resetTasks").addEventListener("click", () => {
    savedTasks.clear();
    store.remove("ghdz-tasks");
    updateTasks();
  });
  updateTasks();
}


/* =====================================================================
   7. QUIZ
   ===================================================================== */

let quizIndex = 0, quizScore = 0, answered = false;

function renderQuizBest() {
  const best = store.get("ghdz-quiz-best", null);
  const box = $("#quizBest");
  box.hidden = best === null;
  if (best !== null) box.textContent = `★ Sua melhor pontuação: ${best} de ${questions.length}`;
  updateCertificateSection();
}

function renderQuestion() {
  const q = questions[quizIndex];
  answered = false;
  $("#quizStep").textContent = `PERGUNTA ${quizIndex + 1} DE ${questions.length}`;
  $("#quizProgress").style.width = `${quizIndex / questions.length * 100}%`;
  $("#quizFeedback").textContent = "Escolha uma alternativa.";
  $("#quizFeedback").className = "";
  $("#quizNext").disabled = true;
  $("#quizNext").innerHTML = quizIndex === questions.length - 1
    ? 'Ver resultado <span aria-hidden="true">→</span>'
    : 'Próxima <span aria-hidden="true">→</span>';

  $("#quizContent").innerHTML = `
    <h3 class="quiz-question">${q.q}</h3>
    <div class="quiz-options">
      ${q.options.map((option, i) => `
        <button type="button" class="quiz-option" data-answer="${i}">
          <span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${option}</span>
        </button>`).join("")}
    </div>`;
  $$(".quiz-option").forEach(button => button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer))));
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const q = questions[quizIndex];
  const right = index === q.answer;
  if (right) quizScore++;
  $$(".quiz-option").forEach((button, i) => {
    button.disabled = true;
    if (i === q.answer) button.classList.add("correct");
    else if (i === index) button.classList.add("wrong");
  });
  $("#quizFeedback").textContent = right ? q.explain : `Quase! A resposta correta é: ${q.options[q.answer]}.`;
  $("#quizFeedback").className = right ? "ok" : "no";
  $("#quizNext").disabled = false;
  $("#quizNext").focus();
}

function renderResult() {
  const total = questions.length;
  const best = store.get("ghdz-quiz-best", 0);
  if (quizScore > best) store.set("ghdz-quiz-best", quizScore);

  const ratio = quizScore / total;
  let icon = "✓", title = "Bom começo!", text = "Revise os módulos da trilha e tente novamente para fixar o conteúdo.";
  if (ratio === 1) { icon = "✦"; title = "Perfeito!"; text = "Você já conhece os conceitos essenciais. Que tal concluir o desafio final?"; }
  else if (ratio >= 0.75) { icon = "★"; title = "Muito bem!"; text = "Você domina a maior parte do conteúdo. Revise os pontos que errou e faça o desafio final."; }
  else if (ratio >= 0.5) { title = "Está no caminho!"; text = "Releia os módulos 1 e 3 e use o glossário para reforçar os termos."; }

  $("#quizStep").textContent = "RESULTADO FINAL";
  $("#quizProgress").style.width = "100%";
  $("#quizContent").innerHTML = `
    <div class="quiz-result">
      <div class="result-icon">${icon}</div>
      <h3>${title}</h3>
      <p class="result-score">Você acertou <b>${quizScore} de ${total}</b></p>
      <p>${text}</p>
      <div class="result-actions">
        <button class="btn btn-outline" id="retryQuiz" type="button">Refazer quiz ↻</button>
        <a class="btn btn-ghost" href="#trilha">Revisar módulos</a>
      </div>
    </div>`;
  $("#quizFeedback").textContent = "Continue praticando!";
  $("#quizFeedback").className = "";
  $("#quizNext").style.display = "none";
  $("#retryQuiz").addEventListener("click", resetQuiz);
  renderQuizBest();
}

function resetQuiz() {
  quizIndex = 0;
  quizScore = 0;
  $("#quizNext").style.display = "";
  renderQuestion();
}

function initQuiz() {
  $("#statQuiz").textContent = pad(questions.length);
  $("#quizNext").addEventListener("click", () => {
    if (!answered) return;
    if (quizIndex < questions.length - 1) { quizIndex++; renderQuestion(); }
    else renderResult();
  });
  renderQuizBest();
  renderQuestion();
}


/* =====================================================================
   8. FAQ
   ===================================================================== */

function initFaq() {
  $("#faqList").innerHTML = faqData.map(item => `
    <details class="faq-item">
      <summary>${item.q}<span class="faq-icon" aria-hidden="true">+</span></summary>
      <p>${item.a}</p>
    </details>`).join("");
}


/* =====================================================================
   9. INTERFACE (tema, menu, rolagem, animações)
   ===================================================================== */

function initTheme() {
  const root = document.documentElement;
  const button = $("#themeToggle");
  const apply = theme => {
    root.setAttribute("data-theme", theme);
    button.textContent = theme === "light" ? "☾" : "☼";
    button.setAttribute("aria-pressed", String(theme === "light"));
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f7f5fb" : "#10101b");
  };
  apply(root.getAttribute("data-theme") || "dark");
  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    apply(next);
    try { localStorage.setItem("ghdz-theme", next); } catch (e) {}
  });
}

function initMenu() {
  const nav = $("#navigation");
  const button = $("#mobileMenu");
  const setOpen = open => {
    nav.classList.toggle("open", open);
    button.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  button.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  $$("a", nav).forEach(link => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", event => { if (event.key === "Escape") setOpen(false); });
}

function initScroll() {
  const progress = $("#readingProgress");
  const backTop = $("#backTop");
  const header = $("#header");
  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? window.scrollY / scrollable * 100 : 0}%`;
    backTop.classList.toggle("visible", window.scrollY > 450);
    header.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  onScroll();

  /* Destaca no menu a seção que está na tela */
  const links = $$(".navigation a");
  const sections = links.map(link => $(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(section => spy.observe(section));
  }
}

function initReveal() {
  const targets = $$(".feature-card, .audience-card, .flow-step, .term-card, .security-card, .reference-grid a, .faq-item, .section-heading, .about-grid, .challenge-intro, .task-card, .quiz-copy, .quiz-card, .cert-copy, .cert-card");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  targets.forEach(el => el.classList.add("fade-in"));
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  targets.forEach(el => observer.observe(el));
}

function initReset() {
  $("#resetAll").addEventListener("click", () => {
    if (!confirm("Apagar o progresso dos módulos, do desafio, do quiz e o certificado gerado? Seu cadastro continua.")) return;
    PROGRESS_KEYS.forEach(key => store.remove(key));
    completedModules.clear();
    savedTasks.clear();
    renderModule(activeModule);
    updateTasks();
    renderQuizBest();
    resetQuiz();
  });
}


/* Fundo interativo: "grafo de commits" — pontos que flutuam, se ligam e reagem ao mouse */
function initBackground() {
  const canvas = $("#bgCanvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  const mouse = { x: -9999, y: -9999 };
  let w, h, dpr, nodes = [];
  const colors = ["#a78bfa", "#4de2d0", "#f58acb", "#ffad70"];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    const count = Math.round(Math.min(90, innerWidth * innerHeight / 18000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .35 * dpr, vy: (Math.random() - .5) * .35 * dpr,
      r: (1.2 + Math.random() * 2) * dpr, c: colors[Math.floor(Math.random() * colors.length)]
    }));
  }
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", e => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
  window.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });

  function frame() {
    ctx.clearRect(0, 0, w, h);
    const light = document.documentElement.getAttribute("data-theme") === "light";
    const lineRGB = light ? "124,85,232" : "167,139,250";
    const maxD = 150 * dpr;
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
      if (d < 180 * dpr) { n.x -= dx * .004; n.y -= dy * .004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < maxD) {
          ctx.strokeStyle = `rgba(${lineRGB},${(1 - d / maxD) * (light ? .28 : .32)})`;
          ctx.lineWidth = dpr;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 200 * dpr) {
        ctx.strokeStyle = `rgba(77,226,208,${(1 - md / (200 * dpr)) * .6})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = a.c;
      ctx.globalAlpha = light ? .55 : .8;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.2832); ctx.fill();
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(frame);
  }
  resize();
  frame();
}



/* =====================================================================
   10. CONTA (cadastro, login, progresso por usuário)
   Importante: o site não tem servidor. Os cadastros ficam no localStorage
   deste navegador e a senha é guardada apenas como hash (nunca em texto).
   ===================================================================== */

const emailOk = value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
const normEmail = value => value.trim().toLowerCase();
const getUsers = () => store.get(USERS_KEY, []);
const currentUser = () => getUsers().find(u => u.id === sessionUserId) || null;
const canSubtle = () => !!(window.crypto && window.crypto.subtle);
const toHex = buffer => [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, "0")).join("");

/* Hash simples de reserva, só usado se o navegador não oferecer crypto.subtle */
function fallbackHash(text) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 2654435761);
    h2 = Math.imul(h2 ^ c, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, "0");
}

function randomHex(bytes) {
  const arr = new Uint8Array(bytes);
  if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(arr);
  else arr.forEach((_, i) => { arr[i] = Math.floor(Math.random() * 256); });
  return toHex(arr);
}

async function hashPassword(password, salt, algo) {
  const useSubtle = algo === "p1" || (!algo && canSubtle());
  if (useSubtle) {
    if (!canSubtle()) throw new Error("no-subtle");
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: enc.encode(salt), iterations: 120000, hash: "SHA-256" }, key, 256);
    return "p1:" + toHex(bits);
  }
  return "f1:" + fallbackHash(salt + password);
}

async function sha256Hex(text) {
  if (canSubtle()) return toHex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
  return fallbackHash(text) + fallbackHash(text.split("").reverse().join(""));
}

/* No primeiro cadastro, o progresso feito antes (sem conta) passa a pertencer à nova conta */
function adoptGuestProgress(userId) {
  PROGRESS_KEYS.forEach(key => {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return;
      localStorage.setItem(`${key}@${userId}`, raw);
      localStorage.removeItem(key);
    } catch (e) {}
  });
}

/* Recarrega na tela o progresso de quem acabou de entrar/sair */
function syncProgressFromStore() {
  completedModules.clear();
  store.get("ghdz-completed", []).filter(i => i < lessonData.length).forEach(i => completedModules.add(i));
  savedTasks.clear();
  store.get("ghdz-tasks", []).filter(i => i < taskData.length).forEach(i => savedTasks.add(i));
  renderModule(activeModule);
  updateTasks();
  resetQuiz();
  renderQuizBest();
}

function renderAccountButton() {
  const user = currentUser();
  const button = $("#accountBtn");
  $("#accountLabel").textContent = user ? user.name.trim().split(" ")[0] : (getUsers().length ? "Entrar" : "Cadastrar");
  $("#accountAvatar").textContent = user ? user.name.trim().charAt(0).toUpperCase() : "☺";
  button.classList.toggle("logged", !!user);
  button.setAttribute("aria-label", user ? `Minha conta: ${user.name}` : "Cadastrar ou entrar");
  button.title = user ? "Minha conta" : "Cadastre-se ou entre";
}

function startSession(userId) {
  sessionUserId = userId;
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(userId)); } catch (e) {}
  renderAccountButton();
  syncProgressFromStore();
}

function endSession() {
  sessionUserId = null;
  try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
  renderAccountButton();
  syncProgressFromStore();
}

let toastTimer;
function showToast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => { el.hidden = true; }, 300);
  }, 3800);
}

function openAuth(preferred) {
  const dialog = $("#authDialog");
  dialog.dispatchEvent(new CustomEvent("auth:open", { detail: preferred }));
}

function initAuth() {
  const dialog = $("#authDialog");
  const forms = { register: $("#registerForm"), login: $("#loginForm"), account: $("#accountView") };
  const tabs = $("#authTabs");

  const clearErrors = () => {
    $$(".field-error", dialog).forEach(el => { el.textContent = ""; });
    $$("[aria-invalid]", dialog).forEach(el => el.removeAttribute("aria-invalid"));
    $$(".form-error", dialog).forEach(el => { el.hidden = true; el.textContent = ""; });
  };
  const fieldError = (inputId, errId, message) => {
    $(`#${errId}`).textContent = message;
    $(`#${inputId}`).setAttribute("aria-invalid", "true");
  };
  const formError = (id, message) => { const el = $(`#${id}`); el.textContent = message; el.hidden = false; };

  function setMode(mode) {
    Object.entries(forms).forEach(([key, el]) => { el.hidden = key !== mode; });
    $$(".auth-side-pane", dialog).forEach(pane => { pane.hidden = pane.dataset.pane !== mode; });
    tabs.hidden = mode === "account";
    $$("[role=tab]", tabs).forEach(tab => tab.setAttribute("aria-selected", String(tab.dataset.switch === mode)));
    clearErrors();
  }

  function fillAccount() {
    const user = currentUser();
    if (!user) return;
    $("#accName").textContent = user.name;
    $("#accEmail").textContent = user.email;
    $("#accSince").textContent = new Date(user.createdAt).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
  }

  function open(preferred) {
    const logged = !!currentUser();
    const mode = logged ? "account" : (preferred || (getUsers().length ? "login" : "register"));
    if (logged) fillAccount();
    setMode(mode);
    if (typeof dialog.showModal === "function") { if (!dialog.open) dialog.showModal(); }
    else dialog.setAttribute("open", "");
    const first = { register: "#regName", login: "#logEmail", account: "#logoutBtn" }[mode];
    setTimeout(() => $(first).focus(), 30);
  }
  const close = () => { if (typeof dialog.close === "function") dialog.close(); else dialog.removeAttribute("open"); };

  dialog.addEventListener("auth:open", event => open(event.detail));
  $("#accountBtn").addEventListener("click", () => open());
  $("#authClose").addEventListener("click", close);
  dialog.addEventListener("click", event => { if (event.target === dialog) close(); });
  $$("[data-switch]", dialog).forEach(el => el.addEventListener("click", () => {
    setMode(el.dataset.switch);
    $(el.dataset.switch === "register" ? "#regName" : "#logEmail").focus();
  }));

  /* mostrar / ocultar senha */
  $$(".pass-toggle", dialog).forEach(btn => btn.addEventListener("click", () => {
    const input = $(`#${btn.dataset.toggle}`);
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.textContent = show ? "Ocultar" : "Mostrar";
    btn.setAttribute("aria-label", show ? "Ocultar senha" : "Mostrar senha");
  }));

  /* força da senha */
  $("#regPass").addEventListener("input", event => {
    const v = event.target.value;
    let score = 0;
    if (v.length >= 8) score++;
    if (v.length >= 12) score++;
    if (/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
    if (/\d/.test(v) && /[A-Za-z]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    const level = v ? Math.max(1, Math.min(4, score - (v.length < 8 ? 1 : 0))) : 0;
    const bar = $("#strengthBar");
    bar.className = level ? `lv${level}` : "";
    bar.style.width = `${level * 25}%`;
    $("#strengthText").textContent = level ? ["", "Senha fraca.", "Senha razoável.", "Senha boa.", "Senha forte."][level] : "";
  });

  /* ---------- PRIMEIRO CADASTRO ---------- */
  forms.register.addEventListener("submit", async event => {
    event.preventDefault();
    clearErrors();
    const name = $("#regName").value.trim().replace(/\s+/g, " ");
    const email = normEmail($("#regEmail").value);
    const pass = $("#regPass").value;
    const pass2 = $("#regPass2").value;
    let firstInvalid = null;
    const fail = (inputId, errId, message) => { fieldError(inputId, errId, message); firstInvalid = firstInvalid || inputId; };

    if (name.length < 3) fail("regName", "regNameErr", "Digite seu nome completo.");
    if (!emailOk(email)) fail("regEmail", "regEmailErr", "Digite um e-mail válido, como nome@exemplo.com.");
    if (pass.length < 8 || !/[A-Za-z]/.test(pass) || !/\d/.test(pass)) fail("regPass", "regPassErr", "A senha precisa ter 8 ou mais caracteres, com letras e números.");
    if (pass2 !== pass) fail("regPass2", "regPass2Err", "As senhas não são iguais.");
    if (firstInvalid) { $(`#${firstInvalid}`).focus(); return; }

    if (getUsers().some(u => u.email === email)) {
      fail("regEmail", "regEmailErr", "Este e-mail já tem cadastro. Use a aba “Já tenho cadastro” para entrar.");
      $("#regEmail").focus();
      return;
    }

    const submit = $(".auth-submit", forms.register);
    submit.disabled = true;
    try {
      const salt = randomHex(16);
      const hash = await hashPassword(pass, salt);
      const user = { id: "u" + Date.now().toString(36) + randomHex(3), name, email, salt, hash, createdAt: new Date().toISOString() };
      store.set(USERS_KEY, [...getUsers(), user]);
      adoptGuestProgress(user.id);
      startSession(user.id);
      forms.register.reset();
      $("#strengthBar").style.width = "0";
      $("#strengthText").textContent = "";
      close();
      showToast(`Cadastro criado! Bem-vindo(a), ${name.split(" ")[0]}.`);
    } catch (e) {
      formError("registerError", "Não foi possível criar o cadastro neste navegador. Tente novamente.");
    } finally {
      submit.disabled = false;
    }
  });

  /* ---------- LOGIN (quem já tem cadastro) ---------- */
  forms.login.addEventListener("submit", async event => {
    event.preventDefault();
    clearErrors();
    const email = normEmail($("#logEmail").value);
    const pass = $("#logPass").value;
    if (!getUsers().length) {
      formError("loginError", "Ainda não há cadastro neste navegador. Use a aba “Primeiro acesso” para criar o seu.");
      return;
    }
    const submit = $(".auth-submit", forms.login);
    submit.disabled = true;
    try {
      const user = getUsers().find(u => u.email === email);
      const algo = user ? user.hash.split(":")[0] : null;
      const attempt = user ? await hashPassword(pass, user.salt, algo) : null;
      if (!user || attempt !== user.hash) {
        formError("loginError", "E-mail ou senha incorretos. Confira e tente de novo.");
        return;
      }
      startSession(user.id);
      forms.login.reset();
      close();
      showToast(`Que bom te ver, ${user.name.split(" ")[0]}! Seu progresso foi carregado.`);
    } catch (e) {
      formError("loginError", "Este navegador não conseguiu verificar a senha. Abra o site em um navegador atualizado.");
    } finally {
      submit.disabled = false;
    }
  });

  /* ---------- MINHA CONTA ---------- */
  $("#logoutBtn").addEventListener("click", () => {
    endSession();
    close();
    showToast("Você saiu da sua conta.");
  });
  $("#accCertLink").addEventListener("click", close);
  $("#deleteAccountBtn").addEventListener("click", () => {
    const user = currentUser();
    if (!user) return;
    if (!confirm("Excluir sua conta e todo o progresso e certificado dela neste navegador? Isso não pode ser desfeito.")) return;
    PROGRESS_KEYS.forEach(key => store.remove(key));
    store.set(USERS_KEY, getUsers().filter(u => u.id !== user.id));
    endSession();
    close();
    showToast("Conta excluída.");
  });

  renderAccountButton();
}


/* =====================================================================
   11. CERTIFICADO
   ===================================================================== */

const CERT_PASS_RATIO = 0.75;       // acertos mínimos no quiz
const CERT_WORKLOAD = "2 horas";    // carga horária estimada (leitura + desafio + quiz)

function certStatus() {
  const user = currentUser();
  const best = store.get("ghdz-quiz-best", 0);
  const needQuiz = Math.ceil(questions.length * CERT_PASS_RATIO);
  const reqs = [
    { ok: !!user, title: "Ter cadastro e estar conectado(a)",
      detail: user ? `Conectado(a) como ${user.name}` : "Crie seu cadastro ou entre na sua conta." },
    { ok: completedModules.size >= lessonData.length, title: "Concluir os módulos da trilha",
      detail: `${completedModules.size} de ${lessonData.length} módulos concluídos` },
    { ok: savedTasks.size >= taskData.length, title: "Concluir o desafio final",
      detail: `${savedTasks.size} de ${taskData.length} etapas marcadas` },
    { ok: best >= needQuiz, title: `Acertar ${needQuiz} de ${questions.length} perguntas no quiz`,
      detail: best ? `Sua melhor pontuação: ${best} de ${questions.length}` : "Você ainda não terminou o quiz." }
  ];
  return { reqs, best, user, allOk: reqs.every(r => r.ok) };
}

const formatLongDate = iso => new Date(iso).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

function updateCertificateSection() {
  const list = $("#certReqs");
  if (!list) return;
  const { reqs, user, allOk } = certStatus();
  const cert = user ? store.get("ghdz-cert", null) : null;
  const done = reqs.filter(r => r.ok).length;
  const percent = done / reqs.length * 100;

  list.innerHTML = reqs.map((r, i) => `
    <li class="cert-req${r.ok ? " ok" : ""}">
      <span class="req-mark" aria-hidden="true">${r.ok ? "✓" : i + 1}</span>
      <span class="req-text"><b>${r.title}</b><small>${escapeHTML(r.detail)}</small></span>
      <span class="sr-only">${r.ok ? "Cumprido" : "Pendente"}</span>
    </li>`).join("");
  $("#certCount").textContent = `${done}/${reqs.length}`;
  $("#certBar").style.width = `${percent}%`;
  $("#certTrack").setAttribute("aria-valuenow", Math.round(percent));
  $("#certCard").classList.toggle("complete", allOk || !!cert);

  const actions = $("#certActions");
  if (!user) {
    actions.innerHTML = `
      <button class="btn btn-primary" type="button" data-act="register">Criar meu cadastro <span aria-hidden="true">→</span></button>
      <button class="btn btn-ghost" type="button" data-act="login">Já tenho cadastro</button>`;
  } else if (cert) {
    actions.innerHTML = `
      <button class="btn btn-primary" type="button" data-act="open">Ver meu certificado <span aria-hidden="true">✦</span></button>
      <span class="cert-meta">Emitido em ${formatLongDate(cert.date)} · código ${cert.code}</span>`;
  } else if (allOk) {
    actions.innerHTML = `<button class="btn btn-primary" type="button" data-act="open">Gerar meu certificado <span aria-hidden="true">✦</span></button>`;
  } else {
    actions.innerHTML = `
      <button class="btn btn-primary" type="button" disabled>Gerar meu certificado <span aria-hidden="true">✦</span></button>
      <span class="cert-meta">Faltam ${reqs.length - done} ${reqs.length - done === 1 ? "requisito" : "requisitos"}.</span>`;
  }
}

async function makeCertCode(userId, name, date) {
  const hex = (await sha256Hex(`${userId}|${name}|${date}`)).toUpperCase();
  return `GHDZ-${hex.slice(0, 5)}-${hex.slice(5, 10)}`;
}

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";
  text.split(" ").forEach(word => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = word; }
    else line = test;
  });
  if (line) lines.push(line);
  return lines;
}

/* Desenha o certificado (fundo claro, bom para imprimir) */
async function drawCertificate(cert) {
  const canvas = $("#certCanvas");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, cx = W / 2;
  try {
    await Promise.all([
      document.fonts.load('700 72px "Space Grotesk"'),
      document.fonts.load('500 30px "DM Sans"'),
      document.fonts.load('600 28px "JetBrains Mono"')
    ]);
  } catch (e) {}
  const display = '"Space Grotesk", "DM Sans", system-ui, sans-serif';
  const body = '"DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif';
  const mono = '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace';
  const spacing = value => { if ("letterSpacing" in ctx) ctx.letterSpacing = value; };

  ctx.clearRect(0, 0, W, H);
  ctx.textBaseline = "alphabetic";
  spacing("0px");

  /* fundo com brilhos suaves */
  ctx.fillStyle = "#fbf9ff"; ctx.fillRect(0, 0, W, H);
  let glow = ctx.createRadialGradient(160, 120, 0, 160, 120, 620);
  glow.addColorStop(0, "rgba(130,87,245,.16)"); glow.addColorStop(1, "rgba(130,87,245,0)");
  ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
  glow = ctx.createRadialGradient(W - 140, H - 100, 0, W - 140, H - 100, 620);
  glow.addColorStop(0, "rgba(40,200,185,.18)"); glow.addColorStop(1, "rgba(40,200,185,0)");
  ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);

  /* moldura dupla */
  const frame = ctx.createLinearGradient(0, 0, W, H);
  frame.addColorStop(0, "#8257f5"); frame.addColorStop(1, "#1fb5a6");
  ctx.strokeStyle = frame; ctx.lineWidth = 8; ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.strokeStyle = "#d8cff6"; ctx.lineWidth = 2; ctx.strokeRect(66, 66, W - 132, H - 132);

  /* marca: hexágono + nome */
  const k = 2.1, hx = cx, hy = 168;
  const pt = (x, y) => [hx + (x - 24) * k, hy + (y - 24) * k];
  ctx.lineJoin = "round"; ctx.lineCap = "round"; ctx.strokeStyle = "#8257f5"; ctx.lineWidth = 5;
  ctx.beginPath();
  [[24, 3], [44, 14.5], [44, 33.5], [24, 45], [4, 33.5], [4, 14.5]].forEach(([x, y], i) => { const [px, py] = pt(x, y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); });
  ctx.closePath(); ctx.stroke();
  ctx.beginPath();
  [[14, 30], [14, 18], [24, 26], [34, 18], [34, 30]].forEach(([x, y], i) => { const [px, py] = pt(x, y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); });
  ctx.stroke();

  ctx.font = `700 34px ${display}`;
  const w1 = ctx.measureText("github ").width, w2 = ctx.measureText("do zero").width;
  ctx.textAlign = "left";
  ctx.fillStyle = "#1b1a2b"; ctx.fillText("github ", cx - (w1 + w2) / 2, 262);
  ctx.fillStyle = "#7449e6"; ctx.fillText("do zero", cx - (w1 + w2) / 2 + w1, 262);

  /* título */
  ctx.textAlign = "center";
  ctx.fillStyle = "#1b1a2b"; ctx.font = `700 54px ${display}`; spacing("7px");
  ctx.fillText("CERTIFICADO DE CONCLUSÃO", cx + 3, 372);
  spacing("0px");

  ctx.fillStyle = "#5b5675"; ctx.font = `500 30px ${body}`;
  ctx.fillText("Certificamos que", cx, 450);

  /* nome (reduz a fonte se for muito longo) */
  const name = cert.name;
  let size = 104;
  ctx.font = `700 ${size}px ${display}`;
  while (ctx.measureText(name).width > 1120 && size > 40) { size -= 4; ctx.font = `700 ${size}px ${display}`; }
  const nameW = ctx.measureText(name).width;
  const g = ctx.createLinearGradient(cx - nameW / 2, 0, cx + nameW / 2, 0);
  g.addColorStop(0, "#7449e6"); g.addColorStop(1, "#139e90");
  ctx.fillStyle = g; ctx.fillText(name, cx, 570);
  ctx.strokeStyle = "#cfc3f5"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx - Math.max(nameW, 520) / 2 - 30, 604); ctx.lineTo(cx + Math.max(nameW, 520) / 2 + 30, 604); ctx.stroke();

  /* texto principal */
  ctx.fillStyle = "#3b3652"; ctx.font = `500 31px ${body}`;
  const text = `concluiu o minicurso interativo “GitHub do Zero”, com carga horária estimada de ${CERT_WORKLOAD}, cumprindo os ${lessonData.length} módulos da trilha, o desafio final e o quiz de conhecimentos, com ${cert.score} de ${questions.length} acertos.`;
  wrapText(ctx, text, 1080).forEach((line, i) => ctx.fillText(line, cx, 690 + i * 50));

  /* selo central */
  const sy = 905;
  const seal = ctx.createLinearGradient(cx - 70, sy - 70, cx + 70, sy + 70);
  seal.addColorStop(0, "#8257f5"); seal.addColorStop(1, "#1fb5a6");
  ctx.fillStyle = seal; ctx.beginPath(); ctx.arc(cx, sy, 68, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,.75)"; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, sy, 56, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = "#ffffff"; ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 11 : 28, a = -Math.PI / 2 + i * Math.PI / 5;
    const px = cx + Math.cos(a) * r, py = sy + Math.sin(a) * r;
    i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  }
  ctx.closePath(); ctx.fill();

  /* data e código */
  ctx.textAlign = "left"; ctx.fillStyle = "#7a7494"; ctx.font = `600 18px ${body}`; spacing("3px");
  ctx.fillText("EMITIDO EM", 190, 880);
  ctx.textAlign = "right"; ctx.fillText("CÓDIGO", W - 190, 880);
  spacing("0px");
  ctx.textAlign = "left"; ctx.fillStyle = "#1b1a2b"; ctx.font = `600 29px ${body}`;
  ctx.fillText(formatLongDate(cert.date), 190, 926);
  ctx.textAlign = "right"; ctx.font = `600 29px ${mono}`;
  ctx.fillText(cert.code, W - 190, 926);

  /* rodapé */
  ctx.textAlign = "center"; ctx.fillStyle = "#8a859d"; ctx.font = `500 20px ${body}`;
  ctx.fillText("Certificado de participação em material educativo gratuito, sem validade oficial.", cx, 1036);
}

function initCertificate() {
  const dialog = $("#certDialog");
  const nameInput = $("#certName");
  let drawing = Promise.resolve();
  const redraw = cert => { drawing = drawCertificate(cert); return drawing; };
  const getCert = () => store.get("ghdz-cert", null);

  async function openCertificate() {
    const user = currentUser();
    if (!user) { openAuth(); return; }
    let cert = getCert();
    if (!cert) {
      const status = certStatus();
      if (!status.allOk) return;
      const date = new Date().toISOString();
      cert = { name: user.name, date, score: status.best, code: await makeCertCode(user.id, user.name, date) };
      store.set("ghdz-cert", cert);
      updateCertificateSection();
    }
    nameInput.value = cert.name;
    if (typeof dialog.showModal === "function") { if (!dialog.open) dialog.showModal(); }
    else dialog.setAttribute("open", "");
    redraw(cert);
  }

  $("#certActions").addEventListener("click", event => {
    const btn = event.target.closest("[data-act]");
    if (!btn) return;
    if (btn.dataset.act === "open") openCertificate();
    else openAuth(btn.dataset.act);
  });

  /* edita o nome que aparece no certificado */
  let nameTimer;
  nameInput.addEventListener("input", () => {
    clearTimeout(nameTimer);
    nameTimer = setTimeout(() => {
      const cert = getCert();
      const user = currentUser();
      if (!cert || !user) return;
      cert.name = nameInput.value.trim().replace(/\s+/g, " ") || user.name;
      store.set("ghdz-cert", cert);
      redraw(cert);
    }, 250);
  });

  $("#certClose").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  $("#certDownload").addEventListener("click", async () => {
    await drawing;
    const cert = getCert();
    const slug = (cert ? cert.name : "aluno").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    $("#certCanvas").toBlob(blob => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `certificado-github-do-zero-${slug}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }, "image/png");
  });

  $("#certPrint").addEventListener("click", async () => {
    await drawing;
    const img = $("#printCertImg");
    img.onload = () => setTimeout(() => window.print(), 60);
    img.src = $("#certCanvas").toDataURL("image/png");
  });

  updateCertificateSection();
}


/* =====================================================================
   INICIALIZAÇÃO
   ===================================================================== */

$("#statModules").textContent = pad(lessonData.length);
$("#year").textContent = new Date().getFullYear();

initTheme();
initMenu();
initModules();
initGlossary();
initCommands();
initTasks();
initQuiz();
initFaq();
initScroll();
initReveal();
initReset();
initAuth();
initCertificate();
initBackground();
