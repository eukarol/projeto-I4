import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtém o diretório atual do módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configura o diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Simulação de respostas para consultas sobre engenharia química, controle e automação, e engenharia hídrica
const simulatedResponses = {
    "catalysis": "Definição: Catálise é o processo de aumentar a taxa de uma reação química utilizando um catalisador, que não é consumido na reação. Exemplo de aplicação: Catalisadores em reatores industriais para a produção de amônia no processo Haber.",
    "thermodynamics": "Definição: Termodinâmica é a área da física que estuda as relações entre calor, trabalho, energia e propriedades de sistemas. Exemplo de aplicação: Ciclos termodinâmicos em motores de combustão interna.",
    "process control": "Definição: Controle de processos é a área da engenharia que se preocupa em monitorar e ajustar processos industriais para manter condições operacionais desejadas. Exemplo de aplicação: Sistemas de controle em fábricas para manter a temperatura e a pressão constantes.",
    "automation": "Definição: Automação é a tecnologia que utiliza sistemas de controle para operar equipamentos com menor intervenção humana. Exemplo de aplicação: Sistemas de controle automatizados em linhas de montagem de automóveis.",
    "hydrology": "Definição: Hidrologia é o estudo da distribuição e movimento da água na Terra, incluindo seu ciclo, propriedades e impacto ambiental. Exemplo de aplicação: Modelos de previsão de inundação e gestão de recursos hídricos.",
    "water treatment": "Definição: Tratamento de água é o processo de remover contaminantes da água para torná-la segura para consumo e uso. Exemplo de aplicação: Sistemas de filtragem e desinfecção de água em estações de tratamento.",
    "chemical engineering": "Definição: Engenharia química é a aplicação de princípios de química, física e matemática para a eficiência na produção e processamento de produtos químicos e materiais. Exemplo de aplicação: Design de processos químicos e otimização de operações industriais.",
    "control systems": "Definição: Sistemas de controle são sistemas projetados para regular o comportamento de outros sistemas usando feedback. Exemplo de aplicação: Controladores PID em sistemas de controle de temperatura.",
    "fluid dynamics": "Definição: Dinâmica de fluidos é o estudo do movimento de fluidos e suas interações com superfícies. Exemplo de aplicação: Análise de escoamento de fluidos em dutos e sistemas hidráulicos.",
    "reaction engineering": "Definição: Engenharia de reações é a área que estuda e projeta processos químicos para otimizar a taxa e o rendimento das reações. Exemplo de aplicação: Design de reatores para a produção de polímeros.",
    "process optimization": "Definição: Otimização de processos envolve melhorar a eficiência e a eficácia dos processos industriais. Exemplo de aplicação: Ajuste de parâmetros de operação em uma planta de produção para reduzir custos e aumentar a produção.",
    "control theory": "Definição: Teoria de controle é o estudo de como manipular o comportamento de sistemas dinâmicos. Exemplo de aplicação: Projeto de sistemas de controle automático para veículos autônomos.",
    "automation systems": "Definição: Sistemas de automação são projetados para automatizar tarefas repetitivas e complexas em ambientes industriais. Exemplo de aplicação: Robôs industriais que realizam soldagem e montagem em fábricas.",
    "water resources management": "Definição: Gestão de recursos hídricos envolve a utilização e proteção de água para atender às necessidades humanas e ambientais. Exemplo de aplicação: Planejamento de uso da água em regiões com escassez hídrica.",
    "environmental engineering": "Definição: Engenharia ambiental é a aplicação de princípios de engenharia para melhorar o ambiente natural e proteger a saúde pública. Exemplo de aplicação: Projetos de controle de poluição do ar e da água.",
    "chemical reaction kinetics": "Definição: Cinética de reações químicas estuda a velocidade das reações químicas e os fatores que a influenciam. Exemplo de aplicação: Determinação de condições ideais para a produção de um medicamento.",
    "instrumentation": "Definição: Instrumentação é a ciência e tecnologia de medir e controlar variáveis físicas e químicas. Exemplo de aplicação: Sensores e dispositivos de medição em processos industriais.",
    "process safety": "Definição: Segurança de processos é o estudo e a prática de prevenir acidentes e controlar riscos em processos industriais. Exemplo de aplicação: Sistemas de alarme e controle para prevenir acidentes em plantas químicas.",
    "hydraulic engineering": "Definição: Engenharia hidráulica é a aplicação de princípios de engenharia para a gestão e controle de sistemas de água. Exemplo de aplicação: Projetos de barragens e sistemas de irrigação.",
    "chemical plant design": "Definição: Design de plantas químicas envolve o planejamento e a construção de instalações para a produção de produtos químicos. Exemplo de aplicação: Projeto de uma planta para a produção de ácido sulfúrico.",
    "environmental impact assessment": "Definição: Avaliação de impacto ambiental é o processo de avaliar os efeitos potenciais de um projeto sobre o meio ambiente. Exemplo de aplicação: Estudos para um novo projeto de mineração.",
    "control engineering": "Definição: Engenharia de controle é a prática de projetar e implementar sistemas que regulam e controlam o comportamento de sistemas dinâmicos. Exemplo de aplicação: Sistemas de controle em processos de manufatura para garantir qualidade e eficiência.",
    "water conservation": "Definição: Conservação da água é a prática de usar a água de forma eficiente e sustentável. Exemplo de aplicação: Técnicas de coleta e reutilização de água da chuva em residências e indústrias.",
    "chemical process design": "Definição: Design de processos químicos envolve a criação e otimização de processos para a produção de produtos químicos. Exemplo de aplicação: Desenvolvimento de processos para a fabricação de fertilizantes.",
    // Adicione mais termos e definições conforme necessário
};

// Endpoint para simular a busca
app.get('/search', (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Obtém a resposta simulada
    const response = simulatedResponses[query.toLowerCase()] || "O banco de dados está sendo atualizado. Por favor, busque por outro termo.";

    // Responde com a resposta simulada
    res.json({ result: response });
});

// Serve o arquivo HTML na rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
