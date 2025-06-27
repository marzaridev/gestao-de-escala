// Global application state
let funcionarios = [
  {"nome": "Ana Silva", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:30"}, "almoco": {"realizada": false, "horario": "12:00"}, "tarde": {"realizada": false, "horario": "16:00"}}},
  {"nome": "Carlos Santos", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:00"}, "almoco": {"realizada": false, "horario": "13:00"}, "tarde": {"realizada": false, "horario": "15:30"}}},
  {"nome": "Maria Oliveira", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:45"}, "almoco": {"realizada": false, "horario": "12:30"}, "tarde": {"realizada": false, "horario": "16:30"}}},
  {"nome": "João Pereira", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:15"}, "almoco": {"realizada": false, "horario": "12:45"}, "tarde": {"realizada": false, "horario": "15:45"}}},
  {"nome": "Patricia Lima", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:30"}, "almoco": {"realizada": false, "horario": "13:15"}, "tarde": {"realizada": false, "horario": "16:15"}}},
  {"nome": "Roberto Costa", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:00"}, "almoco": {"realizada": false, "horario": "12:00"}, "tarde": {"realizada": false, "horario": "16:00"}}},
  {"nome": "Fernanda Rocha", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:45"}, "almoco": {"realizada": false, "horario": "13:30"}, "tarde": {"realizada": false, "horario": "16:45"}}},
  {"nome": "Diego Alves", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:15"}, "almoco": {"realizada": false, "horario": "12:15"}, "tarde": {"realizada": false, "horario": "15:30"}}},
  {"nome": "Luciana Mendes", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:30"}, "almoco": {"realizada": false, "horario": "13:00"}, "tarde": {"realizada": false, "horario": "16:30"}}},
  {"nome": "Rafael Barbosa", "turno": "9h-18h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "11:00"}, "almoco": {"realizada": false, "horario": "12:30"}, "tarde": {"realizada": false, "horario": "16:00"}}},
  {"nome": "Amanda Torres", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:30"}, "almoco": {"realizada": false, "horario": "14:00"}, "tarde": {"realizada": false, "horario": "17:30"}}},
  {"nome": "Thiago Nunes", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "13:00"}, "almoco": {"realizada": false, "horario": "15:00"}, "tarde": {"realizada": false, "horario": "18:00"}}},
  {"nome": "Camila Ferreira", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:45"}, "almoco": {"realizada": false, "horario": "14:30"}, "tarde": {"realizada": false, "horario": "17:45"}}},
  {"nome": "Bruno Cardoso", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:15"}, "almoco": {"realizada": false, "horario": "14:15"}, "tarde": {"realizada": false, "horario": "17:15"}}},
  {"nome": "Juliana Campos", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "13:15"}, "almoco": {"realizada": false, "horario": "15:15"}, "tarde": {"realizada": false, "horario": "18:15"}}},
  {"nome": "Marcos Vieira", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:30"}, "almoco": {"realizada": false, "horario": "14:00"}, "tarde": {"realizada": false, "horario": "17:30"}}},
  {"nome": "Renata Souza", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "13:00"}, "almoco": {"realizada": false, "horario": "15:00"}, "tarde": {"realizada": false, "horario": "18:00"}}},
  {"nome": "Gustavo Reis", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:45"}, "almoco": {"realizada": false, "horario": "14:30"}, "tarde": {"realizada": false, "horario": "17:45"}}},
  {"nome": "Priscila Castro", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:00"}, "almoco": {"realizada": false, "horario": "14:00"}, "tarde": {"realizada": false, "horario": "17:00"}}},
  {"nome": "Leonardo Dias", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "13:30"}, "almoco": {"realizada": false, "horario": "15:30"}, "tarde": {"realizada": false, "horario": "18:30"}}},
  {"nome": "Vanessa Martins", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:15"}, "almoco": {"realizada": false, "horario": "14:15"}, "tarde": {"realizada": false, "horario": "17:15"}}},
  {"nome": "Felipe Moreira", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "13:00"}, "almoco": {"realizada": false, "horario": "15:00"}, "tarde": {"realizada": false, "horario": "18:00"}}},
  {"nome": "Tatiana Gomes", "turno": "11h-20h", "presente": true, "pausas": {"manha": {"realizada": false, "horario": "12:30"}, "almoco": {"realizada": false, "horario": "14:30"}, "tarde": {"realizada": false, "horario": "17:30"}}}
];

let pausasAtivas = [];
let timers = {};
let editingTimeData = null;
let configuracoes = {
    nomeEmpresa: "Font Office",
    textoRodape: "© 2025 Font Office"
};

// Chart instances
let coberturaChart = null;
let coberturaRelatorioChart = null;
let distribuicaoChart = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeTimeSelect();
    initializeHorarioSelects(); // NOVO: Para horários de 9h às 20h
    initializeModals();
    initializeConfiguracoes(); // NOVO: Para personalização
    renderFuncionariosList();
    renderPresencaList();
    renderEscalaTable();
    renderCronogramaPausas();
    renderFuncionariosCadastrados(); // NOVO: Lista de funcionários cadastrados
    updateDashboard();
    renderRelatorios();
    updateLastUpdateTime();
    updateRodape(); // NOVO: Atualizar rodapé
    
    // Start real-time updates
    setInterval(updateDashboard, 30000);
    setInterval(updateLastUpdateTime, 1000);
    setInterval(updateTimers, 1000);
    setInterval(checkPausaExpiration, 60000);
});

// NOVO: Inicializar campos de horário (9h às 20h)
function initializeHorarioSelects() {
    const entradaSelect = document.getElementById('horario-entrada');
    const saidaSelect = document.getElementById('horario-saida');
    
    // Limpar opções existentes
    entradaSelect.innerHTML = '';
    saidaSelect.innerHTML = '';
    
    // Horários de entrada (9h às 11h)
    for (let hour = 9; hour <= 11; hour++) {
        const option = document.createElement('option');
        option.value = `${hour.toString().padStart(2, '0')}:00`;
        option.textContent = `${hour.toString().padStart(2, '0')}:00`;
        entradaSelect.appendChild(option);
    }
    
    // Horários de saída (18h às 20h)
    for (let hour = 18; hour <= 20; hour++) {
        const option = document.createElement('option');
        option.value = `${hour.toString().padStart(2, '0')}:00`;
        option.textContent = `${hour.toString().padStart(2, '0')}:00`;
        saidaSelect.appendChild(option);
    }
}

// NOVO: Inicializar configurações de personalização
function initializeConfiguracoes() {
    const nomeEmpresaInput = document.getElementById('nome-empresa');
    const textoRodapeInput = document.getElementById('texto-rodape');
    
    nomeEmpresaInput.value = configuracoes.nomeEmpresa;
    textoRodapeInput.value = configuracoes.textoRodape;
    
    // Event listeners para salvar automaticamente
    nomeEmpresaInput.addEventListener('input', (e) => {
        configuracoes.nomeEmpresa = e.target.value;
    });
    
    textoRodapeInput.addEventListener('input', (e) => {
        configuracoes.textoRodape = e.target.value;
        updateRodape();
    });
}

// NOVO: Atualizar rodapé global
function updateRodape() {
    const rodapeElement = document.getElementById('rodape-texto');
    if (rodapeElement) {
        rodapeElement.textContent = configuracoes.textoRodape;
    }
}

// Tab management
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
            
            // Initialize charts when switching to relevant tabs
            if (tabName === 'dashboard') {
                setTimeout(initializeDashboardChart, 100);
            } else if (tabName === 'relatorios') {
                setTimeout(initializeRelatoriosCharts, 100);
            }
        });
    });
    
    // Initialize dashboard chart on load
    setTimeout(initializeDashboardChart, 100);
}

