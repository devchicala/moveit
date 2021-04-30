import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level, resetCookie } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/devchicala.png" alt="Délcio Francisco" />
      <div>
        <strong>Délcio Francisco</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
      <button type="button" onClick={resetCookie}>Zerar</button>
    </div>
  );
}