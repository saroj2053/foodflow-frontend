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
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignup } from "@/api/authAPI";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const { createUser } = useSignup();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<Inputs>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    createUser(data);
    navigate("/");
  };
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center min-h-[80vh] py-12">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-6xl font-bold text-slate-800 text-center pb-6">
              <div className="w-20 h-20 -mt-16 bg-orange-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-xl text-slate-800">
                  <UserPlus size={45} />
                </span>
              </div>
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    className={`border-2 ${
                      errors.name ? "border-red-500" : "border-slate-300"
                    }`}
                    {...register("name", {
                      required: "This field is required",
                      minLength: {
                        value: 6,
                        message: "Name should contain atleast 6 chars",
                      },
                    })}
                    type="text"
                    id="name"
                    placeholder="john doe"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className={`border-2 ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                    {...register("email", {
                      required: "This field is required",
                      validate: (value) => {
                        if (!value.includes("@")) {
                          return "Email must include @";
                        }
                        return true;
                      },
                    })}
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-3 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className={`border-2 ${
                      errors.password ? "border-red-500" : "border-slate-300"
                    }`}
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password should contain atleast 8 chars ",
                      },
                    })}
                    type={`${showPassword ? "text" : "password"}`}
                    id="password"
                    placeholder="your password here"
                  />
                  <span
                    className="absolute right-4 top-5"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </span>
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-3 relative">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    className={`border-2 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-slate-300"
                    }`}
                    {...register("confirmPassword", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message:
                          "Confirm Password should contain atleast 8 chars ",
                      },
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords don't match",
                    })}
                    type={`${showConfirmPassword ? "text" : "password"}`}
                    id="confirmPassword"
                    placeholder="your password here"
                  />

                  <span
                    className="absolute right-4 top-5"
                    onClick={() =>
                      setShowConfirmPassword((prevState) => !prevState)
                    }
                  >
                    {showConfirmPassword ? <Eye /> : <EyeOff />}
                  </span>
                  {errors.confirmPassword && (
                    <div className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
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
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing you..." : "Sign Up"}
            </Button>
            <span>
              Already have an account?{" "}
              <Link
                className="underline hover:no-underline hover:text-orange-500"
                to="/login"
              >
                Log In
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Signup;
