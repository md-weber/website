import React from 'react';
import styles from '../../styles/skill.module.css';

interface SkillProps {
    name: string;
    level: number;
}

const Skill: React.FC<SkillProps> = ({ name, level }) => {
    return (
        <div className={styles.skill}>
            <h4 className={styles.skillHeadline}>{name}</h4>
            <div className={styles.level}>
                {'⭐'.repeat(level)}
                {'☆'.repeat(5 - level)}
            </div>
        </div>
        );
};

export default Skill;