// Time selector initialization
function initializeTimeSelect() {
    const timeSelect = document.getElementById('time-select');
    for (let hour = 11; hour <= 18; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = timeString;
            option.textContent = timeString;
            timeSelect.appendChild(option);
        }
    }
}

// Modal management
function initializeModals() {
    // Time editor modal
    const timeModal = document.getElementById('time-editor-modal');
    const timeCloseBtn = timeModal.querySelector('.modal-close');
    const timeCancelBtn = document.getElementById('cancel-time-edit');
    const timeConfirmBtn = document.getElementById('confirm-time-edit');
    
    timeCloseBtn.addEventListener('click', closeTimeEditor);
    timeCancelBtn.addEventListener('click', closeTimeEditor);
    timeConfirmBtn.addEventListener('click', confirmTimeEdit);
    
    timeModal.addEventListener('click', (e) => {
        if (e.target === timeModal) {
            closeTimeEditor();
        }
    });

    // Remove employee modal
    const removeModal = document.getElementById('remove-employee-modal');
    const removeCloseBtn = removeModal.querySelector('.modal-close');
    const removeCancelBtn = document.getElementById('cancel-remove');
    const removeConfirmBtn = document.getElementById('confirm-remove');
    
    removeCloseBtn.addEventListener('click', closeRemoveEmployee);
    removeCancelBtn.addEventListener('click', closeRemoveEmployee);
    removeConfirmBtn.addEventListener('click', confirmRemoveEmployee);
    
    removeModal.addEventListener('click', (e) => {
        if (e.target === removeModal) {
            closeRemoveEmployee();
        }
    });
}

