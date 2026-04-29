const topics = [
  {
    id: "foundations",
    kicker: "Foundations Wing",
    title: "How peptides are built",
    summary:
      "Peptides are short chains of amino acids linked by peptide bonds. Their sequence, shape, and context determine what signal they carry.",
    core: "Amino acids join through dehydration synthesis.",
    next: "Amino acid anatomy, bonds, sequence length.",
    href: "#topic-lab",
  },
  {
    id: "metabolic",
    kicker: "Metabolic Signaling Lab",
    title: "Signals for glucose and appetite",
    summary:
      "Metabolic peptides act like biochemical messages. Insulin, glucagon, GLP-1, and GIP help coordinate blood glucose, digestion, and satiety.",
    core: "A peptide hormone can bind a receptor and change cell behavior.",
    next: "Receptors, feedback loops, approved therapeutics, evidence tiers.",
    href: "#topic-lab",
  },
  {
    id: "skin",
    kicker: "Skin and Repair Studio",
    title: "Structure, matrix, and tissue context",
    summary:
      "Collagen-related peptides and copper peptide topics are often discussed around skin structure, extracellular matrix signaling, and repair biology.",
    core: "Peptides can be structural fragments, signals, or both depending on context.",
    next: "Fibroblasts, collagen, extracellular matrix, evidence limits.",
    href: "#topic-lab",
  },
  {
    id: "longevity",
    kicker: "Longevity and Cellular Wing",
    title: "Cellular signaling, stress, and aging biology",
    summary:
      "This wing frames NAD-related peptide discussions, FOXO signaling, mitochondrial stress responses, and senescence-adjacent concepts as biology to understand before making claims.",
    core: "Cellular longevity topics sit at the intersection of metabolism, repair, inflammation, and gene-regulation pathways.",
    next: "NAD biology, FOXO pathways, senescence markers, mitochondrial context, evidence tiers.",
    href: "#topic-lab",
  },
  {
    id: "recovery",
    kicker: "Performance and Recovery Bay",
    title: "Recovery claims need careful sorting",
    summary:
      "Performance-oriented peptide discussions can mix human data, animal research, and anecdote. The educational job is to separate mechanism from claim.",
    core: "Mechanistic plausibility is not the same as proven human benefit.",
    next: "Study type, endpoints, legality, safety, and uncertainty.",
    href: "#topic-lab",
  },
  {
    id: "research",
    kicker: "Research Literacy Archive",
    title: "Read the label before the legend",
    summary:
      "A responsible peptide site should explain purity, research-only language, regulatory categories, and why sourcing or self-use instructions do not belong here.",
    core: "Regulatory status and evidence quality shape what can be responsibly said.",
    next: "Approved drug vs research compound vs supplement marketing.",
    href: "#topic-lab",
  },
];

const defaultNotes = [
  "For research and educational use only. Not for human consumption.",
  "Not intended to diagnose, treat, cure, or prevent any disease.",
  "Consult qualified professionals before conducting research.",
  "Quality, purity, legality, and proper handling matter.",
];

const foundationsHotspots = [
  {
    id: "what-is-a-peptide",
    label: "What Is a Peptide?",
    shape: "rect",
    coordinates: { x1: 39, y1: 8, x2: 62, y2: 70 },
    chipPosition: { x: 50, y: 18 },
    zIndex: 30,
    sectionLabel: "Foundations",
    title: "What Is a Peptide?",
    subtitle: "A peptide is a short chain of amino acids linked together.",
    body:
      "A peptide is made when amino acids join together in sequence. These linked amino acids form a chain, and the length and order of that chain help determine what the peptide does. This is the anchor concept for the whole peptide hub.",
    takeaways: [
      "Peptides are made from amino acids.",
      "Amino acids link together in a chain.",
      "The sequence and length of the chain matter.",
      "Peptides are generally smaller than most proteins.",
      "Many peptides act as messengers or functional biological molecules.",
    ],
    noteLabel: "Beginner Note",
    researchNote:
      "Think of amino acids like letters, peptides like short words, and proteins like longer sentences or more complex structures.",
    related: ["amino-acids", "peptide-bonds", "short-chains-vs-proteins", "signaling-molecules"],
  },
  {
    id: "amino-acids",
    label: "Amino Acids",
    shape: "rect",
    coordinates: { x1: 2, y1: 25, x2: 22.5, y2: 61.5 },
    chipPosition: { x: 12, y: 24 },
    zIndex: 20,
    sectionLabel: "Building Blocks",
    title: "Amino Acids: The Building Blocks",
    subtitle: "The small molecular units that combine to form peptides and proteins.",
    body:
      "Amino acids are the basic building blocks of peptides. Each amino acid has a shared core structure, but also has a side chain, often called an R group, that gives it unique properties. Those differences influence how peptides behave, fold, interact, and signal.",
    takeaways: [
      "Amino acids are the building blocks of peptides.",
      "They share a common backbone structure.",
      "The R group gives each amino acid its unique characteristics.",
      "Different amino acids influence shape, behavior, and function.",
      "Chain order matters because each amino acid contributes different properties.",
    ],
    supplement: {
      title: "Basic Amino Acid Structure",
      items: ["Amino group", "Carboxyl group", "Hydrogen", "R group"],
    },
    noteLabel: "Beginner Note",
    researchNote: "If peptides are built like a bracelet, amino acids are the individual beads.",
    related: ["what-is-a-peptide", "peptide-bonds", "short-chains-vs-proteins"],
  },
  {
    id: "peptide-bonds",
    label: "Peptide Bonds",
    shape: "rect",
    coordinates: { x1: 5, y1: 59, x2: 33, y2: 88.5 },
    chipPosition: { x: 19, y: 58 },
    zIndex: 20,
    sectionLabel: "Bond Formation",
    title: "Peptide Bonds & Dehydration Synthesis",
    subtitle: "How amino acids connect to form a chain.",
    body:
      "A peptide bond forms when one amino acid links to another. This happens through a condensation reaction, often described in introductory biology as dehydration synthesis, because water is released during bond formation. Repeating this step builds a peptide chain.",
    takeaways: [
      "A peptide bond links one amino acid to the next.",
      "Bond formation releases water.",
      "Repeating this process builds a peptide chain.",
      "The chain has direction from one end to the other.",
      "Bonding is the step that turns separate amino acids into a peptide.",
    ],
    supplement: {
      title: "Simple Process",
      text: "Amino acid + amino acid -> peptide bond forms -> water released -> chain grows",
    },
    noteLabel: "Beginner Note",
    researchNote: "This is the connection step. Without peptide bonds, amino acids remain separate pieces.",
    related: ["amino-acids", "what-is-a-peptide", "short-chains-vs-proteins"],
  },
  {
    id: "short-chains-vs-proteins",
    label: "Short Chains vs Proteins",
    shape: "rect",
    coordinates: { x1: 69, y1: 24.5, x2: 97, y2: 61 },
    chipPosition: { x: 83, y: 24 },
    zIndex: 20,
    sectionLabel: "Structure",
    title: "Short Chains vs Proteins",
    subtitle: "How peptides differ from larger, more complex protein structures.",
    body:
      "Peptides and proteins are closely related, but they are not exactly the same. In general, peptides are shorter chains of amino acids, while proteins are longer chains that often fold into more complex three-dimensional structures. The exact boundary can vary by context, but the basic idea is simple: peptides are shorter; proteins are usually larger and more structurally complex.",
    takeaways: [
      "Peptides are generally shorter amino acid chains.",
      "Proteins are usually larger and more structurally complex.",
      "Peptides may function without extensive folding.",
      "Proteins often depend heavily on their 3D structure.",
      "Both peptides and proteins are made from amino acids.",
    ],
    supplement: {
      title: "Quick Comparison",
      comparison: [
        { label: "Peptide", value: "Shorter chain, often simpler structure" },
        { label: "Protein", value: "Longer chain, often folded and more complex" },
      ],
    },
    noteLabel: "Beginner Note",
    researchNote:
      "A peptide is often like a short phrase. A protein is more like a full paragraph with structure and context.",
    related: ["what-is-a-peptide", "peptide-bonds", "signaling-molecules"],
  },
  {
    id: "signaling-molecules",
    label: "Signaling Molecules",
    shape: "rect",
    coordinates: { x1: 71.5, y1: 58, x2: 99, y2: 94 },
    chipPosition: { x: 84, y: 58 },
    zIndex: 20,
    sectionLabel: "Function",
    title: "Peptides as Signaling Molecules",
    subtitle: "How some peptides act like messages in biological systems.",
    body:
      "Many peptides play roles in communication inside the body. They can act as signaling molecules, which means they help send instructions between cells, tissues, or organ systems. This is where peptide chemistry connects to real biology.",
    takeaways: [
      "Some peptides act as biological messengers.",
      "Signals can influence metabolism, growth, repair, and communication.",
      "Peptides often work by interacting with receptors.",
      "Structure helps determine function.",
      "This is why peptides appear in many areas of biology and research.",
    ],
    noteLabel: "Beginner Note",
    researchNote: "You can think of signaling peptides as tiny biological notes that tell cells what to do next.",
    related: ["what-is-a-peptide", "short-chains-vs-proteins", "why-foundations-matter"],
  },
  {
    id: "why-foundations-matter",
    label: "Why Foundations Matter",
    shape: "ellipse",
    coordinates: { x1: 40, y1: 74, x2: 61, y2: 96 },
    chipPosition: { x: 50, y: 73 },
    zIndex: 10,
    sectionLabel: "Orientation",
    title: "Why Foundations Matter",
    subtitle: "These concepts help users understand every other section of the peptide hub.",
    body:
      "This page is the conceptual base for the entire experience. Once a user understands amino acids, peptide bonds, chain length, and signaling roles, the other sections of the site become easier to understand.",
    takeaways: [
      "Foundations explains the core language of peptide biology.",
      "Later sections build on these ideas.",
      "Understanding structure helps users understand function.",
      "Understanding function helps users navigate advanced topics more responsibly.",
    ],
    noteLabel: "Beginner Note",
    researchNote: "Before exploring applications, learn the building blocks.",
    related: ["what-is-a-peptide", "amino-acids", "signaling-molecules"],
  },
];

