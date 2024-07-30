import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippets) => {
    return (
      <div key={snippets.id}>
        {snippets.title} {snippets.code}
      </div>
    );
  });

  return <div>{renderedSnippets}</div>;
}
