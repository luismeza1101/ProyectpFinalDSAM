import '../StyleSheets/Login.css'; // Importar estilos CSS
import Footer from '../components/Footer';

const Login: React.FC = () => {

  return (
    <>
        <div className='containerLogin'>
            <div className="form-container">
              <div className="login-container">
                <h2>Bienvenido</h2>
                <p>Inicie sesión</p>
            
                <form action="">
                  <p>
                    <label>Username</label>
                    <input className="input" type="text" name="username" />
                  </p>
            
                  <p>
                    <label >Password</label>
                    <input className="input" type="password" name="password" />
                  </p>
            
                  <div className="options">
                    <div>
                      Remember me <input type="checkbox" name="remeberme" id="" />
                    </div>
                    <div>
                      <a href="#">Olvide mi password</a>
                    </div>
                  </div>
            
                  <p>
                    <input className="btn btn-login" type="submit" value="Iniciar sesión" />
                  </p>
                  <div className="providers">
                    <span>Otros métodos para iniciar sesión</span>
                    <button className="btn google-provider">Google</button>
                    <button className="btn facebook-provider">Facebook</button>
                    <button className="btn twitter-provider">Twitter</button>
                  </div>
                </form>
              </div>
              <div className="welcome-screen-container"></div>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default Login;
