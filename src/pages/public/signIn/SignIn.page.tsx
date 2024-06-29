import { SignIn, SignInFormValues } from "@/entities";
import { Page } from "@/shared";

export const SignInPage = () => {

  function onSubmitHandler(data: SignInFormValues) {
    console.log(data)
  }

  return (
    <Page mt={"100px"}>
      <SignIn onSubmit={onSubmitHandler} />
    </Page>
  )
}


