import { NextResponse } from 'next/server';

const SOURCE_URL = 'https://trisquadathon.infomeister.co.in/';
const CACHE_DURATION_MS = 5 * 60 * 1000;
let cachedContext: { text: string; expiresAt: number } | null = null;

function extractPageText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function selectRelevantContext(text: string, question: string) {
  const normalizedQuestion = question.toLowerCase();
  const keywords = normalizedQuestion.includes('prize')
    ? ['prize', '₹', 'recognition']
    : normalizedQuestion.includes('timeline') || normalizedQuestion.includes('round') || normalizedQuestion.includes('date')
    ? ['timeline', 'round', 'registration', 'finale', 'result']
    : normalizedQuestion.includes('register')
    ? ['register', 'registration', 'unstop']
    : normalizedQuestion.includes('location') || normalizedQuestion.includes('where')
    ? ['location', 'institute', 'kovilpalayam', 'coimbatore']
    : ['trisquadathon', 'hackathon', 'innovation', 'challenge', 'register', 'timeline', 'prize', 'location'];

  const sentences = text.split(/(?<=[.!?])\s+/);
  const relevantSentences = sentences.filter((sentence) => {
    const normalizedSentence = sentence.toLowerCase();
    return keywords.some((keyword) => normalizedSentence.includes(keyword));
  });

  return relevantSentences.slice(0, 8).join(' ');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = typeof body.question === 'string' ? body.question.trim() : '';

    if (!question) {
      return NextResponse.json({ context: '' });
    }

    if (!cachedContext || cachedContext.expiresAt < Date.now()) {
      const response = await fetch(SOURCE_URL, {
        headers: { 'User-Agent': 'INFOMEISTER-MIFI/1.0' },
        next: { revalidate: 300 },
      });

      if (!response.ok) {
        throw new Error(`Source returned ${response.status}`);
      }

      cachedContext = {
        text: extractPageText(await response.text()),
        expiresAt: Date.now() + CACHE_DURATION_MS,
      };
    }

    return NextResponse.json({
      context: selectRelevantContext(cachedContext.text, question),
      source: SOURCE_URL,
    });
  } catch {
    return NextResponse.json({ context: '' }, { status: 200 });
  }
}
