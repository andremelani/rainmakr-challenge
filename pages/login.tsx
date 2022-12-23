/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import Separator from "../src/components/Separator";
import styles from "../styles/login.module.scss";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const router = useRouter()

  

  const handleLogin = () => {
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img src="/images/logo.png" alt="" />
        <div className={styles.textContainer}>
          <h2>SIGN-IN</h2>
          <h4>AND START TO...</h4>
        </div>
        <div className={styles.inputContainer}>
          <Input
            placeholder="Login"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onClick={(e) => setUser("")}
          />
          <Input
            placeholder="Password"
            type={eye ? "text" : "password"}
            icon="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClick={(e) => setEye(!eye)}
          />
          <Link href="/login">Forgot password?</Link>
        </div>
        <div style={{ margin: "28px 0 18px 0", width: "100%" }}>
          <Button text="Login" type="primary" onClick={handleLogin} />
        </div>

        <div className={styles.otherSignup}>
          <h5>OR CONTINUE WITH</h5>
          <div className={styles.icons}>
            <img src="/icons/facebook.svg" alt="facebook" />
            <img src="/icons/google.svg" alt="gmail" />
          </div>
        </div>
        <Separator type="light" />
        <div className={styles.register}>
          <h5>
            IF YOU DONT&apos;T HAVE AN ACCOUNT{" "}
            <Link href="/singup">REGISTER HERE !</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
