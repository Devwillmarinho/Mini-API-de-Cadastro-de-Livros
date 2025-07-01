const EventEmitter = require('events');
const readline = require('readline');

const taskEmitter = new EventEmitter();
const tasks = {};

taskEmitter.on('taskCreated', (taskName) => {
  console.log(`🏁 Tarefa "${taskName}" criada.`);
});

taskEmitter.on('taskCompleted', (taskName) => {
  console.log(`✅ Tarefa "${taskName}" concluída!`);
});

taskEmitter.on('taskCancelled', (taskName) => {
  console.log(`❌ Tarefa "${taskName}" cancelada.`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Comando> '
});

console.log('Comandos: create <nome>, cancel <nome>, list, exit');
rl.prompt();

rl.on('line', (line) => {
  const [command, ...args] = line.trim().split(' ');
  const taskName = args.join(' ');

  switch (command) {
    case 'create':
      if (!taskName) {
        console.log('⚠️ Nome da tarefa é obrigatório!');
        break;
      }

      if (tasks[taskName]) {
        console.log('⚠️ Tarefa já existe.');
        break;
      }

      const timeout = setTimeout(() => {
        tasks[taskName].status = 'concluída';
        taskEmitter.emit('taskCompleted', taskName);
      }, 15000);

      tasks[taskName] = {
        status: 'pendente',
        timeout
      };

      taskEmitter.emit('taskCreated', taskName);
      break;

    case 'cancel':
      if (!tasks[taskName]) {
        console.log('⚠️ Tarefa não existe.');
        break;
      }

      if (tasks[taskName].status !== 'pendente') {
        console.log('⚠️ Tarefa já foi concluída ou cancelada.');
        break;
      }

      clearTimeout(tasks[taskName].timeout);
      tasks[taskName].status = 'cancelada';
      taskEmitter.emit('taskCancelled', taskName);
      break;

    case 'list':
      console.log('\n📋 Lista de Tarefas:');
      if (Object.keys(tasks).length === 0) {
        console.log('(nenhuma tarefa criada)');
      } else {
        for (const [name, info] of Object.entries(tasks)) {
          console.log(`- ${name}: ${info.status}`);
        }
      }
      break;

    case 'exit':
      console.log('👋 Saindo...');
      rl.close();
      return;

    default:
      console.log('❓ Comando inválido.');
  }

  rl.prompt();
});
