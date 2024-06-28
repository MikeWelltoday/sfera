import { SignUp, SignUpFormValues } from '@/entities'
import {  Page } from "@/shared";

export const SignUpPage = () => {

  function onSubmitHandler({ email, password }: SignUpFormValues) {
    console.log(email);
    console.log(password);
  }

  return (
      <Page mt={'100px'}>
        <SignUp onSubmit={onSubmitHandler} />
      </Page>
  )
}