function openTimeEditor(funcionarioNome, tipoPausa) {
    const funcionario = funcionarios.find(f => f.nome === funcionarioNome);
    if (!funcionario) return;
    
    editingTimeData = { funcionarioNome, tipoPausa };
    const currentTime = funcionario.pausas[tipoPausa].horario;
    
    document.getElementById('time-select').value = currentTime;
    document.getElementById('time-editor-modal').classList.remove('hidden');
}

function closeTimeEditor() {
    document.getElementById('time-editor-modal').classList.add('hidden');
    editingTimeData = null;
}

function confirmTimeEdit() {
    if (!editingTimeData) return;
    
    const newTime = document.getElementById('time-select').value;
    const funcionario = funcionarios.find(f => f.nome === editingTimeData.funcionarioNome);
    
    if (funcionario) {
        funcionario.pausas[editingTimeData.tipoPausa].horario = newTime;
        renderFuncionariosList();
        renderCronogramaPausas();
        updateDashboard();
    }
    
    closeTimeEditor();
}

// Remove employee functions
function openRemoveEmployee() {
    const funcionarioSelect = document.getElementById('funcionario-select');
    funcionarioSelect.innerHTML = '<option value="">Selecione um funcionário</option>';
    
    const sortedFuncionarios = getSortedFuncionarios();
    sortedFuncionarios.forEach(funcionario => {
        const option = document.createElement('option');
        option.value = funcionario.nome;
        option.textContent = `${funcionario.nome} (${funcionario.turno})`;
        funcionarioSelect.appendChild(option);
    });
    
    document.getElementById('remove-employee-modal').classList.remove('hidden');
}

function closeRemoveEmployee() {
    document.getElementById('remove-employee-modal').classList.add('hidden');
}

function confirmRemoveEmployee() {
    const funcionarioNome = document.getElementById('funcionario-select').value;
    if (!funcionarioNome) return;
    
    // Remove from funcionarios array
    const index = funcionarios.findIndex(f => f.nome === funcionarioNome);
    if (index !== -1) {
        funcionarios.splice(index, 1);
        
        // Remove any active timers for this employee
        Object.keys(timers).forEach(key => {
            if (key.includes(funcionarioNome)) {
                delete timers[key];
            }
        });
        
        // Remove from active pauses
        pausasAtivas = pausasAtivas.filter(p => p.funcionario !== funcionarioNome);
        
        // Re-render all components
        renderFuncionariosList();
        renderPresencaList();
        renderEscalaTable();
        renderCronogramaPausas();
        renderFuncionariosCadastrados();
        updateDashboard();
        
        // Update charts if visible
        if (coberturaChart) initializeDashboardChart();
        if (distribuicaoChart) initializeDistribuicaoChart();
    }
    
    closeRemoveEmployee();
}

// Function to sort employees by earliest break time
function getSortedFuncionarios() {
    return [...funcionarios].sort((a, b) => {
        const timeA = Math.min(
            timeToMinutes(a.pausas.manha.horario),
            timeToMinutes(a.pausas.almoco.horario),
            timeToMinutes(a.pausas.tarde.horario)
        );
        const timeB = Math.min(
            timeToMinutes(b.pausas.manha.horario),
            timeToMinutes(b.pausas.almoco.horario),
            timeToMinutes(b.pausas.tarde.horario)
        );
        return timeA - timeB;
    });
}

