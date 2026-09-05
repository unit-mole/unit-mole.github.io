export type RagProject = {
  slug: string;
  shortName: string;
  title: string;
  domain: string;
  businessNeed: string;
  objective: string;
  architecture: string[];
  technologies: string[];
  metrics: Array<{ value: string; label: string }>;
  repository: string;
  demo: string;
  guardrail: string;
};

export const ragProjects: RagProject[] = [
  {
    slug: "reliabilityops",
    shortName: "ReliabilityOps",
    title: "Evidence-Grounded Root-Cause Investigation",
    domain: "Industrial reliability",
    businessNeed: "Reliability investigations must connect operating conditions, historical incidents, procedures, and statistics before corrective action is considered.",
    objective: "Retrieve and analyze relevant evidence, rank root-cause hypotheses, verify every material claim, and keep final action behind explicit human approval.",
    architecture: ["Incident + sensor context", "BGE-M3 + BM25", "RRF evidence fusion", "LangGraph tools", "Local Qwen3", "Claim verifier", "Human approval"],
    technologies: ["Qwen3-14B", "BGE-M3", "LangGraph", "Qdrant", "PostgreSQL", "FastAPI", "Phoenix"],
    metrics: [
      { value: "93%", label: "frozen RCA Top-1" },
      { value: "100%", label: "citation precision" },
      { value: "100", label: "untouched test cases" },
    ],
    repository: "https://github.com/unit-mole/reliabilityops-agentic-rag",
    demo: "https://huggingface.co/spaces/anmol-unitmole/reliabilityops-agentic-rag",
    guardrail: "The public system presents validated evidence and results; recommendations still require human review.",
  },
  {
    slug: "repoatlas",
    shortName: "RepoAtlas",
    title: "Repository Intelligence & Safe Coding Agent",
    domain: "Software engineering",
    businessNeed: "A small code change can depend on hidden symbols, dependency relationships, regression tests, and security boundaries across an unfamiliar repository.",
    objective: "Localize affected files and symbols, discover tests, propose bounded edits, and verify candidate changes without modifying the original repository.",
    architecture: ["Issue + repository", "Syntax-aware chunks", "BM25 + BGE-M3", "RRF + dependency graph", "Qwen3 change plan", "Isolated edits", "Tests + security gates"],
    technologies: ["Qwen3-8B", "BGE-M3", "BM25 / RRF", "Repository graphs", "Docker", "pytest", "Ruff / Bandit"],
    metrics: [
      { value: "84.3%", label: "file Recall@20" },
      { value: "33", label: "focused tests passed" },
      { value: "PASS", label: "final V6 gate" },
    ],
    repository: "https://github.com/unit-mole/repoatlas-agentic-rag",
    demo: "https://huggingface.co/spaces/anmol-unitmole/repoatlas-agentic-rag",
    guardrail: "Write tools are gated, execution is sandboxed, and the original repository remains unchanged.",
  },
  {
    slug: "filingsgraph",
    shortName: "FilingsGraph",
    title: "Temporal Financial Due-Diligence Engine",
    domain: "Financial research",
    businessNeed: "Due diligence requires exact financial facts, narrative filing evidence, year-over-year disclosure changes, and cross-company risk relationships.",
    objective: "Route each question to deterministic XBRL, hybrid text, temporal, or graph tools and return a citation-verified analyst answer.",
    architecture: ["SEC filings + XBRL", "Question router", "Specialized evidence tools", "Temporal risk graph", "Evidence bundle", "Local Qwen3", "Citation + numeric checks"],
    technologies: ["SEC EDGAR", "XBRL", "DuckDB", "BGE-M3", "Qdrant", "NetworkX", "Qwen3-8B"],
    metrics: [
      { value: "100%", label: "router TEST accuracy" },
      { value: "100%", label: "financial fact selection" },
      { value: "94.44%", label: "textual TEST MRR" },
    ],
    repository: "https://github.com/unit-mole/filingsgraph-agentic-rag",
    demo: "https://huggingface.co/spaces/anmol-unitmole/filingsgraph-agentic-rag",
    guardrail: "This is research engineering—not investment advice—and material claims must carry supplied evidence IDs.",
  },
  {
    slug: "portfolio-rag-assistant",
    shortName: "Portfolio RAG",
    title: "Source-Cited AI Portfolio Assistant",
    domain: "Portfolio intelligence",
    businessNeed: "Recruiters and technical reviewers need a faster way to navigate dozens of repositories without losing the evidence behind each answer.",
    objective: "Search public portfolio documentation semantically, select relevant project evidence, and return transparent answers with sources, scores, and latency.",
    architecture: ["Public portfolio docs", "Section-aware chunks", "MiniLM embeddings", "Hybrid retrieval", "Context selection", "Grounded response", "Citations + latency"],
    technologies: ["MiniLM", "Sentence Transformers", "Next.js", "TypeScript", "Hugging Face", "Vercel", "IR evaluation"],
    metrics: [
      { value: "220", label: "public documents" },
      { value: "3,157", label: "evidence chunks" },
      { value: "40", label: "curated questions" },
    ],
    repository: "https://github.com/unit-mole/transformer-projects/tree/main/10-ai-portfolio-rag-assistant",
    demo: "https://10-ai-portfolio-rag-assistant.vercel.app/#assistant",
    guardrail: "Only public portfolio material is indexed; low-support answers expose evidence and limitations.",
  },
];

