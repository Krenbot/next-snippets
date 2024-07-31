import Link from 'next/link';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
  //Prisma expects numbers instead of inherent strings from params
  const id = parseInt(props.params.id);

  //Fetch current snippet
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  //handle snippet not found
  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div>
        <Link className="text-xl font-bold" href={`/`}>
          Home
        </Link>
      </div>
      <div>
        Editing snippet with title:&nbsp;
        <br />
        {<span className="uppercase font-bold">{snippet.title}</span>}
      </div>
    </>
  );
}
