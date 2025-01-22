import { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import FormInput from "./FormInput";
import SocialButtons from "./SocialButtons";
import WelcomePanel from "./WelcomePanel";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <WelcomePanel isLogin={isLogin} />

        <div className="p-8 md:p-12 lg:p-16 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>

          <form className="space-y-6">
            {!isLogin && (
              <FormInput
                icon={
                  <UserIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                }
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            )}

            <FormInput
              icon={
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
              }
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <FormInput
              icon={
                <LockClosedIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
              }
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>

            <div className="text-center text-sm text-gray-500 mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-2"
              >
                {isLogin ? "Sign up here" : "Sign in here"}
              </button>
            </div>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <SocialButtons />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