// Render functions list for pause control
function renderFuncionariosList() {
    const container = document.getElementById('funcionarios-list');
    container.innerHTML = '';
    
    const sortedFuncionarios = getSortedFuncionarios();
    
    sortedFuncionarios.forEach(funcionario => {
        const item = document.createElement('div');
        item.className = 'funcionario-item';
        
        item.innerHTML = `
            <div class="funcionario-nome">${funcionario.nome}</div>
            <div class="pausa-control">
                <input type="checkbox" id="manha-${funcionario.nome}" 
                       ${funcionario.pausas.manha.realizada ? 'checked' : ''}>
                <label for="manha-${funcionario.nome}">Manhã</label>
                <span class="pausa-horario" onclick="openTimeEditor('${funcionario.nome}', 'manha')">
                    ${funcionario.pausas.manha.horario}
                </span>
                <span class="timer-display" id="timer-manha-${funcionario.nome}"></span>
            </div>
            <div class="pausa-control">
                <input type="checkbox" id="almoco-${funcionario.nome}" 
                       ${funcionario.pausas.almoco.realizada ? 'checked' : ''}>
                <label for="almoco-${funcionario.nome}">Almoço</label>
                <span class="pausa-horario" onclick="openTimeEditor('${funcionario.nome}', 'almoco')">
                    ${funcionario.pausas.almoco.horario}
                </span>
                <span class="timer-display" id="timer-almoco-${funcionario.nome}"></span>
            </div>
            <div class="pausa-control">
                <input type="checkbox" id="tarde-${funcionario.nome}" 
                       ${funcionario.pausas.tarde.realizada ? 'checked' : ''}>
                <label for="tarde-${funcionario.nome}">Tarde</label>
                <span class="pausa-horario" onclick="openTimeEditor('${funcionario.nome}', 'tarde')">
                    ${funcionario.pausas.tarde.horario}
                </span>
                <span class="timer-display" id="timer-tarde-${funcionario.nome}"></span>
            </div>
        `;
        
        container.appendChild(item);
        
        // Add event listeners for checkboxes
        ['manha', 'almoco', 'tarde'].forEach(tipo => {
            const checkbox = document.getElementById(`${tipo}-${funcionario.nome}`);
            checkbox.addEventListener('change', (e) => {
                funcionario.pausas[tipo].realizada = e.target.checked;
                if (e.target.checked) {
                    // Start timer
                    const duration = tipo === 'almoco' ? 63 : 13;
                    const expiration = new Date(Date.now() + duration * 60000);
                    const pausaAtiva = {
                        funcionario: funcionario.nome,
                        tipo: tipo,
                        inicio: new Date(),
                        expiracao: expiration,
                        duracao: duration
                    };
                    pausasAtivas.push(pausaAtiva);
                    
                    // Start timer countdown
                    const timerKey = `${tipo}-${funcionario.nome}`;
                    timers[timerKey] = {
                        inicio: new Date(),
                        duracao: duration,
                        ativo: true
                    };
                } else {
                    // Remove from active pauses and timers
                    pausasAtivas = pausasAtivas.filter(p => 
                        !(p.funcionario === funcionario.nome && p.tipo === tipo)
                    );
                    const timerKey = `${tipo}-${funcionario.nome}`;
                    delete timers[timerKey];
                    document.getElementById(`timer-${timerKey}`).textContent = '';
                }
                updateDashboard();
                renderPausasStatus();
            });
        });
    });
    
    renderPausasStatus();
}

// Update timers display
function updateTimers() {
    Object.keys(timers).forEach(timerKey => {
        const timer = timers[timerKey];
        if (!timer.ativo) return;
        
        const now = new Date();
        const elapsed = Math.floor((now - timer.inicio) / 1000);
        const totalSeconds = timer.duracao * 60;
        const remaining = Math.max(0, totalSeconds - elapsed);
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElement = document.getElementById(`timer-${timerKey}`);
        if (timerElement) {
            if (remaining > 0) {
                timerElement.textContent = `Tempo: ${timeString}`;
                timerElement.classList.remove('expired');
            } else {
                timerElement.textContent = 'EXPIRADO';
                timerElement.classList.add('expired');
                timer.ativo = false;
            }
        }
    });
}

function renderPausasStatus() {
    const container = document.getElementById('pausas-status');
    container.innerHTML = '';
    
    const sortedFuncionarios = getSortedFuncionarios();
    
    sortedFuncionarios.forEach(funcionario => {
        ['manha', 'almoco', 'tarde'].forEach(tipo => {
            const pausa = funcionario.pausas[tipo];
            const item = document.createElement('div');
            item.className = 'status-item';
            
            item.innerHTML = `
                <div class="status-indicator ${pausa.realizada ? 'realizada' : 'pendente'}"></div>
                <span>${funcionario.nome} - ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</span>
            `;
            
            container.appendChild(item);
        });
    });
}