const performanceRecoveryHotspots = [
  {
    id: "training-stress-adaptation",
    label: "Training Stress",
    coordinates: { x1: 28, y1: 20, x2: 58, y2: 76 },
    sectionLabel: "Performance / Recovery",
    title: "Training Stress & Adaptation",
    subtitle: "Why recovery begins with the stress created by training.",
    body:
      "Training creates stress. That stress is not automatically bad - it is the signal that tells the body to adapt. Strength, endurance, mobility, and tissue resilience all depend on the balance between stress, recovery, and adaptation.",
    takeaways: [
      "Training creates stress that the body must respond to.",
      "Adaptation happens when recovery matches or exceeds the training demand.",
      "Too little stress may not create adaptation; too much stress may overwhelm recovery.",
      "Peptide research topics should be discussed within this broader recovery system.",
    ],
    researchNote:
      "Do not imply that any peptide can replace programming, rest, nutrition, rehab, or medical evaluation.",
    related: ["recovery-cycle", "recovery-practices-context", "soft-tissue-context"],
  },
  {
    id: "recovery-cycle",
    label: "Recovery Cycle",
    coordinates: { x1: 55, y1: 17, x2: 72, y2: 50 },
    sectionLabel: "Performance / Recovery",
    title: "The Recovery Cycle",
    subtitle: "A simple framework for understanding performance and repair.",
    body:
      "Recovery is a repeating cycle: training stress, biological response, repair and remodeling, adaptation, and readiness for the next bout of training.",
    takeaways: [
      "Recovery is active, not passive.",
      "Adaptation depends on timing and context.",
      "Tissue repair, inflammation, sleep, nutrition, and load management all matter.",
      "Research topics should be understood as part of a system, not isolated fixes.",
    ],
    researchNote:
      "This is an educational framework, not a protocol for injury treatment or performance enhancement.",
    related: ["training-stress-adaptation", "recovery-practices-context", "recovery-peptide-topics"],
  },
  {
    id: "soft-tissue-context",
    label: "Soft Tissue Context",
    coordinates: { x1: 83, y1: 10, x2: 98, y2: 48 },
    sectionLabel: "Performance / Recovery",
    title: "Soft Tissue Research Context",
    subtitle: "How tendon, ligament, muscle, and connective tissue research fits into recovery.",
    body:
      "Performance and recovery research often focuses on soft tissues such as muscle, tendon, ligament, fascia, and connective tissue. These tissues have different blood supply, loading patterns, healing timelines, and mechanical roles.",
    takeaways: [
      "Muscle, tendon, and ligament tissues respond differently to stress.",
      "Connective tissue remodeling can be slower than muscle adaptation.",
      "Research often studies inflammation, cell migration, blood vessel formation, and matrix remodeling.",
      "Soft tissue recovery should not be reduced to a single molecule or single pathway.",
    ],
    researchNote:
      "Avoid claims like heals tendons, repairs ligaments, or fixes injuries. Use research-first language such as studied in soft tissue contexts.",
    related: ["recovery-cycle", "recovery-peptide-topics", "training-stress-adaptation"],
  },
  {
    id: "recovery-peptide-topics",
    label: "BPC-157 / TB-500-style Topics",
    coordinates: { x1: 80, y1: 48, x2: 96, y2: 78 },
    sectionLabel: "Performance / Recovery",
    title: "Performance / Recovery Peptide Topics",
    subtitle: "A cautious overview of commonly discussed recovery-related peptide research areas.",
    body:
      "This panel introduces BPC-157 and TB-500 / thymosin beta-4-style topics in a research-context framework. These topics are often discussed around tissue-repair research, cell migration, remodeling, inflammation modulation, angiogenesis-adjacent research, and soft tissue models.",
    takeaways: [
      "This section should describe research themes, not usage guidance.",
      "BPC-157 and TB-500-style topics are often discussed in relation to tissue and recovery research.",
      "Mechanisms like cell migration, remodeling, inflammation modulation, and blood vessel formation are complex.",
      "Human-use claims require extreme caution and should not be casually presented.",
    ],
    researchNote:
      "Educational content only. Not medical advice, not dosing guidance, and not an endorsement of human use.",
    related: ["soft-tissue-context", "recovery-cycle", "recovery-practices-context"],
  },
  {
    id: "recovery-practices-context",
    label: "Recovery Practices",
    coordinates: { x1: 52, y1: 52, x2: 80, y2: 88 },
    sectionLabel: "Performance / Recovery",
    title: "Recovery Practices & Context",
    subtitle: "Why recovery depends on more than one intervention.",
    body:
      "Recovery is influenced by sleep, load management, nutrition, mobility, stress, rehab quality, and medical status. Peptide-related research topics are only one layer of a much larger system.",
    takeaways: [
      "Recovery depends on training load, rest, nutrition, sleep, and tissue status.",
      "Injuries require appropriate clinical evaluation.",
      "Adaptation is built through consistency, not shortcuts.",
      "Advanced research topics should be viewed alongside fundamentals.",
    ],
    researchNote:
      "This page should not replace sports medicine care, physical therapy, injury diagnosis, or medical treatment.",
    related: ["training-stress-adaptation", "recovery-cycle", "recovery-peptide-topics"],
  },
  {
    id: "training-load",
    label: "Training Load",
    coordinates: { x1: 0, y1: 34, x2: 28, y2: 66 },
    sectionLabel: "Performance / Recovery",
    title: "Training Load & Recovery Demand",
    subtitle: "How exercise dose influences recovery needs.",
    body:
      "Training load is the amount of stress placed on the body through exercise. It includes weight, volume, intensity, frequency, range of motion, and the person's readiness. Recovery needs rise when training demand rises.",
    takeaways: [
      "Training load includes intensity, volume, frequency, and readiness.",
      "Recovery demand changes based on stress level and tissue tolerance.",
      "More training does not always mean better adaptation.",
      "Recovery topics should be discussed in relation to load management.",
    ],
    researchNote:
      "Avoid making the page sound like peptides can compensate for poor programming, overtraining, or untreated injuries.",
    related: ["training-stress-adaptation", "recovery-cycle", "recovery-practices-context"],
  },
];

const metabolicHotspots = [
  {
    id: "meal-triggered-signaling",
    label: "Meal Signaling",
    coordinates: { x1: 34, y1: 18, x2: 55, y2: 49 },
    sectionLabel: "Metabolic",
    title: "Meal-Triggered Hormone Signaling",
    subtitle: "How the body sends signals after food enters the system.",
    body:
      "Metabolism is communication. After eating, the digestive system, pancreas, brain, liver, and other tissues exchange signals that help regulate glucose, hunger, fullness, and energy availability.",
    takeaways: [
      "Metabolism depends on communication between organs and tissues.",
      "Meals can trigger hormone signaling.",
      "GLP-1 and GIP are commonly discussed in relation to post-meal response.",
      "These pathways are complex and should not be reduced to simple appetite-switch claims.",
    ],
    researchNote:
      "Avoid implying that metabolic peptides should be used casually for weight loss, glucose control, or appetite suppression. Any human-use discussion belongs in a medical context.",
    related: ["insulin-glucose-response", "appetite-satiety", "hormones-as-messengers"],
  },
  {
    id: "insulin-glucose-response",
    label: "Glucose Response",
    coordinates: { x1: 14, y1: 42, x2: 48, y2: 88 },
    sectionLabel: "Metabolic",
    title: "Insulin & Glucose Response",
    subtitle: "How the body helps move and manage glucose after eating.",
    body:
      "When carbohydrates are digested into glucose, the body needs a way to move that glucose into tissues and maintain balance in the bloodstream. Insulin is central to that process.",
    takeaways: [
      "Insulin is a major glucose-regulating hormone.",
      "Glucose balance depends on timing, tissue response, and energy demand.",
      "Post-meal metabolism involves more than one hormone.",
      "Insulin should be discussed carefully because it is medically significant.",
    ],
    researchNote:
      "Avoid personal guidance around blood sugar, diabetes, dosing, or treatment. Any glucose-related medical concern should be directed to a qualified clinician.",
    related: ["meal-triggered-signaling", "metabolic-balance", "hormones-as-messengers"],
  },
  {
    id: "appetite-satiety",
    label: "Appetite & Satiety",
    coordinates: { x1: 68, y1: 34, x2: 88, y2: 84 },
    sectionLabel: "Metabolic",
    title: "Appetite, Satiety & Energy Intake",
    subtitle: "How hunger and fullness signals help regulate eating behavior.",
    body:
      "Hunger and fullness are not just willpower issues. They involve communication between the gut, brain, pancreas, fat tissue, and metabolic hormones.",
    takeaways: [
      "Appetite is regulated by multiple signals, not one hormone.",
      "Satiety involves gut-brain communication.",
      "GLP-1-related pathways are often discussed in this context.",
      "Metabolic health includes behavior, biology, environment, and medical context.",
    ],
    researchNote:
      "Avoid promising appetite reduction or weight-loss outcomes. Keep this educational and avoid claims that sound like medication marketing.",
    related: ["meal-triggered-signaling", "metabolic-balance", "lifestyle-context"],
  },
  {
    id: "metabolic-balance",
    label: "Metabolic Balance",
    coordinates: { x1: 22, y1: 44, x2: 62, y2: 90 },
    sectionLabel: "Metabolic",
    title: "Metabolic Balance",
    subtitle: "How glucose, appetite, energy, and hormones work together.",
    body:
      "Metabolism is an integrated system that helps the body decide when to store energy, release energy, use fuel, and signal fullness.",
    takeaways: [
      "Metabolism is a coordinated system, not a single pathway.",
      "Insulin and glucagon help balance energy storage and availability.",
      "GLP-1 and GIP are part of meal-response signaling discussions.",
      "The same hormone can have different effects depending on biological context.",
    ],
    researchNote:
      "Do not present metabolic peptides as shortcuts or standalone solutions. Metabolism is influenced by nutrition, movement, sleep, stress, genetics, and medical status.",
    related: ["insulin-glucose-response", "appetite-satiety", "lifestyle-context"],
  },
  {
    id: "hormones-as-messengers",
    label: "Hormones as Messengers",
    coordinates: { x1: 58, y1: 18, x2: 71, y2: 42 },
    sectionLabel: "Metabolic",
    title: "Hormones as Molecular Messengers",
    subtitle: "How peptide hormones help tissues communicate.",
    body:
      "Many metabolic hormones are peptides or peptide-like signaling molecules. They act like messages that help different parts of the body coordinate timing, fuel use, hunger, fullness, and glucose regulation.",
    takeaways: [
      "Some hormones are peptides.",
      "Peptide hormones can send signals between organs.",
      "Metabolic signaling depends on timing and receptor response.",
      "Understanding hormones as messengers helps users understand the whole site.",
    ],
    researchNote:
      "Hormone systems are powerful and medically important. Educational content should not imply self-experimentation or casual use.",
    related: ["meal-triggered-signaling", "insulin-glucose-response", "metabolic-balance"],
  },
  {
    id: "lifestyle-context",
    label: "Lifestyle Context",
    coordinates: { x1: 22, y1: 17, x2: 34, y2: 38 },
    sectionLabel: "Metabolic",
    title: "Energy, Lifestyle & Metabolic Context",
    subtitle: "Why metabolic peptide topics should be viewed as part of a bigger system.",
    body:
      "Metabolic health is shaped by food quality, meal timing, movement, sleep, stress, body composition, genetics, and medical history. Peptide-related metabolic topics are only one layer of the story.",
    takeaways: [
      "Metabolic health is influenced by daily habits and biology.",
      "Hormones respond to context, not just isolated inputs.",
      "Lifestyle foundations matter even when discussing advanced research topics.",
      "Responsible education should avoid oversimplified weight-loss narratives.",
    ],
    researchNote:
      "This page is educational and should not replace medical care, nutrition counseling, diabetes management, or obesity treatment guidance.",
    related: ["appetite-satiety", "metabolic-balance", "hormones-as-messengers"],
  },
];

const longevityHotspots = [
  {
    id: "cellular-energy",
    label: "Cellular Energy",
    coordinates: { x1: 45, y1: 58, x2: 58, y2: 78 },
    sectionLabel: "Longevity / Cellular",
    title: "Cellular Energy & NAD+ Pathways",
    subtitle: "How cells produce, recycle, and manage energy over time.",
    body:
      "Cellular energy is central to longevity research because every repair process depends on the cell having enough usable energy. NAD+ is often discussed in this context because it participates in redox reactions and supports enzymes involved in metabolism, DNA repair, and cellular stress response.",
    takeaways: [
      "NAD+ is involved in cellular energy metabolism.",
      "Mitochondria are central to energy production and stress adaptation.",
      "Energy availability influences repair, maintenance, and resilience.",
      "Longevity research often studies how cells preserve function over time.",
    ],
    researchNote:
      "This content is educational and research-oriented. It should not suggest that any peptide can diagnose, treat, cure, prevent, or reverse aging.",
    related: ["epigenetics-mitochondria", "healthy-aging-pathways", "aging-process"],
  },
  {
    id: "epigenetics-mitochondria",
    label: "Epigenetics & Mitochondria",
    coordinates: { x1: 31, y1: 67, x2: 47, y2: 84 },
    sectionLabel: "Longevity / Cellular",
    title: "Epigenetics, Mitochondria & Cellular Health",
    subtitle: "The systems that help cells regulate identity, energy, and adaptation.",
    body:
      "Epigenetics refers to how cells regulate gene activity without changing the DNA sequence itself. In longevity research, epigenetic regulation is often discussed alongside mitochondrial health because both influence how cells respond to stress, maintain function, and adapt over time.",
    takeaways: [
      "Epigenetic regulation helps determine how genes are expressed.",
      "Mitochondria influence energy production and cellular signaling.",
      "Aging research often looks at how these systems change over time.",
      "Cellular resilience depends on coordinated repair, energy, and stress-response systems.",
    ],
    researchNote:
      "Avoid claims like restore youth, reverse biological age, or reset aging. Use language like studied in, associated with, and investigated for.",
    related: ["cellular-energy", "healthy-aging-pathways", "aging-process"],
  },
  {
    id: "aging-process",
    label: "Aging Process",
    coordinates: { x1: 42, y1: 10, x2: 74, y2: 43 },
    sectionLabel: "Longevity / Cellular",
    title: "The Healthy Aging Framework",
    subtitle: "A simple way to understand longevity research pathways.",
    body:
      "Healthy aging research often focuses on how cells protect themselves, repair damage, adapt to stress, and maintain function. This framework gives users a simple mental model without turning the page into a dense biology lecture.",
    takeaways: [
      "Protect: reduce or manage cellular stress.",
      "Repair: maintain DNA, proteins, membranes, and organelles.",
      "Adapt: respond appropriately to changing conditions.",
      "Thrive: preserve function and resilience over time.",
    ],
    researchNote: "This is a conceptual model, not a medical protocol.",
    related: ["cellular-energy", "epigenetics-mitochondria", "healthy-aging-pathways"],
  },
  {
    id: "healthy-aging-pathways",
    label: "Healthy Aging Concepts",
    coordinates: { x1: 20, y1: 32, x2: 81, y2: 76 },
    sectionLabel: "Longevity / Cellular",
    title: "Longevity Pathways & Cellular Resilience",
    subtitle: "How researchers think about stress resistance, repair, and long-term function.",
    body:
      "Longevity research is not just about lifespan. It is also about healthspan: the period of life spent with preserved function, resilience, and quality of life. Cellular pathways such as FOXO signaling, stress resistance, repair mechanisms, and senescence-adjacent biology are often discussed in this context.",
    takeaways: [
      "Healthspan focuses on function and resilience, not just lifespan.",
      "FOXO-related pathways are connected to stress response and repair biology.",
      "Senescence-adjacent research studies cells that lose normal function over time.",
      "Longevity science is complex and should be approached carefully.",
    ],
    researchNote:
      "Do not imply that manipulating one pathway produces guaranteed longevity benefits. The body's aging systems are interconnected and context-dependent.",
    related: ["aging-process", "epigenetics-mitochondria", "cellular-energy"],
  },
  {
    id: "lifestyle-context",
    label: "Lifestyle Context",
    coordinates: { x1: 0, y1: 8, x2: 23, y2: 58 },
    sectionLabel: "Longevity / Cellular",
    title: "The Bigger Longevity Picture",
    subtitle: "Why cellular research should be viewed alongside lifestyle foundations.",
    body:
      "Longevity-related peptide topics are only one part of a much broader picture. Sleep, nutrition, exercise, metabolic health, stress management, and medical care all influence how the body ages and adapts over time.",
    takeaways: [
      "Cellular health is influenced by many systems.",
      "Lifestyle foundations shape metabolic and inflammatory context.",
      "Research topics should not be treated as substitutes for medical care.",
      "Responsible education should connect molecules to the bigger picture.",
    ],
    researchNote:
      "Peptide research topics are not a replacement for healthy habits, clinical evaluation, or medical guidance.",
    related: ["healthy-aging-pathways", "cellular-energy", "aging-process"],
  },
];

