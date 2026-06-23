# 🧪 TesteLab – Atividade Prática E2E com Playwright

Bem-vindo(a) à atividade prática de testes end-to-end!  
Você vai escrever um teste real para uma aplicação de login e cadastro.

---

## 📁 Estrutura do projeto

```
playwright-atividade/
├── app/
│   └── index.html          ← Aplicação que você vai testar
├── tests/
│   └── auth.spec.ts        ← Arquivo de testes (SEU TRABALHO ESTÁ AQUI)
├── playwright.config.js    ← Configuração do Playwright
└── package.json
```

---

## ⚙️ Configuração (faça uma vez só)

**Pré-requisitos:** Node.js 18+ instalado.

```bash
# 1. Instale as dependências
npm install

# 2. Instale os navegadores do Playwright
npx playwright install chromium
```

---

## ▶️ Como rodar os testes

```bash
# Modo headless (sem abrir janela — mais rápido)
npm test

# Modo com navegador visível (melhor para entender o que acontece)
npm run test:headed

# Playwright UI — interface gráfica para explorar os testes
npm run test:ui
```

Após rodar, abra o relatório HTML:

```bash
npx playwright show-report
```

---

## 🎯 Sua missão

Abra o arquivo **tests/auth.spec.ts** e implemente um único fluxo:

1. cadastrar um usuário com dados válidos
2. fazer login com esse mesmo usuário
3. verificar que o dashboard aparece após o login

O foco da atividade agora é o caminho feliz completo, sem blocos de desafio.

---

## 🔍 Dicas importantes

### Selecionando elementos

A aplicação usa atributos `data-testid` em todos os elementos interativos.  
Use sempre `getByTestId()` para selecionar — é a forma mais robusta:

```js
// ✅ Recomendado
page.getByTestId("login-email");

// ⚠️ Evite (frágil, quebra com refatoração de CSS)
page.locator("#login-email");
page.locator(".input-email");
```

### Assertions mais usadas nesta atividade

```js
// Elemento está visível
await expect(locator).toBeVisible();

// Elemento está oculto
await expect(locator).toBeHidden();

// Elemento contém um texto
await expect(locator).toContainText("algum texto");

// Página tem um título
await expect(page).toHaveTitle(/TesteLab/);
```

### Interações mais usadas

```js
// Clicar num elemento
await page.getByTestId("btn-login").click();

// Preencher um campo de texto
await page.getByTestId("login-email").fill("email@exemplo.com");

// Navegar para uma URL
await page.goto("/");
```

---

## 📋 Lista de data-testids disponíveis

| `data-testid`    | Elemento                             |
| ---------------- | ------------------------------------ |
| `tab-login`      | Botão da aba "Entrar"                |
| `tab-register`   | Botão da aba "Criar conta"           |
| `login-email`    | Campo de e-mail (login)              |
| `login-password` | Campo de senha (login)               |
| `btn-login`      | Botão "Entrar"                       |
| `login-feedback` | Mensagem de erro/sucesso do login    |
| `reg-email`      | Campo de e-mail (cadastro)           |
| `reg-password`   | Campo de senha (cadastro)            |
| `reg-confirm`    | Campo de confirmação de senha        |
| `btn-register`   | Botão "Criar conta"                  |
| `reg-feedback`   | Mensagem de erro/sucesso do cadastro |
| `dashboard`      | Painel pós-login                     |
| `dash-email`     | E-mail exibido no dashboard          |
| `btn-logout`     | Botão "Sair da conta"                |

---

## 🆘 Precisa de ajuda?

1. Rode com `--headed` para ver o que o browser está fazendo
2. Use `await page.pause()` dentro do teste para pausar e inspecionar
3. Consulte a documentação: https://playwright.dev/docs/locators
