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
import { account, ID } from "../lib/appwrite";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function SignUpCard() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignUp = async () => {
    const validationErrors = {};

    if (!name) validationErrors.name = "Name is required.";
    if (!email) validationErrors.email = "Email is required.";
    if (!password) validationErrors.password = "Password is required.";
    if (password !== confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match.";

    // If there are validation errors, update the error state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      // Create user with Appwrite
      await account.create(ID.unique(), email, password, name);
      navigate('/signin');
    } catch (error) {
      console.error("Error during user registration: ", error);
      setErrors({ general: "Registration failed: " + error.message });
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: null,  // Remove error for the specific field
      }));
    }
  };

  return (
    <Card className="w-96 bg-[#00000096] text-white">
      <CardBody className="flex flex-col gap-4">
        <Typography className="font-bold leading-snug tracking-tight text-slate-800 mx-auto w-full text-2xl lg:max-w-3xl">
          Sign Up
        </Typography>
        <Input
          color="white"
          label="Name"
          size="lg"
          value={name}
          onChange={handleInputChange(setName, 'name')} 
          error={!!errors.name}
        />
        {errors.name && <Typography color="red" variant="small">{errors.name}</Typography>}
        <Input
          color="white"
          label="Email"
          size="lg"
          value={email}
          onChange={handleInputChange(setEmail, 'email')} 
          error={!!errors.email}
        />
        {errors.email && <Typography color="red" variant="small">{errors.email}</Typography>}
        <Input
          color="white"
          label="Password"
          size="lg"
          value={password}
          onChange={handleInputChange(setPassword, 'password')} 
          error={!!errors.password}
        />
        {errors.password && <Typography color="red" variant="small">{errors.password}</Typography>}
        <Input
          color="white"
          label="Confirm Password"
          size="lg"
          value={confirmPassword}
          onChange={handleInputChange(setConfirmPassword, 'confirmPassword')}
          error={!!errors.confirmPassword}
        />
        {errors.confirmPassword && <Typography color="red" variant="small">{errors.confirmPassword}</Typography>}
      </CardBody>
      <CardFooter className="pt-0 flex flex-col gap-4">
        <Button color="red" variant="gradient" fullWidth onClick={handleSignUp}>
          Sign Up
        </Button>
        <Typography
          color="gray"
          variant="small"
          className="mt-6 flex justify-center"
        >
          Already Have an Account?
          <Link to="/signin">
            <Typography
              variant="small"
              color="white"
              className="ml-1 font-bold"
            >
              Sign in now
            </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
