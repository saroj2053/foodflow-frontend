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

const Signup = () => {
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center h-[80vh]">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-orange-600 text-center">
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="john doe" />
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="your password here"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmpassword"
                    placeholder="your password here"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-6 justify-between">
            <Button variant="secondary" className="w-full">
              Sign Up
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
