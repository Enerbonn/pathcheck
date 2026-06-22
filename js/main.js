// ============================================================
// PathCheck — Main Controller
// Pure logic. No AI. No API. No dependencies.
// ============================================================

const App = {
  selectedField: null,
  currentIndex: 0,
  answers: { P: null, Q: null, R: null, S: null, T: null, U: null },

  init() {
    // Landing
    document.getElementById('start-btn').addEventListener('click', () => {
      UI.renderFieldGrid();
      UI.showFieldSelect();
    });

    // Field selection (event delegation)
    document.getElementById('field-grid').addEventListener('click', (e) => {
      const card = e.target.closest('.field-card');
      if (!card) return;
      const fieldId = card.dataset.field;
      this._startField(fieldId);
    });

    // Yes / No
    document.getElementById('btn-yes').addEventListener('click', () => this._answer(true));
    document.getElementById('btn-no').addEventListener('click',  () => this._answer(false));

    // Keyboard: Y = yes, N = no
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('view-assessment').classList.contains('hidden')) return;
      if (e.key === 'y' || e.key === 'Y') this._answer(true);
      if (e.key === 'n' || e.key === 'N') this._answer(false);
    });

    // Restart
    document.getElementById('restart-btn').addEventListener('click', () => this._restart());

    UI.showLanding();
  },

  _startField(fieldId) {
    this.selectedField = Logic.FIELDS.find(f => f.id === fieldId);
    this.currentIndex = 0;
    this.answers = { P: null, Q: null, R: null, S: null, T: null, U: null };
    UI.clearTrail();
    UI.showAssessment();

    const questions = Logic.QUESTIONS[fieldId];
    UI.renderFirstQuestion(questions[0], questions.length, this.selectedField.label);
  },

  _answer(value) {
    if (!this.selectedField) return;

    const questions = Logic.QUESTIONS[this.selectedField.id];
    const q = questions[this.currentIndex];
    this.answers[q.key] = value;

    UI.addTrailItem(q, value);
    this._setButtonsEnabled(false);

    const next = this.currentIndex + 1;

    if (next < questions.length) {
      this.currentIndex = next;
      UI.renderQuestion(
        questions[next],
        next,
        questions.length,
        this.selectedField.label,
        'next'
      );
      setTimeout(() => this._setButtonsEnabled(true), 300);
    } else {
      setTimeout(() => this._finish(), 300);
    }
  },

  _finish() {
    const verdictKey = Logic.evaluate(this.answers);
    UI.renderResult(verdictKey, this.answers, this.selectedField);
    UI.showResult();
  },

  _restart() {
    this.selectedField = null;
    this.currentIndex = 0;
    this.answers = { P: null, Q: null, R: null, S: null, T: null, U: null };
    UI.clearTrail();
    UI.showLanding();
  },

  _setButtonsEnabled(enabled) {
    document.getElementById('btn-yes').disabled = !enabled;
    document.getElementById('btn-no').disabled  = !enabled;
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
