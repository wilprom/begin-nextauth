import { SignIn } from '@/components/auth/sign-in'
import { auth } from '@/auth'
import { User } from '@/components/auth/user'

export default async function Home() {
  const session = await auth()
  // console.log(session)

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
        <User />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <SignIn />
    </main>
  )
}
