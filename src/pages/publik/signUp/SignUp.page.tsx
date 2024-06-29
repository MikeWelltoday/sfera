import { useNavigate } from 'react-router-dom'

import { SignUp, SignUpFormValues } from '@/entities'
import { PATH, Page } from '@/shared'
import { authActions } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

export const SignUpPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  async function onSubmitHandler(data: SignUpFormValues) {
    try {
      await dispatch(authActions.register({ ...data }))
      navigate(PATH.SIGNIN)
    } catch (error) {}
  }

  return (
    <Page mt={'100px'}>
      <SignUp onSubmit={onSubmitHandler} />
    </Page>
  )
}
