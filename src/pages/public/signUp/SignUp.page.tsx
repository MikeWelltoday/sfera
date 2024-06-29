import {  SignUp, SignUpFormValues } from "@/entities";
import {  Page } from "@/shared";
import { authActions } from "@/state/slices/auth/authSlice";
import { useAppDispatch } from "@/state/store";

export const SignUpPage = () => {

  const dispatch = useAppDispatch()

  function onSubmitHandler(data: SignUpFormValues) {
    dispatch(authActions.register({...data}))
      }

  return (
      <Page mt={'100px'}>
        <SignUp onSubmit={onSubmitHandler} />
      </Page>
  )
}
