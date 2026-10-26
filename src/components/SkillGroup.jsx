import {
  SiApachemaven,
  SiApachetomcat,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiSpringboot,
} from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { LuDatabase, LuNetwork, LuWebhook } from 'react-icons/lu'

const skillIcons = {
  java: SiOpenjdk,
  springBoot: SiSpringboot,
  spring: SiSpring,
  hibernate: SiHibernate,
  rest: LuWebhook,
  microservices: LuNetwork,
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  css: DiCss3,
  bootstrap: SiBootstrap,
  mysql: SiMysql,
  database: LuDatabase,
  oracle: LuDatabase,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  github: SiGithub,
  maven: SiApachemaven,
  tomcat: SiApachetomcat,
  git: SiGit,
}

function SkillGroup({ group }) {
  return (
    <article className="skill-group glass-card">
      <h3>{group.title}</h3>
      <ul className="skill-tiles">
        {group.skills.map(({ name, icon }) => {
          const Icon = skillIcons[icon]

          return (
            <li className="skill-tile" key={name}>
              <Icon aria-hidden="true" focusable="false" />
              <span>{name}</span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default SkillGroup
