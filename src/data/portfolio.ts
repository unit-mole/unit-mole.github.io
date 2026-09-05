export type CapabilityStage = {
  id: string;
  index: string;
  label: string;
  question: string;
  thesis: string;
  tools: string[];
  evidence: string[];
};

export const capabilityStages: CapabilityStage[] = [
  {
    id: "sources",
    index: "01",
    label: "Source",
    question: "What evidence exists?",
    thesis: "Start with the operating signal: structured records, documents, time-series measurements, images, or public datasets.",
    tools: ["SQL", "Documents", "Sensors", "APIs", "Public datasets"],
    evidence: ["Quality records", "Longitudinal sensor data", "Research and portfolio corpora"],
  },
  {
    id: "trust",
    index: "02",
    label: "Trust",
    question: "Can the input support a claim?",
    thesis: "Make provenance, data quality, leakage boundaries, label integrity, and missingness visible before model selection.",
    tools: ["Pandas", "NumPy", "Data validation", "Label audits", "Point-in-time logic"],
    evidence: ["Participant-safe splits", "Temporal feature controls", "Label-quality review"],
  },
  {
    id: "analysis",
    index: "03",
    label: "Analyze",
    question: "What does the signal say?",
    thesis: "Use statistical analysis and visualization to establish the decision context and the simplest useful baseline.",
    tools: ["Python", "Statistics", "Power BI", "Tableau", "Exploratory analysis"],
    evidence: ["Recurring quality analytics", "KPI reporting", "Research visualization"],
  },
  {
    id: "models",
    index: "04",
    label: "Model",
    question: "Which representation earns complexity?",
    thesis: "Compare classical, ensemble, neural, sequence, vision, and language architectures against the same operating objective.",
    tools: ["scikit-learn", "LightGBM", "PyTorch", "TensorFlow", "Transformers"],
    evidence: ["Calibrated ensembles", "Sequence models", "Transformer systems"],
  },
  {
    id: "evaluation",
    index: "05",
    label: "Evaluate",
    question: "Where does it fail?",
    thesis: "Measure more than headline accuracy: use split design, class-aware metrics, uncertainty, calibration, and error analysis.",
    tools: ["Grouped validation", "Temporal holdouts", "F1 / nDCG", "Calibration", "Bootstrap intervals"],
    evidence: ["Release gates", "Failure review", "Published limitations"],
  },
  {
    id: "integration",
    index: "06",
    label: "Integrate",
    question: "How will people use it?",
    thesis: "Package repeatable inference and connect it to an application, reporting surface, or operational workflow.",
    tools: ["Streamlit", "ONNX", "Docker", "Vercel", "GitHub Actions"],
    evidence: ["Browser inference", "Interactive demos", "Reproducible project releases"],
  },
  {
    id: "decisions",
    index: "07",
    label: "Decide",
    question: "What action becomes clearer?",
    thesis: "Deliver calibrated predictions, grounded answers, simulations, or decision-ready reporting with traceable evidence.",
    tools: ["Dashboards", "Grounded answers", "Simulations", "Executive reporting", "Decision support"],
    evidence: ["Quality intelligence", "Forecasting systems", "Evidence-linked reporting"],
  },
];

