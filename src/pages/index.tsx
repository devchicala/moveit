import { GetServerSideProps } from "next";

import { ChallengesContext } from "../contexts/ChallengesContext";
import Link from "next/link";

import styles from "../styles/pages/Main.module.css";
import { useContext } from "react";

export default function Login() {
  const { level, resetCookie } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <button type="button" onClick={resetCookie}>
        Let's Move Yourself <br />
        <b>Délcio Francisco</b> <br /> 
        <Link href="/main">Entrar 🤓</Link>
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (cnt) => {
  const { level, currentExperience, challengesCompleted } = cnt.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
