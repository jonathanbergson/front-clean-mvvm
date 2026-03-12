# Monorepo MFE (Micro Frontends)

Monorepo com **pnpm workspaces**: host Astro e micro frontends Vue.

## Estrutura

- **`root/`** – Aplicação host em Astro que carrega os MFEs
- **`packages/components/vue`** – Biblioteca de componentes Vue compartilhada (`@mfe/components-vue`)
- **`apps/simple-form-vue`** – MFE Vue: formulário simples

## Pré-requisitos

- Node.js >= 22.12
- [pnpm](https://pnpm.io/) (recomendado 9.x)

## Instalação

Na raiz do monorepo (`04. mfe`):

```bash
pnpm install
```

## Desenvolvimento

### Host (Astro) e MFE ao mesmo tempo

```bash
pnpm dev
```

Sobe host e MFE em paralelo. Acesse:

- Host: http://localhost:4321
- Formulário (página do host com iframe): http://localhost:4321/simple-form-vue
- MFE direto: http://localhost:5001

### Apenas host

```bash
pnpm dev:host
```

### Apenas MFE do formulário

```bash
pnpm dev:form
```

Para testar o formulário dentro do host em dev, suba também o MFE (`pnpm dev:form`) e acesse http://localhost:4321/simple-form-vue (a página usa iframe em http://localhost:5001).

## Build

Na raiz:

```bash
pnpm build
```

Isso:

1. Gera a lib `@mfe/components-vue`
2. Faz o build do `simple-form-vue`
3. Copia o build do MFE para `root/public/simple-form-vue/`
4. Faz o build do host Astro

Depois:

```bash
pnpm preview
```

O host em modo preview serve o MFE em `/simple-form-vue` (página) e os assets em `/mfe/simple-form-vue/`.

## Scripts (raiz)

| Script        | Descrição                          |
|---------------|------------------------------------|
| `pnpm dev`    | Sobe host e MFEs em paralelo       |
| `pnpm dev:host` | Sobe só o host Astro             |
| `pnpm dev:form` | Sobe só o MFE do formulário      |
| `pnpm build`  | Build completo (lib + MFE + host)   |
| `pnpm preview`| Preview do host após build          |
