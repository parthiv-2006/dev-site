import { motion } from 'framer-motion';
import { skills } from '../content/data';
import SkillChip from '../components/SkillChip';
import GitHubContributions from '../components/GitHubContributions';

function Skills() {
    const allSkills = skills.flatMap(s => s.items);

    return (
        <section id="skills" className="section section--full-width">
            <div className="skills__heading">
                <h2 className="section__title skills__title">Technical Arsenal</h2>
            </div>

            <div className="skills__marquee">
                <motion.div
                    className="skills__marquee-track"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((item, i) => (
                        <span key={`${item}-${i}`} className="skills__marquee-item">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="skills__grid">
                {skills.map(group => (
                    <div
                        key={group.category}
                        className="card card--interactive skills__card"
                    >
                        <h3 className="skills__category">{group.category}</h3>
                        <div className="skills__chips">
                            {group.items.map(item => (
                                <SkillChip key={item} skill={item} />
                            ))}
                        </div>
                    </div>
                ))}
                
                {/* GitHub Contributions Widget */}
                <div className="skills__contrib">
                    <GitHubContributions />
                </div>
            </div>
        </section>
    );
}

export default Skills;

