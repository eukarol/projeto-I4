// Lista de termos pré-definidos com suas respostas
const predefinedResponses = {
    'machine learning': 'Definição: Aprendizado de máquina é um campo da inteligência artificial que usa algoritmos para permitir que computadores aprendam com dados e façam previsões ou decisões sem serem explicitamente programados. Exemplo de aplicação: Sistemas de recomendação de filmes, como o Netflix, que sugere filmes com base no seu histórico de visualizações.',
    'artificial intelligence': 'Definição: Inteligência artificial é a simulação de processos de inteligência humana por meio de sistemas computacionais. Isso inclui aprendizado, raciocínio e auto-correção. Exemplo de aplicação: Assistentes virtuais como a Siri ou Alexa, que compreendem e respondem a comandos de voz.',
    'deep learning': 'Definição: Aprendizado profundo é uma subárea do aprendizado de máquina que utiliza redes neurais artificiais com muitas camadas (profundidade) para modelar dados complexos. Exemplo de aplicação: Reconhecimento de imagem em sistemas de visão computacional.',
    'neural network': 'Definição: Rede neural é um modelo computacional inspirado no funcionamento do cérebro humano, usado para reconhecer padrões e aprender com dados. Exemplo de aplicação: Sistemas de reconhecimento de fala e imagem.',
    'data mining': 'Definição: Mineração de dados é o processo de descobrir padrões e informações úteis a partir de grandes volumes de dados. Exemplo de aplicação: Análise de dados de clientes para prever tendências de mercado.',
    'big data': 'Definição: Big data refere-se a conjuntos de dados que são grandes demais para serem processados com métodos tradicionais. Exemplo de aplicação: Análise de grandes volumes de dados em tempo real para detectar fraudes financeiras.',
    'cloud computing': 'Definição: Computação em nuvem é a entrega de serviços de computação (armazenamento, processamento) através da internet. Exemplo de aplicação: Serviços de armazenamento em nuvem como o Google Drive ou Dropbox.',
    'internet of things': 'Definição: Internet das coisas é a interconexão de dispositivos físicos via internet para coletar e trocar dados. Exemplo de aplicação: Casas inteligentes com dispositivos conectados como termostatos e câmeras.',
    'blockchain': 'Definição: Blockchain é uma tecnologia de registro distribuído que mantém registros imutáveis de transações em uma cadeia de blocos. Exemplo de aplicação: Criptomoedas como o Bitcoin.',
    'cybersecurity': 'Definição: Segurança cibernética é a proteção de sistemas e redes contra ataques digitais e acesso não autorizado. Exemplo de aplicação: Proteção contra malware e ataques de phishing.',
    'database': 'Definição: Banco de dados é um sistema para armazenar, gerenciar e recuperar dados de forma estruturada. Exemplo de aplicação: Sistemas de gerenciamento de banco de dados relacionais como MySQL ou PostgreSQL.',
    'software engineering': 'Definição: Engenharia de software é o processo de desenvolvimento, implementação e manutenção de software de alta qualidade. Exemplo de aplicação: Metodologias de desenvolvimento ágil e testes de software.',
    'algorithm': 'Definição: Algoritmo é um conjunto de regras e instruções para resolver um problema ou realizar uma tarefa. Exemplo de aplicação: Algoritmos de ordenação como quicksort e mergesort.',
    'data structure': 'Definição: Estrutura de dados é uma forma de organizar e armazenar dados para permitir acesso e modificação eficientes. Exemplo de aplicação: Listas encadeadas, pilhas e filas.',
    'quantum computing': 'Definição: Computação quântica é um tipo de computação que utiliza princípios da mecânica quântica para resolver problemas complexos de forma mais eficiente do que os computadores tradicionais. Exemplo de aplicação: Algoritmos quânticos para criptografia e simulações.',
    'robotics': 'Definição: Robótica é o campo da engenharia que envolve a concepção, construção e operação de robôs. Exemplo de aplicação: Robôs industriais usados em fábricas para automação de processos.',
    'virtual reality': 'Definição: Realidade virtual é uma tecnologia que cria um ambiente simulado e imersivo para o usuário. Exemplo de aplicação: Simuladores de treinamento e jogos interativos.',
    'augmented reality': 'Definição: Realidade aumentada é uma tecnologia que sobrepõe informações digitais ao mundo real. Exemplo de aplicação: Aplicativos de AR para visualização de móveis em ambientes reais.',
    'biometrics': 'Definição: Biometria é a medição e análise de características físicas e comportamentais para autenticação. Exemplo de aplicação: Reconhecimento facial e impressão digital.',
    '6g': 'Definição: 6G é a sexta geração de redes móveis, prevista para oferecer velocidades de dados muito superiores e conectividade global mais ampla. Exemplo de aplicação: Redes sem fio de alta velocidade e baixa latência para aplicações avançadas.',
    'edge computing': 'Definição: Computação de borda é o processamento de dados perto da origem dos dados, em vez de em um data center remoto. Exemplo de aplicação: Análise de dados em dispositivos IoT em tempo real.',
    'quantum cryptography': 'Definição: Criptografia quântica é uma técnica de criptografia que usa princípios da mecânica quântica para criar métodos de comunicação seguras. Exemplo de aplicação: Sistemas de comunicação ultra-seguros baseados em qubits.',
    // Adicione mais termos conforme necessário
};

