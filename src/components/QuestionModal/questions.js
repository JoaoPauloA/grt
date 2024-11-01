const questions = [
  {
    "question": "A aplicação de videochamada deve se comportar adequadamente com 1000 usuários e demorar 5 segundos para inicializar.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Estresse"
    ],
    "explanation": "O comportamento da aplicação com 1000 usuários é um Teste de Estresse, e o tempo de inicialização é um Teste de Desempenho."
  },
  {
    "question": "Usuário não preencheu a matrícula, pois o campo estava fora da tela.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Funcionalidade"
    ],
    "explanation": "A usabilidade e a funcionalidade é o foco aqui, pois o campo fora da tela impede o uso correto da interface."
  },
  {
    "question": "Após realizar um saque, o caixa eletrônico indica que não tem dinheiro.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "É um teste funcional que verifica se o saque foi efetuado. E também verifica se o usuário tem seu dinheiro retirado após o saque."
  },
  {
    "question": "O usuário coloca a senha incorreta várias vezes, tem seu acesso bloqueado e aparece uma mensagem de erro.",
    "answers": [
      "Teste de Funcionalidade",
      "Teste de Segurança"
    ],
    "explanation": "A função de bloqueio por tentativas incorretas está relacionada à segurança, pois protege o sistema de acessos não autorizados. Assim como o observar se está cumprindo com a função de bloquear quando o usuário erra a senha muitas vezes."
  },
  {
    "question": "O cliente não conseguiu identificar os aniversariantes do mês pelo calendário online.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Funcionalidade"
    ],
    "explanation": "Correção, pois a dificuldade do usuário em identificar os aniversariantes no calendário afeta a usabilidade e experiência e também serve para testar a função de procura."
  },
  {
    "question": "O cliente não conseguiu identificar o botão para editar a foto do perfil.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Aceitação"
    ],
    "explanation": "A dificuldade em identificar um botão é um problema de usabilidade. Também verifica se o software é aceitável ao usuário final."
  },
  {
    "question": "O usuário tenta fazer um saque, mas o saldo é insuficiente.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Funcionalidade"
    ],
    "explanation": "Avalia se a funcionalidade de verificar saldo insuficiente está correta e confirma que o sistema se comporta conforme esperado em situações reais."
  },
  {
    "question": "Um usuário tenta se inscrever no sistema, mas o botão de confirmação não foi habilitado.",
    "answers": [
      "Teste de Funcionalidade",
      "Teste de Usabilidade"
    ],
    "explanation": "A habilitação do botão é uma funcionalidade essencial para o fluxo de registro. Se o botão não funciona afeta a usabilidade."
  },
  {
    "question": "Ao tentar realizar um saque, o caixa volta à tela inicial.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "Isso é uma falha funcional, já que a tela inicial não deveria ser acessada se o processo de saque não foi concluído."
  },
  {
    "question": "Usuário tenta entrar no sistema com banco de dados indisponível.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "A funcionalidade correta do sistema depende de como ele lida com a indisponibilidade do banco de dados. Usabilidade se preocupa com a experiência, não com a falha de conexão."
  },
  {
    "question": "O cliente tentou inserir um estado não existente no país.",
    "answers": [
      "Teste de Funcionalidade",
      "Teste de Usabilidade",
      "Teste de Aceitação"
    ],
    "explanation": "O sistema deve validar entradas corretamente, impedindo a inserção de estados inválidos. E como o cliente está verificando, isso implica também na aceitação."
  },
  {
    "question": "O usuário recebeu, indevidamente, um acesso de administrador.",
    "answers": [
      "Teste de Segurança"
    ],
    "explanation": "Essa é uma falha de segurança grave."
  },
  {
    "question": "Verificar como a aplicação se comporta com uma taxa de criação fora do normal no intervalo de um minuto.",
    "answers": [
      "Teste de Estresse",
      "Teste de Desempenho"
    ],
    "explanation": "O Teste de Estresse e desempenho é mais adequado aqui, pois avalia a capacidade do sistema de lidar com uma carga inesperada de requisições sem quebrar."
  },
  {
    "question": "O cliente não conseguiu excluir um cadastro porque não encontrou o botão.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Aceitação"
    ],
    "explanation": "A dificuldade em encontrar o botão é um problema de usabilidade e aceitação, pois afeta a facilidade de uso do sistema e avalia, também, a facilidade de navegação e a clareza da interface para encontrar o botão."
  },
  {
    "question": "Ao tentar criar um grupo privado, o usuário acabou criando um grupo público.",
    "answers": [
      "Teste de Funcionalidade",
      "Teste de Usabilidade",
      "Teste de Segurança"
    ],
    "explanation": "A falha em criar um grupo com as permissões corretas é uma questão de Funcionalidade. Se a criação de um grupo privado resulta em um grupo público, isso pode expor informações privadas, o que também é um problema de Segurança. Usabilidade pode ser um fator se a interface for confusa, mas todos os três tipos de teste são aplicáveis."
  },
  {
    "question": "O usuário deve conseguir realizar o upload de 1 terabyte de fotos e a aplicação deve fazer isso em 20 segundos.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Funcionalidade"
    ],
    "explanation": "Verifica a função de upload e o desempenho já que a velocidade de upload também está sendo testada."
  },
  {
    "question": "Verificar se a conexão de uma chamada de vídeo é feita em 5 segundos.",
    "answers": [
      "Teste de Desempenho"
    ],
    "explanation": "Este teste está preocupado com o tempo de resposta do sistema ao iniciar uma chamada de vídeo, que é um aspecto de desempenho. O foco aqui não é se a funcionalidade de iniciar uma chamada existe, mas se ela opera dentro de um tempo aceitável."
  },
  {
    "question": "O cliente não conseguiu encontrar o amigo na rede social.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Funcionalidade",
      "Teste de Aceitação"
    ],
    "explanation": "Se o problema é a dificuldade de encontrar o amigo, pode ser um problema de usabilidade que afeta na aceitação. E, se o sistema não listou o amigo corretamente, isso é uma falha funcional."
  },
  {
    "question": "Um usuário tenta se inscrever em uma disciplina, mas já está matriculado em outra do mesmo horário.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "A verificação de horários conflitantes é uma função que o sistema deve realizar corretamente, logo é um Teste de Funcionalidade. Aceitação seria aplicável se focássemos na satisfação do usuário final com o resultado."
  },
  {
    "question": "O usuário tenta utilizar um caixa eletrônico com o sistema fora do ar e consegue realizar um saque.",
    "answers": [
      "Teste de Segurança",
      "Teste de Usabilidade",
      "Teste de Funcionalidade"
    ],
    "explanation": "A segurança é crucial pois realizar um saque com o sistema offline é uma grave falha de segurança. Ademais é o usuário que está verificando a funcionalidade o que implica também na usabilidade."
  },
  {
    "question": "Ao inserir um cartão no caixa eletrônico, o sistema indicou como cartão roubado e assim permitiu o saque.",
    "answers": [
      "Teste de Segurança",
      "Teste de Funcionalidade"
    ],
    "explanation": "Segurança pois o sistema permitiu uma operação perigosa (saque com cartão roubado). Se o sistema indicou que o cartão era roubado, mas ainda assim permitiu o saque, indica uma falha na funcionalidade."
  },
  {
    "question": "A aplicação executa satisfatoriamente em um dispositivo de hardware limitado e não especificado.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Estresse"
    ],
    "explanation": "Desempenho é o foco principal aqui, já que estamos avaliando a adequação do sistema a limitações de hardware. Estresse também se adequa pois verifica a aplicação a condições extremas, como falta de recursos de hardware."
  },
  {
    "question": "O cliente tenta fazer o login e consegue sem dificuldades.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Desempenho",
      "Teste de Aceitação",
      "Teste de Funcionalidade"
    ],
    "explanation": "O teste verifica a função e a facilidade de login. O que resulta em um bom desempenho do software."
  },
  {
    "question": "O usuário tenta fazer um login sem ser cadastrado e é bem-sucedido.",
    "answers": [
      "Teste de Segurança",
      "Teste de Funcionalidade"
    ],
    "explanation": "Essa é uma falha de segurança, pois o sistema não deveria permitir o login de usuários não cadastrados. E, também verifica a funcionalidade de fazer login."
  },
  {
    "question": "O cliente não teve dificuldades em enviar algumas mensagens de teste pelo sistema.",
    "answers": [
      "Teste de Usabilidade",
      "Teste de Aceitação"
    ],
    "explanation": "Testa se o envio de mensagens funciona conforme esperado. Avalia se o processo de envio de mensagens é intuitivo."
  },
  {
    "question": "O sistema de video chamadas continua se comportando adequadamente se aumentarmos os usuários além da capacidade suportável.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Estresse"
    ],
    "explanation": "Ambos são válidos, pois o Teste de Estresse avalia o comportamento sob carga excessiva e o Desempenho mede a resposta sob essa condição."
  },
  {
    "question": "O cliente realiza o saque e é bem-sucedido.",
    "answers": [
      "Teste de Aceitação",
      "Teste de Funcionalidade"
    ],
    "explanation": "Se o teste visa verificar se o sistema atende às expectativas do cliente, é um Teste de Aceitação. A funcionalidade verifica se o saque foi processado corretamente, mas a aceitação é mais abrangente."
  },
  {
    "question": "O usuário realiza um cadastro com sucesso.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "A funcionalidade verifica se o cadastro foi processado corretamente."
  },
  {
    "question": "Um usuário consegue se registrar no sistema após o fechamento de inscrições.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "Falha de funcionalidade, pois o sistema deveria bloquear novas inscrições após o prazo."
  },
  {
    "question": "O sistema apresenta informações sigilosas de banco de dados quando todos os usuários estão logados simultaneamente.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Estresse",
      "Teste de Funcionalidade",
      "Teste de Segurança"
    ],
    "explanation": "Exibir informações sigilosas é um problema grave de Segurança. O Desempenho e Estresse está envolvido já que ocorre sob alta carga."
  },
  {
    "question": "O usuário digitou um número de caracteres maior que o permitido.",
    "answers": [
      "Teste de Funcionalidade",
      "Teste de Usabilidade"
    ],
    "explanation": "Este teste verifica se o sistema corretamente limita a entrada de caracteres, o que é uma verificação funcional. E avalia como o sistema comunica ao usuário que ele excedeu o limite de caracteres, e se a experiência de correção é intuitiva."
  },
  {
    "question": "O elevado uso do sistema altera o tempo de resposta do servidor para um valor maior que o especificado.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Estresse"
    ],
    "explanation": "Ambos podem ser aplicados aqui. O Desempenho avalia o tempo de resposta, e o Estresse verifica como o sistema lida com altas cargas."
  },
  {
    "question": "Como o sistema se comporta com a quantidade de requisições acima do esperado.",
    "answers": [
      "Teste de Estresse",
      "Teste de Desempenho"
    ],
    "explanation": "Ambos são aplicáveis, mas penso que o Teste de Estresse é mais adequado, pois foca na resposta do sistema sob uma carga inesperadamente alta."
  },
  {
    "question": "Um usuário não consegue se inscrever em uma disciplina porque o sistema está indisponível.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "A indisponibilidade do sistema é uma falha de Funcionalidade. Segurança pode ser relevante se a indisponibilidade for devido a problemas de segurança."
  },
  {
    "question": "O usuário não digita nada no campo de busca e executa a procura, esperando que o sistema exiba todos os itens.",
    "answers": [
      "Teste de Funcionalidade"
    ],
    "explanation": "A funcionalidade de busca deve lidar com entradas vazias corretamente, o que é um Teste de Funcionalidade. Segurança não está diretamente envolvida aqui, a menos que o sistema exponha dados inadequadamente."
  },
  {
    "question": "O usuário tenta realizar uma compra com cartão expirado.",
    "answers": [
      "Teste de Funcionalidade",
    
    ],
    "explanation": "A validação do cartão é uma funcionalidade básica. Segurança poderia ser um aspecto se o cartão expirado representasse um risco de segurança, mas aqui o foco é na funcionalidade."
  },
  {
    "question": "O provedor de internet utilizado pelo servidor está com problemas e as chamadas de vídeo perdem a qualidade.",
    "answers": [
      "Teste de Desempenho",
      "Teste de Estresse"
    
    ],
    "explanation": "Avaliar como o sistema reage a falhas no provedor de internet se aproxima de um teste de estresse, pois coloca o sistema em uma situação fora do normal para ver como ele se comporta."
  },
  {
    "question": "Um usuário tenta se registrar em uma disciplina, mas ela já atingiu a capacidade máxima.",
    "answers": [
      "Teste de Funcionalidade"    
    ],
    "explanation": "O Teste de Funcionalidade é válido aqui, já que a função do sistema de impedir novas inscrições após atingir a capacidade é o que está sendo verificado."
  }
  
];

export default questions;