export type FlagshipProject = {
  slug: string;
  title: string;
  category: string;
  status: "Deployed" | "Completed";
  problem: string;
  matters: string;
  solution: string;
  technologies: string[];
  techniques: string[];
  outcome: string;
  architecture: string[];
  repository: string;
  demo?: string;
};

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "portfolio-rag-assistant",
    title: "AI Portfolio RAG Assistant",
    category: "RAG / Applied AI",
    status: "Deployed",
    problem: "Help visitors search a large technical portfolio without losing the evidence behind an answer.",
    matters: "A useful assistant must retrieve the right project context, cite its sources, and expose uncertainty—not simply produce fluent copy.",
    solution: "Built a MiniLM-powered hybrid retrieval system with grounded response composition, citations, score transparency, unsupported-query handling, and latency reporting.",
    technologies: ["MiniLM", "Next.js", "Hugging Face", "Vercel", "Python", "TypeScript"],
    techniques: ["Semantic retrieval", "Lexical coverage", "NLI groundedness", "Citation evaluation"],
    outcome: "Indexes 220 public AI documents into 3,157 evidence chunks and returns source-cited portfolio answers in a live Vercel application.",
    architecture: ["Portfolio documents", "Clean + chunk", "MiniLM embeddings", "Hybrid retrieval", "Context selection", "Grounded answer", "Citations + latency"],
    repository: "https://github.com/unit-mole/transformer-projects/tree/main/10-ai-portfolio-rag-assistant",
    demo: "https://10-ai-portfolio-rag-assistant.vercel.app/#assistant",
  },
  {
    slug: "retrieval-reranking",
    title: "Cross-Encoder + Bi-Encoder Ranking",
    category: "Information Retrieval",
    status: "Deployed",
    problem: "Balance the speed of dense retrieval with the precision of pairwise relevance scoring.",
    matters: "Enterprise search and RAG pipelines need fast candidate discovery without accepting weak final rankings.",
    solution: "Combined a MiniLM bi-encoder with an MS MARCO cross-encoder and benchmarked the two-stage design against lexical baselines on BEIR datasets.",
    technologies: ["Sentence Transformers", "PyTorch", "BEIR", "Transformers.js", "Hugging Face"],
    techniques: ["Dense retrieval", "Cross-encoder reranking", "MRR", "nDCG", "Bootstrap intervals"],
    outcome: "Reranking improved MRR@10 by 8.1% on SciFact and 10.7% on NFCorpus, with the latency tradeoff reported explicitly.",
    architecture: ["Query + corpus", "Bi-encoder embeddings", "Top-K candidates", "Cross-encoder scoring", "Reranked results", "IR + latency evaluation"],
    repository: "https://github.com/unit-mole/transformer-projects/tree/main/03-cross-encoder-bi-encoder-ranking-system",
    demo: "https://huggingface.co/spaces/anmol-unitmole/03-cross-encoder-bi-encoder-ranking-system",
  },
  {
    slug: "instruction-tuned-domain-llm",
    title: "Instruction-Tuned Domain LLM",
    category: "Generative AI",
    status: "Deployed",
    problem: "Adapt a compact instruction model while making model selection accountable to both automated and human evaluation.",
    matters: "A newer adapter is not automatically a better release candidate; factuality and instruction adherence require direct review.",
    solution: "Instruction-tuned FLAN-T5 Base with LoRA across two controlled experiments and compared both against the untouched base model on the same benchmark.",
    technologies: ["FLAN-T5", "LoRA", "PEFT", "PyTorch", "BF16", "Hugging Face"],
    techniques: ["Instruction tuning", "Human evaluation", "Bootstrap confidence", "Release gating"],
    outcome: "Experiment 1 remained the selected candidate after an 80-prompt benchmark; Experiment 2 was preserved but not promoted.",
    architecture: ["Versioned prompts", "LoRA training", "Base + adapter comparison", "Automated metrics", "Human review", "Release gate", "Evidence showcase"],
    repository: "https://github.com/unit-mole/transformer-projects/tree/main/05-instruction-tuned-domain-llm",
    demo: "https://huggingface.co/spaces/anmol-unitmole/instruction-tuned-domain-llm",
  },
  {
    slug: "text-to-sql",
    title: "Schema-Aware Text-to-SQL",
    category: "Encoder–Decoder",
    status: "Deployed",
    problem: "Translate business questions into SQL while preventing unsafe or invalid database operations.",
    matters: "Text-to-SQL quality is not only exact string match; execution correctness, schema alignment, and query safety determine whether output is usable.",
    solution: "Fine-tuned CodeT5+ with LoRA over a verified multi-schema corpus, then added schema linking, validation, conservative repair, and read-only SQLite execution.",
    technologies: ["CodeT5+", "LoRA", "SQLite", "Next.js", "Vercel", "Hugging Face"],
    techniques: ["Schema-aware prompting", "Execution evaluation", "SQL validation", "Safety gates"],
    outcome: "Evaluated on 1,040 held-out examples with 56.92% execution accuracy; unsafe queries are blocked before execution.",
    architecture: ["Question + schema", "Schema linking", "CodeT5+ generation", "SQL validator", "Optional repair", "Read-only execution", "Result + evidence"],
    repository: "https://github.com/unit-mole/encoder-decoder-projects/tree/main/01-schema-aware-text-to-sql-encoder-decoder",
    demo: "https://schema-aware-text-to-sql.vercel.app/",
  },
  {
    slug: "data-to-text",
    title: "Data-to-Text Executive Reporting",
    category: "Grounded Generation",
    status: "Deployed",
    problem: "Turn KPI tables into concise executive narratives without allowing a language model to invent numerical claims.",
    matters: "Fluent reporting is useful only when every displayed statement can be traced to the source table.",
    solution: "Used FLAN-T5 to generate a structured claim plan, then deterministically hydrated values and blocked unsupported claims through a verifier-gated output path.",
    technologies: ["FLAN-T5", "LoRA", "ONNX", "Next.js", "Vercel", "TypeScript"],
    techniques: ["Structured generation", "Row-level grounding", "Numerical verification", "Hallucination blocking"],
    outcome: "Achieved 100% final displayed claim support across the 250-example evaluation after verifier gating—not a claim of raw-model factuality.",
    architecture: ["CSV / JSON KPIs", "Field detection", "FLAN-T5 claim plan", "Deterministic hydration", "Claim verification", "Gated narrative", "Source evidence"],
    repository: "https://github.com/unit-mole/encoder-decoder-projects/tree/main/04-data-to-text-executive-report-generator",
    demo: "https://data-to-text-executive-report-gener.vercel.app/",
  },
  {
    slug: "ipl-intelligence",
    title: "IPL Intelligence Production",
    category: "Production ML",
    status: "Deployed",
    problem: "Forecast cricket outcomes without temporal leakage and govern which model version is allowed into production.",
    matters: "Noisy sports prediction rewards honest validation, calibrated probabilities, and explicit rejection of weaker model ideas.",
    solution: "Built point-in-time match features, compared four versions on a common out-of-time window, froze the V2 calibrated ensemble, and added simulation plus explainability.",
    technologies: ["Python", "scikit-learn", "LightGBM", "XGBoost", "Gradio", "Hugging Face"],
    techniques: ["Chronological validation", "Calibration", "Model governance", "Monte Carlo simulation"],
    outcome: "V2 was selected with 54.23% strict 2025–2026 out-of-time accuracy; limitations and calibration metrics are published alongside the model.",
    architecture: ["Cricsheet data", "Point-in-time features", "V1–V4 comparison", "Calibrated V2 ensemble", "Backtesting", "Explainability", "Match + tournament simulation"],
    repository: "https://github.com/unit-mole/cricket-intelligence-projects/tree/main/01-ipl-intelligence-production",
    demo: "https://huggingface.co/spaces/anmol-unitmole/ipl-intelligence-production",
  },
  {
    slug: "industrial-failure",
    title: "Industrial Failure Detection",
    category: "Time-Series AI",
    status: "Deployed",
    problem: "Detect abnormal equipment behavior from multivariate sensor windows while minimizing missed failure events.",
    matters: "Anomaly systems should be compared on failure recall and operational tradeoffs, not only headline accuracy.",
    solution: "Built an LSTM autoencoder over sensor sequences with reconstruction scoring, threshold selection, baseline comparison, and portable inference artifacts.",
    technologies: ["TensorFlow", "LSTM", "Streamlit", "Python", "Docker", "GitHub Actions"],
    techniques: ["Sequence reconstruction", "Anomaly thresholds", "Held-out units", "Baseline benchmarking"],
    outcome: "Reached 0.887 test ROC-AUC and 0.858 failure recall across 918 held-out test windows.",
    architecture: ["Sensor sequences", "Window generation", "LSTM encoder", "Latent state", "LSTM decoder", "Reconstruction error", "Failure-risk score"],
    repository: "https://github.com/unit-mole/lstm-projects/tree/main/07-industrial-equipment-failure-detection-lstm-autoencoder",
    demo: "https://lstm-projects-kcgnvnpblpu2fqjhw6tzln.streamlit.app/",
  },
  {
    slug: "unet-segmentation",
    title: "Medical-Style Image Segmentation",
    category: "Computer Vision",
    status: "Deployed",
    problem: "Localize regions at pixel level and run the trained model directly in a browser.",
    matters: "Segmentation demonstrates spatial prediction, not just image-level labels, while client-side inference removes server dependency.",
    solution: "Trained a compact U-Net on deterministic synthetic MRI-style images, compared it with a threshold baseline, and exported it for TensorFlow.js inference.",
    technologies: ["U-Net", "TensorFlow", "TensorFlow.js", "Vercel", "pytest"],
    techniques: ["Semantic segmentation", "Dice", "IoU", "Browser inference"],
    outcome: "Recorded 0.9977 Dice and 0.9954 IoU on the controlled synthetic test set; the project explicitly does not claim clinical validity.",
    architecture: ["Synthetic image + mask", "Preprocessing", "U-Net encoder", "Bottleneck", "Skip-connected decoder", "Pixel mask", "Dice / IoU + TF.js"],
    repository: "https://github.com/unit-mole/cnn-projects/tree/main/01-image-segmentation-unet-medical-imaging",
    demo: "https://medical-image-segmentation-unet.vercel.app/",
  },
  {
    slug: "bilstm-ner",
    title: "BiLSTM Named Entity Recognition",
    category: "NLP / Sequence Labeling",
    status: "Deployed",
    problem: "Extract complete entity spans from unstructured text while preserving valid BIO label transitions.",
    matters: "Raw token accuracy can hide weak exact-span extraction, and a decoder should not be mislabeled as a CRF-trained model.",
    solution: "Built BiLSTM sequence encoding, BIO-aware Viterbi decoding, entity reconstruction, and a separate true linear-chain CRF training path with an explicit architecture audit.",
    technologies: ["TensorFlow", "BiLSTM", "CRF", "Streamlit", "Docker"],
    techniques: ["Sequence labeling", "Viterbi decoding", "CRF likelihood", "Entity-level evaluation"],
    outcome: "The audited legacy baseline records 0.6572 entity-level micro F1; true-CRF results are deliberately withheld until retraining is complete.",
    architecture: ["Tokenized text", "Embeddings", "Bidirectional LSTM", "Emission scores", "CRF / BIO-aware decode", "Entity spans", "Per-type evaluation"],
    repository: "https://github.com/unit-mole/bi-directional-lstm-projects/tree/main/03-named-entity-recognition-bilstm-crf",
    demo: "https://bi-directional-lstm-projects-qs6nxmeqrdur2reyifbxnh.streamlit.app/",
  },
  {
    slug: "parkinsons-voice",
    title: "Participant-Safe Voice Classification",
    category: "Applied Data Science",
    status: "Completed",
    problem: "Evaluate voice-based Parkinson's classification without letting recordings from the same participant cross split boundaries.",
    matters: "Record-level random splits can overstate performance when many samples belong to the same person.",
    solution: "Rebuilt the analysis around participant-level holdout, grouped cross-validation, model comparison, bootstrap intervals, and false-negative review.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    techniques: ["Grouped validation", "Leakage prevention", "Calibration", "Uncertainty analysis"],
    outcome: "With zero participant overlap, the eight-person holdout reached 0.750 balanced accuracy and 1.000 sensitivity; uncertainty is documented as wide.",
    architecture: ["Voice features", "Participant IDs", "Grouped train / holdout", "Model comparison", "Calibration", "Participant metrics", "Uncertainty + error review"],
    repository: "https://github.com/unit-mole/applied-data-science-machine-learning-portfolio/tree/main/projects/11-parkinsons-disease-detection",
  },
];

