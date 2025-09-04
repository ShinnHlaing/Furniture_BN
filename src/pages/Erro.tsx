import { Link } from "react-router";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
function Erro() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader className="flex flex-col items-center justify-center space-y-3">
            <div className="border-muted-foreground/70 rounded-full border border-dashed p-4">
              <Icons.exclamationTriangle
                className="text-muted-foreground/70 size-10"
                aria-hidden="true"
              />
            </div>
            <CardTitle>Oppos!</CardTitle>
            <CardDescription>Not Found Page!</CardDescription>
          </CardHeader>
          <CardFooter className="flex-col">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Erro;
