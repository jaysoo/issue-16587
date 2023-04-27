import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li><Link href="/works">This page works</Link></li>
      <li><Link href="/broken">This page is broken</Link></li>
    </ul>
  )
}
