import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
    theme: "dracula",
}

const rootDirectory = path.join(process.cwd(), 'content');

export async function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { content, frontmatter } = await compileMDX({
        source: fileContents,
        components : {
            h1: props => (
                <h1 {...props} className="text-blue-400">
                    {props.children}
                </h1>
            )
        },
        options : {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
            }
        }
    });
    return {content, frontmatter, slug: realSlug };
};

export async function getAllPosts() {
    const files = fs.readdirSync(rootDirectory);
    let posts = [];
    for (const file of files) {
        const post = await getPostBySlug(file);
        posts.push(post);
    }
    return Promise.all(posts);
};