import { useNavigate } from 'react-router-dom'

import { SignIn, SignInFormValues } from '@/entities'
import { PATH, Page } from '@/shared'
import { authActions } from '@/state/slices/auth/authSlice'
import { useAppDispatch } from '@/state/store'

export const SignInPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  async function onSubmitHandler(data: SignInFormValues) {
    try {
      await dispatch(authActions.login({ ...data })).unwrap()
      navigate(PATH.INIT)
    } catch (error) {}
  }

  return (
    <Page mt={'100px'}>
      <SignIn onSubmit={onSubmitHandler} />
    </Page>
  )
}