export const operatingContexts = [
  {
    organization: "Hach Company",
    role: "Quality Data Scientist",
    period: "2024 — Present",
    mission: "Turn complex quality information into reliable, inspectable decision support.",
    challenge: "Mixed structured and unstructured signals, evolving label patterns, confidentiality boundaries, and unequal costs of model errors.",
    approach: "Develop multi-stage NLP and machine-learning classification, source-grounded knowledge workflows, recurring analytics automation, and business-facing reporting.",
    validation: "Use held-out evaluation, confidence and calibration analysis, acceptance thresholds, failure review, and clear human-review paths.",
    relevance: "Helps quality teams investigate patterns consistently while preserving evidence, limitations, and confidentiality.",
    methods: ["Python", "SQL Server", "Transformers", "LightGBM", "NLP", "Power BI"],
    metrics: [
      { value: "≈50", label: "potential internal users" },
      { value: "2015+", label: "source-history coverage" },
      { value: "10–15s", label: "typical supported answers" },
    ],
    workstreams: [
      {
        name: "GCS predictive classification",
        focus: "multi-stage quality intelligence",
        purpose: "Connect the first classification decision to the downstream quality labels that depend on it.",
        flow: ["Case evidence", "Approved context", "FailureMode", "DefectSymptom / RootCauseFunction", "External validation", "Human review"],
      },
      {
        name: "Recurring operational analytics",
        focus: "automated decision reporting",
        purpose: "Turn recurring quality records into reconciled month-over-month and rolling-window decision signals.",
        flow: ["Quality records", "SQL extraction", "Time alignment", "Delta & rolling analysis", "Reconciliation", "Power BI / owner action"],
      },
      {
        name: "Grounded knowledge support",
        focus: "retrieval and evidence",
        purpose: "Keep answers tied to approved source material, visible evidence, and clear review boundaries.",
        flow: ["Approved sources", "Parsing & metadata", "Context retrieval", "Grounded response", "Evidence & latency checks", "User feedback"],
      },
    ],
    architecture: [
      { label: "Quality evidence", detail: "GCS records, NCN documents, and recurring operational datasets" },
      { label: "Ingestion & contracts", detail: "SQL extraction, document parsing, schemas, and quality rules" },
      { label: "Context engineering", detail: "Product, text, time, and interconnected label relationships" },
      { label: "Intelligence layer", detail: "Hybrid classification, grounded retrieval, and analytical automation" },
      { label: "Validation gates", detail: "Chronological holdout, calibration, error analysis, and confidence thresholds" },
      { label: "Decision surfaces", detail: "Grounded agent, Power BI, and recurring operational reporting" },
      { label: "Feedback & review", detail: "Human review paths, case outcomes, and monitored model behavior" },
    ],
    confidentiality: "Public description intentionally excludes internal data, private infrastructure, proprietary methods, and protected metrics.",
  },
  {
    organization: "University of Arizona College of Nursing",
    role: "Machine Learning Research Assistant",
    period: "2023 — 2024",
    mission: "Study predictive patterns in longitudinal wearable-sensor data through reproducible research workflows.",
    challenge: "Participant dependence, missingness, temporal structure, limited research samples, and the need to avoid clinical overclaiming.",
    approach: "Compared classical, recurrent, convolutional, autoencoder, and statistical time-series methods under a shared experimental design.",
    validation: "Used participant-aware evaluation, consistent preprocessing, model comparison, and comparative error review.",
    relevance: "Produced research evidence for a narrower labor-prediction window while preserving the work's non-clinical status.",
    methods: ["Python", "LSTM", "BiLSTM", "CNN", "Autoencoders", "Time series"],
    metrics: [
      { value: "≈135", label: "research participants" },
      { value: "14d → ≈1d", label: "refined research window" },
      { value: "5+", label: "model families compared" },
    ],
    workstreams: [
      {
        name: "Wearable sequence research",
        focus: "longitudinal modeling",
        purpose: "Compare temporal representations under a consistent participant-aware research design.",
        flow: ["Wearable signals", "Participant-safe preparation", "Temporal windows", "Sequence models", "Comparative validation", "Non-clinical interpretation"],
      },
      {
        name: "Reproducible research workflow",
        focus: "shared experimental evidence",
        purpose: "Make extraction, preparation, comparison, and interdisciplinary review repeatable.",
        flow: ["SQL extraction", "Data contracts", "Shared preprocessing", "Experiment matrix", "Results package", "Research review"],
      },
    ],
    architecture: [
      { label: "Wearable signals", detail: "Per-second and minute-level longitudinal temperature observations" },
      { label: "SQL extraction", detail: "Participant-linked data retrieval and reproducible research datasets" },
      { label: "Temporal preparation", detail: "Cleaning, normalization, feature engineering, and missingness review" },
      { label: "Sequence design", detail: "Windows and temporal representations aligned to the research question" },
      { label: "Model comparison", detail: "SVM, LSTM, BiLSTM, CNN, autoencoder, and statistical baselines" },
      { label: "Research validation", detail: "Participant-aware evaluation and comparative error analysis" },
      { label: "Interpretation", detail: "Non-clinical findings, limitations, and interdisciplinary communication" },
    ],
    confidentiality: "Presented as research methodology and technical scope; no participant-level data is exposed.",
  },
  {
    organization: "Orange Business Services",
    role: "Network Operations Center Engineer",
    period: "2019 — 2022",
    mission: "Turn high-volume network telemetry into faster fault investigation, reliability insight, and operational action.",
    challenge: "Large daily signal volumes, recurring incidents, service-impact risk, and multiple Cisco and Juniper environments.",
    approach: "Combined network troubleshooting with Python, SQL, anomaly analysis, recurring automation, and KPI dashboards.",
    validation: "Reviewed historical incident patterns, operational outcomes, dashboard consistency, and an internal predictive proof of concept.",
    relevance: "Established the systems discipline, escalation judgment, and operational context that now inform applied AI delivery.",
    methods: ["Python", "SQL", "Tableau", "Cisco", "Juniper", "Anomaly analysis"],
    metrics: [
      { value: "10,000+", label: "metrics monitored daily" },
      { value: "≈85%", label: "internal POC accuracy" },
      { value: "5+", label: "critical KPIs visualized" },
    ],
    workstreams: [
      {
        name: "Network incident intelligence",
        focus: "reliability operations",
        purpose: "Move from high-volume telemetry to evidence-led investigation, prioritization, and restoration.",
        flow: ["Network telemetry", "Signal correlation", "Incident context", "Root-cause investigation", "KPI visibility", "Escalation & restoration"],
      },
      {
        name: "Operational reporting automation",
        focus: "repeatable service analytics",
        purpose: "Standardize recurring preparation and KPI checks before information reaches operations teams.",
        flow: ["Recurring metrics", "Python / SQL", "Quality checks", "KPI calculations", "Tableau reporting", "Service decisions"],
      },
    ],
    architecture: [
      { label: "Network telemetry", detail: "Performance metrics, alarms, incidents, equipment, and service events" },
      { label: "Data preparation", detail: "Python and SQL extraction, validation, correlation, and recurring automation" },
      { label: "Fault context", detail: "Device, incident history, time patterns, and operational impact" },
      { label: "Analytical layer", detail: "Anomaly investigation, root-cause analysis, and predictive POC" },
      { label: "Evidence review", detail: "Historical behavior, operational outcomes, and model evaluation" },
      { label: "KPI visibility", detail: "Tableau dashboards for health, incidents, and equipment availability" },
      { label: "Operational action", detail: "Prioritization, escalation, carrier coordination, and restoration feedback" },
    ],
    confidentiality: "Public summary is limited to role scope and the metrics already stated on the professional profile.",
  },
] as const;

