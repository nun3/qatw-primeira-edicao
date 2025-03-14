# QA Tech Week - Primeira Edição

Bem-vindo ao repositório do **QA Tech Week - Primeira Edição**! Aqui você encontrará as instruções para configurar o ambiente, subir os serviços necessários e rodar os testes automatizados com Playwright.

## 📌 Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados em seu sistema:

- [Git for Windows](https://gitforwindows.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js (versão LTS)](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🐋 Guia de Instalação do Docker
- [Windows](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
- [MacOS](https://docs.docker.com/desktop/setup/install/mac-install/)
- [Linux Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

## 🚀 Configuração do Ambiente
1. Faça um Fork do projeto
2. Clone este repositório:
   ```sh
   git clone git@github.com:seu-usuario/qatw-primeira-edicao.git
   cd qatw-primeira-edicao
   ```
   
## 🐳 Subindo o Ambiente com Docker Compose
O projeto utiliza Docker Compose para gerenciar os serviços necessários para os testes.

1. Certifique-se de que o Docker Desktop está em execução.
2. No terminal, execute o comando abaixo para subir os serviços:
   ```sh
   docker-compose up -d
   ```
3. Para verificar se os contêineres estão rodando:
   ```sh
   docker ps
   ```
4. Para parar os serviços:
   ```sh
   docker-compose down
   ```

## 🧪 Executando os Testes com Playwright

1. Instale as dependências do Playwright:
   ```sh
   npx playwright install
   ```
2. Para rodar os testes localmente:
   ```sh
   npx playwright test
   ```
3. Para visualizar o relatório dos testes após a execução:
   ```sh
   npx playwright show-report
   ```
4. Para rodar os testes em modo UI (visualizando a execução):
   ```sh
   npx playwright test --ui
   ```

## 📄 Licença
Este projeto está sob a licença MIT.

--docker network ls (qatw-primeira-edicao_skynet)
--criar arquivo Jenkinsfile (parametrizar)
--docker pull mcr.microsoft.com/playwright:v1.50.1-noble
--npm i allure-playwright
--npm i allure-commandline 
--pra usar o allure precisa do java instalado (java --version)
--Adicionar Allure Commandline no Jenkins
--Generate Pipeline Script ainda no jenkins (copia a instrução e cola no pipeline script vscode)
--precisa ter JAVA_HOME / %JAVA_HOME%\bin /  no path do sistema  / C:\Program Files\Java\jdk-17
--precisa autenticar no docker, criar uma img especifica pra rodar alure papitodev/playwright-nj-v1.50.1-noble
--docker compose down  encerra as imagens docker
--docker compose up -d  cria as imagem do projeto

