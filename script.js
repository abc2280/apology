/**
 * =========================================================================
 * MOMENT — CONTROLLER FOR TUSHAR BHAI'S APOLOGY EXPERIENCE
 * Tactile • Cinematic • Intimate • Respectful
 * =========================================================================
 */

'use strict';

// Application State
const AppState = {
  currentScene: 1,
  totalScenes: 6,
  isTransitioning: false,
  isClosedState: false,
  particlesRunning: true,
  animationFrameId: null
};

// Safe HTML Escaping Utility
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Populate all textual content from APOLOGY_CONFIG
 */
function populateContent() {
  const cfg = window.APOLOGY_CONFIG || {};

  // Header Recipient Tag
  const headerRecipient = document.getElementById('header-recipient-tag');
  if (headerRecipient && cfg.recipient && cfg.recipient.name) {
    headerRecipient.textContent = `FOR ${cfg.recipient.name.toUpperCase()}`;
  }

  // Scene 1: The Opening & Envelope
  if (cfg.scene1) {
    const elEyebrow = document.getElementById('scene1-eyebrow');
    const elHeadline = document.getElementById('scene1-headline');
    const elSupporting = document.getElementById('scene1-supporting');
    const elBtnText = document.getElementById('scene1-btn-text');

    if (elEyebrow && cfg.scene1.eyebrow) elEyebrow.textContent = cfg.scene1.eyebrow;
    if (elHeadline && cfg.scene1.headline) elHeadline.textContent = cfg.scene1.headline;
    if (elSupporting && cfg.scene1.supporting) elSupporting.textContent = cfg.scene1.supporting;
    if (elBtnText && cfg.scene1.buttonText) elBtnText.textContent = cfg.scene1.buttonText;
  }

  // Scene 2: Sincere Acknowledgement
  if (cfg.scene2) {
    const elEyebrow = document.getElementById('scene2-eyebrow');
    const elHeadline = document.getElementById('scene2-headline');
    const elLine1 = document.getElementById('scene2-line-1');
    const elLine2 = document.getElementById('scene2-line-2');
    const elNote = document.getElementById('scene2-note');
    const elBtnText = document.getElementById('scene2-btn-text');

    if (elEyebrow && cfg.scene2.eyebrow) elEyebrow.textContent = cfg.scene2.eyebrow;
    if (elHeadline && cfg.scene2.headline) elHeadline.textContent = cfg.scene2.headline;
    if (Array.isArray(cfg.scene2.paragraphs)) {
      if (elLine1 && cfg.scene2.paragraphs[0]) elLine1.textContent = cfg.scene2.paragraphs[0];
      if (elLine2 && cfg.scene2.paragraphs[1]) elLine2.textContent = cfg.scene2.paragraphs[1];
    }
    if (elNote && cfg.scene2.note) elNote.textContent = cfg.scene2.note;
    if (elBtnText && cfg.scene2.buttonText) elBtnText.textContent = cfg.scene2.buttonText;
  }

  // Scene 3: Brotherhood
  if (cfg.scene3) {
    const elEyebrow = document.getElementById('scene3-eyebrow');
    const elHeadline = document.getElementById('scene3-headline');
    const elEmphasis = document.getElementById('scene3-emphasis');
    const elSubtext = document.getElementById('scene3-subtext');
    const elBtnText = document.getElementById('scene3-btn-text');

    if (elEyebrow && cfg.scene3.eyebrow) elEyebrow.textContent = cfg.scene3.eyebrow;
    if (elHeadline && cfg.scene3.headline) elHeadline.textContent = cfg.scene3.headline;
    if (elEmphasis && cfg.scene3.revealEmphasis) elEmphasis.textContent = cfg.scene3.revealEmphasis;
    if (elSubtext && cfg.scene3.subtext) elSubtext.textContent = cfg.scene3.subtext;
    if (elBtnText && cfg.scene3.buttonText) elBtnText.textContent = cfg.scene3.buttonText;
  }

  // Scene 4: The Actual Apology (Exact Message Preservation)
  if (cfg.scene4) {
    const elEyebrow = document.getElementById('scene4-eyebrow');
    const elSalutation = document.getElementById('scene4-salutation');
    const messageContainer = document.getElementById('scene4-message-container');
    const elSignature = document.getElementById('scene4-sender-signature');
    const elBtnText = document.getElementById('scene4-btn-text');

    if (elEyebrow && cfg.scene4.eyebrow) elEyebrow.textContent = cfg.scene4.eyebrow;
    if (elSalutation && cfg.scene4.letterSalutation) elSalutation.textContent = cfg.scene4.letterSalutation;
    if (elSignature && cfg.sender) {
      elSignature.textContent = cfg.sender.signOff || cfg.sender.signature || `With love, ${cfg.sender.name || 'Zainab'} ❤️`;
    }
    if (elBtnText && cfg.scene4.buttonText) elBtnText.textContent = cfg.scene4.buttonText;

    if (messageContainer && Array.isArray(cfg.scene4.messageParagraphs)) {
      messageContainer.innerHTML = '';
      cfg.scene4.messageParagraphs.forEach((paraText) => {
        const p = document.createElement('p');
        p.className = 'apology-paragraph';
        
        // Add gentle emphasis class to key brother/mentor sentiment lines
        if (paraText.includes('brother') || paraText.includes('scold me')) {
          p.classList.add('highlight');
        }
        
        p.textContent = paraText;
        messageContainer.appendChild(p);
      });
    }
  }

  // Scene 5: Emotional Close
  if (cfg.scene5) {
    const elEyebrow = document.getElementById('scene5-eyebrow');
    const elHeadline = document.getElementById('scene5-headline');
    const elSupporting = document.getElementById('scene5-supporting');
    const elReflection = document.getElementById('scene5-reflection');
    const elBtnText = document.getElementById('scene5-btn-text');

    if (elEyebrow && cfg.scene5.eyebrow) elEyebrow.textContent = cfg.scene5.eyebrow;
    if (elHeadline && cfg.scene5.headline) elHeadline.textContent = cfg.scene5.headline;
    if (elSupporting && cfg.scene5.supporting) elSupporting.textContent = cfg.scene5.supporting;
    if (elReflection && cfg.scene5.reflection) elReflection.textContent = cfg.scene5.reflection;
    if (elBtnText && cfg.scene5.buttonText) elBtnText.textContent = cfg.scene5.buttonText;
  }

  // Scene 6: Final Interaction & Closure
  if (cfg.scene6) {
    const elEyebrow = document.getElementById('scene6-eyebrow');
    const elHeadline = document.getElementById('scene6-headline');
    const elSupporting = document.getElementById('scene6-supporting');
    const elBtnText = document.getElementById('scene6-btn-text');
    const elFinalSenderNote = document.getElementById('final-sender-note');
    const elClosedSenderSignoff = document.getElementById('closed-sender-signoff');

    if (elEyebrow && cfg.scene6.eyebrow) elEyebrow.textContent = cfg.scene6.eyebrow;
    if (elHeadline && cfg.scene6.headline) elHeadline.textContent = cfg.scene6.headline;
    if (elSupporting && cfg.scene6.supporting) elSupporting.textContent = cfg.scene6.supporting;
    if (elBtnText && cfg.scene6.closeButtonText) elBtnText.textContent = cfg.scene6.closeButtonText;

    const closingNoteText = (cfg.sender && cfg.sender.closingNote) ||
      (cfg.sender && cfg.sender.name ? `Made with sincerity by ${cfg.sender.name}.` : 'Made with sincerity by Zainab.');

    if (elFinalSenderNote) elFinalSenderNote.textContent = closingNoteText;
    if (elClosedSenderSignoff) elClosedSenderSignoff.textContent = closingNoteText;

    if (cfg.scene6.closedState) {
      const elBadge = document.getElementById('closed-badge');
      const elTitle = document.getElementById('closed-title');
      const elThankYou = document.getElementById('closed-thankyou');
      const elClosedSub = document.getElementById('closed-subtext');
      const elRestartText = document.getElementById('btn-restart-text');

      if (elBadge && cfg.scene6.closedState.badge) elBadge.textContent = cfg.scene6.closedState.badge;
      if (elTitle && cfg.scene6.closedState.title) elTitle.textContent = cfg.scene6.closedState.title;
      if (elThankYou && cfg.scene6.closedState.thankYou) elThankYou.textContent = cfg.scene6.closedState.thankYou;
      if (elClosedSub && cfg.scene6.closedState.subtext) elClosedSub.textContent = cfg.scene6.closedState.subtext;
      if (elRestartText && cfg.scene6.closedState.reopenButtonText) elRestartText.textContent = cfg.scene6.closedState.reopenButtonText;
    }
  }
}