// Função para buscar o termo técnico usando a API simulada
async function searchTerm() {
    const term = document.getElementById('termInput').value.trim();

    if (!term) {
        alert('Por favor, insira um termo de pesquisa.');
        return;
    }

    // Verifica se o termo é pré-definido
    const predefinedResponse = predefinedResponses[term.toLowerCase()];
    if (predefinedResponse) {
        // Exibe a resposta pré-definida na caixa de resultados
        document.getElementById('results').innerHTML = `<p>${predefinedResponse}</p>`;
        // Limpa a seção do chatbot
        document.getElementById('chatBox').innerHTML = '';
        return;
    }

    // Se não for um termo pré-definido, sugere usar o chatbot
    document.getElementById('results').innerHTML = `<p>Nenhum resultado encontrado para o termo pesquisado. Utilize nosso chatbot abaixo para mais informações.</p>`;
    document.getElementById('chatBox').innerHTML = `<p>Digite sua consulta no chatbot para que possamos buscar informações adicionais.</p>`;
}

// Função para enviar uma mensagem para o chatbot
async function sendMessage() {
    const message = document.getElementById('chatInput').value.trim();

    if (!message) {
        alert('Por favor, insira uma mensagem.');
        return;
    }

    // Adiciona a mensagem do usuário ao chat
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML += `<div class="chat-message user-message">${message}</div>`;

    // Limpar o campo de entrada após o envio
    document.getElementById('chatInput').value = '';

    // Se a mensagem não for pré-definida, busca na API simulada
    if (!Object.keys(predefinedResponses).includes(message.toLowerCase())) {
        try {
            // Fazendo a requisição para o endpoint /search do servidor
            const response = await fetch(`/search?query=${encodeURIComponent(message)}`);
            const data = await response.json();

            // Verifica se há erros na resposta da API
            if (data.error) {
                chatBox.innerHTML += `<div class="chat-message bot-message">Erro: ${data.error}</div>`;
            } else {
                // Processa e exibe os resultados recebidos
                if (data.result) {
                    chatBox.innerHTML += `<div class="chat-message bot-message">${data.result}</div>`;
                } else {
                    chatBox.innerHTML += `<div class="chat-message bot-message">Nenhum resultado encontrado para sua consulta.</div>`;
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            chatBox.innerHTML += `<div class="chat-message bot-message">Erro ao buscar dados. Tente novamente.</div>`;
        }
    } else {
        // Simula resposta do chatbot para termos pré-definidos
        const botResponse = getChatbotResponse(message);
        chatBox.innerHTML += `<div class="chat-message bot-message">${botResponse}</div>`;
    }

    // Rolagem automática para o final da caixa de chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para obter uma resposta simulada do chatbot
function getChatbotResponse(message) {
    return predefinedResponses[message.toLowerCase()] || 'Desculpe, eu não tenho informações sobre esse termo. Você pode usar o chatbot para mais consultas.';
}

// Adiciona um evento de escuta para o botão de pesquisa
document.querySelector('button[onclick="searchTerm()"]').addEventListener('click', searchTerm);

// Adiciona um evento de escuta para o botão de enviar mensagem
document.querySelector('button[onclick="sendMessage()"]').addEventListener('click', sendMessage);

// Adiciona um evento de escuta para o campo de entrada do chatbot (opcional)
document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
