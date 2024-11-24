import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // Correctly declare navigate using useNavigate

  return (
    <div>
      <ul>
        <li
          onClick={() => navigate("/calendar-demo")}
          style={{
            color: "white",
            cursor: "pointer",
          }}
        >
          Calendar Demo
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
