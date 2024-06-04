import { auth } from '@/auth'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOutForm } from './log-out'

const User = async () => {
  const session = await auth()

  if (!session) {
    return <div>Not User!</div>
  }

  return (
    <div className='flex flex-col gap-4'>
      <Card>
        <CardHeader>
          <Avatar>
            <AvatarImage src={`${session.user?.image}`} />
            <AvatarFallback>WP</AvatarFallback>
          </Avatar>
          <CardTitle>{session.user?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {session.user?.email}</p>
          <p>User ID: {session.user?.id}</p>
        </CardContent>
      </Card>

      <LogOutForm />
    </div>
  )
}

export { User }
