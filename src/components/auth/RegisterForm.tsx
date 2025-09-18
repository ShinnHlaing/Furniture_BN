import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
export default function RegisterForm() {
  return (
    <Card className="mx-auto w-96 py-8">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your phone number below to create a new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="number"
                placeholder="09778*****"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full" asChild>
                <Link to="/">Sign Up</Link>
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline underline-offset-4">
              Login In
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
