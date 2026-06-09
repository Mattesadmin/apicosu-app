export async function GET() {
  return Response.json({
    openai: process.env.OPENAI_API_KEY ? "OK" : "MISSING",
    anthropic: process.env.ANTHROPIC_API_KEY ? "OK" : "MISSING",
  });
}
