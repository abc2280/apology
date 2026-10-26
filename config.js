/**
 * =========================================================================
 * MOMENT — PERSONALIZED APOLOGY & BROTHERHOOD EXPERIENCE FOR TUSHAR BHAI
 * =========================================================================
 * 
 * All editable text lives here. You can personalize any line, recipient name,
 * or button label without touching the core logic or styling.
 */

const APOLOGY_CONFIG = {
  // Recipient and Sender Details
  recipient: {
    name: "Tushar Bhai",
    shortName: "Tushar Bhai",
    honorific: "bhai",
    relationshipLabel: "Brother, Mentor & Friend"
  },
  
  sender: {
    name: "Zainab",
    signOff: "With love, Zainab ❤️",
    closingNote: "Made with sincerity by Zainab."
  },

  // Scene 1 — The Opening Screen & Envelope
  scene1: {
    eyebrow: "A LITTLE SOMETHING FOR YOU",
    headline: "Hey, Tushar Bhai. ❤️",
    supporting: "There’s something I’ve been meaning to say properly.",
    envelopeLabel: "Personal Letter",
    envelopeSealTooltip: "Click to open letter",
    buttonText: "OPEN THIS LETTER →"
  },

  // Scene 2 — Sincere Acknowledgement (Accountability)
  scene2: {
    eyebrow: "HONEST ADMISSION",
    headline: "I owe you an apology.",
    paragraphs: [
      "I know I misbehaved and got angry.",
      "And honestly, I regret it."
    ],
    note: "No excuses. Just owning up to my mistake.",
    buttonText: "THERE'S MORE I WANT TO SAY →"
  },

  // Scene 3 — More Than a Friend (Brotherhood)
  scene3: {
    eyebrow: "THE BOND",
    headline: "You're not just my friend.",
    revealEmphasis: "You're like my brother.",
    subtext: "Some bonds are too meaningful to let a moment of anger shake what you mean to me.",
    buttonText: "LET ME EXPLAIN ❤️"
  },

  // Scene 4 — The Actual Apology (Sender's exact words preserved)
  scene4: {
    eyebrow: "UNEDITED & FROM THE HEART",
    letterSalutation: "Tushar Bhai,",
    // Preserving the sender's exact source of truth word-for-word
    messageParagraphs: [
      "I’m really sorry, bhai. 🥺❤️",
      "I know I misbehaved and got angry, and I truly regret it.",
      "You’re not just my friend, you’re like my brother.",
      "Please forgive me.",
      "You have every right to scold me, just never stop guiding me and helping me become a better person.",
      "You mean a lot to me. 🫂❤️"
    ],
    buttonText: "ONE LAST THOUGHT →"
  },

  // Scene 5 — The Emotional Close (Hope & Mutual Respect)
  scene5: {
    eyebrow: "LOOKING AHEAD",
    headline: "Some bonds matter too much to leave things unsaid.",
    supporting: "I’m sorry, bhai. You mean a lot to me, and I hope we can move forward.",
    reflection: "Your guidance and presence in my life are invaluable.",
    buttonText: "A FINAL NOTE →"
  },

  // Scene 6 — Final Interaction & Closure
  scene6: {
    eyebrow: "ALWAYS RESPECTED",
    headline: "YOU'LL ALWAYS BE MORE THAN JUST A FRIEND. ❤️",
    supporting: "— A heartfelt apology, just for you.",
    closeButtonText: "CLOSE THE LETTER ❤️",
    
    // State shown after clicking "CLOSE THE LETTER"
    closedState: {
      badge: "SEALED WITH SINCERITY",
      title: "Letter Closed.",
      thankYou: "Thank you for taking the time to read this, bhai.",
      subtext: "No rush, no expectations, and no pressure. Take all the time you need. I value you and our bond immensely.",
      reopenButtonText: "READ AGAIN ↺"
    }
  }
};

// Make accessible to browser window
if (typeof window !== 'undefined') {
  window.APOLOGY_CONFIG = APOLOGY_CONFIG;
}
