# CircleCI Playwright Example

Este projeto é um exemplo simples de como usar o Playwright para realizar testes automatizados. O objetivo principal é demonstrar a configuração básica do Playwright e como integrá-lo com o CircleCI.

## Estrutura do Projeto

```
circleci_playwright
├── tests
│   └── hello-world.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório:
   ```
   git clone https://github.com/seu_usuario/circleci_playwright.git
   cd circleci_playwright
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando os Testes

Para executar os testes, use o seguinte comando:
```
npm test
```

Isso irá rodar todos os testes definidos na pasta `tests`.

## Configuração do CircleCI

Este projeto está configurado, **em outro repositório**, para ser executado no CircleCI. Certifique-se de que o arquivo de configuração do CircleCI (`.circleci/config.yml`) esteja presente e configurado corretamente para rodar os testes.

Veja [yxuo/circleci_repo](https://github.com/yxuo/circleci_repo)

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Basta abrir um pull request!

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.


