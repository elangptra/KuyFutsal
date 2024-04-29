import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = ()=>{

    return (
        <AuthLayout title="Masuk" type="login">
            <FormLogin/>
        </AuthLayout>
        )
}
export default LoginPage;