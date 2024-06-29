import { SignIn, SignInFormValues } from "@/entities";
import { Page } from "@/shared";
import { authActions } from "@/state/slices/auth/authSlice";
import { useAppDispatch } from "@/state/store";

export const SignInPage = () => {
  const dispatch = useAppDispatch()

  function onSubmitHandler(data: SignInFormValues) {
    dispatch(authActions.login({...data}))
  }

  return (
    <Page mt={"100px"}>
      <SignIn onSubmit={onSubmitHandler} />
    </Page>
  )
}


