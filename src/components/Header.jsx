import '/src/styles/includes/Header.css';
import { useLocation } from 'react-router-dom';
import viteLogo from '/vite.svg';

function Header() {
  const location = useLocation();  // Router 내부에서만 사용 가능
  const isResumePage = location.pathname === '/resume';

  return (
    <header>
      {/* <h4>작성자 이름</h4> */}
    </header>
  );
}

export default Header;
