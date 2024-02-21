import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignupPage";
//list your routes here
export const routes = [
    { path: "/", element: <SignInPage /> },
    { path: "/signin", element: <SignInPage /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "*", element: <NotFound /> },

]
