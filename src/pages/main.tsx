import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { ChallengesProvider, ChallengesContext } from "../contexts/ChallengesContext";
import { ChallengesBox } from "../components/ChallengesBox";
import { CountdownProvider } from '../contexts/CountdownContext';

import { useContext } from "react";
import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { level, resetCookie } = useContext(ChallengesContext);

  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
        </CountdownProvider>
      </div>
  </ChallengesProvider>
  );
}
