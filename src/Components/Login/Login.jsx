import { useState } from "react";
import background from "../../assets/bg.jpg";
import girl from "../../assets/girl.png";
import trees from "../../assets/trees.png";
import leaf1 from "../../assets/leaf_01.png";
import leaf2 from "../../assets/leaf_02.png";
import leaf3 from "../../assets/leaf_03.png";
import leaf4 from "../../assets/leaf_04.png";
import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username && !password) {
      setError("Insira seu e-mail e senha.");
    } else if (!username) {
      setError("Insira seu e-mail.");
    } else if (!password) {
      setError("Insira sua senha.");
    } else {
      setError("");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center w-100 vh-100 position-relative overflow-hidden">
      <div className="leaves position-absolute w-100 vh-100 overflow-hidden d-flex justify-content-center">
        <div className="set position-absolute w-100 vh-100">
          <div className="position-absolute d-block">
            <img src={leaf1} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf2} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf3} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf4} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf1} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf2} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf3} />
          </div>
          <div className="position-absolute d-block">
            <img src={leaf4} />
          </div>
        </div>
      </div>
      <img src={background} className="bg position-absolute w-100 vh-100" />
      <img src={girl} className="girl position-absolute" />
      <img src={trees} className="trees position-absolute w-100 vh-100" />

      <div className="login position-relative d-flex flex-column justify-content-between">
        <form onSubmit={handleSubmit}>
          <h2 className="position-relative w-100 text-center fw-semibold mb-3">
            Login
          </h2>
          <div className="inputBox position-relative w-100">
            <input
              type="email"
              placeholder="Insira seu e-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBox position-relative">
            <input
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error text-danger mb-3">{error}</div>}
          <div className="inputBox position-relative cursor-pointer">
            <input type="submit" value="Entrar" id="btn" />
          </div>
          <div className="group d-flex justify-content-between">
            <a href="#">Esqueci minha senha</a>
            <a href="#">Criar conta</a>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <GoogleLogin onSuccess={() => {}} onError={() => {}} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
