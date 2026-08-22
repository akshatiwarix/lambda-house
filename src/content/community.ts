export type Venue =
  | { status: "pending"; display: string }
  | {
      status: "confirmed";
      name: string;
      address: string;
      mapUrl: string;
      accessibility: string;
    };

export type Faq = { question: string; answer: string };

export const community = {
  name: "Lambda House",
  descriptor: "A home for people curious about technology.",
  chapter: "Kanpur",
  chapterMark: "λ / KNP",
  hero: "Bringing people together to talk tech",
  story:
    "I wanted people in Kanpur I could talk tech with. So I am starting the group I was looking for. Meet people who can talk about technology for hours, discover interesting things together, and occasionally build something great. Lambda House exists because I love technology and just wanted to talk to people without turning every conversation into formal networking. Most groups are built around one platform or one subject. This is built around the people instead. Come for the conversation, stay because you found someone worth talking to. — Akshat",
  contactEmail: "joinlambdahouse@gmail.com",
  whatsappUrl: "https://chat.whatsapp.com/El6ybbYnyhL90MMudkbV1G",
} as const;

export const nextEvent = {
  name: "Lambda House Kanpur #01",
  format: "Tech hangout",
  isoStart: "2026-09-06T16:00:00+05:30",
  isoEnd: "2026-09-06T18:00:00+05:30",
  dateLabel: "Sunday, September 6, 2026",
  timeLabel: "4:00–6:00 PM",
  price: "Free",
  capacityLabel: "Limited by venue capacity",
  /** Shown wherever an RSVP action would be, while RSVP is not open yet. */
  rsvpPendingNote:
    "RSVP opens closer to the date, once the venue is confirmed. Join the community and you will get the link first.",
  venue: {
    status: "pending",
    display: "Kanpur · venue confirmation in progress",
  } satisfies Venue,
} as const;

export const eventFormats = [
  {
    name: "Tech hangout",
    duration: "90–120 minutes",
    summary:
      "A relaxed conversation in a public café. We start with names and one technology each person is curious about, then let the conversation go where it wants.",
    detail:
      "One circle when the group is small, several tables as more people arrive. No talks, no slides, no compulsory networking games.",
  },
  {
    name: "Build together",
    duration: "2–3 hours",
    summary:
      "A working session with tables, power, and Wi-Fi. Bring a project, start something small, explore a tool, help someone, or just watch.",
    detail:
      "The last 15 minutes are an optional show-and-tell. Unfinished and broken things are welcome; nothing needs to be polished.",
  },
] as const;

export const audience = [
  "People who write code, and people who never have",
  "Designers, hardware tinkerers, and gamers",
  "Students, working people, and career changers",
  "Researchers, product people, and self-taught builders",
  "Anyone who reads about technology for fun",
  "Complete beginners who just find this stuff interesting",
] as const;

export const communityRules = [
  "Curiosity is enough. No gatekeeping.",
  "Keep conversation related to technology.",
  "Disagree with ideas without attacking people.",
  "No harassment, discrimination, threats, doxxing, or invasive behaviour.",
  "Ask before privately messaging another member.",
  "Share your work to start a conversation, not to repeatedly advertise.",
  "Respect photography preferences and safeguards for younger members.",
] as const;

export const faqs: Faq[] = [
  {
    question: "Do I need to know how to code?",
    answer: "No. If technology makes you curious, you belong here.",
  },
  {
    question: "Can school students attend?",
    answer:
      "Yes. Lambda House is open to every age, and anyone may attend independently.",
  },
  {
    question: "Is it free?",
    answer: "Yes. The first tech hangout is free.",
  },
  {
    question: "Do I need to bring a project?",
    answer: "No. Bring a question, a curiosity, or just yourself.",
  },
  {
    question: "Can I attend alone?",
    answer:
      "Yes. Most people are coming to meet someone new, and the opening round makes joining a conversation easier.",
  },
  {
    question: "What language will people speak?",
    answer:
      "Use whichever of Hindi or English makes the conversation comfortable. Technical terms can stay in the language people normally use for them.",
  },
];
