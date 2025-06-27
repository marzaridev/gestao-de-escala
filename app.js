// --- Variáveis globais ---
let funcionarios = [];
let coberturaChart = null;
let coberturaRelatorioChart = null;
let distribuicaoChart = null;

// --- LocalStorage helpers ---
function salvarFuncionarios() {
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
}

function carregarFuncionarios() {
    const data = localStorage.getItem('funcionarios');
    if (data) {
        funcionarios = JSON.parse(data);
    } else {
        funcionarios = [];
    }
}

// --- Funções para renderizar elementos (exemplo simples, adapte conforme seu código) ---
function renderFuncionariosList() {
    // Atualize o DOM com a lista de funcionários
    const container = document.getElementById('lista-funcionarios');
    if (!container) return;
    container.innerHTML = funcionarios.map((f, i) => `
        <li>
            ${f.nome} (${f.turno}) - Presente: ${f.presente ? 'Sim' : 'Não'}
            <button onclick="removerFuncionario(${i})">Remover</button>
        </li>
    `).join('');
}

function renderPresencaList() {
    // Atualize conforme seu código
}

function renderEscalaTable() {
    // Atualize conforme seu código
}

function renderCronogramaPausas() {
    // Atualize conforme seu código
}

function renderFuncionariosCadastrados() {
    // Atualize conforme seu código
}

// --- Função para remover funcionário ---
function removerFuncionario(index) {
    funcionarios.splice(index, 1);
    salvarFuncionarios();
    atualizarTudo();
}

// --- Atualiza tudo que depende do array ---
function atualizarTudo() {
    renderFuncionariosList();
    renderPresencaList();
    renderEscalaTable();
    renderCronogramaPausas();
    renderFuncionariosCadastrados();
    updateDashboard();

    if (coberturaChart) initializeDashboardChart();
    if (coberturaRelatorioChart) initializeCoberturaRelatorioChart();
    if (distribuicaoChart) initializeDistribuicaoChart();
}

// --- Inicialização dos gráficos ---
function initializeDashboardChart() {
    const ctx = document.getElementById('coberturaChart');
    if (!ctx) return;

    if (coberturaChart) coberturaChart.destroy();

    const labels = [];
    const data = [];

    for (let i = 9; i <= 20; i++) {
        labels.push(`${i.toString().padStart(2, '0')}:00`);

        let coverage = 0;
        if (i >= 9 && i < 18) {
            coverage += funcionarios.filter(f => f.turno === '9h-18h' && f.presente).length;
        }
        if (i >= 11 && i < 20) {
            coverage += funcionarios.filter(f => f.turno === '11h-20h' && f.presente).length;
        }

        coverage = Math.max(0, coverage + Math.floor(Math.random() * 3) - 1);
        data.push(coverage);
    }

    coberturaChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Funcionários Ativos',
                data: data,
                fill: true,
                backgroundColor: '#1FB8CD33',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 25 }
            }
        }
    });
}

function initializeCoberturaRelatorioChart() {
    const ctx = document.getElementById('coberturaRelatorioChart');
    if (!ctx) return;

    if (coberturaRelatorioChart) coberturaRelatorioChart.destroy();

    const labels = [];
    const data = [];

    for (let i = 9; i <= 20; i++) {
        labels.push(`${i.toString().padStart(2, '0')}:00`);

        let coverage = 0;
        if (i >= 9 && i < 18) {
            coverage += funcionarios.filter(f => f.turno === '9h-18h' && f.presente).length;
        }
        if (i >= 11 && i < 20) {
            coverage += funcionarios.filter(f => f.turno === '11h-20h' && f.presente).length;
        }

        coverage = Math.max(0, coverage + Math.floor(Math.random() * 3) - 1);
        data.push(coverage);
    }

    coberturaRelatorioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Funcionários Ativos',
                data: data,
                fill: true,
                backgroundColor: '#1FB8CD33',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 25 }
            }
        }
    });
}

function initializeDistribuicaoChart() {
    const ctx = document.getElementById('distribuicaoChart');
    if (!ctx) return;

    if (distribuicaoChart) distribuicaoChart.destroy();

    const turno918Count = funcionarios.filter(f => f.turno === '9h-18h').length;
    const turno1120Count = funcionarios.filter(f => f.turno === '11h-20h').length;

    distribuicaoChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['9h-18h', '11h-20h'],
            datasets: [{
                data: [turno918Count, turno1120Count],
                backgroundColor: ['#1FB8CD', '#FFC185'],
                borderWidth: 0,
                cutout: '60%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 20, usePointStyle: true }
                }
            }
        }
    });
}

// --- Atualizar dashboard (exemplo, adapte conforme seu código) ---
function updateDashboard() {
    // Se tiver algum update a fazer no dashboard fora dos gráficos, faça aqui
}

// --- Evento adicionar funcionário ---
document.getElementById('adicionar-funcionario')?.addEventListener('click', function () {
    const nome = document.getElementById('novo-nome').value.trim();
    const entrada = document.getElementById('horario-entrada').value;
    const saida = document.getElementById('horario-saida').value;

    if (nome && entrada && saida) {
        const turno = `${entrada.split(':')[0]}h-${saida.split(':')[0]}h`;

        const novoFuncionario = {
            nome: nome,
            turno: turno,
            presente: true,
            pausas: {
                manha: { realizada: false, horario: "11:30" },
                almoco: { realizada: false, horario: "12:00" },
                tarde: { realizada: false, horario: "16:00" }
            }
        };

        funcionarios.push(novoFuncionario);
        salvarFuncionarios();
        atualizarTudo();

        // Limpar formulário
        document.getElementById('novo-nome').value = '';
        document.getElementById('horario-entrada').value = '';
        document.getElementById('horario-saida').value = '';
    }
});

// --- Evento remover funcionário (abre modal ou direto remove) ---
document.getElementById('remover-funcionario')?.addEventListener('click', function () {
    // Se você tem modal, abra aqui. Caso contrário, remova selecionado ou peça índice.
    // Exemplo:
    openRemoveEmployee();
});

// --- Função de inicialização principal ---
function inicializarApp() {
    carregarFuncionarios();
    atualizarTudo();
}

// --- Inicia o app ---
window.onload = inicializarApp;
