import Link from 'next/link'
import { posts } from '@/lib/posts'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">My Blog</h1>
          <p className="text-sm text-gray-400 mt-1">Thoughts on things that matter</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="divide-y divide-gray-100">
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              <Link href={`/posts/${post.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-400 shrink-0">{post.date}</time>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-2xl mx-auto text-xs text-gray-300">Built with Next.js</div>
      </footer>
    </div>
  )
}
