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
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    setErrors({ email: "", password: "" });

    //manual validation
    if (!email) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be atleast 8 chars" });
      return;
    }

    //form submission
    console.log("Form submitted");
    console.log(email, password);
  };
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center min-h-[75vh]">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-orange-600 text-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    id="email"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    id="password"
                    placeholder="your password here"
                  />
                  {errors.password && (
                    <div className="text-red-500">{errors.password}</div>
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
            >
              Login
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
