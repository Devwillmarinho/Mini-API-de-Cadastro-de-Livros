
```md
                .___               __        
  ____   ____   __| _/____          |__| ____  
 /    \ /  _ \ / __ |/ __ \         |  |/ __ \ 
|   |  (  <_> ) /_/ \  ___/         |  \  ___/ 
|___|  /\____/\____ |\___  > /\ /\__|  |\___  >
     \/            \/    \/  \/ \______|    \/ 
# 📋 Gerenciador de Tarefas com Events (Node.js)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()

Um projeto simples de terminal em Node.js que simula a criação, conclusão e cancelamento de tarefas usando eventos personalizados (`EventEmitter`). Também utiliza `readline` para receber comandos diretamente do terminal.

---

## 🚀 Funcionalidades

- ✅ Criar tarefas com nome
- 🕒 Concluir tarefas automaticamente após 3 segundos
- ❌ Cancelar tarefas antes de serem concluídas
- 📄 Listar todas as tarefas e seus status
- 👋 Sair do programa com um comando

---

## 🧑🏻‍💻 Tecnologias utilizadas

- Node.js
- Módulo `events`
- Módulo `readline`

---

## 💻 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/Devwillmarinho/Mini-API-de-Cadastro-de-Livros.git
Acesse a pasta:

bash


cd Mini-API-de-Cadastro-de-Livros
Instale o Node.js (caso ainda não tenha):
👉 https://nodejs.org

Execute o script:

bash


node taskManager.js
📦 Comandos disponíveis no terminal
bash


create <nome>  # Cria uma tarefa com o nome informado
cancel <nome>  # Cancela uma tarefa pendente
list           # Lista todas as tarefas
exit           # Encerra o programa
📝 Exemplo
bash


Comando> create Estudar Node
✅ Tarefa "Estudar Node" criada.
🏁 Tarefa "Estudar Node" concluída!

Comando> create Lavar roupa
Comando> cancel Lavar roupa
❌ Tarefa "Lavar roupa" cancelada!

Comando> list
- Estudar Node: concluída
- Lavar roupa: cancelada
🧠 Autor
Desenvolvido por Willian Marinho 👨🏻‍💻
🔗 linkedin.com/in/willian-marinho-492811162
📂 github.com/Devwillmarinho

![Sem título](https://github.com/user-attachments/assets/a411c6bd-e3e9-4871-9d8b-31f922ea0f98)

