import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Avatar>
        <AvatarImage src="/logo.jpg" />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-mono font-extrabold">Rodrigo Godoy</h1>
    </main>
  )
}
