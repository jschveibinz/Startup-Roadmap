const roadmapData = {
    governance: {
        1: [
            { text: "Form founding team", url: "#" },
            { text: "Incorporate entity", url: "#" },
            { text: "Establish basic board", url: "#" },
            { text: "Create initial business plan", url: "#" }
        ],
        2: [
            { text: "Add first outside board member", url: "#" },
            { text: "Form scientific advisory board", url: "#" },
            { text: "Develop medium-term strategic plan", url: "#" },
            { text: "Create milestone-based roadmap", url: "#" }
        ],
        3: [
            { text: "Formalize board processes", url: "#" },
            { text: "Add industry experts to board", url: "#" },
            { text: "Develop formal governance policies", url: "#" },
            { text: "Create 3-5 year strategic plan", url: "#" }
        ],
        4: [
            { text: "Transition to professional board", url: "#" },
            { text: "Implement board committees", url: "#" },
            { text: "Develop succession planning", url: "#" },
            { text: "Create long-term vision and strategy", url: "#" }
        ]
    },
    management: {
        1: [
            { text: "Define founder roles & responsibilities", url: "#" },
            { text: "Establish decision-making framework", url: "#" },
            { text: "Create basic organizational structure", url: "#" },
            { text: "Define company mission & values", url: "#" }
        ],
        2: [
            { text: "Hire first COO or Operations Director", url: "#" },
            { text: "Implement weekly management meetings", url: "#" },
            { text: "Create basic reporting templates", url: "#" },
            { text: "Define key performance metrics", url: "#" }
        ],
        3: [
            { text: "Build out VP/Director level positions", url: "#" },
            { text: "Implement department structure", url: "#" },
            { text: "Create management dashboard", url: "#" },
            { text: "Establish leadership development program", url: "#" }
        ],
        4: [
            { text: "Complete executive team", url: "#" },
            { text: "Implement matrix organization", url: "#" },
            { text: "Deploy OKR system", url: "#" },
            { text: "Create global management structure", url: "#" }
        ]
    },
    rd: {
        1: [
            { text: "Negotiate university IP license", url: "#" },
            { text: "Validate academic results", url: "#" },
            { text: "Setup basic lab space", url: "#" },
            { text: "Create development timeline", url: "#" }
        ],
        2: [
            { text: "Develop working prototype", url: "#" },
            { text: "File core patents", url: "#" },
            { text: "Establish quality procedures", url: "#" },
            { text: "Create technical documentation", url: "#" }
        ],
        3: [
            { text: "Scale prototype to pilot", url: "#" },
            { text: "Optimize for manufacturing", url: "#" },
            { text: "Implement stage-gate process", url: "#" },
            { text: "Begin product line expansion", url: "#" }
        ],
        4: [
            { text: "Establish R&D department", url: "#" },
            { text: "Create innovation pipeline", url: "#" },
            { text: "Develop platform strategy", url: "#" },
            { text: "Setup global R&D centers", url: "#" }
        ]
    },
    market: {
        1: [
            { text: "Conduct market analysis", url: "#" },
            { text: "Interview potential customers", url: "#" },
            { text: "Define value proposition", url: "#" },
            { text: "Identify market segments", url: "#" }
        ],
        2: [
            { text: "Secure beta customers", url: "#" },
            { text: "Validate pricing model", url: "#" },
            { text: "Create customer personas", url: "#" },
            { text: "Develop market entry strategy", url: "#" }
        ],
        3: [
            { text: "Launch market research program", url: "#" },
            { text: "Implement feedback systems", url: "#" },
            { text: "Create product marketing", url: "#" },
            { text: "Define market expansion plan", url: "#" }
        ],
        4: [
            { text: "Enter international markets", url: "#" },
            { text: "Launch product variants", url: "#" },
            { text: "Create market intelligence unit", url: "#" },
            { text: "Develop ecosystem strategy", url: "#" }
        ]
    },
    legal: {
        1: [
            { text: "Complete IP transfer", url: "#" },
            { text: "File provisional patents", url: "#" },
            { text: "Create legal entity", url: "#" },
            { text: "Draft founder agreements", url: "#" }
        ],
        2: [
            { text: "Convert provisional patents", url: "#" },
            { text: "Create customer contracts", url: "#" },
            { text: "Implement IP strategy", url: "#" },
            { text: "Develop compliance framework", url: "#" }
        ],
        3: [
            { text: "Expand patent portfolio", url: "#" },
            { text: "Create licensing strategy", url: "#" },
            { text: "Implement contract management", url: "#" },
            { text: "Develop international IP", url: "#" }
        ],
        4: [
            { text: "Build legal department", url: "#" },
            { text: "Create patent family", url: "#" },
            { text: "Implement IP monetization", url: "#" },
            { text: "Manage global compliance", url: "#" }
        ]
    },
    sales: {
        1: [
            { text: "Create pitch deck", url: "#" },
            { text: "Define pricing strategy", url: "#" },
            { text: "Identify sales channels", url: "#" },
            { text: "Develop sales materials", url: "#" }
        ],
        2: [
            { text: "Close first sales", url: "#" },
            { text: "Build sales pipeline", url: "#" },
            { text: "Create sales process", url: "#" },
            { text: "Implement basic CRM", url: "#" }
        ],
        3: [
            { text: "Build sales team", url: "#" },
            { text: "Develop channel partners", url: "#" },
            { text: "Create sales operations", url: "#" },
            { text: "Implement support system", url: "#" }
        ],
        4: [
            { text: "Scale sales organization", url: "#" },
            { text: "Expand globally", url: "#" },
            { text: "Create specialized teams", url: "#" },
            { text: "Implement advanced CRM", url: "#" }
        ]
    },
    operations: {
        1: [
            { text: "Setup minimal workspace", url: "#" },
            { text: "Create basic processes", url: "#" },
            { text: "Identify suppliers", url: "#" },
            { text: "Setup IT systems", url: "#" }
        ],
        2: [
            { text: "Establish pilot facility", url: "#" },
            { text: "Create QA/QC processes", url: "#" },
            { text: "Build supplier network", url: "#" },
            { text: "Implement ERP basics", url: "#" }
        ],
        3: [
            { text: "Scale production", url: "#" },
            { text: "Optimize supply chain", url: "#" },
            { text: "Implement ISO standards", url: "#" },
            { text: "Create logistics network", url: "#" }
        ],
        4: [
            { text: "Build production facilities", url: "#" },
            { text: "Create global operations", url: "#" },
            { text: "Implement automation", url: "#" },
            { text: "Optimize efficiency", url: "#" }
        ]
    },
    hr: {
        1: [
            { text: "Create hiring plan", url: "#" },
            { text: "Define roles", url: "#" },
            { text: "Setup payroll", url: "#" },
            { text: "Draft employee handbook", url: "#" }
        ],
        2: [
            { text: "Implement HR processes", url: "#" },
            { text: "Create benefits package", url: "#" },
            { text: "Develop training", url: "#" },
            { text: "Build culture initiatives", url: "#" }
        ],
        3: [
            { text: "Hire HR manager", url: "#" },
            { text: "Create career paths", url: "#" },
            { text: "Implement HRIS", url: "#" },
            { text: "Develop retention strategy", url: "#" }
        ],
        4: [
            { text: "Build HR department", url: "#" },
            { text: "Create global HR", url: "#" },
            { text: "Implement ESOP", url: "#" },
            { text: "Develop talent strategy", url: "#" }
        ]
    },
    finance: {
        1: [
            { text: "Raise seed funding", url: "#" },
            { text: "Setup accounting", url: "#" },
            { text: "Create financial model", url: "#" },
            { text: "Develop budget", url: "#" }
        ],
        2: [
            { text: "Secure Series A", url: "#" },
            { text: "Implement controls", url: "#" },
            { text: "Create board reporting", url: "#" },
            { text: "Develop unit economics", url: "#" }
        ],
        3: [
            { text: "Hire CFO", url: "#" },
            { text: "Implement ERP", url: "#" },
            { text: "Create audit process", url: "#" },
            { text: "Prepare Series B", url: "#" }
        ],
        4: [
            { text: "Build finance team", url: "#" },
            { text: "Create treasury", url: "#" },
            { text: "Implement FP&A", url: "#" },
            { text: "Prepare for exit", url: "#" }
        ]
    },
    external: {
        1: [
            { text: "Build university ties", url: "#" },
            { text: "Create advisor network", url: "#" },
            { text: "Develop investor pitch", url: "#" },
            { text: "Join industry groups", url: "#" }
        ],
        2: [
            { text: "Secure key partners", url: "#" },
            { text: "Build media presence", url: "#" },
            { text: "Create partnership strategy", url: "#" },
            { text: "Develop brand", url: "#" }
        ],
        3: [
            { text: "Build strategic alliances", url: "#" },
            { text: "Create PR function", url: "#" },
            { text: "Develop thought leadership", url: "#" },
            { text: "Build industry influence", url: "#" }
        ],
        4: [
            { text: "Create partner program", url: "#" },
            { text: "Build ecosystem", url: "#" },
            { text: "Develop M&A strategy", url: "#" },
            { text: "Create industry standards", url: "#" }
        ]
    },
    risk: {
        1: [
            { text: "Identify key risks", url: "#" },
            { text: "Create security policy", url: "#" },
            { text: "Define regulatory path", url: "#" },
            { text: "Setup basic compliance", url: "#" }
        ],
        2: [
            { text: "Implement risk controls", url: "#" },
            { text: "Create safety program", url: "#" },
            { text: "Begin certifications", url: "#" },
            { text: "Develop quality system", url: "#" }
        ],
        3: [
            { text: "Create risk framework", url: "#" },
            { text: "Implement ISO compliance", url: "#" },
            { text: "Develop audit program", url: "#" },
            { text: "Create crisis plan", url: "#" }
        ],
        4: [
            { text: "Build risk department", url: "#" },
            { text: "Implement GRC system", url: "#" },
            { text: "Create global compliance", url: "#" },
            { text: "Develop resilience", url: "#" }
        ]
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
    
    // Notice that this mapping logic has been updated to render an anchor (<a>) tag
    panel.innerHTML = `
        <h2>${document.querySelector('.area-btn.active').textContent} - Phase ${currentPhase}</h2>
        <div class="details-content">
            <ul>
                ${data.map(item => `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.text}</a></li>`).join('')}
            </ul>
        </div>
    `;
}

// Initialize the view
updateContent();
