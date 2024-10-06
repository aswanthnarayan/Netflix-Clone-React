import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { account, ID } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export function LoginCard() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    const validationErrors = {};

    if (!email) validationErrors.email = "Email is required.";
    if (!password) validationErrors.password = "Password is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await account.createEmailPasswordSession(email, password);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      console.error("Login failed: ", error);

      setErrors({ general: "Invalid email or password. Please try again." });
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: null,
      }));
    }
  };

  return (
    <Card className="w-96 bg-[#00000096] text-white">
      <CardBody className="flex flex-col gap-4">
        <Typography className="font-bold leading-snug tracking-tight text-slate-800 mx-auto w-full text-2xl lg:max-w-3xl">
          Sign In
        </Typography>
        <Input
          color="white"
          label="Email"
          size="lg"
          value={email}
          onChange={handleInputChange(setEmail, "email")}
          error={!!errors.email}
        />
        {errors.email && (
          <Typography color="red" variant="small">
            {errors.email}
          </Typography>
        )}
        <Input
          color="white"
          type="password"
          label="Password"
          size="lg"
          value={password}
          onChange={handleInputChange(setPassword, "password")}
          error={!!errors.password}
        />

        {errors.password && (
          <Typography color="red" variant="small">
            {errors.password}
          </Typography>
        )}

        {errors.general && (
          <Typography color="red" variant="small">
            {errors.general}
          </Typography>
        )}
      </CardBody>
      <CardFooter className="pt-0 flex flex-col gap-4">
        <Button color="red" variant="gradient" fullWidth onClick={handleLogin}>
          Sign In
        </Button>
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
        <Typography
          color="gray"
          variant="small"
          className="mt-6 flex justify-center"
        >
          New to Netflix?
          <Link to="/signup">
            <Typography
              variant="small"
              color="white"
              className="ml-1 font-bold"
            >
              Sign up now
            </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