/**
 * Navigate to a specific scene with smooth transitions and accessibility handling
 */
function goToScene(sceneNum, isImmediate = false) {
  if (sceneNum < 1 || sceneNum > AppState.totalScenes) return;
  if (AppState.isTransitioning && !isImmediate) return;

  AppState.isTransitioning = true;
  AppState.currentScene = sceneNum;

  // Update Progress Indicator & Bar
  const indicator = document.getElementById('progress-indicator');
  const bar = document.getElementById('progress-bar');
  if (indicator) {
    indicator.textContent = `${sceneNum} of ${AppState.totalScenes}`;
  }
  if (bar) {
    const percent = ((sceneNum) / AppState.totalScenes) * 100;
    bar.style.width = `${percent}%`;
  }

  // Update Back Button State
  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) {
    btnPrev.disabled = sceneNum === 1;
  }

  // Update Scene Panels
  const panels = document.querySelectorAll('.scene-panel');
  panels.forEach((panel) => {
    const panelNum = parseInt(panel.getAttribute('data-scene'), 10);
    if (panelNum === sceneNum) {
      panel.classList.add('active');
      panel.scrollTop = 0;
      // Focus on active panel for accessibility
      panel.setAttribute('tabindex', '-1');
      panel.focus({ preventScroll: true });
    } else {
      panel.classList.remove('active');
      panel.removeAttribute('tabindex');
    }
  });

  // Announce for assistive tech
  const a11y = document.getElementById('a11y-status');
  if (a11y) {
    a11y.textContent = `Scene ${sceneNum} of ${AppState.totalScenes}`;
  }

  // Release transition lock after animation
  setTimeout(() => {
    AppState.isTransitioning = false;
  }, isImmediate ? 50 : 500);
}

