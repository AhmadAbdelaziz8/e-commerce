import { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const AuthPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Illustration */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-500 hidden lg:flex items-center justify-center p-12">
          <div className="w-full text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="opacity-90">
              {isLogin
                ? "Login to access your account and continue your journey."
                : "Join our community and unlock amazing features."}
            </p>
            <div className="mt-8 relative h-64">
              {/* Add your illustration or image here */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 lg:p-16 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>

          <form className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <UserIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>
            )}

            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

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

            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  {/* Google SVG icon */}
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  {/* GitHub SVG icon */}
                </svg>
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;