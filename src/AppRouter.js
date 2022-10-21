import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";

const AppRouter = () => {

    const isLogged = useSelector(state => state.isLogged);

    return isLogged ? 
        (
            <Routes>
                <Route path="/" element={<h1>Hello</h1>} />
                <Route path="*" element={<h1>Hello</h1>} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path="/" element={<SignUpForm />} />
                <Route path="signup" element={<SignUpForm />} />
                <Route path="signin" element={<SignInForm />} />
                <Route path="*" element={<SignUpForm />} />
            </Routes>
        )
}
 
export default AppRouter;