  "use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Loader2 } from "lucide-react";

// Simple GitHub icon (inline) to avoid relying on a missing export from lucide-react
function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" strokeWidth={0} />
    </svg>
  );
}

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      console.log("Login attempt:", data);
      // TODO: Implement actual login logic
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignupSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      console.log("Signup attempt:", data);
      // TODO: Implement actual signup logic
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-honeydew via-white to-honeydew flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-evergreen mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Kenyan Wallet
          </h1>
          <p className="text-gray-600 text-sm">Crypto & Mining Platform</p>
        </div>

        {/* Auth Card */}
        <div className="border-2 border-evergreen/20 rounded-lg shadow-lg bg-white p-8">
          <h2 className="text-2xl font-bold text-evergreen mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            {isLogin ? "Sign in to manage your crypto assets" : "Join Kenyan Wallet today"}
          </p>

          {isLogin ? (
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="login-email" className="text-evergreen font-semibold text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
                    {...loginForm.register("email")}
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="text-sm text-red-600">{loginForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="login-password" className="text-evergreen font-semibold text-sm">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
                    {...loginForm.register("password")}
                  />
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-sm text-red-600">{loginForm.formState.errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-evergreen hover:bg-evergreen-dark text-honeydew font-semibold py-2 h-10"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="signup-name" className="text-evergreen font-semibold text-sm">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
                  {...signupForm.register("name")}
                />
                {signupForm.formState.errors.name && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-evergreen font-semibold text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
                    {...signupForm.register("email")}
                  />
                </div>
                {signupForm.formState.errors.email && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-evergreen font-semibold text-sm">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
                    {...signupForm.register("password")}
                  />
                </div>
                {signupForm.formState.errors.password && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.password.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-confirm" className="text-evergreen font-semibold text-sm">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="signup-confirm"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
                    {...signupForm.register("confirmPassword")}
                  />
                </div>
                {signupForm.formState.errors.confirmPassword && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-evergreen hover:bg-evergreen-dark text-honeydew font-semibold py-2 h-10"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-evergreen/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600">Or continue with</span>
            </div>
          </div>

          {/* OAuth Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full border-evergreen/30 hover:bg-honeydew text-evergreen font-semibold py-2 h-10"
          >
            <Github className="mr-2 h-4 w-4" />
            Sign with OAuth
          </Button>

          {/* Toggle Form */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-evergreen font-semibold hover:text-evergreen-dark transition-colors"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>© 2024 Kenyan Wallet. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
