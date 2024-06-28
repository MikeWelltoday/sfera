type userStatus = 'customer' | 'executor'

export type Me = {
  avatar: string
  email: string
  id: string
  name: string
  status: userStatus
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type RegisterArgs = Omit<LoginArgs, 'rememberMe'> & Pick<Me, 'status'>