// Render presence list - NOVO: Com status colorido
function renderPresencaList() {
    const container918 = document.getElementById('presenca-9-18');
    const container1120 = document.getElementById('presenca-11-20');
    
    container918.innerHTML = '';
    container1120.innerHTML = '';
    
    const sortedFuncionarios = getSortedFuncionarios();
    
    sortedFuncionarios.forEach(funcionario => {
        const item = document.createElement('div');
        item.className = 'presenca-item';
        
        item.innerHTML = `
            <input type="checkbox" id="presenca-${funcionario.nome}" ${funcionario.presente ? 'checked' : ''}>
            <label for="presenca-${funcionario.nome}" class="${funcionario.presente ? 'presente' : 'ausente'}">
                ${funcionario.nome}
            </label>
        `;
        
        const checkbox = item.querySelector('input');
        const label = item.querySelector('label');
        
        checkbox.addEventListener('change', (e) => {
    funcionario.presente = e.target.checked;
    label.className = funcionario.presente ? 'presente' : 'ausente';
    updatePresencaCounter();
    updateDashboard();
    renderEscalaTable(); // ADICIONE ESTA LINHA
});

        
        if (funcionario.turno === '9h-18h') {
            container918.appendChild(item);
        } else {
            container1120.appendChild(item);
        }
    });
    
    updatePresencaCounter(); // NOVO: Atualizar contador inicial
}

// NOVO: Atualizar contador de presença
function updatePresencaCounter() {
    const presentes = funcionarios.filter(f => f.presente).length;
    const ausentes = funcionarios.length - presentes;
    
    const counterElement = document.getElementById('presenca-counter');
    if (counterElement) {
        counterElement.textContent = `Presentes: ${presentes} | Ausentes: ${ausentes}`;
    }
}

// VERSÃO SIMPLIFICADA - apenas Nome e Status
function renderEscalaTable() {
    const tbody = document.getElementById('escala-tbody');
    tbody.innerHTML = '';
    
    const sortedFuncionarios = getSortedFuncionarios();
    
    // Uma linha por funcionário
    sortedFuncionarios.forEach(funcionario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionario.nome}</td>
            <td>
                <span class="${funcionario.presente ? 'status-presente' : 'status-ausente'}">
                    ${funcionario.presente ? 'PRESENTE' : 'AUSENTE'}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}


// NOVO: Render lista de funcionários cadastrados
function renderFuncionariosCadastrados() {
    const container = document.getElementById('lista-funcionarios-cadastrados');
    container.innerHTML = '';
    
    const sortedFuncionarios = getSortedFuncionarios();
    
    sortedFuncionarios.forEach(funcionario => {
        const item = document.createElement('div');
        item.className = 'funcionario-cadastrado';
        
        item.innerHTML = `
            <span>${funcionario.nome}</span>
            <span>${funcionario.turno}</span>
        `;
        
        container.appendChild(item);
    });
}

// Render timeline for pause schedule
function renderCronogramaPausas() {
    const container = document.getElementById('timeline-content');
    container.innerHTML = '';
    
    const sortedFuncionarios = getSortedFuncionarios();
    
    sortedFuncionarios.forEach(funcionario => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'funcionario-timeline';
        
        timelineItem.innerHTML = `
            <div class="funcionario-timeline-nome">${funcionario.nome}</div>
        `;
        
        // Add pause slots in timeline
        for (let hour = 11; hour <= 18; hour++) {
            const slot = document.createElement('div');
            slot.className = 'timeline-slot';
            
            // Check if any pause falls in this hour
            ['manha', 'almoco', 'tarde'].forEach(tipo => {
                const pausaHour = parseInt(funcionario.pausas[tipo].horario.split(':')[0]);
                if (pausaHour === hour) {
                    const pausaSlot = document.createElement('div');
                    pausaSlot.className = `pausa-slot ${tipo}`;
                    pausaSlot.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
                    slot.appendChild(pausaSlot);
                }
            });
            
            timelineItem.appendChild(slot);
        }
        
        container.appendChild(timelineItem);
    });
}

// Utility function to convert time to minutes
function timeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}

