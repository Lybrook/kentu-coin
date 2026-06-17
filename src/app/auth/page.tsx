  "use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Loader2, Globe } from "lucide-react";



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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#003153] to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#FFC72C] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Kenyan Wallet
          </h1>
          <p className="text-[#D8BFD8] text-sm">Crypto & Mining Platform</p>
        </div>

        {/* Auth Card */}
        <div className="border-2 border-[#D8BFD8]/30 rounded-lg shadow-2xl bg-white p-8">
          <h2 className="text-2xl font-bold text-[#003153] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            {isLogin ? "Sign in to manage your crypto assets" : "Join Kenyan Wallet today"}
          </p>

          {isLogin ? (
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="login-email" className="text-[#003153] font-semibold text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 border border-[#D8BFD8]/30 rounded-md focus:outline-none focus:border-[#FFC72C]"
                    {...loginForm.register("email")}
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="text-sm text-red-600">{loginForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="login-password" className="text-[#003153] font-semibold text-sm">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-[#D8BFD8]/30 rounded-md focus:outline-none focus:border-[#FFC72C]"
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
                className="w-full bg-[#FFC72C] hover:bg-yellow-500 text-[#003153] font-semibold py-2 h-10"
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
                <label htmlFor="signup-name" className="text-[#003153] font-semibold text-sm">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-[#D8BFD8]/30 rounded-md focus:outline-none focus:border-[#FFC72C]"
                  {...signupForm.register("name")}
                />
                {signupForm.formState.errors.name && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-[#003153] font-semibold text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 border border-[#D8BFD8]/30 rounded-md focus:outline-none focus:border-[#FFC72C]"
                    {...signupForm.register("email")}
                  />
                </div>
                {signupForm.formState.errors.email && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-[#003153] font-semibold text-sm">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-[#D8BFD8]/30 rounded-md focus:outline-none focus:border-[#FFC72C]"
                    {...signupForm.register("password")}
                  />
                </div>
                {signupForm.formState.errors.password && (
                  <p className="text-sm text-[#FF004F]">{signupForm.formState.errors.password.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-confirm" className="text-[#003153] font-semibold text-sm">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="signup-confirm"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 border border-[#D8BFD8]/30 rounded-md focus:outline-none focus:border-[#FFC72C]"
                    {...signupForm.register("confirmPassword")}
                  />
                </div>
                {signupForm.formState.errors.confirmPassword && (
                  <p className="text-sm text-[#FF004F]">{signupForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FFC72C] hover:bg-yellow-500 text-[#003153] font-semibold py-2 h-10"
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
              <div className="w-full border-t border-[#D8BFD8]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-600">Or continue with</span>
            </div>
          </div>

          {/* Google Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full border-[#D8BFD8] hover:bg-[#D8BFD8]/20 text-[#003153] font-semibold py-2 h-10"
          >
            <Globe className="mr-2 h-4 w-4" />
            Sign with Google
          </Button>

          {/* Toggle Form */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#FFC72C] font-semibold hover:text-yellow-400 transition-colors">
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-[#D8BFD8]/70">
          <p>© {new Date().getFullYear()} Kenyan Wallet. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
