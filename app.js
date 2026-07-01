const roadmapData = {
    governance: {
        1: ["Form founding team", "Incorporate entity", "Establish basic board", "Create initial business plan"],
        2: ["Add first outside board member", "Form scientific advisory board", "Develop medium-term strategic plan", "Create milestone-based roadmap"],
        3: ["Formalize board processes", "Add industry experts to board", "Develop formal governance policies", "Create 3-5 year strategic plan"],
        4: ["Transition to professional board", "Implement board committees", "Develop succession planning", "Create long-term vision and strategy"]
    },
    management: {
        1: ["Define founder roles & responsibilities", "Establish decision-making framework", "Create basic organizational structure", "Define company mission & values"],
        2: ["Hire first COO or Operations Director", "Implement weekly management meetings", "Create basic reporting templates", "Define key performance metrics"],
        3: ["Build out VP/Director level positions", "Implement department structure", "Create management dashboard", "Establish leadership development program"],
        4: ["Complete executive team", "Implement matrix organization", "Deploy OKR system", "Create global management structure"]
    },
    rd: {
        1: ["Negotiate university IP license", "Validate academic results", "Setup basic lab space", "Create development timeline"],
        2: ["Develop working prototype", "File core patents", "Establish quality procedures", "Create technical documentation"],
        3: ["Scale prototype to pilot", "Optimize for manufacturing", "Implement stage-gate process", "Begin product line expansion"],
        4: ["Establish R&D department", "Create innovation pipeline", "Develop platform strategy", "Setup global R&D centers"]
    },
    market: {
        1: ["Conduct market analysis", "Interview potential customers", "Define value proposition", "Identify market segments"],
        2: ["Secure beta customers", "Validate pricing model", "Create customer personas", "Develop market entry strategy"],
        3: ["Launch market research program", "Implement feedback systems", "Create product marketing", "Define market expansion plan"],
        4: ["Enter international markets", "Launch product variants", "Create market intelligence unit", "Develop ecosystem strategy"]
    },
    legal: {
        1: ["Complete IP transfer", "File provisional patents", "Create legal entity", "Draft founder agreements"],
        2: ["Convert provisional patents", "Create customer contracts", "Implement IP strategy", "Develop compliance framework"],
        3: ["Expand patent portfolio", "Create licensing strategy", "Implement contract management", "Develop international IP"],
        4: ["Build legal department", "Create patent family", "Implement IP monetization", "Manage global compliance"]
    },
    sales: {
        1: ["Create pitch deck", "Define pricing strategy", "Identify sales channels", "Develop sales materials"],
        2: ["Close first sales", "Build sales pipeline", "Create sales process", "Implement basic CRM"],
        3: ["Build sales team", "Develop channel partners", "Create sales operations", "Implement support system"],
        4: ["Scale sales organization", "Expand globally", "Create specialized teams", "Implement advanced CRM"]
    },
    operations: {
        1: ["Setup minimal workspace", "Create basic processes", "Identify suppliers", "Setup IT systems"],
        2: ["Establish pilot facility", "Create QA/QC processes", "Build supplier network", "Implement ERP basics"],
        3: ["Scale production", "Optimize supply chain", "Implement ISO standards", "Create logistics network"],
        4: ["Build production facilities", "Create global operations", "Implement automation", "Optimize efficiency"]
    },
    hr: {
        1: ["Create hiring plan", "Define roles", "Setup payroll", "Draft employee handbook"],
        2: ["Implement HR processes", "Create benefits package", "Develop training", "Build culture initiatives"],
        3: ["Hire HR manager", "Create career paths", "Implement HRIS", "Develop retention strategy"],
        4: ["Build HR department", "Create global HR", "Implement ESOP", "Develop talent strategy"]
    },
    finance: {
        1: ["Raise seed funding", "Setup accounting", "Create financial model", "Develop budget"],
        2: ["Secure Series A", "Implement controls", "Create board reporting", "Develop unit economics"],
        3: ["Hire CFO", "Implement ERP", "Create audit process", "Prepare Series B"],
        4: ["Build finance team", "Create treasury", "Implement FP&A", "Prepare for exit"]
    },
    external: {
        1: ["Build university ties", "Create advisor network", "Develop investor pitch", "Join industry groups"],
        2: ["Secure key partners", "Build media presence", "Create partnership strategy", "Develop brand"],
        3: ["Build strategic alliances", "Create PR function", "Develop thought leadership", "Build industry influence"],
        4: ["Create partner program", "Build ecosystem", "Develop M&A strategy", "Create industry standards"]
    },
    risk: {
        1: ["Identify key risks", "Create security policy", "Define regulatory path", "Setup basic compliance"],
        2: ["Implement risk controls", "Create safety program", "Begin certifications", "Develop quality system"],
        3: ["Create risk framework", "Implement ISO compliance", "Develop audit program", "Create crisis plan"],
        4: ["Build risk department", "Implement GRC system", "Create global compliance", "Develop resilience"]
    }
};

let currentPhase = 1;
let currentArea = 'governance';

function showPhase(phase) {
    currentPhase = phase;
    document.querySelectorAll('.phase-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.phase-btn:nth-child(${phase})`).classList.add('active');
    updateContent();
}

function showArea(area) {
    currentArea = area;
    document.querySelectorAll('.area-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showArea('${area}')"]`).classList.add('active');
    updateContent();
}

function updateContent() {
    const panel = document.getElementById('details-panel');
    const data = roadmapData[currentArea]?.[currentPhase] || [];
    
    panel.innerHTML = `
        <h2>${document.querySelector('.area-btn.active').textContent} - Phase ${currentPhase}</h2>
        <div class="details-content">
            <ul>
                ${data.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Initialize the view
updateContent();
