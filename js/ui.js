// ============================================================
// PathCheck — UI Module
// ============================================================

const UI = {

  // ─── View transitions ────────────────────────────────────
  showLanding() {
    document.getElementById('view-landing').classList.remove('hidden');
    document.getElementById('view-field').classList.add('hidden');
    document.getElementById('view-assessment').classList.add('hidden');
    document.getElementById('view-result').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  showFieldSelect() {
    document.getElementById('view-landing').classList.add('hidden');
    document.getElementById('view-field').classList.remove('hidden');
    document.getElementById('view-assessment').classList.add('hidden');
    document.getElementById('view-result').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  showAssessment() {
    document.getElementById('view-landing').classList.add('hidden');
    document.getElementById('view-field').classList.add('hidden');
    document.getElementById('view-assessment').classList.remove('hidden');
    document.getElementById('view-result').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  showResult() {
    document.getElementById('view-result').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('view-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  },

  // ─── Field selection ─────────────────────────────────────
  renderFieldGrid() {
    const grid = document.getElementById('field-grid');
    grid.innerHTML = Logic.FIELDS.map(f => `
      <button class="field-card" data-field="${f.id}" type="button"
        style="--field-color:${f.color}">
        <span class="field-icon">${f.icon}</span>
        <span class="field-label">${f.label}</span>
        <span class="field-desc">${f.desc}</span>
        <span class="field-arrow">→</span>
      </button>
    `).join('');
  },

  // ─── Progress ────────────────────────────────────────────
  updateProgress(current, total, fieldLabel) {
    const pct = (current / total) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-label').textContent = current + ' of ' + total;
    document.getElementById('assess-field-label').textContent = fieldLabel;
  },

  // ─── Question card ───────────────────────────────────────
  renderFirstQuestion(q, total, fieldLabel) {
    this._setQuestionContent(q);
    document.getElementById('question-card').classList.add('slide-in-right');
    this.updateProgress(1, total, fieldLabel);
  },

  renderQuestion(q, index, total, fieldLabel, animDir) {
    const card = document.getElementById('question-card');
    card.classList.remove('slide-in-right', 'slide-in-left');
    card.classList.add(animDir === 'next' ? 'slide-out-left' : 'slide-out-right');

    setTimeout(() => {
      this._setQuestionContent(q);
      card.classList.remove('slide-out-left', 'slide-out-right');
      card.classList.add(animDir === 'next' ? 'slide-in-right' : 'slide-in-left');
      this.updateProgress(index + 1, total, fieldLabel);
    }, 200);
  },

  _setQuestionContent(q) {
    document.getElementById('q-variable').textContent = q.key;
    document.getElementById('q-factor').textContent = q.factor;
    document.getElementById('q-text').textContent = q.text;
    document.getElementById('q-hint').textContent = q.hint;
  },

  // ─── Answer trail ────────────────────────────────────────
  addTrailItem(q, answer) {
    const trail = document.getElementById('answer-trail');
    const item = document.createElement('div');
    item.className = 'trail-item trail-animate';
    item.innerHTML = `
      <span class="trail-letter">${q.key}</span>
      <span class="trail-factor">${q.factor}</span>
      <span class="trail-badge ${answer ? 'trail-yes' : 'trail-no'}">${answer ? 'YES' : 'NO'}</span>
    `;
    trail.appendChild(item);
  },

  clearTrail() {
    const t = document.getElementById('answer-trail');
    if (t) t.innerHTML = '';
  },

  // ─── Result rendering ────────────────────────────────────
  renderResult(verdictKey, variables, field) {
    const verdict = Logic.VERDICTS[verdictKey];
    this._renderVerdictCard(verdict, field);
    this._renderVariables(variables);
    this._renderLogic(verdict);
    this._renderExplanation(verdict);
  },

  _renderVerdictCard(verdict, field) {
    document.getElementById('result-verdict').innerHTML = `
      <div class="result-field-badge" style="--field-color:${field.color}">
        ${field.icon} ${field.label}
      </div>
      <div class="verdict-ring" style="--verdict-color:${verdict.color};--verdict-dim:${verdict.colorDim}">
        <div class="verdict-inner">
          <span class="verdict-icon">${verdict.icon}</span>
          <h2 class="verdict-label">${verdict.label}</h2>
          <p class="verdict-desc">${this._verdictSubtitle(verdict.label)}</p>
        </div>
      </div>
    `;
  },

  _verdictSubtitle(label) {
    const map = {
      'Excellent Fit': 'All six alignment factors confirmed.',
      'Monitor': 'Core foundations present. Some factors need attention.',
      'Reconsider': 'One or more critical foundations are currently absent.',
    };
    return map[label] || '';
  },

  _renderVariables(variables) {
    const cards = Object.entries(Logic.VARIABLES).map(([key, meta]) => {
      const isTrue = variables[key] === true;
      const isCore = ['P','Q'].includes(key);
      return `
        <div class="var-card ${isTrue ? 'var-card--true' : 'var-card--false'}">
          <div class="var-letter">${meta.letter}</div>
          <div class="var-info">
            <span class="var-name">${meta.label}</span>
            <span class="var-badge ${isTrue ? 'badge--true' : 'badge--false'}">${isTrue ? 'TRUE' : 'FALSE'}</span>
          </div>
          ${isCore ? '<div class="var-core-tag">Core Factor</div>' : ''}
        </div>`;
    }).join('');

    document.getElementById('result-variables').innerHTML = `
      <h3 class="result-section-title">Career Alignment Factors</h3>
      <div class="var-grid">${cards}</div>
    `;
  },

  _renderLogic(verdict) {
    document.getElementById('result-logic').innerHTML = `
      <h3 class="result-section-title">Logic Evaluation</h3>
      <div class="logic-card">
        <div class="logic-row">
          <span class="logic-label">Unsimplified</span>
          <span class="logic-expr logic-expr--dim">${verdict.unsimplified}</span>
        </div>
        <div class="logic-divider"></div>
        <div class="logic-row">
          <span class="logic-label">Law Applied</span>
          <span class="logic-expr logic-expr--law">${verdict.law}</span>
        </div>
        <div class="logic-divider"></div>
        <div class="logic-row">
          <span class="logic-label">Final Expression</span>
          <span class="logic-expr logic-expr--final">${verdict.expression}</span>
        </div>
      </div>
    `;
  },

  _renderExplanation(verdict) {
    document.getElementById('result-explanation').innerHTML = `
      <h3 class="result-section-title">Explanation</h3>
      <p class="explanation-text">${verdict.explanation}</p>
    `;
  },
};