/**
 * Handle opening the envelope in Scene 1
 */
function handleEnvelopeOpen() {
  if (AppState.isTransitioning) return;
  const envelope = document.getElementById('envelope-interactive');
  
  if (envelope) {
    envelope.classList.add('opening');
  }

  // Provide tactile delay so the user sees the letter slide up
  setTimeout(() => {
    goToScene(2);
  }, 680);
}

/**
 * Handle closing the letter in Scene 6
 */
function handleCloseLetter() {
  const openView = document.getElementById('final-screen-open');
  const closedView = document.getElementById('final-screen-closed');

  if (openView && closedView) {
    openView.style.opacity = '0';
    openView.style.transform = 'translateY(10px)';
    openView.style.transition = 'opacity 0.35s ease, transform 0.35s ease';

    setTimeout(() => {
      openView.classList.add('hidden');
      closedView.classList.remove('hidden');
      AppState.isClosedState = true;

      const a11y = document.getElementById('a11y-status');
      if (a11y) {
        a11y.textContent = 'Letter sealed with sincerity.';
      }
    }, 350);
  }
}

/**
 * Reset and restart the experience
 */
function restartExperience() {
  // Reset Scene 6 state
  const openView = document.getElementById('final-screen-open');
  const closedView = document.getElementById('final-screen-closed');
  if (openView && closedView) {
    openView.style.opacity = '';
    openView.style.transform = '';
    openView.style.transition = '';
    openView.classList.remove('hidden');
    closedView.classList.add('hidden');
  }
  AppState.isClosedState = false;

  // Reset envelope in Scene 1
  const envelope = document.getElementById('envelope-interactive');
  if (envelope) {
    envelope.classList.remove('opening');
  }

  // Navigate back to Scene 1
  goToScene(1);
}

