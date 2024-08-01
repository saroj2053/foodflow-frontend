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
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center min-h-[80vh]">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-orange-600 text-center">
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    {...register("name", {
                      required: "Name is required",
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
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
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
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password should contain atleast 8 chars ",
                      },
                    })}
                    type="password"
                    id="password"
                    placeholder="your password here"
                  />
                  {errors.password && (
                    <div className="text-red-500">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      minLength: {
                        value: 8,
                        message:
                          "Confirm Password should contain atleast 8 chars ",
                      },
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords don't match",
                    })}
                    type="password"
                    id="confirmpassword"
                    placeholder="your password here"
                  />
                  {errors.confirmPassword && (
                    <div className="text-red-500">
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
function getValues(password: any) {
  throw new Error("Function not implemented.");
}