export const systemLifecycle = [
  { label: "Data contract", detail: "Define provenance, schema, quality rules, and leakage boundaries.", gate: "Input trusted" },
  { label: "Representation", detail: "Create statistical features, embeddings, windows, or task-specific context.", gate: "Signal usable" },
  { label: "Model", detail: "Choose the simplest architecture that improves the operating metric.", gate: "Candidate trained" },
  { label: "Evaluation", detail: "Test generalization, class behavior, confidence, latency, and failure modes.", gate: "Evidence accepted" },
  { label: "Integration", detail: "Package inference with validation, safety checks, and reproducible artifacts.", gate: "Behavior repeatable" },
  { label: "Decision surface", detail: "Expose predictions, sources, limitations, and actions in the user's workflow.", gate: "Outcome inspectable" },
] as const;

export const technicalExperience = [
  {
    organization: "Hach Company",
    role: "Quality Data Scientist",
    period: "Sep 2024 — Present",
    location: "United States",
    mission: "Applied AI, predictive NLP, quality intelligence, and analytics automation.",
    contributions: [
      "Design multi-stage classification workflows across complex quality taxonomies.",
      "Develop retrieval-grounded knowledge workflows and evaluation practices.",
      "Improved latest internal Defect Symptom macro F1 from 56.1% to 57.7% and high-confidence coverage from 38.4% to 46.0%.",
      "Automate recurring analysis and translate model evidence into decision-ready reporting.",
    ],
    methods: ["Python", "SQL Server", "NLP", "Transformers", "LightGBM", "Power BI"],
  },
  {
    organization: "University of Arizona BookStores",
    role: "Student Assistant Manager",
    period: "Sep 2022 — Aug 2023",
    location: "Tucson, Arizona",
    mission: "Retail analytics, inventory planning, dashboarding, and team leadership alongside graduate study.",
    contributions: [
      "Analyzed 80,000–100,000 monthly sales records across 30+ categories using Excel and Tableau.",
      "Supported inventory decisions associated with an approximately 15% reduction in overstock and shortage conditions.",
      "Earned promotion within four months and trained 8–10 team members on operations, reporting, and data tracking.",
    ],
    methods: ["Excel", "Tableau", "Sales analytics", "Inventory planning", "Team leadership"],
  },
  {
    organization: "University of Arizona College of Nursing",
    role: "Machine Learning Research Assistant",
    period: "May 2023 — Aug 2024",
    location: "Tucson, Arizona",
    mission: "Longitudinal wearable-sensor modeling and reproducible research analytics.",
    contributions: [
      "Built consistent data preparation and comparison workflows for temporal research data.",
      "Evaluated SVM, recurrent, convolutional, autoencoder, and statistical time-series approaches.",
      "Communicated results with explicit research and non-clinical limitations.",
    ],
    methods: ["Python", "LSTM", "BiLSTM", "CNN", "Autoencoders", "Time series"],
  },
  {
    organization: "Orange Business Services",
    role: "Network Operations Center Engineer",
    period: "Jun 2019 — Aug 2022",
    location: "India",
    mission: "Network reliability, anomaly investigation, reporting, and operational automation.",
    contributions: [
      "Investigated performance signals across enterprise Cisco and Juniper environments.",
      "Built Python and SQL workflows supporting fault analysis and recurring reporting.",
      "Connected engineering telemetry to operational prioritization and service decisions.",
    ],
    methods: ["Python", "SQL", "Tableau", "Cisco", "Juniper", "Time series"],
  },
] as const;

