import { signIn } from '@/auth'
import { Button } from '../ui/button'

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn()
      }}
    >
      <Button
        variant={'default'}
        size={'lg'}
        className="bg-green-600 hover:bg-green-700 p-3 font-bold"
      >
        Sign In
      </Button>
    </form>
  )
}
