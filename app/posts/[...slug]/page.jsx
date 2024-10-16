import { getPostBySlug } from '@/lib/posts';

const Page = async ({ params }) => {
    const {slug} = params;
    const {content, frontmatter} = await getPostBySlug(slug[0]);
    return (
        <section className="py-24">
            <div className="container">
                <header className="rounded bg-gray-100 p-8">
                    <h1 className="font-serif text-3xl">
                        {frontmatter.title}
                    </h1>
                    <p>
                        by {frontmatter.author}
                    </p>
                    <p className="text-gray-500">
                        {frontmatter.date}
                    </p>
                </header>
                <main className='prose mt-12'>
                    {content}
                </main>
            </div>
        </section>
    );
};

export default Page;