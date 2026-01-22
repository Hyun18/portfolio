import '/src/styles/ProjectPage.css';
import { Link, Outlet } from 'react-router-dom';  // Outlet import

function PortfolioPage() {
  return (
    <div>
      <h2>포트폴리오</h2>
      <ul>
        <li>
          <Link to="/portfolio/1">프로젝트 1</Link>
        </li>
        <li>
          <Link to="/portfolio/2">프로젝트 2</Link>
        </li>
        <li>
          <Link to="/portfolio/3">프로젝트 3</Link>
        </li>
      </ul>

      {/* Outlet을 여기에서 사용 */}
      <Outlet /> {/* 여기에 중첩된 프로젝트 페이지가 렌더링됨 */}
    </div>
  );
}

export default PortfolioPage;
