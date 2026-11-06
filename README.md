# GitHub do Zero — Minicurso interativo

Site educativo para ensinar os conceitos básicos do GitHub a pessoas iniciantes. Funciona 100% no navegador, sem dependências e sem servidor.

## Arquivos
- `index.html`: estrutura e conteúdo da página.
- `style.css`: identidade visual, tema claro/escuro, animações e responsividade (organizado em 17 seções comentadas).
- `script.js`: dados do curso (módulos, glossário, comandos, desafio, quiz, FAQ), conta, certificado e toda a interatividade.

## Como visualizar
1. Baixe os três arquivos (`index.html`, `style.css`, `script.js`).
2. Mantenha os arquivos na mesma pasta.
3. Abra `index.html` no navegador.

## Como publicar no GitHub Pages
1. Envie os arquivos para a raiz do repositório.
2. Abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`.
5. Salve e aguarde a publicação. O endereço aparecerá na mesma página.

## Conteúdo do site
1. **Hero** com apresentação e estatísticas do curso.
2. **Sobre o curso**: diferenciais, para quem é e o que você vai conseguir fazer.
3. **O caminho de uma mudança**: visão geral do fluxo repositório → branch → commit → Pull Request → merge.
4. **Trilha de aprendizado** com 4 módulos:
   - Conhecendo o GitHub
   - Criando seu repositório
   - Colaborando em equipe
   - Boas práticas e próximos passos
5. **Glossário** com 14 termos, busca e filtro por categoria.
6. **Guia de comandos Git** (opcional), com botão para copiar cada comando.
7. **Desafio final**: checklist de 6 etapas com dicas.
8. **Quiz** de 8 perguntas com explicação e melhor pontuação salva.
9. **Certificado** com requisitos, geração, download e impressão.
10. **Segurança**, **FAQ** com 8 dúvidas e **referências** oficiais.

## Cadastro, login e certificado
- **Primeiro acesso (cadastro):** nome completo, e-mail e senha (mínimo de 8 caracteres, com letras e números), com medidor de força e confirmação da senha. Se a pessoa já tinha progresso antes de se cadastrar, ele passa para a conta nova.
- **Já tenho cadastro (login):** tela separada, só com e-mail e senha. O botão do cabeçalho mostra "Cadastrar" enquanto não existe nenhuma conta no navegador e "Entrar" depois disso.
- **Progresso por conta:** módulos, desafio, quiz e certificado ficam separados para cada pessoa que usa o mesmo navegador. Há opções de sair e de excluir a conta.
- **Certificado:** liberado quando a pessoa está conectada, concluiu os 4 módulos e as 6 etapas do desafio e acertou pelo menos 75% do quiz (6 de 8). Dá para corrigir o nome, baixar em PNG ou imprimir/salvar em PDF (A4 horizontal), e ele recebe um código no formato `GHDZ-XXXXX-XXXXX`.
- Os requisitos podem ser ajustados no início da seção 11 de `script.js` (`CERT_PASS_RATIO` e `CERT_WORKLOAD`).

### Limites importantes (leia antes de publicar)
O site continua sem servidor. Por isso:
- Os cadastros ficam no `localStorage` **do navegador** de quem criou. Em outro computador ou celular será preciso se cadastrar de novo.
- A senha é guardada apenas como hash (PBKDF2 com sal), nunca em texto, mas isso **não substitui um sistema de login de verdade**: quem tiver acesso ao navegador consegue ler ou apagar os dados. Não use uma senha que você usa em outros lugares.
- Não há recuperação de senha nem envio de e-mail.
- O certificado é de participação em material educativo e **não tem validade oficial**. O código é gerado no próprio navegador e não pode ser conferido por terceiros. Para isso seria preciso um servidor (por exemplo, Firebase ou Supabase).

## Funcionalidades
- Layout responsivo para computador, tablet e celular.
- Tema claro e escuro (respeita a preferência do sistema e lembra a escolha).
- Menu mobile, destaque da seção atual no menu e barra de progresso de leitura.
- Navegação entre módulos por abas (com setas do teclado) e botões Anterior/Próximo.
- Progresso de módulos, checklist e melhor nota do quiz salvos no navegador.
- Botão para apagar todo o progresso (o cadastro é mantido).
- Acessibilidade: link "pular para o conteúdo", foco visível, rótulos ARIA e respeito a `prefers-reduced-motion`.

## Como editar o conteúdo
Todo o conteúdo do curso fica no início de `script.js`:
- `lessonData`: módulos (título, objetivos, tempo e texto em HTML).
- `glossaryData`: termos do glossário.
- `commandData`: comandos do guia rápido.
- `taskData`: etapas do desafio final.
- `questions`: perguntas do quiz.
- `faqData`: perguntas frequentes.

Basta adicionar ou alterar itens nessas listas: contadores, progresso e telas se ajustam automaticamente.

## Observação
O progresso fica salvo no `localStorage` do navegador e não é sincronizado entre dispositivos ou usuários. O conteúdo é educativo; confira a documentação oficial do GitHub para mudanças recentes na interface.
