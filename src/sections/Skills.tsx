import Section from '../components/Section';
import { skills } from '../content/data';

function Skills() {
    return (
        <Section
            id="skills"
            eyebrow="My Toolbox"
            title="Technologies I work with"
            description="I'm always learning, but here are the tools I'm most productive with right now."
            className="reveal"
        >
            <div className="section__grid section__grid--two">
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="card card--soft">
                        <h3 className="card__title">{skillGroup.category}</h3>
                        <div className="tags">
                            {skillGroup.items.map((item) => (
                                <span key={item} className="tag tag--light">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skills;
