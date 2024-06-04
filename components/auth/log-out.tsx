import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { signOut } from '@/auth'

export function LogOutForm() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button variant={'destructive'} size={'lg'}>
        <span className="pr-3">
          <LogOut />
        </span>
        Log Out
      </Button>
    </form>
  )
}
