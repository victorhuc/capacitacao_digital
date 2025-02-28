# Capacitação Digital de Idosos

## Visão Geral

Este repositório contém o código-fonte do projeto **Capacitação Digital de Idosos**, que tem como objetivo promover a inclusão digital dos idosos por meio de uma interface web acessível, informativa e interativa. O projeto foi desenvolvido utilizando HTML, CSS, JavaScript e Bootstrap, e integra recursos de acessibilidade como o VLibras e uma função de leitura de texto.

## Funcionalidades

- **Interface Responsiva:**  
  Desenvolvida com Bootstrap, garantindo uma boa experiência em dispositivos móveis e desktops.

- **Acessibilidade:**  
  - **Leitura de Texto:** Permite que o usuário selecione um trecho de texto e o ouça por meio da API de SpeechSynthesis.  
  - **Integração com VLibras:** Facilita o acesso para pessoas com deficiência auditiva, convertendo o conteúdo textual para Libras.

- **Seções Informativas:**  
  - **Sobre Nós:** Apresenta a missão e os valores da organização, destacando o compromisso com a inclusão digital dos idosos.  
  - **Dados:** Exibe estatísticas relevantes sobre o acesso e a confiança dos idosos no uso das tecnologias digitais.  
  - **Programas de Auxílio:** Divididos em auxílios do governo, programas próprios e ferramentas digitais que facilitam o cotidiano dos usuários.  
  - **Contato:** Formulário para que os usuários possam enviar mensagens e tirar dúvidas.

- **Validação de Formulários e Feedback Visual:**  
  - **Login e Cadastro:** Implementação de validações em JavaScript para garantir que os dados inseridos (como e-mail, senha, CPF e telefone) estejam no formato correto.  
  - **Toast Notifications:** Exibição de mensagens de feedback utilizando os componentes do Bootstrap.

## Estrutura do Projeto

```plaintext
capacitacao_digital/
├── index.html              # Página principal do site com seções: Sobre, Dados, Programas e Contato
├── pages/                  # Páginas adicionais (ex.: login, programas, ferramentas)
├── imgs/                   # Pasta com imagens utilizadas no projeto
├── style/
│   └── styles.css          # Arquivo de estilos customizados
├── js/
│   └── script.js           # Arquivo JavaScript com funcionalidades de validação, formatação e acessibilidade
└── README.md               # Este arquivo
