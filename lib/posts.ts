export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello, World',
    date: 'Apr 15, 2025',
    excerpt: 'Every journey begins somewhere. This is the beginning of mine.',
    content: 'Every journey begins somewhere.\n\nThis blog is where I will share things I am learning, building, and thinking about. It might be messy. It might meander. But it will be honest.\n\nThanks for being here.',
  },
  {
    slug: 'on-writing',
    title: 'On Writing',
    date: 'Apr 22, 2025',
    excerpt: 'Writing is thinking. The act of putting words on a page forces clarity in a way that thinking alone never does.',
    content: 'Writing is thinking.\n\nThe act of putting words on a page forces clarity in a way that thinking alone never does. You can hold a vague idea in your head for weeks, comfortable with its fuzzy edges. The moment you try to write it down, you discover whether you actually understand it.\n\nStart writing. See what you actually think.',
  },
  {
    slug: 'less-but-better',
    title: 'Less, But Better',
    date: 'May 1, 2025',
    excerpt: 'Dieter Rams said it. It applies to more than product design.',
    content: 'Dieter Rams said it about product design, but it applies everywhere.\n\nLess features. Less noise. Less clutter. More focus. More depth. More time on the things that matter.\n\nThe hardest part is not adding things — it is deciding what to leave out.',
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