/**
 * Ambient Warm Floating Particles Engine
 */
function initAmbientParticles() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(24, Math.floor(width / 32));

  // Check for reduced motion preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    return; // Don't animate for users preferring reduced motion
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.1,
      opacity: Math.random() * 0.35 + 0.15,
      hueVariation: Math.random() * 20 - 10
    });
  }

  function render() {
    if (!AppState.particlesRunning) return;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges smoothly
      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(184, 93, 107, ${p.opacity * 0.4})`;
      ctx.fill();
    }

    AppState.animationFrameId = requestAnimationFrame(render);
  }

  render();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // Pause rendering when tab is not visible to conserve battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      AppState.particlesRunning = false;
      if (AppState.animationFrameId) cancelAnimationFrame(AppState.animationFrameId);
    } else {
      AppState.particlesRunning = true;
      render();
    }
  });
}

/**
 * Attach Event Listeners
 */
function setupEventListeners() {
  // Envelope click and keyboard interactions
  const envelope = document.getElementById('envelope-interactive');
  if (envelope) {
    envelope.addEventListener('click', handleEnvelopeOpen);
    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnvelopeOpen();
      }
    });
  }

  // Wax seal click
  const waxSeal = document.getElementById('wax-seal');
  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      handleEnvelopeOpen();
    });
  }

  // Scene forward buttons
  const btn1 = document.getElementById('btn-scene-1');
  if (btn1) btn1.addEventListener('click', handleEnvelopeOpen);

  const btn2 = document.getElementById('btn-scene-2');
  if (btn2) btn2.addEventListener('click', () => goToScene(3));

  const btn3 = document.getElementById('btn-scene-3');
  if (btn3) btn3.addEventListener('click', () => goToScene(4));

  const btn4 = document.getElementById('btn-scene-4');
  if (btn4) btn4.addEventListener('click', () => goToScene(5));

  const btn5 = document.getElementById('btn-scene-5');
  if (btn5) btn5.addEventListener('click', () => goToScene(6));

  // Scene 6 buttons
  const btnClose = document.getElementById('btn-close-letter');
  if (btnClose) btnClose.addEventListener('click', handleCloseLetter);

  const btnRestart = document.getElementById('btn-restart');
  if (btnRestart) btnRestart.addEventListener('click', restartExperience);

  // Top navigation back button
  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (AppState.currentScene > 1) {
        goToScene(AppState.currentScene - 1);
      }
    });
  }

  // Keyboard navigation (Left/Right arrows)
  window.addEventListener('keydown', (e) => {
    // Only handle if not focused on input elements
    if (['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase())) {
      return;
    }

    if (e.key === 'ArrowRight' && AppState.currentScene < AppState.totalScenes) {
      if (AppState.currentScene === 1) {
        handleEnvelopeOpen();
      } else {
        goToScene(AppState.currentScene + 1);
      }
    } else if (e.key === 'ArrowLeft' && AppState.currentScene > 1) {
      goToScene(AppState.currentScene - 1);
    }
  });
}

/**
 * Initialize Application on DOM Ready
 */
document.addEventListener('DOMContentLoaded', () => {
  populateContent();
  setupEventListeners();
  initAmbientParticles();
  goToScene(1, true);
});