export const educationJourney = [
  {
    school: "University of Arizona",
    monogram: "UA",
    degree: "Master of Science in Data Science",
    period: "2022 — 2023",
    grade: "GPA 3.889 / 4.000",
    context: "Graduate technical progression",
    location: "Tucson, Arizona",
    stages: [
      {
        label: "ML & statistical reasoning",
        description: "Built foundations in supervised learning, statistical inference, experimentation, responsible analysis, and model evaluation.",
        methods: ["Statistics", "Advanced ML", "Research methods"],
      },
      {
        label: "Data systems & analytics",
        description: "Worked across advanced databases, warehousing, cloud-oriented data workflows, large-scale analytics, and visualization.",
        methods: ["SQL", "Cloud computing", "Data warehousing"],
      },
      {
        label: "Deep learning & retrieval",
        description: "Expanded into neural architectures, NLP, text retrieval, representation learning, and modern information systems.",
        methods: ["Deep learning", "NLP", "Information retrieval"],
      },
    ],
    bridge: {
      label: "Academic → applied research",
      title: "Machine Learning Research Assistant · College of Nursing",
      detail: "Applied graduate learning to longitudinal wearable-sensor research, comparing LSTM, BiLSTM, CNN, autoencoder, SVM, and statistical time-series approaches across approximately 135 participants.",
    },
    recognition: [
      { title: "3.889 / 4.000 cumulative GPA", detail: "Sustained graduate performance across machine learning, data engineering, analytics, and applied data science." },
      { title: "≈33% merit-based tuition scholarship", detail: "Awarded during both the second and third semesters for strong academic performance." },
      { title: "Applied research bridge", detail: "Extended academic work into reproducible healthcare research without clinical overclaiming." },
    ],
  },
  {
    school: "Texas McCombs School of Business",
    monogram: "TX",
    degree: "Post Graduate Program in Data Science & Business Analytics",
    period: "2021 — 2022",
    grade: "Grade 4.00 / 4.00",
    context: "Applied analytics & business layer",
    location: "",
    stages: [
      {
        label: "Applied modeling",
        description: "Developed statistical, regression, classification, clustering, PCA, forecasting, and model-evaluation workflows.",
        methods: ["Python", "scikit-learn", "Statistics"],
      },
      {
        label: "Business analytics",
        description: "Connected analytical methods to segmentation, marketing, retail, customer, and decision-oriented problem framing.",
        methods: ["SQL", "Tableau", "Retail analytics"],
      },
      {
        label: "End-to-end delivery",
        description: "Consolidated data preparation, feature engineering, model development, validation, evaluation, and business interpretation.",
        methods: ["Pandas", "NumPy", "Jupyter"],
      },
    ],
    bridge: null,
    recognition: [
      { title: "4.00 / 4.00 program grade", detail: "Completed the applied postgraduate program with full-grade academic performance." },
      { title: "40% merit-based tuition scholarship", detail: "Awarded through the program's admission assessment and academic profile." },
      { title: "13 end-to-end projects", detail: "Spanned statistics, machine learning, NLP, forecasting, segmentation, retail analytics, and biomedical modeling." },
    ],
  },
  {
    school: "Amity University",
    monogram: "AU",
    degree: "Bachelor's in Electronics & Telecommunications",
    period: "2015 — 2019",
    grade: "Grade 8.99 / 10.00",
    context: "Undergraduate engineering foundation",
    location: "India",
    stages: [
      {
        label: "Communication systems",
        description: "Built foundations in electronics, telecommunications, computer networks, signal processing, and engineered systems.",
        methods: ["Electronics", "Networks", "Signal processing"],
      },
      {
        label: "Quantitative engineering",
        description: "Developed grounding in engineering mathematics, probability, statistics, linear algebra, and calculus.",
        methods: ["Probability", "Statistics", "Linear algebra"],
      },
      {
        label: "Process & reliability thinking",
        description: "Learned Six Sigma Green Belt principles including DMAIC, root-cause analysis, process improvement, and statistical control.",
        methods: ["DMAIC", "Root-cause analysis", "SPC"],
      },
    ],
    bridge: null,
    recognition: [
      { title: "50% merit-based tuition scholarship · eight semesters", detail: "Maintained through sustained academic performance across the complete engineering program." },
      { title: "Silver Medal · second academic rank", detail: "Recognized for consistent high achievement in overall academic performance." },
      { title: "Academic Excellence Award", detail: "First rank in telecommunications subjects; recognition issued by Bharti Airtel." },
      { title: "Leadership Excellence Award", detail: "Recognized for responsibility, teamwork, coordination, and support of fellow students." },
      { title: "TELNET International Conference", detail: "Appreciation Award for student coordination, communication, and logistical contribution." },
    ],
  },
] as const;
