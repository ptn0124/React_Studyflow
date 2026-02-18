import './App.css'
import profile from './assets/Profile_image.png'

function App() {
  return (
    <div className="container">
      <div className="custom-shape-divider-top-1770912374">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".4" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".2" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".5 " class="shape-fill"></path>
        </svg>
      </div>
      <div className="profile-section">
        <p className="section-header">About Me</p>
        <hr className = "divider"/>
        <div className="box1">
          <img src={profile} alt = "Profile" className="profile-img"/>
          <div className = "box2">
            <p className = "header2">박태환</p>
            <p className = "gray-script">Taehwan Park</p>
          </div>
        </div>
        <p className="gray-script">Email: pthfdsa@gmail.com</p>
        <div className = "box1">
          <a href="https://github.com/ptn0124" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub Profile" className="profile-icon" />
          </a>
          <a href="https://instagram.com/qqkrxoghks" target="_blank" rel="noopener noreferrer">
            <img src="https://static.cdninstagram.com/rsrc.php/v4/yG/r/De-Dwpd5CHc.png" alt="Instagram Profile" className="profile-icon" />
          </a>
          <a href="https://solved.ac/profile/dsharpgsharp" target="_blank" rel="noopener noreferrer">
            <img src="https://static.solved.ac/logo.svg" alt="solved.ac favicon (large)" className="profile-icon" />
          </a>
        </div>
        <p className="header">안녕하세요! 저는..</p>
        <p className="script">- 현재 북일고등학교 2학년에 재학 중이에요!</p>
        <p className="script">- BADA 동아리에 속해 프로그래밍 경험을 쌓고 있어요!</p>
        <div className="vertical-spacer"></div> 
        <p className="section-header">Skill Stacks</p>
        <hr className = "divider"/>
        <div className="skills-container">
          <div className="skill-card">
            <div className = "skill-box1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="skill-icon"/>
                <p className="skill-name">Python</p>
            </div>
            <hr className="skill-divider"/>
            <p className="script">주로 알고리즘 문제 풀이에 사용하고 있어요.</p> {/* 한 줄에 script 하나씩 작성하기 */}
          </div>
          <div className="skill-card">
            <div className = "skill-box1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" alt="Dart" className="skill-icon"/>
              <p className="skill-name">Dart</p>
            </div>
            <hr className="skill-divider"/>
            <p className="script">Flutter 프레임워크를 다루기 위해 학습했어요.</p>
          </div>
          <div className="skill-card">
            <div className = "skill-box1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="skill-icon"/>
              <p className="skill-name">Flutter</p>
             </div> 
              <hr className="skill-divider"/>
              <p className="script">데스크톱 어플리케이션 개발에 사용하고 있어요.</p>
          </div>
          <div className="skill-card">
            <div className = "skill-box1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="skill-icon"/>
              <p className="skill-name">Git</p>
            </div>
            <hr className="skill-divider"/>
            <p className="script">버전 관리 및 동료들과의 협업에 사용하고 있어요. </p>
          </div>
          <div className="skill-card" id = "skill-card-react">
            <div className = "skill-box1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="skill-icon"/>
                <p className="skill-name">React</p>
            </div>
            <hr className="skill-divider"/>
            <div className="skill-box1">
              <div className="skill-box2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon"/>
                <p className="skill-name">JavaScript</p>
              </div>
              <div className="skill-box3">
                <div className="vertical-divider"></div>
                <p className="script">아직 학습 중이예요.</p>
              </div>
            </div>
            <div className="skill-box1">
              <div className="skill-box2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="skill-icon"/>
                <p className="skill-name">CSS3</p>
              </div>
              <div className="skill-box3">
                <div className="vertical-divider"></div>
                <p className="script">아직 학습 중입니다.</p>
              </div>
            </div>
            <div className="skill-box1">
              <div className="skill-box2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="skill-icon"/>
                <p className="skill-name">HTML5</p>
              </div>
              <div className="skill-box3">
                <div className="vertical-divider"></div>
                <p className="script">아직 학습 중입니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-spacer"></div>
        <div className="vertical-spacer"></div>
        <div className="vertical-spacer"></div>
        <div className="vertical-spacer"></div>
        <div className="vertical-spacer"></div>
      </div>
    </div>
  )
}

export default App