import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import styles from "../styles/SignUp.module.scss";

const SingUp = () => {
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <img src="/images/logo.png" alt="" />
        <div className={styles.textContainer}>
          <h2>EASY TO START</h2>
          <h4>COMPLETE YOUR PROFILE</h4>
        </div>
        <div className={styles.inputContainer}>
          <Input
            placeholder="First Name"
            type="text"
            value={fisrtName}
            onChange={(e) => setFirstName(e.target.value)}
            onClick={(e) => setFirstName("")}
          />
          <Input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onClick={(e) => setLastName("")}
          />
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={(e) => setEmail("")}
          />
          <Input
            placeholder="Enter a Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onClick={(e) => setLocation("")}
          />
          <Input
            placeholder="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onClick={(e) => setPhone("")}
          />
          <Input
            placeholder="Create a password"
            type={eye ? "text" : "password"}
            icon="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClick={(e) => setEye(!eye)}
          />
        </div>
        <div style={{ margin: "18px 0 18px 0", width: "100%" }}>
          <Button text="Register now!" type="primary" onClick={handleLogin} />
        </div>

        <div className={styles.login}>
          <h5>
            ALREDY HAVE AN ACCOUNT? <Link href="/login">ENTER HERE !</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
