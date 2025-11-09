import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(request: NextRequest) {
  try {
    const { cardTitle } = await request.json()

    if (!cardTitle || typeof cardTitle !== 'string') {
      return NextResponse.json(
        { error: 'Card title is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      )
    }

    const client = new OpenAI({ apiKey })

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.7,
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that converts feature requests into detailed implementation prompts for developers.
You help developers who are building a Kanban board app with Next.js, React 19, TypeScript, and Tailwind CSS v3.
Your job is to create clear, actionable prompts that another developer (or Claude) can use to implement new features.`,
        },
        {
          role: 'user',
          content: `Based on this feature title: "${cardTitle}"

Create a detailed, actionable prompt that a developer can give to Claude to implement this feature. The prompt should:
1. Clearly describe what the feature should do
2. Specify how it integrates with the existing Kanban board
3. Mention the tech stack (Next.js, React 19, TypeScript, Tailwind CSS v3)
4. Include any specific UI/UX requirements if relevant
5. Be concise but comprehensive (2-3 paragraphs)

Generate the prompt now:`,
        },
      ],
    })

    const generatedPrompt = response.choices[0].message.content || ''

    return NextResponse.json({ prompt: generatedPrompt })
  } catch (error) {
    console.error('Error generating prompt:', error)
    return NextResponse.json(
      { error: 'Failed to generate prompt' },
      { status: 500 }
    )
  }
}
