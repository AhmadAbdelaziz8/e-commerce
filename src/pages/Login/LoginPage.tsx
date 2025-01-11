import LoginForm from "../../components/Form";

const LoginPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50">
      
      {/* Left Section: Login Form */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="text-center bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
          <LoginForm />
          <p className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
          <p className="mt-2 text-gray-600">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </p>
        </div>
      </div>

      {/* Right Section: Welcome Message */}
      <div className="w-full md:w-1/2 flex justify-start">
        <div className="text-center md:text-left max-w-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Log in to access your account and continue your journey with us.
            Enjoy seamless access to all our features and services.
          </p>
          <p className="text-lg text-gray-600">
            New here?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Create an account
            </a>{" "}
            to get started.
          </p>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