const skinRepairHotspots = [
  {
    id: "skin-research",
    label: "Skin Research",
    coordinates: { x1: 16, y1: 28, x2: 39, y2: 82 },
    sectionLabel: "Skin / Repair",
    title: "Skin Biology Research",
    subtitle: "How researchers study skin structure, repair, and cellular behavior.",
    body:
      "This hotspot introduces the research side of skin repair. Skin-focused research often looks at cell behavior, barrier integrity, extracellular matrix structure, and how tissues respond to stress or injury.",
    takeaways: [
      "Skin repair involves multiple layers, cell types, and signaling pathways.",
      "Researchers study how skin cells respond to stress, injury, and environmental exposure.",
      "Fibroblasts are commonly discussed because they help maintain the extracellular matrix.",
      "Good skin-repair education should separate research concepts from treatment claims.",
    ],
    researchNote:
      "Use careful wording such as studied for, associated with, investigated in, and research context. Avoid direct treatment or cosmetic outcome claims unless reviewed and properly supported.",
    related: ["repair-signaling", "skin-peptide-topics", "skin-barrier-matrix"],
  },
  {
    id: "repair-signaling",
    label: "Repair Signaling",
    coordinates: { x1: 58, y1: 20, x2: 77, y2: 67 },
    sectionLabel: "Skin / Repair",
    title: "Repair Signaling Concepts",
    subtitle: "How biological signals coordinate skin maintenance and tissue response.",
    body:
      "Skin repair involves coordinated signaling between cells, structural proteins, immune activity, and tissue remodeling processes. This section explains repair as a sequence of signals rather than a simple ingredient-does-X story.",
    takeaways: [
      "Repair signaling involves communication between cells and surrounding tissue.",
      "Skin remodeling depends on timing, context, and biological balance.",
      "Overactive or poorly regulated signaling can matter as much as underactive signaling.",
      "Peptide-related topics should be framed as research areas, not guaranteed outcomes.",
    ],
    researchNote:
      "Avoid language such as accelerates healing unless the page is clearly discussing reviewed research and not consumer use.",
    related: ["skin-research", "repair-process", "skin-barrier-matrix"],
  },
  {
    id: "skin-peptide-topics",
    label: "Collagen / GHK-Cu / ECM",
    coordinates: { x1: 39, y1: 51, x2: 62, y2: 76 },
    sectionLabel: "Skin / Repair",
    title: "Skin / Repair Peptide Topics",
    subtitle: "A high-level overview of commonly discussed skin-repair peptide categories.",
    body:
      "This is the main peptide-focused panel on the page. It groups collagen peptides, GHK-Cu, wound-repair signaling, and extracellular matrix support as educational research topics rather than product claims.",
    takeaways: [
      "Skin-related peptide topics are often connected to structure, signaling, and matrix maintenance.",
      "Collagen and elastin are major structural themes.",
      "GHK-Cu should be handled with careful research-first language.",
      "Skin repair should not be presented as a guaranteed cosmetic or medical outcome.",
    ],
    researchNote:
      "Keep this panel educational and avoid language that sounds like a product label or medical claim.",
    related: ["skin-barrier-matrix", "repair-signaling", "skin-research"],
  },
  {
    id: "skin-barrier-matrix",
    label: "Skin Barrier & Matrix",
    coordinates: { x1: 72, y1: 54, x2: 90, y2: 84 },
    sectionLabel: "Skin / Repair",
    title: "Skin Barrier & Extracellular Matrix",
    subtitle: "The structural framework that helps skin stay resilient.",
    body:
      "The skin is not just a surface. It has layers, cells, fibers, blood supply, hydration systems, and a surrounding extracellular matrix. The extracellular matrix can be explained as the scaffolding around cells.",
    takeaways: [
      "The skin barrier helps protect against environmental stress.",
      "The dermis contains structural components like collagen and elastin.",
      "The extracellular matrix provides support around cells.",
      "Repair and remodeling depend on both cells and the surrounding matrix.",
    ],
    researchNote:
      "Use this panel to educate, not sell. Avoid oversimplified claims like more collagen automatically means better skin.",
    related: ["skin-peptide-topics", "repair-process", "visualizing-skin"],
  },
  {
    id: "repair-process",
    label: "Repair Process",
    coordinates: { x1: 36, y1: 8, x2: 65, y2: 40 },
    sectionLabel: "Skin / Repair",
    title: "The Skin Repair Process",
    subtitle: "A simple framework for understanding skin maintenance and renewal.",
    body:
      "This hotspot acts as the page's big-picture explanation. It turns the wall diagram into a beginner-friendly sequence: stress or injury, signaling response, cell activity, matrix remodeling, and barrier recovery.",
    takeaways: [
      "Skin repair happens in phases.",
      "Inflammation is part of repair, but balance matters.",
      "Cells and matrix components work together.",
      "Repair outcomes depend on context, health status, and many biological factors.",
    ],
    researchNote:
      "This is a conceptual framework, not a protocol or treatment recommendation.",
    related: ["repair-signaling", "skin-barrier-matrix", "skin-research"],
  },
  {
    id: "visualizing-skin",
    label: "Visualize Skin Layers",
    coordinates: { x1: 55, y1: 43, x2: 68, y2: 58 },
    sectionLabel: "Skin / Repair",
    title: "Visualizing Skin Structure",
    subtitle: "How diagrams help connect surface appearance to deeper biology.",
    body:
      "Diagrams, imaging, and simplified models help users understand what is happening below the skin surface. This panel bridges familiar skincare concerns with the deeper biological systems the site is teaching.",
    takeaways: [
      "Skin appearance is connected to deeper structural systems.",
      "Visual models help explain layers, cells, and matrix structure.",
      "Diagrams simplify biology but are not a substitute for clinical evaluation.",
      "Good education connects visuals to cautious scientific explanation.",
    ],
    researchNote:
      "Avoid implying that a diagram can diagnose skin health or predict personal outcomes.",
    related: ["skin-barrier-matrix", "repair-process", "skin-peptide-topics"],
  },
];

