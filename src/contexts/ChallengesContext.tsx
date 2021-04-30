import { createContext, ReactNode, useEffect, useState } from "react";
import Cookie from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from "../components/LevelUpModal";

interface challenge {
    type: 'body'|'eye',
    description: string;
    amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: challenge;
  resetChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  resetCookie: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number; 
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ 
  children,
  ...rest
 }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setcurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setactiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4,2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])
  
  useEffect(() => {
    Cookie.set('level', String(level));
    Cookie.set('currentExperience', String(currentExperience));
    Cookie.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted])
  
  function levelUp() {
    setLevel(level + 1);
    setisLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setisLevelUpModalOpen(false)
  }

  function resetCookie() {
    Cookie.set('level','0');
    Cookie.set('currentExperience','0');
    Cookie.set('challengesCompleted', '0');
  }

  function startNewChallenge() {
    const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallengeIndex];

    setactiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio!!!', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setactiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount  } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setcurrentExperience(finalExperience);
    setactiveChallenge(null);
    setchallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
        resetCookie,
      }}
    >
      {children}
      { isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