export type LibraryProject = { title: string; summary: string; path: string; tags?: string[]; demo?: string };
export type ProjectGroup = {
  name: string;
  stage: string;
  capability: string;
  description: string;
  methods: string[];
  progression: string;
  repository: string;
  categories: string[];
  projects: LibraryProject[];
};

export const projectGroups: ProjectGroup[] = [
  {
    name: "Applied Data Science & Machine Learning",
    stage: "01",
    capability: "Analytics → machine learning",
    description: "Thirteen projects progressing from inference and exploratory analysis to grouped validation, forecasting, segmentation, and predictive systems.",
    methods: ["Python", "Pandas", "scikit-learn", "Statistics", "Tableau"],
    progression: "Establishes evidence-first analysis, feature engineering, validation, and decision framing.",
    repository: "https://github.com/unit-mole/applied-data-science-machine-learning-portfolio",
    categories: ["Machine Learning", "Analytics"],
    projects: [
      ["Statistical Methods for Decision-Making", "Statistical inference and operational decisions.", "projects/01-statistical-methods"],
      ["Uber Drive Behavior Analysis", "Trip-pattern and productivity analysis.", "projects/02-uber-drive-analysis"],
      ["Salary ANOVA & Admissions PCA", "Factorial inference and dimensionality reduction.", "projects/03-anova-pca-analysis"],
      ["Insurance Claim Propensity", "Imbalanced binary classification.", "projects/04-insurance-claim-prediction"],
      ["Cubic Zirconia Price Modeling", "Supervised regression and diagnostic intervals.", "projects/05-gem-price-regression"],
      ["Holiday Package Propensity", "Calibrated binary propensity modeling.", "projects/06-holiday-package-prediction"],
      ["Election Survey Classification", "Historical respondent classification.", "projects/07-election-exit-poll-prediction"],
      ["Presidential Speech Analysis", "Small-corpus exploratory NLP.", "projects/08-presidential-speech-analysis"],
      ["Wine Sales Forecasting", "Rolling-origin monthly forecasting.", "projects/09-wine-sales-forecasting"],
      ["Cafe Marketing & Retail Analytics", "Transaction, basket, and item segmentation analysis.", "projects/10-marketing-retail-analysis"],
      ["Participant-Safe Parkinson's Classification", "Grouped biomedical classification.", "projects/11-parkinsons-disease-detection"],
      ["Online Retail Segmentation", "RFM clustering and stability analysis.", "projects/12-online-retail-segmentation"],
      ["Historical COVID-19 Modeling", "Historical panel forecasting.", "projects/13-covid-outbreak-prediction"],
    ].map(([title, summary, path]) => ({ title, summary, path })),
  },
  {
    name: "ANN Deep Learning",
    stage: "02",
    capability: "Neural representation learning",
    description: "Tabular, risk, optimization, and vision problems used to move from hand-engineered models into learned nonlinear representations.",
    methods: ["TensorFlow", "Keras", "Neural networks", "Embeddings", "Optimization"],
    progression: "Adds learned representations, multi-output objectives, and neural model design to the classical ML foundation.",
    repository: "https://github.com/unit-mole/ann-deep-learning-projects",
    categories: ["Deep Learning", "Machine Learning"],
    projects: [
      ["Churn Classification", "Neural binary classification.", "01-churn-classification", "https://churn-risk-ann.streamlit.app"],
      ["Credit Card Fraud Detection", "Imbalanced neural classification.", "02-credit-card-fraud-detection", "https://ann-deep-learning-projects-dqnj5rpwbpmuxtd2tcm5mh.streamlit.app/"],
      ["Credit Risk Probability Scoring", "Risk classification and probability scoring.", "03-credit-risk-probability-scoring", "https://ann-deep-learning-projects-9p9vupmu9kbk5462v6hbkb.streamlit.app/"],
      ["Customer Lifetime Value Forecasting", "Multi-task regression and retention prediction.", "04-customer-lifetime-value-forecasting", "https://ann-deep-learning-projects-u4gymvvpwuaowqnmkjq3wa.streamlit.app/"],
      ["Diabetes Risk Screening", "Healthcare risk classification.", "05-diabetes-prediction", "https://ann-deep-learning-projects-bczyq9q5aa8eqbvqskqyar.streamlit.app/"],
      ["Dynamic Pricing Optimization", "Demand forecasting and constrained optimization.", "06-dynamic-pricing-optimization", "https://ann-deep-learning-projects-tgcmwtdfyxorbrexrmbcin.streamlit.app/"],
      ["Handwritten Digit Recognition", "Multi-class computer vision.", "07-handwritten-digit-recognition", "https://ann-deep-learning-projects-gsnhfzexxframenzenm5rx.streamlit.app/"],
      ["House Price Prediction", "Tabular regression and estimation.", "08-house-price-prediction", "https://ann-deep-learning-projects-satmbakncxmlo2mmct5gvu.streamlit.app/"],
      ["Multi-Output Prediction System", "Mixed-output classification and regression.", "09-multi-output-prediction-system", "https://ann-deep-learning-projects-5mvtt4spt9hwj28ytb8gze.streamlit.app/"],
      ["Tabular Learning with Embeddings", "Categorical embedding-based classification.", "10-tabular-deep-learning-with-embeddings", "https://ann-deep-learning-projects-budbjucqqrtaar2bjin76u.streamlit.app/"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "Simple RNN",
    stage: "03",
    capability: "Sequence-model foundations",
    description: "Compact recurrent systems spanning forecasting, classification, text generation, and learned word representations.",
    methods: ["TensorFlow", "Simple RNN", "Sequences", "Embeddings", "NLP"],
    progression: "Introduces temporal state, ordered inputs, autoregressive behavior, and sequence-aware evaluation.",
    repository: "https://github.com/unit-mole/simple-rnn-projects",
    categories: ["Deep Learning", "NLP"],
    projects: [
      ["Electricity Consumption Forecasting", "Sequence-based demand forecasting.", "01-electricity-consumption-forecasting", "https://simple-rnn-projects-8mxgmrutejhv5mgxnddvra.streamlit.app/"],
      ["Google Stock Price Prediction", "Financial time-series forecasting.", "02-google-stock-price-prediction", "https://simple-rnn-projects-8ppkcyb6itqkquyzd32rsk.streamlit.app/"],
      ["IMDb Sentiment Analysis", "Movie-review sequence classification.", "03-imdb-data-analysis", "https://simple-rnn-projects-ljp2wrybnrz4eheng2xsd8.streamlit.app/"],
      ["SMS Spam Detection", "Imbalanced message classification.", "04-sms-spam-detection", "https://simple-rnn-projects-mb5hckxzin7hhatgfak2tm.streamlit.app/"],
      ["Character-Level Text Generation", "Autoregressive next-character generation.", "05-text-generation", "https://simple-rnn-projects-72u2s8vhngrexwwgbjpy6r.streamlit.app/"],
      ["Word Embedding & Representation Learning", "Neural semantic representations.", "06-word-embedding", "https://simple-rnn-projects-kgg7njs6sltnwqqvmjirvm.streamlit.app/"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "LSTM Systems",
    stage: "04",
    capability: "Long-range temporal systems",
    description: "Eleven additional systems applying gated sequence models to demand, sensors, anomaly detection, language, video, and predictive maintenance.",
    methods: ["LSTM", "Attention", "Autoencoders", "ConvLSTM", "Time series"],
    progression: "Extends sequence learning to longer dependencies, reconstruction, attention, and spatiotemporal behavior.",
    repository: "https://github.com/unit-mole/lstm-projects",
    categories: ["Deep Learning", "NLP"],
    projects: [
      ["Airline Passenger Forecasting", "Seasonal demand forecasting.", "01-airline-passenger-forecasting", "https://lstm-projects-qtuxsozwu2g7kp6lpeuclq.streamlit.app/"],
      ["Bitcoin Price Prediction", "Multivariate financial forecasting.", "02-bitcoin-price-prediction", "https://lstm-projects-k2ocmukxfs83e9ntudpdgr.streamlit.app/"],
      ["Conversational Chatbot", "Seq2Seq response generation with attention.", "03-conversational-chatbot-seq2seq-attention", "https://lstm-projects-s6ttobrjhi6uyvgwvyygnm.streamlit.app/"],
      ["ECG Anomaly Detection", "LSTM autoencoder signal reconstruction.", "04-ecg-anomaly-detection-lstm-autoencoder-attention", "https://lstm-projects-3k2k8kbwyfws9doojmvfwf.streamlit.app/"],
      ["Fake News Detection", "Binary NLP sequence classification.", "05-fake-news-detection", "https://lstm-projects-ebn4nfredardyuuzskgnpw.streamlit.app/"],
      ["Human Activity Recognition", "Sensor-sequence classification with attention.", "06-human-activity-recognition-lstm-attention", "https://lstm-projects-tyegesrwm2jemjbldq4fju.streamlit.app/"],
      ["Multivariate Energy Forecasting", "Stacked-LSTM demand forecasting.", "08-multivariate-time-series-forecasting-stacked-lstm", "https://lstm-projects-me6cghesgakawzytkkrrwp.streamlit.app/"],
      ["Video Frame Prediction", "ConvLSTM spatiotemporal forecasting.", "09-video-frame-prediction-convlstm", "https://lstm-projects-efpoyil7h98xqzmxe9r9pt.streamlit.app/"],
      ["Traffic Flow Prediction", "Transportation time-series forecasting.", "10-traffic-flow-prediction-stacked-lstm", "https://lstm-projects-gutyrjww4ouvee3rfurrnu.streamlit.app/"],
      ["Weather Forecasting", "ConvLSTM weather-grid forecasting.", "11-weather-forecasting-convlstm", "https://lstm-projects-mivsjcuhxgq2szsnou7jdc.streamlit.app/"],
      ["Text Summarization", "Seq2Seq abstractive summarization.", "12-text-summarization-seq2seq-attention", "https://lstm-projects-8ebpgk2kvotr6yjrgguexw.streamlit.app/"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "Bidirectional LSTM",
    stage: "05",
    capability: "Context-aware language systems",
    description: "Bidirectional sequence systems for emotion, medical text, entity extraction, semantic matching, and code-to-text tasks.",
    methods: ["BiLSTM", "Attention", "CRF", "Siamese networks", "NLP"],
    progression: "Adds bidirectional context, structured decoding, pairwise similarity, and richer language representations.",
    repository: "https://github.com/unit-mole/bi-directional-lstm-projects",
    categories: ["Deep Learning", "NLP"],
    projects: [
      ["Emotion Detection", "Six-class attention-based text classification.", "01-emotion-detection-bilstm-attention", "https://bi-directional-lstm-projects-hyy32ssueogmqtisqjxzbg.streamlit.app/"],
      ["Medical Text Classification", "Medical-specialty classification with attention.", "02-medical-text-classification-bilstm-attention", "https://bi-directional-lstm-projects-fvks4ksrhymci7vudgqq62.streamlit.app/"],
      ["Named Entity Recognition", "BIO labeling with BiLSTM and CRF path.", "03-named-entity-recognition-bilstm-crf", "https://bi-directional-lstm-projects-qs6nxmeqrdur2reyifbxnh.streamlit.app/"],
      ["Question–Answer Matching", "Siamese semantic matching and ranking.", "04-question-answer-matching-siamese-bilstm", "https://bi-directional-lstm-projects-jvvrbxy7ukywyxzoqd4vnw.streamlit.app/"],
      ["Resume–Job Matching", "Siamese matching with transparent skill coverage.", "05-resume-job-description-matching-siamese-bilstm", "https://bi-directional-lstm-projects-8xeeq2xagjbubsodntpurq.streamlit.app/"],
      ["Code Comment Generation", "Code-to-text generation with attention.", "06-code-comment-generation-bilstm-attention", "https://bi-directional-lstm-projects-bd5p6qnsd6r5thune4tsk4.streamlit.app/"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "CNN & Computer Vision",
    stage: "06",
    capability: "Visual representation systems",
    description: "Classification, localization, segmentation, transfer learning, browser inference, and comparative visual-model evaluation.",
    methods: ["CNN", "U-Net", "ResNet", "DenseNet", "Transfer learning"],
    progression: "Broadens representation learning from sequences into spatial features, localization, segmentation, and explainability.",
    repository: "https://github.com/unit-mole/cnn-projects",
    categories: ["Deep Learning", "Computer Vision"],
    projects: [
      ["Medical Image Segmentation", "Pixel-level segmentation with U-Net.", "01-image-segmentation-unet-medical-imaging", "https://medical-image-segmentation-unet.vercel.app/"],
      ["Object Detection Using CNN", "Object localization and classification.", "02-object-detection-using-cnn", "https://cnn-object-detection.vercel.app/"],
      ["DenseNet Medical Classification", "Transfer-learning medical image classification.", "03-densenet-medical-image-classification", "https://unit-mole.github.io/cnn-projects/03-densenet-medical-image-classification/"],
      ["ResNet50 Browser Classification", "Residual learning and TensorFlow.js inference.", "04-image-classification-resnet", "https://unit-mole.github.io/cnn-projects/04-image-classification-resnet/"],
      ["Fine-Grained VGG16 Classification", "Fine-grained visual-category classification.", "05-fine-grained-image-classification-vgg16", "https://vgg16-fine-grained-image-classifica.vercel.app/"],
      ["Satellite Image Segmentation", "Semantic segmentation with U-Net.", "06-satellite-image-segmentation-unet", "https://satellite-image-segmentation-unet.vercel.app/"],
      ["CNN Model Comparison", "AlexNet-style models, MobileNetV2, and explainability.", "07-image-classification-alexnet-transfer-learning", "https://unit-mole.github.io/cnn-projects/"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "Encoder–Decoder",
    stage: "07",
    capability: "Structured generation systems",
    description: "Language, vision, speech, SQL, and executive-reporting systems built around controlled sequence-to-sequence generation.",
    methods: ["T5", "CodeT5+", "Whisper", "Vision encoders", "Verification gates"],
    progression: "Moves from prediction into constrained generation, execution validation, multimodal encoding, and grounded output.",
    repository: "https://github.com/unit-mole/encoder-decoder-projects",
    categories: ["Transformers", "NLP"],
    projects: [
      ["Image Caption Generation", "Vision encoder–decoder captioning.", "02-image-caption-generation-vision-encoder-decoder", "https://huggingface.co/spaces/anmol-unitmole/image-caption-generation-vision-encoder-decoder"],
      ["Streaming Speech Recognition", "Whisper audio transcription.", "03-streaming-speech-recognition-whisper-encoder-decoder", "https://huggingface.co/spaces/anmol-unitmole/streaming-speech-recognition-whisper-encoder-decoder"],
      ["Grammar Error Correction", "FLAN-T5 correction with tracked edits.", "05-grammar-error-correction-t5-encoder-decoder", "https://huggingface.co/spaces/anmol-unitmole/05-grammar-error-correction-t5-encoder-decoder"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "Transformer & Multimodal AI",
    stage: "08",
    capability: "Transformers → RAG & multimodal AI",
    description: "Eight additional systems covering long-document QA, instruction tuning, semantic search, vision-language learning, and transformer applications.",
    methods: ["Transformers", "LoRA / PEFT", "Dense retrieval", "Cross-encoders", "RAG"],
    progression: "Combines modern representations with evaluation, retrieval, governance, citations, and user-facing AI systems.",
    repository: "https://github.com/unit-mole/transformer-projects",
    categories: ["Transformers", "NLP"],
    projects: [
      ["Abstractive Text Summarization", "Sequence-to-sequence summarization.", "01-abstractive-text-summarization-transformer", "https://huggingface.co/spaces/anmol-unitmole/01-abstractive-text-summarization-transformer"],
      ["English–Hindi Translation", "Multilingual neural machine translation.", "02-neural-machine-translation-transformer", "https://huggingface.co/spaces/anmol-unitmole/english-hindi-neural-machine-translation"],
      ["Long-Document QA", "Longformer extractive question answering.", "04-long-document-question-answering-longformer", "https://huggingface.co/spaces/anmol-unitmole/long-document-question-answering-longformer"],
      ["Instruction-Tuned Domain LLM", "FLAN-T5 LoRA tuning with release governance.", "05-instruction-tuned-domain-llm", "https://huggingface.co/spaces/anmol-unitmole/instruction-tuned-domain-llm"],
      ["Multimodal Visual QA", "Image-and-text reasoning.", "06-multimodal-visual-question-answering-transformer", "https://huggingface.co/spaces/anmol-unitmole/06-multimodal-visual-question-answering-transformer"],
      ["Document Semantic Search", "Sentence-BERT dense retrieval.", "07-document-semantic-search-sentence-bert", "https://unit-mole.github.io/transformer-projects/07-document-semantic-search-sentence-bert/"],
      ["Vision Transformer Classification", "DeiT classification and CNN comparison.", "08-image-classification-vision-transformer", "https://unit-mole.github.io/transformer-projects/08-image-classification-vision-transformer/"],
      ["CLIP Image–Text Retrieval", "Cross-modal similarity and retrieval.", "09-vision-language-image-text-retrieval-clip", "https://unit-mole.github.io/transformer-projects/09-vision-language-image-text-retrieval-clip/"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
  {
    name: "Cricket Intelligence",
    stage: "09",
    capability: "Production forecasting & simulation",
    description: "Calibrated sports-intelligence systems using point-in-time features, model governance, backtesting, explainability, and tournament simulation.",
    methods: ["LightGBM", "XGBoost", "Calibration", "Backtesting", "Monte Carlo"],
    progression: "Demonstrates production-style governance: honest temporal validation, version selection, simulation, and decision-facing delivery.",
    repository: "https://github.com/unit-mole/cricket-intelligence-projects",
    categories: ["Machine Learning", "Analytics"],
    projects: [
      ["IPL Intelligence Production", "Calibrated pre-match forecasting and tournament simulation.", "01-ipl-intelligence-production", "https://huggingface.co/spaces/anmol-unitmole/ipl-intelligence-production"],
      ["ICC World Cup Intelligence", "ODI forecasting and corrected 2027 tournament simulation.", "02-world-cup-intelligence", "https://huggingface.co/spaces/anmol-unitmole/icc-world-cup-intelligence"],
    ].map(([title, summary, path, demo]) => ({ title, summary, path, demo })),
  },
];

export const projectCount = projectGroups.reduce((total, group) => total + group.projects.length, 0);
