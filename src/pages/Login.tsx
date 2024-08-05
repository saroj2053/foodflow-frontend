import Layout from "@/layouts/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Eye, EyeOff, LogInIcon } from "lucide-react";
import { useLogin } from "@/api/authAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    setErrors({ email: "", password: "" });

    //manual validation
    if (!email) {
      setErrors({ ...errors, email: "This field is required" });
      return;
    }

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (!password) {
      setErrors({ ...errors, password: "This field is required" });
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be atleast 8 chars" });
      return;
    }

    //form submission
    const loginCredentials = { email, password };
    await loginUser(loginCredentials);
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center min-h-[75vh]">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-6xl font-bold text-slate-800 text-center pb-6">
              <div className="w-20 h-20 -mt-16 bg-orange-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-xl  text-slate-800">
                  <LogInIcon size={45} />
                </span>
              </div>
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col space-y-3 ">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className={`border-2 ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                    type="email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    id="email"
                    placeholder="example@gmail.com"
                  />

                  {errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-3 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className={`border-2 ${
                      errors.password ? "border-red-500" : "border-slate-300"
                    }`}
                    type={`${showPassword ? "text" : "password"}`}
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    id="password"
                    placeholder="your password here"
                  />
                  <span
                    className="absolute right-4 top-5"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </span>
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-6 justify-between">
            <Button
              variant="secondary"
              className="w-full"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Logging in.." : "Login"}
            </Button>
            <span>
              Don't have an account?{" "}
              <Link
                className="underline hover:no-underline hover:text-orange-500"
                to="/signup"
              >
                Sign Up
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
