const medicationDatabase = {
    "paracetamol": {
        formulation: {
            "Paracetamol": "500mg",
            "Amido": "100mg",
            "Ácido Esteárico": "50mg"
        },
        indication: "Indicado para alívio de dores leves a moderadas e para febre.",
        contraindications: "Contraindicado em casos de insuficiência hepática grave e alergia ao paracetamol."
    },
    "dipirona": {
        formulation: {
            "Dipirona Sódica": "500mg",
            "Amido": "150mg",
            "Álcool Polivinílico": "50mg"
        },
        indication: "Utilizado para aliviar dores intensas e febre.",
        contraindications: "Contraindicado em pessoas com hipersensibilidade à dipirona, problemas hepáticos ou renais graves, e por mulheres grávidas (principalmente no primeiro trimestre)."
    },
    "ibuprofeno": {
        formulation: {
            "Ibuprofeno": "200mg",
            "Lactose": "100mg",
            "Celulose": "50mg"
        },
        indication: "Indicado para tratamento de inflamações, febre e dores leves a moderadas.",
        contraindications: "Contraindicado em casos de úlcera gástrica ativa, insuficiência renal grave, e durante o terceiro trimestre da gravidez."
    },
    "amoxicilina": {
        formulation: {
            "Amoxicilina": "500mg",
            "Ácido Clavulânico": "125mg"
        },
        indication: "Indicado no tratamento de infecções bacterianas como infecções do trato respiratório, urinário e otite.",
        contraindications: "Contraindicado em caso de hipersensibilidade à amoxicilina e em pacientes com história de icterícia ou disfunção hepática."
    },
    "losartana": {
        formulation: {
            "Losartana Potássica": "50mg",
            "Celulose Microcristalina": "100mg"
        },
        indication: "Indicado para o tratamento da hipertensão arterial e insuficiência cardíaca.",
        contraindications: "Contraindicado em mulheres grávidas, pacientes com estenose bilateral da artéria renal e em pessoas com hipersensibilidade a qualquer componente da fórmula."
    },
    "lansoprazol": {
        formulation: {
            "Lansoprazol": "30mg",
            "Celulose Microcristalina": "50mg"
        },
        indication: "Indicado para tratamento de refluxo gastroesofágico, úlceras gástricas e dispepsia.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade ao lansoprazol e durante a gravidez, a menos que seja estritamente necessário."
    },
    "omeprazol": {
        formulation: {
            "Omeprazol": "20mg",
            "Lactose": "100mg"
        },
        indication: "Indicado para tratamento de úlceras gástricas, refluxo gastroesofágico e outras condições relacionadas ao aumento de ácido estomacal.",
        contraindications: "Contraindicado em casos de hipersensibilidade ao omeprazol e em pacientes com problemas hepáticos graves."
    },
    "atorvastatina": {
        formulation: {
            "Atorvastatina Cálcica": "20mg",
            "Celulose Microcristalina": "100mg"
        },
        indication: "Indicado para controle de colesterol alto e prevenção de doenças cardíacas.",
        contraindications: "Contraindicado em pacientes com doenças hepáticas ativas ou grávidas."
    },
    "cloridrato-de-sertralina": {
        formulation: {
            "Cloridrato de Sertralina": "50mg",
            "Lactose": "100mg"
        },
        indication: "Indicado para o tratamento de transtornos de ansiedade, depressão e transtorno obsessivo-compulsivo (TOC).",
        contraindications: "Contraindicado em pacientes com hipersensibilidade à sertralina e durante a gravidez, a menos que seja estritamente necessário."
    },
    "fluoxetina": {
        formulation: {
            "Fluoxetina": "20mg",
            "Celulose Microcristalina": "50mg"
        },
        indication: "Indicado no tratamento de depressão, transtornos de ansiedade, TOC, entre outros.",
        contraindications: "Contraindicado em pacientes com histórico de hipersensibilidade à fluoxetina e em mulheres grávidas, especialmente no primeiro trimestre."
    },
    "venlafaxina": {
        formulation: {
            "Venlafaxina": "75mg",
            "Lactose": "100mg"
        },
        indication: "Utilizado no tratamento de transtornos depressivos e de ansiedade.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade à venlafaxina e em mulheres grávidas sem orientação médica."
    },
    "metformina": {
        formulation: {
            "Metformina": "500mg",
            "Celulose Microcristalina": "100mg"
        },
        indication: "Indicado no tratamento de diabetes tipo 2, especialmente em pacientes com sobrepeso.",
        contraindications: "Contraindicado em casos de insuficiência renal grave e em pacientes com acido-lactia."
    },
    "hidroxicloroquina": {
        formulation: {
            "Hidroxicloroquina": "200mg",
            "Lactose": "50mg"
        },
        indication: "Indicado no tratamento de doenças autoimunes como lupus eritematoso sistêmico e malária.",
        contraindications: "Contraindicado em pacientes com problemas oculares graves, especialmente retinopatias."
    },   
    "dipirona-sódica": {
        formulation: {
            "Dipirona Sódica": "500mg",
            "Amido": "100mg"
        },
        indication: "Usado para alívio de dores agudas e febre.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade à dipirona e doenças hematológicas."
    },
    "pantoprazol": {
        formulation: {
            "Pantoprazol": "40mg",
            "Celulose Microcristalina": "50mg"
        },
        indication: "Tratamento de úlceras gástricas e refluxo gastroesofágico.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade ao pantoprazol."
    },
    "furosemida": {
        formulation: {
            "Furosemida": "40mg",
            "Lactose": "50mg"
        },
        indication: "Indicado para tratamento de edemas e insuficiência cardíaca congestiva.",
        contraindications: "Contraindicado em casos de anúria e hipocalemia."
    },
    "dexametasona": {
        formulation: {
            "Dexametasona": "4mg",
            "Lactose": "100mg"
        },
        indication: "Indicado para tratar inflamações graves e alergias.",
        contraindications: "Contraindicado em pacientes com infecções fúngicas sistêmicas."
    },
    "celecoxibe": {
        formulation: {
            "Celecoxibe": "200mg",
            "Celulose Microcristalina": "50mg"
        },
        indication: "Utilizado para tratamento de artrite e dor aguda.",
        contraindications: "Contraindicado em pacientes com histórico de úlceras gástricas e insuficiência renal."
    },
    "citalopram": {
        formulation: {
            "Citalopram": "20mg",
            "Lactose": "100mg"
        },
        indication: "Tratamento de depressão e transtornos de ansiedade.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade ao citalopram."
    },
    "clonazepam": {
        formulation: {
            "Clonazepam": "2mg",
            "Celulose Microcristalina": "100mg"
        },
        indication: "Utilizado no tratamento de distúrbios de ansiedade e epilepsia.",
        contraindications: "Contraindicado em pacientes com glaucoma agudo e depressão respiratória."
    },
    "simvastatina": {
        formulation: {
            "Simvastatina": "20mg",
            "Lactose": "100mg"
        },
        indication: "Indicado para controle de colesterol elevado e prevenção de doenças cardiovasculares.",
        contraindications: "Contraindicado em pacientes com doenças hepáticas e gravidez."
    },
    "ciprofloxacino": {
        formulation: {
            "Ciprofloxacino": "500mg",
            "Amido": "100mg"
        },
        indication: "Indicado no tratamento de infecções bacterianas.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade à ciprofloxacina e gestantes."
    },
    "loratadina": {
        formulation: {
            "Loratadina": "10mg",
            "Amido": "100mg"
        },
        indication: "Usado no alívio de sintomas de alergia como rinite e urticária.",
        contraindications: "Contraindicado em pacientes com hipersensibilidade à loratadina."
    },
    "metoprolol": {
        formulation: {
            "Metoprolol": "50mg",
            "Celulose Microcristalina": "100mg"
        },
        indication: "Indicado para tratamento de hipertensão e insuficiência cardíaca.",
        contraindications: "Contraindicado em casos de bradicardia grave e insuficiência cardíaca descompensada."
    },
    "betametasona": {
        formulation: {
            "Betametasona": "0.5mg",
            "Amido": "50mg"
        },
        indication: "Utilizado no tratamento de doenças autoimunes e inflamatórias.",
        contraindications: "Contraindicado em infecções fúngicas e virais."
    },
    "prednisona": {
        formulation: {
            "Prednisona": "20mg",
            "Lactose": "50mg"
        },
        indication: "Indicado no tratamento de doenças autoimunes e inflamações graves.",
        contraindications: "Contraindicado em infecções sistêmicas e úlceras gástricas."
    },
    "hidralazina": {
        formulation: {
            "Hidralazina": "25mg",
            "Lactose": "50mg"
        },
        indication: "Usado no tratamento de hipertensão e insuficiência cardíaca.",
        contraindications: "Contraindicado em casos de hipotensão grave."
    }
};



function getFormulation() {
    const userInput = document.getElementById('user-input').value.toLowerCase().trim();
    if (userInput === "") return;

    addMessage(userInput, 'user-message');

    const medicationInfo = getMedicationInfo(userInput);
    addMessage(medicationInfo, 'bot-message');

    document.getElementById('user-input').value = '';
}

function addMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getMedicationInfo(medicine) {
    if (medicationDatabase[medicine]) {
        let result = `Informações sobre o medicamento ${medicine.charAt(0).toUpperCase() + medicine.slice(1)}:\n\n`;

        result += `**Formulação:**\n`;
        for (let component in medicationDatabase[medicine].formulation) {
            result += `${component}: ${medicationDatabase[medicine].formulation[component]}\n`;
        }

        result += `\n**Indicação:** ${medicationDatabase[medicine].indication}\n`;

        result += `\n**Contraindicações:** ${medicationDatabase[medicine].contraindications}\n`;

        return result;
    } else {
        return "Desculpe, não encontrei informações sobre esse medicamento. Tente novamente.";
    }
}

function clearChat() {
    const chatBox = document.getElementById('chat-box');

    chatBox.innerHTML = '<div class="message bot-message"><h3>Digite o nome de um medicamento:</h3></div>';
}
