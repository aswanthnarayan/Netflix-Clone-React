import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
   
  export function LoginCard() {
    return (
      <Card className="w-96 bg-[#00000096] text-white">
        <CardBody className="flex flex-col gap-4">
        <Typography className="font-bold leading-snug tracking-tight text-slate-800 mx-auto w-full text-2xl lg:max-w-3xl">Sign In</Typography>
          <Input color="white" label="Email" size="lg" />
          <Input color="white" label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0 flex flex-col gap-4">
          <Button color="red" variant="gradient" fullWidth>
            Sign In
          </Button>
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
          <Typography color="gray" variant="small" className="mt-6 flex justify-center">
            New to Netflix?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="white"
              className="ml-1 font-bold"
            >
              Sign up now
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }