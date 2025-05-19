# 🚀 Health Checker API

API de saúde para verificar a integridade do sistema.

## 📋 Pré-requisitos

- Docker e Docker Compose

## ⚙️ Instalação e Execução

1. Clone o repositório e navegue até o diretório do projeto:

   ```bash
   git clone git@github.com:henrique013/health-checker.git
   cd health-checker
   ```

2. Configure as variáveis de ambiente:

   ```bash
   cd dev
   cp .env.example .env
   cp .api.env.example .api.env
   ```

3. Inicie a aplicação:

   ```bash
   ./up.sh
   ```

4. Acesse a aplicação:
   - A API estará disponível em `http://localhost:${PUBLIC_PORT}`
   - Você pode testar os endpoints usando a documentação abaixo

## 🔑 Comandos Importantes

- `./up.sh`: Inicia todos os containers necessários para desenvolvimento
- `./down.sh`: Para e remove todos os containers
- `./tag.sh`: Cria uma tag para o projeto

## 🌐 Endpoints

- `GET /`: Verificação de saúde da própria API
- `GET /redis`: Verificação de saúde do banco de dados Redis
- `GET /postgres`: Verificação de saúde do banco de dados PostgreSQL
