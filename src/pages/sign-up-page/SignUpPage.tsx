import { Helmet } from "react-helmet";
import Button from "../../components/common/button/Button";
import Card from "../../components/common/card/Card";
import ErrorMessage from "../../components/common/error-message/ErrorMessage";
import Input from "../../components/common/input/Input";
import { useSignUp } from "../../hooks/useSignUp";
import styles from "./signUpPage.module.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    signUpIsDisabled,
    validationError,
    handleSignUp,
  } = useSignUp();

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Poll Maker - Sign Up</title>
      </Helmet>
      <Card className={styles.signUpCard}>
        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles.form} onSubmit={handleSignUp}>
          <Input
            placeholder="Username"
            value={username}
            onChange={setUsername}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          {validationError && <ErrorMessage message={validationError} />}
          <Button
            type="submit"
            className={styles.signUpButton}
            label="Sign Up"
            onClick={() => {}}
            isLoading={isLoading}
            disabled={signUpIsDisabled}
          />
        </form>
        <Link className={styles.loginPrompt} to="/login">
          <span>Already have an account?</span>
          <span className={styles.loginPromptLogin}> Login</span>
        </Link>
      </Card>
    </div>
  );
};

export default SignUpPage;