const researchUseHotspots = [
  {
    id: "research-peptide-definition",
    label: "What Research Use Means",
    shape: "rect",
    coordinates: { x1: 37, y1: 10, x2: 56, y2: 35 },
    chipPosition: { x: 46.5, y: 10 },
    zIndex: 30,
    sectionLabel: "Research Use",
    title: "What \"Research Peptide\" Means",
    subtitle: "Understanding research-only language and why it matters.",
    body:
      "A research peptide is typically described as a compound intended for laboratory research, analytical work, or non-clinical investigation. The key point is that research-use language separates laboratory exploration from human-use claims.",
    takeaways: [
      "Research use generally means laboratory or non-clinical context.",
      "It should not imply human consumption or therapeutic use.",
      "Human-use claims can create medical, regulatory, and legal issues.",
      "Research-only language should be clear, consistent, and not misleading.",
      "Visitors should understand this boundary before exploring specific peptide topics.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "Avoid language that implies a research peptide is intended to diagnose, treat, cure, prevent, or improve a human condition.",
    related: ["quality-documentation", "scientific-workflow", "identity-verification"],
  },
  {
    id: "scientific-workflow",
    label: "Scientific Workflow",
    shape: "rect",
    coordinates: { x1: 13, y1: 10, x2: 31, y2: 38 },
    chipPosition: { x: 22, y: 10 },
    zIndex: 25,
    sectionLabel: "Research Process",
    title: "The Research Process",
    subtitle: "From question to experiment to analysis.",
    body:
      "Good research starts with a clear question, then moves through controlled experimentation, observation, analysis, and interpretation. Peptide research is not just about the compound itself. It is also about study design, controls, documentation, and careful interpretation.",
    takeaways: [
      "Research begins with a defined question.",
      "Experiments need controls, consistency, and documentation.",
      "Results should be analyzed cautiously.",
      "One experiment rarely proves a broad conclusion.",
      "Reproducibility is central to scientific credibility.",
    ],
    supplement: {
      title: "Research Sequence",
      text: "Question -> Design -> Experiment -> Analyze -> Interpret -> Replicate",
    },
    noteLabel: "Responsible Framing",
    researchNote:
      "Early-stage findings should not be translated into consumer claims without appropriate evidence and regulatory review.",
    related: ["analysis-observation", "samples-variables", "quality-documentation"],
  },
  {
    id: "analysis-observation",
    label: "Analysis & Observation",
    shape: "rect",
    coordinates: { x1: 20, y1: 32, x2: 42, y2: 83 },
    chipPosition: { x: 31, y: 32 },
    zIndex: 35,
    sectionLabel: "Analysis",
    title: "Analysis & Observation",
    subtitle: "How researchers examine data, samples, and outcomes.",
    body:
      "The microscope station represents observation and analysis. In a research context, the value of a peptide-related experiment depends on how carefully results are measured, compared, and interpreted.",
    takeaways: [
      "Research depends on careful observation.",
      "Measurements should be consistent and documented.",
      "Results need context, controls, and comparison.",
      "Data interpretation should avoid overclaiming.",
      "Strong research asks what the evidence actually shows.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "Observation in a lab does not automatically translate to predictable effects in humans.",
    related: ["scientific-workflow", "samples-variables", "identity-verification"],
  },
  {
    id: "handling-preparation",
    label: "Handling & Preparation",
    shape: "rect",
    coordinates: { x1: 57, y1: 18, x2: 74, y2: 68 },
    chipPosition: { x: 65.5, y: 18 },
    zIndex: 35,
    sectionLabel: "Lab Practice",
    title: "Lab Handling & Preparation",
    subtitle: "Why technique, consistency, and controls matter.",
    body:
      "The pipetting scientist represents the hands-on part of research. Handling, preparation, dilution, storage, labeling, and technique can all influence the quality of an experiment.",
    takeaways: [
      "Lab technique affects research quality.",
      "Samples should be labeled clearly and handled consistently.",
      "Storage and preparation conditions matter.",
      "Poor handling can create unreliable results.",
      "Responsible research requires training, controls, and documentation.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "Do not provide dosing, reconstitution, or human-use instructions. Keep this focused on general lab-quality principles.",
    related: ["samples-variables", "quality-documentation", "sourcing-storage"],
  },
  {
    id: "samples-variables",
    label: "Samples & Variables",
    shape: "rect",
    coordinates: { x1: 58, y1: 50, x2: 86, y2: 78 },
    chipPosition: { x: 72, y: 50 },
    zIndex: 32,
    sectionLabel: "Experimental Design",
    title: "Samples, Controls & Variables",
    subtitle: "Why consistency matters in research interpretation.",
    body:
      "The test tubes and sample rack represent experimental variables. In peptide research, results can vary depending on concentration, purity, sample preparation, testing conditions, model system, and measurement method.",
    takeaways: [
      "Experiments depend on controlled variables.",
      "Sample identity, concentration, and purity matter.",
      "Controls help researchers compare results.",
      "Small differences in method can affect interpretation.",
      "Reproducibility depends on consistency.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "Do not imply that research variables can be simplified into consumer instructions. Keep the focus on experimental design.",
    related: ["handling-preparation", "quality-documentation", "scientific-workflow"],
  },
  {
    id: "sourcing-storage",
    label: "Sourcing & Storage",
    shape: "rect",
    coordinates: { x1: 72, y1: 4, x2: 100, y2: 56 },
    chipPosition: { x: 86, y: 5 },
    zIndex: 22,
    sectionLabel: "Quality Control",
    title: "Sourcing, Storage & Batch Consistency",
    subtitle: "Why the source and condition of a compound matter.",
    body:
      "The bottle shelves represent supply quality and storage. In research, consistency matters. A compound's identity, purity, storage conditions, batch history, and documentation can affect whether results are reliable.",
    takeaways: [
      "Source quality can affect research reliability.",
      "Batch-to-batch consistency matters.",
      "Storage conditions can affect stability.",
      "Labels and documentation should be clear.",
      "Third-party testing helps support transparency.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "Quality documentation supports research transparency. It should not be used to imply human-use safety or medical benefit.",
    related: ["quality-documentation", "identity-verification", "samples-variables"],
  },
  {
    id: "quality-documentation",
    label: "Quality Documentation",
    shape: "rect",
    coordinates: { x1: 63, y1: 70, x2: 86, y2: 96 },
    chipPosition: { x: 74.5, y: 70 },
    zIndex: 34,
    sectionLabel: "Transparency",
    title: "Quality Documentation",
    subtitle: "Purity, identity, potency, records, and traceability.",
    body:
      "The notebook represents the paper trail that supports responsible research. Quality documentation may include purity data, identity verification, batch information, testing methods, storage notes, and records of how a sample was handled.",
    takeaways: [
      "Documentation supports traceability.",
      "Purity, identity, and potency are different concepts.",
      "Records help researchers understand what was tested.",
      "A certificate of analysis is only useful if it is credible and specific.",
      "Quality claims should be backed by clear documentation.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "A COA or purity claim should not be used to suggest human safety, medical benefit, or approval for consumption.",
    related: ["identity-verification", "sourcing-storage", "samples-variables"],
  },
  {
    id: "identity-verification",
    label: "Identity Verification",
    shape: "rect",
    coordinates: { x1: 55, y1: 7, x2: 69, y2: 29 },
    chipPosition: { x: 62, y: 7 },
    zIndex: 24,
    sectionLabel: "Testing",
    title: "Identity Verification & Third-Party Testing",
    subtitle: "Confirming that a compound is what it claims to be.",
    body:
      "Identity verification is about confirming that a compound matches what it is claimed to be. In peptide research, testing may evaluate identity, purity, molecular weight, and other quality characteristics. The key idea is that quality depends on more than a label.",
    takeaways: [
      "Identity verification asks, \"Is this what the label says it is?\"",
      "Purity asks, \"How much of the sample is the intended compound?\"",
      "Potency and concentration are related but not identical.",
      "Third-party testing can support trust when it is specific and credible.",
      "Testing should be tied to the actual batch being discussed.",
    ],
    noteLabel: "Responsible Framing",
    researchNote:
      "Testing supports research transparency. It should not be framed as proof of safety for human use.",
    related: ["quality-documentation", "sourcing-storage", "analysis-observation"],
  },
];

const roomSections = {
  foundations: {
    theme: "foundations",
    title: "Foundations of Peptides",
    subtitle: "The building blocks behind peptide biology.",
    sceneLabel: "Explore -> Learn -> Understand",
    image: "./assets/foundations-of-peptides.png",
    embeddedCopy: true,
    interaction: "hotspots",
    hotspots: foundationsHotspots,
    introPulseOrder: [
      "what-is-a-peptide",
      "amino-acids",
      "peptide-bonds",
      "short-chains-vs-proteins",
      "signaling-molecules",
      "why-foundations-matter",
    ],
    imageAlt:
      "A grand learning hall with peptide exhibits, molecular sculptures, and students exploring peptide biology",
    listTitle: "Foundations topics",
    benefitsTitle: "Core ideas",
    flowTitle: "Learning path",
    flowNote: "Foundations explains the core language behind every peptide topic in the hub.",
    peptides: [
      {
        name: "What Is a Peptide?",
        summary: "Short amino acid chains whose sequence, length, and shape affect function.",
      },
      {
        name: "Amino Acids",
        summary: "The molecular building blocks that form peptides and proteins.",
      },
      {
        name: "Peptide Bonds",
        summary: "The links that connect amino acids into a chain.",
      },
    ],
    benefits: [
      "Amino acid building blocks",
      "Peptide bond formation",
      "Chain length and structure",
      "Signaling molecule context",
      "Responsible orientation before advanced topics",
    ],
    flow: ["What it is", "What it is made of", "How it connects", "Why it matters"],
    notes: defaultNotes,
  },
  recovery: {
    theme: "recovery",
    title: "Performance / Recovery Peptides",
    subtitle: "Stress. Adapt. Recover.",
    sceneLabel: "Train -> Adapt -> Recover",
    image: "./assets/performance-recovery-lab.png",
    embeddedCopy: true,
    interaction: "hotspots",
    hotspots: performanceRecoveryHotspots,
    introPulseOrder: [
      "training-stress-adaptation",
      "recovery-cycle",
      "soft-tissue-context",
      "recovery-peptide-topics",
    ],
    imageAlt:
      "Illustrated performance and recovery lab with athlete training, peptide models, research boards, and recovery stations",
    listTitle: "Research topics",
    benefitsTitle: "Potential research areas",
    flowTitle: "Recovery cycle",
    flowNote:
      "These topics are discussed around training stress, soft tissue research, inflammation modulation, angiogenesis-adjacent concepts, and recovery models.",
    peptides: [
      {
        name: "BPC-157 research discussions",
        summary: "Often discussed online around tissue-repair research contexts, GI models, tendon and ligament topics, and inflammation-adjacent pathways.",
      },
      {
        name: "TB-500 / thymosin beta-4-style topics",
        summary: "Often discussed around cell migration, angiogenesis-adjacent research, tissue remodeling, and recovery-related models.",
      },
      {
        name: "Soft tissue research context",
        summary: "Tendon, ligament, muscle, and connective tissue research requires careful, non-treatment language.",
      },
    ],
    benefits: [
      "Training stress and adaptation",
      "Soft tissue research models",
      "Inflammation-modulation contexts",
      "Cell migration and remodeling concepts",
      "Legal, safety, and human-use sensitivity",
    ],
    flow: ["Stress", "Adaptation", "Recovery", "Repeat"],
    notes: defaultNotes,
  },
  metabolic: {
    theme: "metabolic",
    title: "Metabolic Peptides",
    subtitle: "Meal. Signal. Balance.",
    sceneLabel: "Fuel Better",
    image: "./assets/metabolic-peptides.png",
    embeddedCopy: true,
    interaction: "hotspots",
    hotspots: metabolicHotspots,
    introPulseOrder: [
      "meal-triggered-signaling",
      "insulin-glucose-response",
      "appetite-satiety",
      "metabolic-balance",
      "hormones-as-messengers",
      "lifestyle-context",
    ],
    imageAlt: "Illustrated metabolic peptide cafe lab with nutrition, hormone, and glucose signaling panels",
    listTitle: "Key metabolic peptides",
    benefitsTitle: "Potential benefits",
    flowTitle: "How they work together",
    flowNote:
      "These peptides communicate with the body's natural systems to help maintain metabolic balance and energy homeostasis.",
    peptides: [
      {
        name: "Insulin",
        summary: "Supports glucose uptake and utilization.",
      },
      {
        name: "GLP-1",
        summary: "Enhances insulin secretion, reduces appetite, and slows gastric emptying.",
      },
      {
        name: "GIP",
        summary: "Enhances insulin secretion in response to meals.",
      },
      {
        name: "Glucagon",
        summary: "Supports healthy glucose mobilization and energy availability.",
      },
      {
        name: "Appetite / Glucose Signaling",
        summary: "Peptides that influence hunger, satiety, and glucose regulation pathways.",
      },
    ],
    benefits: [
      "Supports healthy blood sugar levels",
      "Appetite regulation and satiety",
      "Improved nutrient utilization",
      "Metabolic efficiency",
      "Weight management support",
    ],
    flow: ["Meal intake", "Hormone release", "Glucose balance", "Appetite control"],
    notes: defaultNotes,
  },
  skin: {
    theme: "skin",
    title: "Skin / Repair Peptides",
    subtitle: "Structure. Signal. Remodel.",
    sceneLabel: "Skin Repair Process",
    image: "./assets/skin-repair-peptides.png",
    embeddedCopy: true,
    interaction: "hotspots",
    hotspots: skinRepairHotspots,
    introPulseOrder: ["skin-barrier-matrix", "repair-process", "skin-peptide-topics"],
    imageAlt: "Illustrated skin repair peptide lab with researchers, skin process boards, and repair panels",
    listTitle: "Key skin / repair peptides",
    benefitsTitle: "Potential benefits",
    flowTitle: "How they work",
    flowNote:
      "These topics are organized around barrier function, cell activity, collagen and elastin signaling, and extracellular matrix support.",
    peptides: [
      {
        name: "Collagen Peptides",
        summary: "Support collagen synthesis, skin elasticity, and structural repair conversations.",
      },
      {
        name: "GHK-Cu",
        summary: "Copper peptide topic associated with collagen production, wound-healing biology, and antioxidant context.",
      },
      {
        name: "Wound-Repair Signaling",
        summary: "Peptides that help regulate inflammation and tissue-repair pathways.",
      },
      {
        name: "Extracellular Matrix Support",
        summary: "Supports discussion of the skin's structural framework, firmness, and hydration.",
      },
    ],
    benefits: [
      "Improved skin elasticity and firmness",
      "Enhanced wound-healing and tissue-repair context",
      "Stronger skin barrier function",
      "Reduced signs of aging and fine-line conversations",
      "Support for healthy extracellular matrix",
    ],
    flow: ["Support barrier function", "Stimulate cell activity", "Promote collagen and elastin", "Rebuild matrix"],
    notes: defaultNotes,
  },
  longevity: {
    theme: "longevity",
    title: "Longevity / Cellular Peptides",
    subtitle: "Extend Healthspan. Support Cellular Resilience.",
    sceneLabel: "Protect -> Repair -> Adapt -> Thrive",
    image: "./assets/longevity-cellular-peptides.png",
    embeddedCopy: true,
    interaction: "hotspots",
    hotspots: longevityHotspots,
    imageAlt: "Illustrated longevity and cellular peptide study with aging biology, mitochondria, and resilience panels",
    listTitle: "Key longevity peptides",
    benefitsTitle: "Potential benefits",
    flowTitle: "How they support longevity",
    flowNote:
      "These concepts connect cellular energy, stress resistance, DNA and protein protection, repair, and long-term cellular function.",
    peptides: [
      {
        name: "NAD+ Support Peptides",
        summary: "Support NAD+ production and energy metabolism discussions for healthy cellular function.",
      },
      {
        name: "FOXO Pathway Activators",
        summary: "Topics linked to stress resistance, longevity signaling, and cellular repair pathways.",
      },
      {
        name: "Senescence-Adjacent Peptides",
        summary: "Target senescent-cell pathway concepts to support tissue health and functional vitality discussions.",
      },
      {
        name: "Mitochondrial Support",
        summary: "Promote mitochondrial biogenesis and efficiency concepts for sustained cellular energy.",
      },
      {
        name: "Telomere Support Peptides",
        summary: "Support telomere integrity and chromosomal-stability concepts as part of aging biology.",
      },
    ],
    benefits: [
      "Support healthy aging at the cellular level",
      "Enhance cellular repair and stress resistance",
      "Promote mitochondrial health and energy",
      "Maintain genomic stability and DNA integrity",
      "Support cognitive-function and clarity discussions",
    ],
    flow: ["Cellular energy", "Stress resistance", "DNA and protein protection", "Cellular repair", "Healthspan"],
    notes: defaultNotes,
  },
  research: {
    theme: "research",
    title: "Research Use Peptides",
    subtitle: "Science. Integrity. Transparency.",
    sceneLabel: "Question -> Experiment -> Analyze -> Understand",
    image: "./assets/research-use-peptides.png",
    embeddedCopy: true,
    interaction: "hotspots",
    hotspots: researchUseHotspots,
    introPulseOrder: [
      "research-peptide-definition",
      "scientific-workflow",
      "handling-preparation",
      "samples-variables",
      "identity-verification",
      "quality-documentation",
      "sourcing-storage",
      "analysis-observation",
    ],
    imageAlt: "Illustrated research-use peptide laboratory with researchers, labeled vials, process boards, and quality notes",
    listTitle: "Key considerations",
    benefitsTitle: "Quality and transparency",
    flowTitle: "Best practices",
    flowNote:
      "Research-use education should center on transparency, quality controls, ethics, and the difference between laboratory research and human-use claims.",
    peptides: [
      {
        name: "For Research Use Only",
        summary: "Not for human consumption and not intended to diagnose, treat, cure, or prevent disease.",
      },
      {
        name: "Legal and Regulatory Status",
        summary: "Researchers are responsible for understanding and complying with applicable laws and regulations.",
      },
      {
        name: "Ethical Research",
        summary: "Conduct research responsibly with respect for safety, ethics, and the scientific process.",
      },
    ],
    benefits: [
      "Purity and quality reduce variability",
      "Identity verification confirms the peptide is what it claims to be",
      "Third-party testing supports quality and transparency",
      "Consistent supply supports reproducible research",
      "Clear boundaries protect legitimate scientific access",
    ],
    flow: ["Proper lab techniques", "Detailed records", "Secure storage", "Responsible disposal", "Ethical collaboration"],
    notes: [
      "Human-use claims require appropriate regulatory review.",
      "Unverified claims can be misleading and potentially harmful.",
      "Clear product labeling helps preserve legitimate research access.",
      "This site does not provide sourcing, dosing, or self-use instructions.",
    ],
  },
};

const libraryCategories = [
  {
    id: "metabolic",
    label: "Metabolic",
    room: "metabolic",
    accent: "#7bae4a",
    summary: "Meal response, glucose balance, appetite signaling, and hormone communication.",
  },
  {
    id: "recovery",
    label: "Performance / Recovery",
    room: "recovery",
    accent: "#4fa8c8",
    summary: "Training stress, tissue-response models, remodeling, and recovery research context.",
  },
  {
    id: "skin",
    label: "Skin / Repair",
    room: "skin",
    accent: "#c97891",
    summary: "Barrier biology, collagen, extracellular matrix, and repair-signaling concepts.",
  },
  {
    id: "longevity",
    label: "Longevity / Cellular",
    room: "longevity",
    accent: "#d8a84f",
    summary: "Cellular energy, mitochondria, stress response, and healthy-aging research concepts.",
  },
  {
    id: "research",
    label: "Research Use",
    room: "research",
    accent: "#65c7c9",
    summary: "Quality, transparency, labeling, ethics, and boundaries around human-use claims.",
  },
];

const peptideLibrary = {
  metabolic: [
    {
      id: "insulin",
      name: "Insulin",
      summary: "A peptide hormone central to glucose uptake and post-meal fuel handling.",
      mechanism: "Insulin binds insulin receptors on responsive tissues and helps coordinate glucose uptake, storage, and broader nutrient signaling.",
      context: "Discussed in established medical and physiology contexts because insulin biology is foundational to glucose regulation.",
      caution: "Glucose-related medical concerns belong with qualified clinicians. This library does not provide diabetes management, dosing, or treatment guidance.",
      chips: ["Peptide hormone", "Glucose regulation", "Medical context"],
      related: ["glp-1", "gip", "glucagon"],
    },
    {
      id: "glp-1",
      name: "GLP-1",
      summary: "A gut-derived incretin topic connected to meal response and satiety signaling.",
      mechanism: "GLP-1-related pathways are discussed around post-meal insulin signaling, gastric-emptying context, and gut-brain satiety communication.",
      context: "Studied extensively in metabolic physiology and clinical medicine, but outcomes depend on context, indication, and supervision.",
      caution: "Avoid reducing GLP-1 biology to casual appetite suppression or weight-loss promises.",
      chips: ["Incretin", "Meal response", "Gut-brain signaling"],
      related: ["gip", "appetite-satiety-signaling", "insulin"],
    },
    {
      id: "gip",
      name: "GIP",
      summary: "An incretin hormone discussed around meal-triggered insulin response.",
      mechanism: "GIP is discussed as part of the signaling network that helps the body interpret nutrients after meals.",
      context: "Often taught alongside GLP-1 because both are incretin-related metabolic signaling topics.",
      caution: "Do not interpret a single hormone pathway as a complete metabolic strategy.",
      chips: ["Incretin", "Post-meal signal", "Hormone network"],
      related: ["glp-1", "insulin", "glucagon"],
    },
    {
      id: "glucagon",
      name: "Glucagon",
      summary: "A peptide hormone connected to glucose mobilization and energy availability.",
      mechanism: "Glucagon signaling is discussed around liver glucose output and the balance between storage and mobilization.",
      context: "Useful for understanding metabolism as a two-way system, not only a glucose-lowering story.",
      caution: "Energy balance is medically significant and should not be simplified into self-directed intervention advice.",
      chips: ["Peptide hormone", "Energy availability", "Liver signaling"],
      related: ["insulin", "metabolic-balance", "c-peptide"],
    },
    {
      id: "amylin",
      name: "Amylin",
      summary: "A pancreatic peptide topic discussed around meal response and satiety biology.",
      mechanism: "Amylin is discussed in relation to gastric-emptying context, post-meal glucose appearance, and fullness signaling.",
      context: "Helpful for explaining that appetite and glucose response involve multiple coordinated signals.",
      caution: "Avoid presenting satiety peptides as willpower fixes or standalone weight-management answers.",
      chips: ["Satiety context", "Pancreatic peptide", "Meal response"],
      related: ["glp-1", "appetite-satiety-signaling", "insulin"],
    },
    {
      id: "c-peptide",
      name: "C-peptide",
      summary: "A cleavage product commonly used as a marker in insulin-production discussions.",
      mechanism: "C-peptide is released when proinsulin is processed, making it useful in physiology and clinical measurement contexts.",
      context: "Included to show that peptide biology includes markers and processing products, not just active signaling molecules.",
      caution: "Lab interpretation is clinical; this site does not interpret personal biomarkers.",
      chips: ["Biomarker context", "Insulin processing", "Clinical measurement"],
      related: ["insulin", "glucagon", "gip"],
    },
    {
      id: "appetite-satiety-signaling",
      name: "Appetite / Satiety Signaling",
      summary: "A broad topic covering gut-brain communication, hunger, fullness, and energy intake.",
      mechanism: "Appetite signaling involves gut peptides, brain circuits, adipose signals, pancreatic hormones, and behavioral context.",
      context: "Useful as a big-picture frame before discussing any one incretin or satiety-related peptide.",
      caution: "Avoid claims that one molecule controls appetite or body composition by itself.",
      chips: ["System concept", "Gut-brain axis", "Behavior context"],
      related: ["glp-1", "amylin", "gip"],
    },
  ],
  recovery: [
    {
      id: "bpc-157-research-discussions",
      name: "BPC-157 research discussions",
      summary: "A widely discussed research topic around tissue-response models and GI-context studies.",
      mechanism: "Online discussions often connect BPC-157 to tissue-repair pathways, inflammation-adjacent mechanisms, angiogenesis-adjacent concepts, and GI models.",
      context: "Best framed as a research discussion area with mixed evidence quality and careful separation between models and human-use claims.",
      caution: "Do not present BPC-157 as an injury treatment, recovery protocol, or endorsement of human use.",
      chips: ["Research discussion", "Soft tissue context", "Human-use sensitive"],
      related: ["tb-500-thymosin-beta-4-style-topics", "soft-tissue-remodeling-concepts", "igf-axis-research-context"],
    },
    {
      id: "tb-500-thymosin-beta-4-style-topics",
      name: "Thymosin beta-4 / TB-500-style topics",
      summary: "A recovery-related research area often discussed around cell migration and remodeling.",
      mechanism: "Thymosin beta-4-style discussions often involve actin dynamics, cell migration, angiogenesis-adjacent biology, and tissue remodeling models.",
      context: "The topic needs strict wording because online claims often move faster than supported human evidence.",
      caution: "Avoid claims that these topics heal injuries, repair tendons, or speed athletic recovery.",
      chips: ["Cell migration", "Remodeling context", "Research-only framing"],
      related: ["bpc-157-research-discussions", "soft-tissue-remodeling-concepts", "igf-axis-research-context"],
    },
    {
      id: "cjc-1295-ghrh-analog-context",
      name: "CJC-1295 / GHRH analog context",
      summary: "A growth-hormone-axis topic best discussed as endocrine signaling context.",
      mechanism: "GHRH analog discussions center on pituitary signaling and downstream growth-hormone-axis biology.",
      context: "Included because performance audiences ask about it, but it belongs in endocrine research framing, not enhancement claims.",
      caution: "Hormone-axis manipulation can be medically significant and should not be treated casually.",
      chips: ["Endocrine axis", "Research context", "Human-use sensitive"],
      related: ["ipamorelin-ghrp-context", "igf-axis-research-context", "soft-tissue-remodeling-concepts"],
    },
    {
      id: "ipamorelin-ghrp-context",
      name: "Ipamorelin / GHRP context",
      summary: "A secretagogue-related topic discussed around signaling pathways, not workout shortcuts.",
      mechanism: "GHRP-style topics are discussed around receptor-mediated endocrine signaling and growth-hormone-axis context.",
      context: "Useful for explaining how receptor selectivity and endocrine feedback matter in peptide discussions.",
      caution: "Do not frame secretagogues as muscle-building, fat-loss, or recovery shortcuts.",
      chips: ["Receptor signaling", "Endocrine context", "Evidence boundary"],
      related: ["cjc-1295-ghrh-analog-context", "igf-axis-research-context", "bpc-157-research-discussions"],
    },
    {
      id: "igf-axis-research-context",
      name: "IGF-axis research context",
      summary: "A growth and adaptation pathway topic that requires careful context control.",
      mechanism: "IGF-axis discussions involve growth signaling, tissue adaptation, metabolism, and feedback across multiple systems.",
      context: "Included as a mechanism topic because performance conversations often oversimplify this pathway.",
      caution: "Avoid athletic-enhancement claims or implying that pathway interest equals safe or appropriate use.",
      chips: ["Growth signaling", "Adaptation biology", "Caution required"],
      related: ["cjc-1295-ghrh-analog-context", "ipamorelin-ghrp-context", "soft-tissue-remodeling-concepts"],
    },
    {
      id: "soft-tissue-remodeling-concepts",
      name: "Soft-tissue remodeling concepts",
      summary: "A non-product topic covering tendon, ligament, fascia, muscle, matrix, and recovery demand.",
      mechanism: "Soft-tissue remodeling includes cell signaling, extracellular matrix turnover, inflammation timing, loading, and blood-supply context.",
      context: "This is the anchor frame for performance topics because recovery depends on programming, tissue status, rest, and medical context.",
      caution: "Injuries need qualified evaluation. Peptide research topics do not replace rehab, programming, or care.",
      chips: ["Tendon context", "Matrix remodeling", "Training load"],
      related: ["bpc-157-research-discussions", "tb-500-thymosin-beta-4-style-topics", "igf-axis-research-context"],
    },
  ],
  skin: [
    {
      id: "collagen-peptides",
      name: "Collagen peptides",
      summary: "Structural protein fragments discussed around collagen, elastin, and matrix-support research.",
      mechanism: "Collagen peptide discussions usually center on structural protein turnover, dermal matrix context, and signaling around tissue maintenance.",
      context: "Useful for teaching skin structure before moving into product-style claims.",
      caution: "Avoid promising wrinkle, firmness, or repair outcomes without context and evidence boundaries.",
      chips: ["Structural proteins", "Matrix context", "Skin biology"],
      related: ["ghk-cu-copper-tripeptide-1", "extracellular-matrix-support", "palmitoyl-pentapeptide-style-cosmetic-peptides"],
    },
    {
      id: "ghk-cu-copper-tripeptide-1",
      name: "GHK-Cu / copper tripeptide-1",
      summary: "A copper peptide topic discussed around skin biology and repair-signaling research context.",
      mechanism: "GHK-Cu discussions often involve collagen, extracellular matrix signaling, antioxidant-adjacent context, and tissue-response models.",
      context: "Popular in skin conversations, so copy should be especially careful and research-first.",
      caution: "Do not frame GHK-Cu as a guaranteed skin repair, wound-healing, or anti-aging intervention.",
      chips: ["Copper peptide", "Skin signaling", "Research context"],
      related: ["collagen-peptides", "wound-repair-signaling", "extracellular-matrix-support"],
    },
    {
      id: "palmitoyl-pentapeptide-style-cosmetic-peptides",
      name: "Palmitoyl pentapeptide-style cosmetic peptides",
      summary: "A cosmetic peptide class discussed around topical signaling and appearance-related research.",
      mechanism: "These topics are often discussed around skin signaling motifs, delivery context, and collagen-related cosmetic research.",
      context: "Useful for separating cosmetic ingredient language from medical skin-repair claims.",
      caution: "Avoid implying topical cosmetic peptides diagnose, treat, or reverse skin conditions.",
      chips: ["Cosmetic context", "Topical signaling", "Evidence boundary"],
      related: ["collagen-peptides", "extracellular-matrix-support", "ghk-cu-copper-tripeptide-1"],
    },
    {
      id: "kpv-inflammation-adjacent-context",
      name: "KPV inflammation-adjacent context",
      summary: "A short peptide topic discussed around inflammation-modulation research models.",
      mechanism: "KPV-related discussions often involve immune-signaling and inflammation-adjacent pathways in controlled research contexts.",
      context: "Included to show that skin and repair education overlaps with immune and barrier biology.",
      caution: "Avoid claims that KPV treats inflammatory skin conditions or accelerates healing.",
      chips: ["Inflammation context", "Barrier biology", "Research model"],
      related: ["wound-repair-signaling", "extracellular-matrix-support", "ghk-cu-copper-tripeptide-1"],
    },
    {
      id: "extracellular-matrix-support",
      name: "Extracellular matrix support",
      summary: "A framework topic for collagen, elastin, hydration, scaffolding, and tissue structure.",
      mechanism: "The extracellular matrix is the scaffold surrounding cells, shaping tissue resilience, hydration context, and repair signaling.",
      context: "This concept keeps skin education grounded in structure instead of ingredient hype.",
      caution: "More collagen or matrix activity is not automatically better; biology depends on timing and balance.",
      chips: ["ECM", "Collagen", "Tissue structure"],
      related: ["collagen-peptides", "wound-repair-signaling", "ghk-cu-copper-tripeptide-1"],
    },
    {
      id: "wound-repair-signaling",
      name: "Wound-repair signaling",
      summary: "A process topic covering stress response, cell activity, matrix remodeling, and barrier recovery.",
      mechanism: "Repair signaling involves inflammatory timing, cell migration, fibroblast activity, matrix remodeling, and barrier function.",
      context: "Useful as a big-picture explanation before discussing any skin-related peptide topic.",
      caution: "This is not a wound-care protocol or treatment recommendation.",
      chips: ["Repair process", "Fibroblasts", "Barrier recovery"],
      related: ["ghk-cu-copper-tripeptide-1", "extracellular-matrix-support", "kpv-inflammation-adjacent-context"],
    },
  ],
  longevity: [
    {
      id: "epitalon",
      name: "Epitalon",
      summary: "A longevity-associated peptide topic often discussed around telomere and aging-biology claims.",
      mechanism: "Epitalon discussions commonly involve telomere-adjacent research, circadian context, and cellular-aging narratives.",
      context: "Useful because it is popular, but it requires separation between mechanistic discussion and strong human longevity claims.",
      caution: "Avoid claims about extending lifespan, reversing aging, or resetting biological age.",
      chips: ["Longevity topic", "Telomere context", "Claim-sensitive"],
      related: ["nad-related-peptide-discussions", "foxo-stress-response-concepts", "senescence-adjacent-topics"],
    },
    {
      id: "mots-c",
      name: "MOTS-c",
      summary: "A mitochondrial-derived peptide topic connected to metabolic and stress-response research.",
      mechanism: "MOTS-c discussions often involve mitochondrial signaling, cellular energy context, and stress-adaptation pathways.",
      context: "Good bridge topic between metabolic health, cellular energy, and longevity research.",
      caution: "Do not frame mitochondrial peptides as energy hacks or anti-aging shortcuts.",
      chips: ["Mitochondria", "Cellular energy", "Stress response"],
      related: ["humanin", "ss-31-elamipretide-context", "nad-related-peptide-discussions"],
    },
    {
      id: "humanin",
      name: "Humanin",
      summary: "A mitochondrial-associated peptide topic discussed around cellular stress and protection models.",
      mechanism: "Humanin-related research conversations involve mitochondrial communication, cellular stress response, and survival-signaling context.",
      context: "Included as a conceptual longevity topic rather than a consumer intervention.",
      caution: "Avoid implying cell-protection mechanisms translate directly to personal outcomes.",
      chips: ["Mitochondrial peptide", "Stress biology", "Research model"],
      related: ["mots-c", "ss-31-elamipretide-context", "senescence-adjacent-topics"],
    },
    {
      id: "ss-31-elamipretide-context",
      name: "SS-31 / elamipretide context",
      summary: "A mitochondria-targeted peptide topic discussed around mitochondrial function research.",
      mechanism: "SS-31 / elamipretide discussions center on mitochondrial membranes, cellular energy context, and disease-research settings.",
      context: "Useful for showing that some peptide topics sit closer to clinical research than wellness claims.",
      caution: "Do not generalize disease-research context into broad healthspan or performance claims.",
      chips: ["Mitochondria", "Clinical research context", "Energy biology"],
      related: ["mots-c", "humanin", "nad-related-peptide-discussions"],
    },
    {
      id: "nad-related-peptide-discussions",
      name: "NAD-related peptide discussions",
      summary: "A cellular-energy topic connected to metabolism, repair enzymes, and resilience pathways.",
      mechanism: "NAD+ is discussed around redox biology, mitochondrial function, DNA-repair enzymes, and cellular stress response.",
      context: "This topic helps users understand why energy metabolism appears in longevity conversations.",
      caution: "Avoid claims that NAD-related topics reverse aging or guarantee cellular repair.",
      chips: ["NAD+", "Energy metabolism", "Repair context"],
      related: ["mots-c", "foxo-stress-response-concepts", "epitalon"],
    },
    {
      id: "foxo-stress-response-concepts",
      name: "FOXO / stress-response concepts",
      summary: "A pathway topic connected to stress resistance, repair biology, and cellular resilience.",
      mechanism: "FOXO-related discussions involve transcriptional regulation, stress response, metabolism, and repair-context biology.",
      context: "Included as a pathway concept rather than a single peptide product.",
      caution: "Do not imply manipulating one pathway creates guaranteed longevity benefits.",
      chips: ["Pathway concept", "Stress resistance", "Cellular resilience"],
      related: ["senescence-adjacent-topics", "nad-related-peptide-discussions", "epitalon"],
    },
    {
      id: "senescence-adjacent-topics",
      name: "Senescence-adjacent topics",
      summary: "A research area around cells that lose normal function and influence tissue context over time.",
      mechanism: "Senescence-adjacent discussions involve inflammatory signaling, tissue environment, repair capacity, and aging biology.",
      context: "Useful for teaching complexity: aging is a network of systems, not one molecular lever.",
      caution: "Avoid claims about clearing senescent cells, rejuvenation, or guaranteed healthspan effects.",
      chips: ["Aging biology", "Tissue context", "Complex systems"],
      related: ["foxo-stress-response-concepts", "epitalon", "humanin"],
    },
  ],
  research: [
    {
      id: "ruo-labeling",
      name: "RUO labeling",
      summary: "Research-use-only language that defines laboratory context and human-use boundaries.",
      mechanism: "RUO labeling communicates that a material is intended for laboratory research, not human consumption or therapeutic use.",
      context: "This is a core literacy topic for interpreting peptide listings and research materials responsibly.",
      caution: "RUO language should not be treated as a loophole for human use.",
      chips: ["Research-only", "Label literacy", "Human-use boundary"],
      related: ["regulatory-status", "ethical-research-boundaries", "purity-testing"],
    },
    {
      id: "purity-testing",
      name: "Purity testing",
      summary: "A quality-control topic around how much target material is present in a sample.",
      mechanism: "Purity testing is discussed around analytical methods that estimate sample composition and reduce ambiguity.",
      context: "Quality controls matter because unknown composition can undermine any research interpretation.",
      caution: "A purity number alone does not establish safety, identity, sterility, or appropriateness for human use.",
      chips: ["Quality control", "Analytical testing", "Research integrity"],
      related: ["identity-verification", "third-party-coa", "storage-and-handling"],
    },
    {
      id: "identity-verification",
      name: "Identity verification",
      summary: "Confirming that a peptide is what it claims to be.",
      mechanism: "Identity verification uses analytical methods to reduce the risk of mislabeled or incorrect materials.",
      context: "A foundational research-integrity topic because incorrect identity makes results unreliable.",
      caution: "Identity verification is not the same as approval, safety, or clinical suitability.",
      chips: ["Identity", "Reproducibility", "Analytical context"],
      related: ["purity-testing", "third-party-coa", "ethical-research-boundaries"],
    },
    {
      id: "third-party-coa",
      name: "Third-party COA",
      summary: "Certificate-of-analysis documentation from an independent testing source.",
      mechanism: "A COA can summarize analytical findings such as identity or purity, depending on what was tested.",
      context: "Useful for teaching transparency while emphasizing that documents need scrutiny.",
      caution: "A COA can be incomplete, outdated, irrelevant to a batch, or not independently verified.",
      chips: ["Documentation", "Transparency", "Quality context"],
      related: ["purity-testing", "identity-verification", "regulatory-status"],
    },
    {
      id: "storage-and-handling",
      name: "Storage and handling",
      summary: "A research-practice topic around stability, contamination risk, labeling, and records.",
      mechanism: "Storage and handling affect sample integrity, reproducibility, documentation, and responsible lab practice.",
      context: "Included to keep the site grounded in research process rather than product claims.",
      caution: "This site does not provide handling protocols for self-use or consumption.",
      chips: ["Lab practice", "Stability context", "Records"],
      related: ["ethical-research-boundaries", "purity-testing", "ruo-labeling"],
    },
    {
      id: "regulatory-status",
      name: "Regulatory status",
      summary: "The legal and approval context around research materials, claims, and use categories.",
      mechanism: "Regulatory status defines what claims, distribution, research, or human-use contexts may be allowed.",
      context: "This topic helps explain why unsupported human-use claims are sensitive.",
      caution: "Legal status depends on jurisdiction and context. This site is not legal advice.",
      chips: ["Regulatory context", "Claims boundary", "Jurisdiction sensitive"],
      related: ["ruo-labeling", "third-party-coa", "ethical-research-boundaries"],
    },
    {
      id: "ethical-research-boundaries",
      name: "Ethical research boundaries",
      summary: "Responsible research conduct, transparent claims, and respect for safety limits.",
      mechanism: "Ethical boundaries shape how researchers document, communicate, dispose of, and interpret peptide materials.",
      context: "This is the anchor topic for keeping the library educational and responsible.",
      caution: "Do not use educational content as a substitute for compliance, clinical care, or qualified oversight.",
      chips: ["Ethics", "Transparency", "Responsible framing"],
      related: ["ruo-labeling", "regulatory-status", "storage-and-handling"],
    },
  ],
};

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

const campusCard = document.querySelector(".campus-card");
const pins = Array.from(document.querySelectorAll("[data-topic]"));
const navButtons = Array.from(document.querySelectorAll("[data-nav-topic]"));
const deepDiveLab = document.querySelector("#topic-lab");
const atlas = document.querySelector("#atlas");
const panel = {
  kicker: document.querySelector("#topic-kicker"),
  title: document.querySelector("#topic-title"),
  summary: document.querySelector("#topic-summary"),
  core: document.querySelector("#topic-core"),
  next: document.querySelector("#topic-next"),
  link: document.querySelector("#topic-link"),
};
const roomMap = document.querySelector("#room-map");
const roomArt = document.querySelector("#room-art");
const artBackButton = document.querySelector("#art-back-to-hub");
const roomMainTitle = document.querySelector("#room-main-title");
const roomSubtitle = document.querySelector("#room-subtitle");
const roomListTitle = document.querySelector("#room-list-title");
const roomBenefitsTitle = document.querySelector("#room-benefits-title");
const roomFlowTitle = document.querySelector("#room-flow-title");
const roomFlowNote = document.querySelector("#room-flow-note");
const roomPeptideList = document.querySelector("#room-peptide-list");
const roomBenefitsList = document.querySelector("#room-benefits-list");
const roomFlowSteps = document.querySelector("#room-flow-steps");
const roomNotesList = document.querySelector("#room-notes-list");
const sceneLabel = document.querySelector("#scene-label");
const roomPanel = {
  kicker: document.querySelector("#room-kicker"),
  title: document.querySelector("#room-title"),
  summary: document.querySelector("#room-summary"),
};
const hotspotLayer = document.querySelector("#hotspot-layer");
const hotspotHint = document.querySelector("#hotspot-hint");
const infoDrawer = document.querySelector("#info-drawer");
const drawerClose = document.querySelector("#drawer-close");
const drawerSectionLabel = document.querySelector("#drawer-section-label");
const drawerTitle = document.querySelector("#drawer-title");
const drawerSubtitle = document.querySelector("#drawer-subtitle");
const drawerBody = document.querySelector("#drawer-body");
const drawerTakeaways = document.querySelector("#drawer-takeaways");
const drawerSupplementBlock = document.querySelector("#drawer-supplement-block");
const drawerSupplementTitle = document.querySelector("#drawer-supplement-title");
const drawerSupplementContent = document.querySelector("#drawer-supplement-content");
const drawerNoteTitle = document.querySelector("#drawer-note-title");
const drawerResearchNote = document.querySelector("#drawer-research-note");
const drawerRelated = document.querySelector("#drawer-related");
const libraryTabs = document.querySelector("#library-tabs");
const libraryActiveNote = document.querySelector("#library-active-note");
const libraryCardGrid = document.querySelector("#library-card-grid");
const libraryDrawer = document.querySelector("#library-drawer");
const libraryDrawerBackdrop = document.querySelector("#library-drawer-backdrop");
const libraryDrawerClose = document.querySelector("#library-drawer-close");
const libraryDrawerKicker = document.querySelector("#library-drawer-kicker");
const libraryDrawerTitle = document.querySelector("#library-drawer-title");
const libraryDrawerSummary = document.querySelector("#library-drawer-summary");
const libraryDrawerMechanism = document.querySelector("#library-drawer-mechanism");
const libraryDrawerContext = document.querySelector("#library-drawer-context");
const libraryDrawerCaution = document.querySelector("#library-drawer-caution");
const libraryDrawerChips = document.querySelector("#library-drawer-chips");
const libraryDrawerRelated = document.querySelector("#library-drawer-related");
const libraryRoomButton = document.querySelector("#library-room-button");
let activeTopicIndex = 0;
let activeRoomId = "recovery";
let activeHotspotId = null;
let activeLibraryCategory = "metabolic";
let activeLibraryCardId = null;
let hotspotHintTimers = [];

const zoomOrigins = {
  foundations: ["50%", "37%"],
  metabolic: ["18%", "57%"],
  recovery: ["17%", "19%"],
  skin: ["80%", "28%"],
  longevity: ["50%", "73%"],
  research: ["78%", "61%"],
};

function setTopic(id) {
  const index = topics.findIndex((topic) => topic.id === id);
  const topic = topics[index >= 0 ? index : 0];
  activeTopicIndex = topics.indexOf(topic);
  campusCard?.setAttribute("data-active", topic.id);
  pins.forEach((pin) => {
    const isActive = pin.dataset.topic === topic.id;
    pin.classList.toggle("is-active", isActive);
    pin.setAttribute("aria-pressed", String(isActive));
  });
  navButtons.forEach((button) => {
    const isActive = button.dataset.navTopic === topic.id;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  if (panel.kicker) panel.kicker.textContent = topic.kicker;
  if (panel.title) panel.title.textContent = topic.title;
  if (panel.summary) panel.summary.textContent = topic.summary;
  if (panel.core) panel.core.textContent = topic.core;
  if (panel.next) panel.next.textContent = topic.next;
  panel.link?.setAttribute("href", topic.href);
}

function pulseCampusZoom(id) {
  const [x, y] = zoomOrigins[id] || zoomOrigins.foundations;
  campusCard?.style.setProperty("--zoom-x", x);
  campusCard?.style.setProperty("--zoom-y", y);
  campusCard?.classList.add("is-zooming");
  window.setTimeout(() => campusCard?.classList.remove("is-zooming"), 650);
}

function showHub() {
  clearHotspotExperience();
  closeLibraryDrawer();
  document.body.classList.remove("is-deep-art", "needs-room-copy");
  if (atlas) {
    atlas.hidden = false;
  }
  if (deepDiveLab) {
    deepDiveLab.hidden = true;
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function navigateTopic(id) {
  closeLibraryDrawer();
  setTopic(id);
  if (roomSections[id]) {
    openDeepDive(id);
    return;
  }
  showHub();
  pulseCampusZoom(id);
}

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    navigateTopic(pin.dataset.topic);
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => navigateTopic(button.dataset.navTopic));
});

document.querySelector("#next-topic")?.addEventListener("click", () => {
  const next = topics[(activeTopicIndex + 1) % topics.length];
  navigateTopic(next.id);
});

panel.link?.addEventListener("click", (event) => {
  const topic = topics[activeTopicIndex];
  if (!roomSections[topic.id]) return;
  event.preventDefault();
  navigateTopic(topic.id);
});

function getLibraryCategory(id = activeLibraryCategory) {
  return libraryCategories.find((category) => category.id === id) || libraryCategories[0];
}

function getLibraryItems(categoryId = activeLibraryCategory) {
  return peptideLibrary[categoryId] || peptideLibrary[getLibraryCategory().id] || [];
}

function findLibraryItem(categoryId, itemId) {
  return getLibraryItems(categoryId).find((item) => item.id === itemId);
}

function createLibraryChip(label) {
  const chip = document.createElement("span");
  chip.className = "library-chip";
  chip.textContent = label;
  return chip;
}

function createLibraryGlyph(label) {
  const glyph = document.createElement("span");
  glyph.className = "library-glyph";
  glyph.setAttribute("aria-hidden", "true");
  glyph.dataset.seed = label.length % 4;
  for (let index = 0; index < 5; index += 1) {
    glyph.append(document.createElement("span"));
  }
  return glyph;
}

function closeLibraryDrawer() {
  activeLibraryCardId = null;
  libraryDrawer?.setAttribute("hidden", "");
  libraryDrawerBackdrop?.setAttribute("hidden", "");
  document.body.classList.remove("has-library-drawer");
  libraryCardGrid?.querySelectorAll("[data-library-card-id]").forEach((card) => {
    card.classList.remove("is-active");
    card.setAttribute("aria-pressed", "false");
  });
}

function openLibraryDrawer(categoryId, itemId) {
  const category = getLibraryCategory(categoryId);
  const item = findLibraryItem(category.id, itemId);
  if (!item || !libraryDrawer) return;

  activeLibraryCategory = category.id;
  activeLibraryCardId = item.id;
  renderLibraryTabs();

  libraryCardGrid?.querySelectorAll("[data-library-card-id]").forEach((card) => {
    const isActive = card.getAttribute("data-library-card-id") === item.id;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });

  if (libraryDrawerKicker) libraryDrawerKicker.textContent = `${category.label} dossier`;
  if (libraryDrawerTitle) libraryDrawerTitle.textContent = item.name;
  if (libraryDrawerSummary) libraryDrawerSummary.textContent = item.summary;
  if (libraryDrawerMechanism) libraryDrawerMechanism.textContent = item.mechanism;
  if (libraryDrawerContext) libraryDrawerContext.textContent = item.context;
  if (libraryDrawerCaution) libraryDrawerCaution.textContent = item.caution;
  if (libraryRoomButton) libraryRoomButton.textContent = `Explore ${category.label} room`;

  if (libraryDrawerChips) {
    libraryDrawerChips.replaceChildren();
    item.chips.forEach((chip) => libraryDrawerChips.append(createLibraryChip(chip)));
  }

  if (libraryDrawerRelated) {
    libraryDrawerRelated.replaceChildren();
    item.related.forEach((relatedId) => {
      const related = findLibraryItem(category.id, relatedId);
      if (!related) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "library-related-button";
      button.dataset.libraryRelatedId = related.id;
      button.textContent = related.name;
      libraryDrawerRelated.append(button);
    });
  }

  libraryDrawer.hidden = false;
  libraryDrawerBackdrop?.removeAttribute("hidden");
  document.body.classList.add("has-library-drawer");
}

function renderLibraryTabs() {
  if (!libraryTabs) return;
  libraryTabs.replaceChildren();
  libraryCategories.forEach((category) => {
    const button = document.createElement("button");
    const isActive = category.id === activeLibraryCategory;
    button.type = "button";
    button.id = `library-tab-${category.id}`;
    button.className = "library-tab";
    button.dataset.libraryCategory = category.id;
    button.role = "tab";
    button.setAttribute("aria-selected", String(isActive));
    button.setAttribute("aria-controls", "library-card-grid");
    button.style.setProperty("--library-accent", category.accent);
    button.textContent = category.label;
    button.addEventListener("click", () => {
      activeLibraryCategory = category.id;
      closeLibraryDrawer();
      renderLibraryTabs();
      renderLibraryCards();
    });
    libraryTabs.append(button);
  });
}

function renderLibraryCards() {
  if (!libraryCardGrid) return;
  const category = getLibraryCategory();
  const items = getLibraryItems(category.id);

  if (libraryActiveNote) {
    libraryActiveNote.textContent = `${items.length} ${category.label.toLowerCase()} dossiers. ${category.summary}`;
  }

  libraryCardGrid.replaceChildren();
  libraryCardGrid.style.setProperty("--library-accent", category.accent);

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "library-card";
    card.role = "button";
    card.tabIndex = 0;
    card.dataset.libraryCardId = item.id;
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `Open dossier for ${item.name}`);
    card.style.setProperty("--library-accent", category.accent);

    const top = document.createElement("div");
    top.className = "library-card-top";
    const eyebrow = document.createElement("span");
    eyebrow.className = "library-card-eyebrow";
    eyebrow.textContent = category.label;
    top.append(createLibraryGlyph(item.name), eyebrow);

    const title = document.createElement("h3");
    title.textContent = item.name;

    const summary = document.createElement("p");
    summary.className = "library-card-summary";
    summary.textContent = item.summary;

    const mechanism = document.createElement("p");
    mechanism.className = "library-card-mechanism";
    mechanism.textContent = item.mechanism;

    const chips = document.createElement("div");
    chips.className = "library-chip-row";
    item.chips.slice(0, 3).forEach((chip) => chips.append(createLibraryChip(chip)));

    const caution = document.createElement("p");
    caution.className = "library-card-caution";
    caution.textContent = item.caution;

    const action = document.createElement("span");
    action.className = "library-card-action";
    action.textContent = "Open dossier";

    card.append(top, title, summary, mechanism, chips, caution, action);
    card.addEventListener("click", () => openLibraryDrawer(category.id, item.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLibraryDrawer(category.id, item.id);
      }
    });
    libraryCardGrid.append(card);
  });
}

function renderPeptideLibrary() {
  if (!libraryTabs || !libraryCardGrid) return;
  renderLibraryTabs();
  renderLibraryCards();
}

function renderList(target, items, className) {
  if (!target) return;
  target.innerHTML = "";
  items.forEach((item) => {
    const node = document.createElement("li");
    node.className = className;
    node.textContent = item;
    target.append(node);
  });
}

function setDeepDiveArtMode(enabled, embeddedCopy = true) {
  roomMap?.classList.toggle("has-room-art", enabled);
  roomMap?.classList.toggle("has-embedded-copy", enabled && embeddedCopy);
  roomMap?.classList.toggle("needs-room-copy", enabled && !embeddedCopy);
  deepDiveLab?.classList.toggle("has-room-art", enabled);
  deepDiveLab?.classList.toggle("has-embedded-copy", enabled && embeddedCopy);
  deepDiveLab?.classList.toggle("needs-room-copy", enabled && !embeddedCopy);
  document.body.classList.toggle("is-deep-art", enabled && !deepDiveLab?.hidden);
  document.body.classList.toggle("needs-room-copy", enabled && !embeddedCopy && !deepDiveLab?.hidden);
}

function setRoomImage(section) {
  if (!roomArt || !roomMap) return;
  roomMap.classList.remove("is-fallback");
  roomMap.style.setProperty("--room-art-bg", `url("${section.image}")`);
  setDeepDiveArtMode(false);
  roomArt.hidden = false;
  roomArt.alt = section.imageAlt;
  roomArt.onload = () => {
    roomArt.hidden = false;
    roomMap.classList.remove("is-fallback");
    setDeepDiveArtMode(true, section.embeddedCopy !== false);
  };
  roomArt.onerror = () => {
    roomArt.hidden = true;
    roomMap.classList.add("is-fallback");
    setDeepDiveArtMode(false);
  };
  roomArt.src = section.image;

  window.setTimeout(() => {
    if (roomArt.complete && roomArt.naturalWidth > 0) {
      roomArt.hidden = false;
      roomMap.classList.remove("is-fallback");
      setDeepDiveArtMode(true, section.embeddedCopy !== false);
    }
  }, 0);
}

function clearHotspotTimers() {
  hotspotHintTimers.forEach((timer) => window.clearTimeout(timer));
  hotspotHintTimers = [];
}

function closeHotspotDrawer() {
  activeHotspotId = null;
  infoDrawer?.setAttribute("hidden", "");
  if (infoDrawer) infoDrawer.scrollTop = 0;
  roomMap?.classList.remove("drawer-open");
  deepDiveLab?.classList.remove("drawer-open");
  document.body.classList.remove("has-hotspot-drawer");
  if (document.body.classList.contains("is-deep-art")) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  hotspotLayer?.querySelectorAll("[data-hotspot-id]").forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-pressed", "false");
  });
}

function clearHotspotExperience() {
  clearHotspotTimers();
  closeHotspotDrawer();
  hotspotLayer?.replaceChildren();
  if (hotspotLayer) hotspotLayer.hidden = true;
  if (hotspotHint) {
    hotspotHint.hidden = true;
    hotspotHint.classList.remove("is-visible");
  }
  roomMap?.classList.remove("has-hotspots");
  deepDiveLab?.classList.remove("has-hotspots");
}

function scheduleHotspotHint() {
  if (!hotspotHint) return;
  clearHotspotTimers();
  hotspotHint.hidden = true;
  hotspotHint.classList.remove("is-visible");
  hotspotHintTimers.push(
    window.setTimeout(() => {
      hotspotHint.hidden = false;
      window.requestAnimationFrame(() => hotspotHint.classList.add("is-visible"));
    }, 1000),
  );
  hotspotHintTimers.push(
    window.setTimeout(() => {
      hotspotHint.classList.remove("is-visible");
    }, 4300),
  );
  hotspotHintTimers.push(
    window.setTimeout(() => {
      hotspotHint.hidden = true;
    }, 4800),
  );
}

function scheduleGuidedHotspotPulse(section) {
  if (!section.introPulseOrder?.length || !hotspotLayer) return;
  section.introPulseOrder.forEach((hotspotId, index) => {
    hotspotHintTimers.push(
      window.setTimeout(() => {
        const target = hotspotLayer.querySelector(`[data-hotspot-id="${hotspotId}"]`);
        if (!target || activeHotspotId) return;
        target.classList.add("is-guided-pulse");
        hotspotHintTimers.push(
          window.setTimeout(() => target.classList.remove("is-guided-pulse"), 1100),
        );
      }, 1200 + index * 1250),
    );
  });
}

function fillList(target, items) {
  if (!target) return;
  target.replaceChildren();
  (items || []).forEach((item) => {
    const node = document.createElement("li");
    node.textContent = item;
    target.append(node);
  });
}

function renderDrawerSupplement(supplement) {
  if (!drawerSupplementBlock || !drawerSupplementTitle || !drawerSupplementContent) return;

  drawerSupplementContent.replaceChildren();

  if (!supplement) {
    drawerSupplementBlock.hidden = true;
    return;
  }

  drawerSupplementTitle.textContent = supplement.title || "More Context";

  if (supplement.text) {
    const text = document.createElement("p");
    text.textContent = supplement.text;
    drawerSupplementContent.append(text);
  }

  if (supplement.items?.length) {
    const list = document.createElement("ul");
    supplement.items.forEach((item) => {
      const node = document.createElement("li");
      node.textContent = item;
      list.append(node);
    });
    drawerSupplementContent.append(list);
  }

  if (supplement.comparison?.length) {
    const grid = document.createElement("div");
    grid.className = "comparison-grid";
    supplement.comparison.forEach((row) => {
      const item = document.createElement("div");
      const label = document.createElement("strong");
      const value = document.createElement("span");
      label.textContent = row.label;
      value.textContent = row.value;
      item.append(label, value);
      grid.append(item);
    });
    drawerSupplementContent.append(grid);
  }

  drawerSupplementBlock.hidden = drawerSupplementContent.childNodes.length === 0;
}

function openHotspotDrawer(section, hotspotId) {
  const hotspot = section.hotspots?.find((item) => item.id === hotspotId);
  if (!hotspot || !infoDrawer) return;
  activeHotspotId = hotspot.id;
  hotspotLayer?.querySelectorAll("[data-hotspot-id]").forEach((button) => {
    const isActive = button.dataset.hotspotId === activeHotspotId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (drawerSectionLabel) drawerSectionLabel.textContent = hotspot.sectionLabel || section.title;
  if (drawerTitle) drawerTitle.textContent = hotspot.title;
  if (drawerSubtitle) drawerSubtitle.textContent = hotspot.subtitle;
  if (drawerBody) drawerBody.textContent = hotspot.body;
  fillList(drawerTakeaways, hotspot.takeaways);
  renderDrawerSupplement(hotspot.supplement);
  if (drawerNoteTitle) drawerNoteTitle.textContent = hotspot.noteLabel || "Research Context";
  if (drawerResearchNote) drawerResearchNote.textContent = hotspot.researchNote;

  if (drawerRelated) {
    drawerRelated.replaceChildren();
    (hotspot.related || []).forEach((relatedId) => {
      const related = section.hotspots.find((item) => item.id === relatedId);
      if (!related) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "drawer-related-button";
      button.dataset.relatedHotspotId = related.id;
      button.textContent = related.label;
      drawerRelated.append(button);
    });
  }

  infoDrawer.hidden = false;
  infoDrawer.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  roomMap?.classList.add("drawer-open");
  deepDiveLab?.classList.add("drawer-open");
  document.body.classList.add("has-hotspot-drawer");
}

function renderHotspotExperience(section) {
  clearHotspotExperience();
  if (!section.hotspots?.length || !hotspotLayer) return;

  roomMap?.classList.add("has-hotspots");
  deepDiveLab?.classList.add("has-hotspots");
  hotspotLayer.hidden = false;

  section.hotspots.forEach((hotspot) => {
    const button = document.createElement("button");
    const width = hotspot.coordinates.x2 - hotspot.coordinates.x1;
    const height = hotspot.coordinates.y2 - hotspot.coordinates.y1;
    button.className = "room-hotspot";
    button.type = "button";
    button.dataset.hotspotId = hotspot.id;
    button.dataset.shape = hotspot.shape || "rect";
    button.setAttribute("aria-label", hotspot.label);
    button.setAttribute("aria-pressed", "false");
    button.style.left = `${hotspot.coordinates.x1}%`;
    button.style.top = `${hotspot.coordinates.y1}%`;
    button.style.width = `${width}%`;
    button.style.height = `${height}%`;
    button.style.zIndex = String(
      hotspot.zIndex ?? Math.max(1, 10000 - Math.round(width * height)),
    );

    const chip = document.createElement("span");
    chip.className = "hotspot-chip";
    chip.textContent = hotspot.label;
    if (hotspot.chipPosition) {
      chip.style.left = `${((hotspot.chipPosition.x - hotspot.coordinates.x1) / width) * 100}%`;
      chip.style.top = `${((hotspot.chipPosition.y - hotspot.coordinates.y1) / height) * 100}%`;
    }
    button.append(chip);
    button.addEventListener("click", () => openHotspotDrawer(section, hotspot.id));
    hotspotLayer.append(button);
  });

  scheduleHotspotHint();
  scheduleGuidedHotspotPulse(section);
}

function setRoomPeptide(index) {
  const section = roomSections[activeRoomId];
  if (!section) return;
  const peptide = section.peptides[index] || section.peptides[0];
  document.querySelectorAll("[data-peptide-index]").forEach((button) => {
    const isActive = Number(button.dataset.peptideIndex) === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  roomPanel.kicker.textContent = section.listTitle;
  roomPanel.title.textContent = peptide.name;
  roomPanel.summary.textContent = peptide.summary;
}

function renderRoomSection(id) {
  const section = roomSections[id] || roomSections.recovery;
  activeRoomId = section.theme;
  if (roomMainTitle) roomMainTitle.textContent = section.title;
  if (roomSubtitle) roomSubtitle.textContent = section.subtitle;
  if (roomListTitle) roomListTitle.textContent = section.listTitle;
  if (roomBenefitsTitle) roomBenefitsTitle.textContent = section.benefitsTitle;
  if (roomFlowTitle) roomFlowTitle.textContent = section.flowTitle;
  if (roomFlowNote) roomFlowNote.textContent = section.flowNote;
  if (sceneLabel) sceneLabel.textContent = section.sceneLabel;
  roomMap?.setAttribute("data-room-theme", section.theme);
  setRoomImage(section);

  if (roomPeptideList) {
    roomPeptideList.innerHTML = "";
    section.peptides.forEach((peptide, index) => {
      const button = document.createElement("button");
      button.className = "peptide-button";
      button.type = "button";
      button.dataset.peptideIndex = String(index);
      button.innerHTML = `
        <span class="molecule-mini" aria-hidden="true"></span>
        <span>
          <strong>${peptide.name}</strong>
          <small>${peptide.summary}</small>
        </span>
      `;
      button.addEventListener("click", () => setRoomPeptide(index));
      roomPeptideList.append(button);
    });
  }

  renderList(roomBenefitsList, section.benefits, "icon-list-item");
  renderList(roomNotesList, section.notes, "check-list-item");
  renderList(roomFlowSteps, section.flow, "flow-step");
  setRoomPeptide(0);
  renderHotspotExperience(section);
}

setTopic("foundations");
renderRoomSection("recovery");

function openDeepDive(id) {
  const section = roomSections[id] ? roomSections[id] : roomSections.recovery;
  setTopic(id);
  renderRoomSection(section.theme);
  const [x, y] = zoomOrigins[id] || zoomOrigins.recovery;
  campusCard?.style.setProperty("--zoom-x", x);
  campusCard?.style.setProperty("--zoom-y", y);
  campusCard?.classList.add("is-zooming");
  window.setTimeout(() => {
    if (!deepDiveLab) return;
    deepDiveLab.hidden = false;
    if (atlas) {
      atlas.hidden = true;
    }
    const needsRoomCopy = roomMap?.classList.contains("needs-room-copy") ?? false;
    document.body.classList.toggle("is-deep-art", roomMap?.classList.contains("has-room-art"));
    document.body.classList.toggle("needs-room-copy", needsRoomCopy);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.setTimeout(() => campusCard?.classList.remove("is-zooming"), 300);
  }, 520);
}

function closeDeepDive() {
  showHub();
  pulseCampusZoom(activeRoomId);
}

document.querySelector("#back-to-hub")?.addEventListener("click", closeDeepDive);
artBackButton?.addEventListener("click", closeDeepDive);
drawerClose?.addEventListener("click", closeHotspotDrawer);
drawerRelated?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-related-hotspot-id]");
  if (!button) return;
  const section = roomSections[activeRoomId];
  openHotspotDrawer(section, button.dataset.relatedHotspotId);
});

libraryDrawerClose?.addEventListener("click", closeLibraryDrawer);
libraryDrawerBackdrop?.addEventListener("click", closeLibraryDrawer);
libraryDrawerRelated?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-library-related-id]");
  if (!button) return;
  openLibraryDrawer(activeLibraryCategory, button.dataset.libraryRelatedId);
});
libraryRoomButton?.addEventListener("click", () => {
  const category = getLibraryCategory();
  closeLibraryDrawer();
  navigateTopic(category.room);
});
document.querySelector("[data-library-foundations]")?.addEventListener("click", () => {
  navigateTopic("foundations");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (libraryDrawer && !libraryDrawer.hidden) {
    closeLibraryDrawer();
    return;
  }
  if (!infoDrawer?.hidden) {
    closeHotspotDrawer();
  }
});

renderPeptideLibrary();

const homeLink = document.querySelector("[data-home-link]");

if (homeLink) {
  const repoName = "YoungLeonidas";
  const isGitHubProjectSite =
    window.location.hostname.endsWith(".github.io") &&
    window.location.pathname.includes(`/${repoName}/`);

  homeLink.setAttribute("href", isGitHubProjectSite ? `/${repoName}/` : "/");
}
