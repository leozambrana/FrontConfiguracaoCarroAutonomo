# Guia de Instalação e Execução — Projeto TCC: PORTAL DE CONFIGURAÇÃO DO CARRO AUTÔNOMO

Este documento explica, passo a passo, como configurar e executar o projeto de **PORTAL DE CONFIGURAÇÃO DO CARRO AUTÔNOMO**. Siga cuidadosamente cada etapa, na ordem apresentada.

**Não pule nenhum passo.**

---

## 1. Baixar o repositório

Acesse o link abaixo:

**Repositório GitHub:**
https://github.com/leozambrana/FrontConfiguracaoCarroAutonomo

Na página, clique no botão **Code** (botão verde) e depois em **Download ZIP**.

Após o download, extraia o arquivo ZIP (botão direito → "Extrair aqui" ou "Extrair tudo").

Lembre-se de onde a pasta foi salva — você vai precisar acessá-la nas próximas etapas.

---

## 2. Instalar as ferramentas necessárias

Antes de executar o projeto, será necessário instalar alguns programas.
Abaixo estão os links para download e instruções de instalação.

### 2.1. Instalar Node.js

O Node.js é necessário para rodar o projeto (frontend).

**Download:**
https://nodejs.org/

**Instruções:**
- Acesse o site oficial do Node.js
- Baixe a versão **LTS (Long Term Support)** — é a versão mais estável
- Execute o instalador e siga as instruções padrão
- Confirme que o Node.js foi instalado corretamente abrindo o terminal e digitando:

```bash
node --version
npm --version
```

Se ambos os comandos mostrarem versões, a instalação foi bem-sucedida.

### 2.2. Instalar Bun (Gerenciador de Pacotes)

O Bun é um gerenciador de pacotes moderno e rápido, usado neste projeto.

**Download/Instalação:**

No terminal, execute o comando:

```bash
curl -fsSL https://bun.sh/install | bash
```

Após a instalação, reinicie o terminal e confirme digitando:

```bash
bun --version
```

### 2.3. Instalar Visual Studio Code (VS Code)

O VS Code é o editor onde você abrirá o projeto e executará os comandos.

**Download:**
https://code.visualstudio.com/

**Instruções:**
- Acesse o site oficial do VS Code
- Baixe a versão para seu sistema operacional (Windows, Mac ou Linux)
- Execute o instalador e siga as instruções padrão
- Após instalado, abra o VS Code
- Você pode abrir o terminal do próprio VS Code clicando em **Terminal → Novo Terminal**

---

## 3. Preparar o Projeto

Abra o VS Code ou o terminal.

Acesse a pasta do projeto **FrontConfiguracaoCarrinho** (ou o nome que você salvou).

Exemplo de comando (caso a pasta esteja na área de trabalho):

```bash
cd Desktop/FrontConfiguracaoCarrinho
```

No terminal, execute o comando abaixo para instalar as dependências:

```bash
bun install
```

Esse processo pode demorar alguns minutos.

Se você não tiver o Bun instalado, pode usar o npm alternativamente:

```bash
npm install
```

---

## 4. Executar o Projeto

Após a instalação das dependências estar concluída, execute o comando:

```bash
bun run dev
```

Ou, se estiver usando npm:

```bash
npm run dev
```

Se tudo estiver correto, aparecerá uma mensagem semelhante a:

```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

Anote o endereço exibido (geralmente `http://localhost:5173/`).

---

## 5. Acessar o Sistema

Com o servidor em execução, abra seu navegador web (Chrome, Firefox, Edge, etc) e digite:

```
http://localhost:5173/
```

A interface do **Portal de Configuração do Carro Autônomo** será exibida.

---

## 6. Usar o Sistema

### 6.1. Configurar Tempo de Viragem

- Na seção **"Tempo de Viragem"**, ajuste o slider ou digite diretamente o valor em milissegundos (ms)
- Este valor representa o tempo que o carro leva para completar uma rotação de 90 graus
- Intervalo: 500ms a 2000ms

### 6.2. Configurar Tempos de Cada Lado

Na seção **"Tempos de Cada Lado"**, você encontrará dois controles:

