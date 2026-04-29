import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-700">
            My Blog
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-10 inline-block">
          ← All posts
        </Link>
        <article>
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">{post.title}</h1>
            <time className="text-sm text-gray-400">{post.date}</time>
          </div>
          <div className="space-y-4">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 leading-7 text-[15px]">{para}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