// Dashboard updates
function updateDashboard() {
    const funcionariosOnline = funcionarios.filter(f => f.presente).length;
    const totalFuncionarios = funcionarios.length;
    const pausasAtivasCount = pausasAtivas.length;
    const cobertura = Math.round((funcionariosOnline - pausasAtivasCount) / totalFuncionarios * 100);
    
    document.getElementById('funcionarios-online').textContent = funcionariosOnline;
    document.getElementById('total-funcionarios').textContent = totalFuncionarios;
    document.getElementById('pausas-ativas').textContent = pausasAtivasCount;
    document.getElementById('cobertura-atual').textContent = cobertura + '%';
    
    // Update shift counts
    const turno918 = funcionarios.filter(f => f.turno === '9h-18h' && f.presente).length;
    const turno1120 = funcionarios.filter(f => f.turno === '11h-20h' && f.presente).length;
    
    document.getElementById('turno-9-18').textContent = turno918;
    document.getElementById('turno-11-20').textContent = turno1120;
    
    // Update pause summary
    const pausasManha = funcionarios.filter(f => f.pausas.manha.realizada).length;
    const pausasAlmoco = funcionarios.filter(f => f.pausas.almoco.realizada).length;
    const pausasTarde = funcionarios.filter(f => f.pausas.tarde.realizada).length;
    
    document.getElementById('pausas-manha').textContent = pausasManha;
    document.getElementById('pausas-almoco').textContent = pausasAlmoco;
    document.getElementById('pausas-tarde').textContent = pausasTarde;
    
    // Update reports stats
    document.getElementById('stat-total').textContent = totalFuncionarios;
    document.getElementById('stat-9-18').textContent = funcionarios.filter(f => f.turno === '9h-18h').length;
    document.getElementById('stat-11-20').textContent = funcionarios.filter(f => f.turno === '11h-20h').length;
    document.getElementById('stat-presentes').textContent = funcionariosOnline;
    document.getElementById('stat-pausa-agora').textContent = pausasAtivasCount;
    document.getElementById('stat-cobertura').textContent = cobertura + '%';
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR');
    document.getElementById('last-update-time').textContent = timeString;
}

// Check and handle pause expiration
function checkPausaExpiration() {
    const now = new Date();
    pausasAtivas = pausasAtivas.filter(pausa => {
        if (pausa.expiracao <= now) {
            return false;
        }
        return true;
    });
    updateDashboard();
}

// ALTERADO: Chart initialization - SEMPRE 9h às 20h
function initializeDashboardChart() {
    const ctx = document.getElementById('coberturaChart');
    if (!ctx) return;
    
    if (coberturaChart) {
        coberturaChart.destroy();
    }
    
    // Generate coverage data for 9h-20h only
    const labels = [];
    const data = [];
    
    for (let i = 9; i <= 20; i++) {
        labels.push(`${i.toString().padStart(2, '0')}:00`);
        
        // Calculate coverage based on shifts and current presence
        let coverage = 0;
        if (i >= 9 && i < 18) {
            coverage += funcionarios.filter(f => f.turno === '9h-18h' && f.presente).length;
        }
        if (i >= 11 && i < 20) {
            coverage += funcionarios.filter(f => f.turno === '11h-20h' && f.presente).length;
        }
        
        // Add some variation
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
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25
                }
            }
        }
    });
}

function initializeRelatoriosCharts() {
    initializeCoberturaRelatorioChart();
    initializeDistribuicaoChart();
}

function initializeCoberturaRelatorioChart() {
    const ctx = document.getElementById('coberturaRelatorioChart');
    if (!ctx) return;
    
    if (coberturaRelatorioChart) {
        coberturaRelatorioChart.destroy();
    }
    
    // Same data as dashboard chart - 9h às 20h
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
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25
                }
            }
        }
    });
}

function initializeDistribuicaoChart() {
    const ctx = document.getElementById('distribuicaoChart');
    if (!ctx) return;
    
    if (distribuicaoChart) {
        distribuicaoChart.destroy();
    }
    
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
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function renderRelatorios() {
    updateDashboard();
}

// ALTERADO: Add funcionario functionality - usando novos campos de horário
document.getElementById('adicionar-funcionario')?.addEventListener('click', function() {
    const nome = document.getElementById('novo-nome').value.trim();
    const entrada = document.getElementById('horario-entrada').value;
    const saida = document.getElementById('horario-saida').value;
    
    if (nome && entrada && saida) {
        // Determinar turno baseado nos horários
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
        
        // Clear form
        document.getElementById('novo-nome').value = '';
        
        // Re-render components
        renderFuncionariosList();
        renderPresencaList();
        renderEscalaTable();
        renderCronogramaPausas();
        renderFuncionariosCadastrados(); // NOVO
        updateDashboard();
        
        // Update charts if visible
        if (coberturaChart) initializeDashboardChart();
        if (distribuicaoChart) initializeDistribuicaoChart();
    }
});

// Remove funcionario functionality
document.getElementById('remover-funcionario')?.addEventListener('click', function() {
    openRemoveEmployee();
});