- **Lados 1 e 3**: Configure o tempo de movimento para estes lados
  - Intervalo: 100ms a 3000ms

- **Lados 2 e 4**: Configure o tempo de movimento para estes lados
  - Intervalo: 100ms a 3000ms

Ajuste os sliders ou digite os valores diretamente.

### 6.3. Visualizar o Código

No painel direito, você verá o **"Preview do Código"** que mostra o código Arduino gerado em tempo real com as configurações que você definiu.

### 6.4. Baixar o Código Arduino

Após configurar todos os tempos desejados, clique no botão **"Baixar código Arduino (.ino)"**.

Um arquivo chamado `robo_marcacao.ino` será baixado para sua pasta de Downloads.

Este arquivo pode ser usado diretamente no Arduino IDE para programar seu robô.

---

## 7. Visualização dos Resultados

O arquivo `.ino` baixado contém:

- As configurações de delay de viragem que você definiu
- Os tempos de movimento para cada lado do carro
- Todo o código necessário para o Arduino executar os movimentos

Você pode abrir o arquivo em um editor de texto para verificar o código, ou importá-lo diretamente no Arduino IDE.

---

## 8. Solução de Problemas

Se algo não funcionar corretamente:

### Problema: "Port already in use"

**Solução:** A porta 5173 (ou outra exibida) já está sendo usada.

- Feche outros programas que possam estar usando essa porta
- Ou execute:

```bash
bun run dev --port 3000
```

Isso usará a porta 3000 em vez de 5173.

### Problema: "Dependências não instaladas"

**Solução:**
- Certifique-se de estar na pasta correta do projeto
- Execute novamente:

```bash
bun install
```

Ou com npm:

```bash
npm install
```

### Problema: "Bun/Node não encontrado"

**Solução:**
- Verifique se o Node.js e/ou Bun estão instalados corretamente
- Feche e abra novamente o terminal
- Teste com:

```bash
node --version
bun --version
```

### Problema: O navegador mostra erro ao acessar localhost

**Solução:**
- Verifique se o servidor ainda está rodando no terminal
- Confirme o endereço (pode ser `http://localhost:5173/` ou outro)
- Tente recarregar a página (Ctrl + R ou Cmd + R)
- Tente abrir em um navegador diferente

### Problema: O arquivo .ino não baixa

**Solução:**
- Verifique se o navegador está bloqueando downloads
- Tente clicar novamente no botão **"Baixar código Arduino (.ino)"**
- Verifique a pasta de Downloads do seu computador

---

## 9. Encerramento

Quando terminar de usar o sistema:

1. Pressione **Ctrl + C** no terminal para encerrar o servidor
2. Você verá a mensagem de encerramento
3. Feche o VS Code se desejado

Quando quiser usar novamente:

- Abra o terminal na pasta do projeto
- Execute `bun run dev` ou `npm run dev`
- Acesse novamente `http://localhost:5173/` no navegador

---

## 10. Informações Técnicas

**Projeto:** Portal de Configuração do Carro Autônomo

**Tecnologias Utilizadas:**
- **Frontend:** React + TypeScript
- **Gerenciador de Pacotes:** Bun
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Componentes:** Shadcn/ui

**Estrutura do Projeto:**
```
FrontConfiguracaoCarrinho/
├── src/
│   ├── pages/           # Páginas do aplicativo
│   ├── components/      # Componentes reutilizáveis
│   ├── utils/           # Funções utilitárias (gerador de código)
│   └── lib/             # Bibliotecas auxiliares
├── public/              # Arquivos públicos
├── package.json         # Dependências do projeto
└── vite.config.ts       # Configuração do Vite
```

---

## 11. Suporte

Se o problema persistir após seguir todas as etapas:

- Verifique se todas as ferramentas estão instaladas corretamente
- Reinicie o computador e tente novamente
- Entre em contato com o responsável pelo projeto para suporte adicional

---

**Seguindo corretamente todas as etapas, o Portal de Configuração do Carro Autônomo estará em funcionamento completo, permitindo configurar os tempos de movimento e gerar o código Arduino automaticamente.**

Boa sorte! 🚀
