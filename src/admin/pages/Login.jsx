import "./../styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>EduNova Admin</h1>
        <p>Sign in to access the Admin Dashboard</p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@edunova.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;