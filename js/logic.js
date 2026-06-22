// ============================================================
// PathCheck — Logic Engine
// Variables P–U are consistent across all career fields.
// Questions are field-specific, grounded in cited research.
// ============================================================

const Logic = {

  // ─── Career Fields ───────────────────────────────────────
  FIELDS: [
    {
      id: 'tech',
      label: 'Technology & Computing',
      icon: '⌨',
      color: '#6366F1',
      desc: 'Software, IT, data science, cybersecurity, AI',
      source: 'Savickas & Porfeli (2012); Hill & Rose (2010); Lent et al. (1994)',
    },
    {
      id: 'health',
      label: 'Health & Medicine',
      icon: '⚕',
      color: '#22C55E',
      desc: 'Nursing, medicine, allied health, public health',
      source: 'Yamada et al. (2024); Alliant University AACN Competency Framework (2024)',
    },
    {
      id: 'education',
      label: 'Education & Teaching',
      icon: '📖',
      color: '#FACC15',
      desc: 'Teaching, school administration, training',
      source: 'Frontiers in Psychology (2024); PMC Teacher Commitment Study (2022)',
    },
    {
      id: 'engineering',
      label: 'Engineering',
      icon: '⚙',
      color: '#F97316',
      desc: 'Civil, mechanical, electrical, chemical engineering',
      source: 'SREB Skills Research (2023); Savickas Career Adaptability Scale (2012)',
    },
    {
      id: 'business',
      label: 'Business & Management',
      icon: '📊',
      color: '#A855F7',
      desc: 'Management, finance, marketing, entrepreneurship',
      source: 'University of Potomac (2024); Emerald Career Adaptability Study (2024)',
    },
    {
      id: 'arts',
      label: 'Arts, Media & Communication',
      icon: '✦',
      color: '#EC4899',
      desc: 'Design, journalism, film, advertising, content',
      source: 'Super Business Manager (2025); ScienceDirect Career Success Framework (2020)',
    },
  ],

  // ─── Field-specific questions (P–U per field) ────────────
  QUESTIONS: {
    tech: [
      {
        key: 'P',
        factor: 'Interest & Meaning Fit',
        text: 'Do you find genuine excitement in solving technical problems, building systems, or working with technology?',
        hint: 'Research shows that intrinsic interest in computing is one of the strongest predictors of long-term success and retention in tech careers. (Hill & Rose, 2010)',
      },
      {
        key: 'Q',
        factor: 'Skill & Competency Fit',
        text: 'Do you have — or believe you can realistically develop — the technical and analytical skills this field demands?',
        hint: 'Core tech competencies include logical reasoning, programming fundamentals, and problem decomposition. (SREB, 2023)',
      },
      {
        key: 'R',
        factor: 'Self-Efficacy & Confidence',
        text: 'Do you believe you can handle the technical challenges, continuous learning demands, and competitive nature of the tech industry?',
        hint: 'Self-efficacy in STEM has been identified as a critical factor in career persistence and performance. (Hill & Rose, 2010)',
      },
      {
        key: 'S',
        factor: 'Career Adaptability',
        text: 'Are you willing to keep learning new technologies, languages, and tools as the industry rapidly evolves?',
        hint: 'Tech careers require high adaptability as tools and paradigms shift every few years. (Savickas & Porfeli, 2012)',
      },
      {
        key: 'T',
        factor: 'Exploration & Commitment',
        text: 'Have you seriously explored tech through coursework, personal projects, internships, or hands-on building?',
        hint: 'Career research shows that prior exploration directly improves commitment and reduces career regret. (Frontiers in Education, 2023)',
      },
      {
        key: 'U',
        factor: 'Opportunity & Market Viability',
        text: 'Do you believe the technology field has strong and sustained job demand where you plan to work or study?',
        hint: 'Tech remains one of the highest-demand career clusters globally. (SREB Skills Research, 2023)',
      },
    ],

    health: [
      {
        key: 'P',
        factor: 'Interest & Meaning Fit',
        text: 'Do you find genuine meaning in caring for people, contributing to health outcomes, and working in clinical or community health settings?',
        hint: 'Patient-centered care and sense of purpose are consistently identified as core elements of nursing and health career success. (Yamada et al., 2024)',
      },
      {
        key: 'Q',
        factor: 'Skill & Competency Fit',
        text: 'Do you have or are you developing the clinical knowledge, technical skills, and interpersonal competencies required in healthcare?',
        hint: 'AACN competency domains include clinical judgment, communication, and evidence-based practice as essential foundations. (Alliant University, 2024)',
      },
      {
        key: 'R',
        factor: 'Self-Efficacy & Confidence',
        text: 'Do you feel confident in your ability to handle the physical, emotional, and ethical demands of a healthcare career?',
        hint: 'Self-efficacy in clinical settings directly predicts performance quality and career resilience in healthcare workers. (PMC, 2023)',
      },
      {
        key: 'S',
        factor: 'Career Adaptability',
        text: 'Are you prepared to continuously update your knowledge and adapt as healthcare practices, technologies, and policies evolve?',
        hint: 'Healthcare is one of the fastest-changing professions — nearly 70% of nurses will work in highly unpredictable environments. (PMC Nursing Competencies Review, 2024)',
      },
      {
        key: 'T',
        factor: 'Exploration & Commitment',
        text: 'Have you seriously explored healthcare through clinical exposure, coursework, volunteering, or professional experience?',
        hint: 'Clinical exposure and career exploration are strongly linked to professional commitment in health careers. (Yamada et al., 2024)',
      },
      {
        key: 'U',
        factor: 'Opportunity & Market Viability',
        text: 'Do you believe healthcare has strong job demand and long-term career opportunities in your target location?',
        hint: 'Healthcare consistently ranks among the highest-demand career clusters globally and locally. (SREB, 2023)',
      },
    ],

    education: [
      {
        key: 'P',
        factor: 'Interest & Meaning Fit',
        text: 'Do you feel a genuine calling to educate others and find deep meaning in helping people learn and grow?',
        hint: 'Research consistently finds that sense of calling is the strongest predictor of teacher career commitment and satisfaction. (Frontiers in Psychology, 2024)',
      },
      {
        key: 'Q',
        factor: 'Skill & Competency Fit',
        text: 'Do you have or are you building the pedagogical, communication, and subject-matter skills needed to teach effectively?',
        hint: 'Effective teaching requires mastery of both content knowledge and instructional delivery methods. (SREB, 2023)',
      },
      {
        key: 'R',
        factor: 'Self-Efficacy & Confidence',
        text: 'Do you believe in your ability to manage a classroom, inspire learners, and handle the challenges of the teaching profession?',
        hint: 'Teacher self-efficacy — belief in one\'s own teaching ability — is directly linked to career satisfaction and student outcomes. (PMC, 2022)',
      },
      {
        key: 'S',
        factor: 'Career Adaptability',
        text: 'Are you willing to continuously update your teaching approaches, integrate new tools, and adapt to diverse learners?',
        hint: 'Career adaptability and continuous professional development are strongly associated with teacher effectiveness and retention. (ScienceDirect, 2025)',
      },
      {
        key: 'T',
        factor: 'Exploration & Commitment',
        text: 'Have you seriously explored teaching through practicum, tutoring, mentoring, observation, or related educational experience?',
        hint: 'Prior exploration of the teaching role builds professional identity and long-term commitment. (Frontiers in Psychology, 2022)',
      },
      {
        key: 'U',
        factor: 'Opportunity & Market Viability',
        text: 'Do you believe there is sufficient demand for educators in your field of specialization and target location?',
        hint: 'Teacher demand varies significantly by specialization and region. (SREB Skills Research, 2023)',
      },
    ],

    engineering: [
      {
        key: 'P',
        factor: 'Interest & Meaning Fit',
        text: 'Do you find genuine satisfaction in designing, building, and solving complex physical or systems-level problems?',
        hint: 'Interest alignment with engineering problem-solving is one of the key predictors of career persistence in the field. (Lent et al., 1994)',
      },
      {
        key: 'Q',
        factor: 'Skill & Competency Fit',
        text: 'Do you have or are you developing the mathematical, scientific, and technical foundations required in engineering?',
        hint: 'Strong analytical and quantitative skills are consistently identified as core engineering competencies by employers. (SREB, 2023)',
      },
      {
        key: 'R',
        factor: 'Self-Efficacy & Confidence',
        text: 'Do you believe you can meet the rigorous academic and professional demands of an engineering career?',
        hint: 'Engineering self-efficacy — confidence in technical ability — is a significant predictor of career success and persistence. (Hill & Rose, 2010)',
      },
      {
        key: 'S',
        factor: 'Career Adaptability',
        text: 'Are you willing to continuously learn new methods, materials, and technologies as engineering disciplines evolve?',
        hint: 'Career adaptability is essential in engineering due to rapid advancement in tools, standards, and project complexity. (Savickas & Porfeli, 2012)',
      },
      {
        key: 'T',
        factor: 'Exploration & Commitment',
        text: 'Have you seriously explored engineering through coursework, projects, lab work, internships, or hands-on design?',
        hint: 'Practical exploration of engineering before full commitment reduces misalignment and improves career satisfaction. (Frontiers in Education, 2023)',
      },
      {
        key: 'U',
        factor: 'Opportunity & Market Viability',
        text: 'Do you believe your engineering specialization has strong market demand and employment prospects in your area?',
        hint: 'Engineering remains a high-demand profession globally, though demand varies by specialization. (SREB, 2023)',
      },
    ],

    business: [
      {
        key: 'P',
        factor: 'Interest & Meaning Fit',
        text: 'Do you find genuine interest in commerce, strategy, leadership, or creating and managing organizations?',
        hint: 'Aligning personal interests with business functions is a key driver of career engagement and long-term satisfaction. (Super Business Manager, 2025)',
      },
      {
        key: 'Q',
        factor: 'Skill & Competency Fit',
        text: 'Do you have or are you developing the analytical, communication, and leadership skills the business world demands?',
        hint: 'Employers consistently rank communication, financial literacy, and critical thinking as core business competencies. (University of Potomac, 2024)',
      },
      {
        key: 'R',
        factor: 'Self-Efficacy & Confidence',
        text: 'Do you believe you can navigate the competitive, high-stakes, and relationship-driven demands of business careers?',
        hint: 'Career self-efficacy is a mediating factor between career aspiration and subjective career success. (PMC, 2022)',
      },
      {
        key: 'S',
        factor: 'Career Adaptability',
        text: 'Are you prepared to keep up with economic shifts, industry disruptions, and changing organizational demands?',
        hint: 'Business careers require high adaptability as markets, technology, and consumer behavior continuously shift. (Emerald Publishing, 2024)',
      },
      {
        key: 'T',
        factor: 'Exploration & Commitment',
        text: 'Have you seriously explored business through coursework, internships, entrepreneurship, or industry exposure?',
        hint: 'Career exploration and professional identity formation are key predictors of business career commitment. (Frontiers in Education, 2023)',
      },
      {
        key: 'U',
        factor: 'Opportunity & Market Viability',
        text: 'Do you believe there is strong market demand for your business specialization in your target industry or location?',
        hint: 'Business majors dominate high-demand career lists — though specialization significantly affects earning and opportunity. (University of Potomac, 2024)',
      },
    ],

    arts: [
      {
        key: 'P',
        factor: 'Interest & Meaning Fit',
        text: 'Do you find deep creative fulfillment in storytelling, visual communication, media production, or artistic expression?',
        hint: 'Intrinsic creative interest is one of the most critical factors for long-term engagement in arts and media careers. (ScienceDirect, 2020)',
      },
      {
        key: 'Q',
        factor: 'Skill & Competency Fit',
        text: 'Do you have or are you actively building the creative, technical, and communication skills your field requires?',
        hint: 'Arts and media careers demand a mix of creative talent, technical tools proficiency, and strong communication ability. (SREB, 2023)',
      },
      {
        key: 'R',
        factor: 'Self-Efficacy & Confidence',
        text: 'Do you have the confidence to put your creative work out publicly and persist through rejection and critique?',
        hint: 'Resilience and creative self-efficacy are essential for navigating the competitive and subjective nature of arts careers. (ScienceDirect, 2020)',
      },
      {
        key: 'S',
        factor: 'Career Adaptability',
        text: 'Are you prepared to continuously evolve your style, tools, and platforms as creative industries and media shift?',
        hint: 'Arts and media careers are among the most disrupted by technology — adaptability is non-negotiable. (Super Business Manager, 2025)',
      },
      {
        key: 'T',
        factor: 'Exploration & Commitment',
        text: 'Have you seriously explored your creative field through projects, portfolios, performances, publications, or professional exposure?',
        hint: 'Portfolio-building and deliberate creative exploration are essential markers of career commitment in arts and media. (Frontiers in Education, 2023)',
      },
      {
        key: 'U',
        factor: 'Opportunity & Market Viability',
        text: 'Do you believe there are real and accessible career opportunities in your specific area of arts, media, or communication?',
        hint: 'Arts careers vary widely in market viability by specialization — digital media and UX/UI design show strong demand. (SREB, 2023)',
      },
    ],
  },

  // ─── Verdict computation ────────────────────────────────
  evaluate(vars) {
    const { P, Q, R, S, T, U } = vars;
    // Priority 1 — EXCELLENT FIT: all six true
    // P ∧ Q ∧ R ∧ S ∧ T ∧ U
    if (P && Q && R && S && T && U) return 'EXCELLENT_FIT';
    // Priority 2 — MONITOR: interest + skill present, but at least one supporting factor absent
    // (P ∧ Q) ∧ (¬R ∨ ¬S ∨ ¬T ∨ ¬U)
    if (P && Q && (!R || !S || !T || !U)) return 'MONITOR';
    // Priority 3 — RECONSIDER: interest or skill absent — the two non-negotiable foundations
    // ¬P ∨ ¬Q  (from ¬(P ∧ Q) by De Morgan's Law)
    return 'RECONSIDER';
  },

  // ─── Verdict metadata ───────────────────────────────────
  VERDICTS: {
    EXCELLENT_FIT: {
      label: 'Excellent Fit',
      color: '#22C55E',
      colorDim: 'rgba(34,197,94,0.12)',
      icon: '✦',
      expression: 'P ∧ Q ∧ R ∧ S ∧ T ∧ U',
      unsimplified: '[(P ∧ Q) ∧ (R ∧ S)] ∧ (T ∧ U)',
      law: 'Associative Law',
      explanation: 'All six career alignment factors were positively identified. Your interests, competencies, confidence, adaptability, commitment, and career opportunities appear strongly aligned with your chosen path.',
    },
    MONITOR: {
      label: 'Monitor',
      color: '#FACC15',
      colorDim: 'rgba(250,204,21,0.12)',
      icon: '◎',
      expression: '(P ∧ Q) ∧ (¬R ∨ ¬S ∨ ¬T ∨ ¬U)',
      unsimplified: '(P ∧ Q ∧ ¬R ∧ S ∧ T ∧ U) ∨ (P ∧ Q ∧ R ∧ ¬S ∧ T ∧ U) ∨ (P ∧ Q ∧ R ∧ S ∧ ¬T ∧ U) ∨ ...',
      law: 'Distributive Law + Factoring',
      explanation: 'Your core career foundations — interest and skill — are present. However, one or more supporting factors such as confidence, adaptability, commitment, or market viability may require further development before full commitment.',
    },
    RECONSIDER: {
      label: 'Reconsider',
      color: '#EF4444',
      colorDim: 'rgba(239,68,68,0.12)',
      icon: '△',
      expression: '¬P ∨ ¬Q',
      unsimplified: '¬(P ∧ Q)',
      law: "De Morgan's Law",
      explanation: 'One or both of the non-negotiable career foundations — interest and skill fit — are currently absent. These are the most fundamental requirements for long-term career alignment and are unlikely to resolve without significant reflection or redirection.',
    },
  },

  VARIABLES: {
    P: { label: 'Interest & Meaning Fit',         letter: 'P' },
    Q: { label: 'Skill & Competency Fit',         letter: 'Q' },
    R: { label: 'Self-Efficacy & Confidence',     letter: 'R' },
    S: { label: 'Career Adaptability',            letter: 'S' },
    T: { label: 'Exploration & Commitment',       letter: 'T' },
    U: { label: 'Opportunity & Market Viability', letter: 'U' },
  },
};
