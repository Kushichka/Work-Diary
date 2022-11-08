import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import UserProfile from "./pages/UserProfile/UserProfile";

const AppRouter = () => {

    const isLogged = useSelector(state => state.isLogged);

    return isLogged ? 
        (
            <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="/MyHours" element={<UserProfile />} />
                <Route path="*" element={<UserProfile />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path="/" element={<SignUpPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="*" element={<SignUpPage />} />
            </Routes>
        )
}
 
export default AppRouter;