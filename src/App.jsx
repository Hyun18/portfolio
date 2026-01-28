import { HashRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

import coreviaImg from "./assets/corevia.png";
import olderWorkImg from "./assets/older_work.png";

import "./App.css";



function App() {
  return (
    <Router>
      <Nav />

      <main className="container">
        <section className="section intro" id="Introduction">
          <h1>Backend Developer</h1>
          <h2>신입 백엔드 개발자 김현희입니다.</h2>
          <p className="intro-text">
            꾸준히 학습하며 안정적인 백엔드 구조를 고민하는 개발자입니다.<br/>
            Spring Boot 기반 백엔드 개발을 중심으로<br/>
            실무에 바로 투입 가능한 개발자를 목표로 하고 있습니다.
          </p>
        </section>

        <section id="SkillSet">
          <h3 className="section-title">Skill Set</h3>
          <ul className="skill-list">
            <li><strong>Language</strong> : Java</li>
            <li><strong>Framework</strong> : Spring Boot</li>
            <li><strong>Data Access</strong> : JPA, JdbcTemplate</li>
            <li><strong>API</strong> : RESTful API, Open API 연동</li>
            <li><strong>Security</strong> : Spring Security (Session, CSRF)</li>
            <li><strong>Real-Time</strong> : WebSocket</li>
            <li><strong>Database</strong> : MariaDB</li>
            {/* <li><strong>Infra</strong> : Docker, Nginx, AWS</li> */}
            <li><strong>Collaboration</strong> : GitHub, Slack</li>
          </ul>
        </section>

        <section id="projects">
          <h3 className="section-title">Projects</h3>

          <div className="project-card">
            <img
              src={coreviaImg}
              alt="사내 인트라넷 시스템 대표 이미지"
              className="project-image"
            />


            <div className="project-content">
              <h4>사내 인트라넷 시스템</h4>
              <p>
                Spring Boot 기반의 사내 인트라넷 시스템 개발에 참여하여 게시판, 전자결재, 메시지 기능을 구현했습니다.
              </p>
              <a href="https://github.com/KOmyeonghwan/Corevia/blob/main/README.md">
                Corevia / GitHub Repository (README)
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              src={olderWorkImg}
              alt="어르신 일자리 매칭 웹 대표 이미지"
              className="project-image"
            />
            <div className="project-content">
              <h4>어르신 일자리 매칭 웹</h4>
              <p>
                Spring Boot 기반의 어르신 일자리 매칭 웹 개발에 참여하여, 
                공공 일자리 API를 활용한 기업과 어르신 간 구인·구직 매칭 서비스를 구현했습니다.
              </p>
              <a href="https://github.com/Hyun18/older_work_dev">
                older_work / GitHub Repository (README)
              </a>
            </div>

          </div>
        </section>

        <section className="section" id='activities'>
          <h3 className="section-title">Activities</h3>
          <p>
            JAVA 스터디 및 팀 프로젝트 (5개월, 2025.09 ~ 2026.01)<br/>
            AI 응용 웹&앱 프로그램 매니저(중급자) 양성과정 (3개월, 2025.06 ~ 2025.09)<br/>
            빅데이터 기반 AI 실버케어 서비스 시스템 개발(6개월, 2024.10 ~ 2025.03)
          </p>
        </section>

      </main>
    </Router>
  )
}

export default App
