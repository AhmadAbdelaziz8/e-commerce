interface WelcomePanelProps {
  isLogin: boolean;
}

const WelcomePanel = ({ isLogin }: WelcomePanelProps) => (
  <div className="bg-gradient-to-br from-indigo-600 to-blue-500 hidden lg:flex items-center justify-center p-12">
    <div className="w-full text-white">
      <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
      <p className="opacity-90">
        {isLogin
          ? "Login to access your account and continue your journey."
          : "Join our community and unlock amazing features."}
      </p>
      <div className="mt-8 relative h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-lg" />
      </div>
    </div>
  </div>
);

export default WelcomePanel;
