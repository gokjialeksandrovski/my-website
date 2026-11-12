const PARAGRAPH_SEPARATOR = '\n\n'

export const splitParagraphs = (text: string): readonly string[] => text.split(PARAGRAPH_SEPARATOR)

// Copy lives in the dictionaries as plain strings; a blank line there is a paragraph break here.
export const Prose = ({ text }: { text: string }) => (
  <div className="space-y-4">
    {splitParagraphs(text).map((paragraph) => (
      <p key={paragraph} className="type-body">{paragraph}</p>
    ))}
  </div>
)
