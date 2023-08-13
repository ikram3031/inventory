import { useState } from 'react';
import './Login.scss'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  /* const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://140.99.142.211:8080/sign-in', {
        email: email,
        password: password,
      });
  
      if (response.status === 200) {
        const { access_token } = response.data;
        Cookies.set('access_token', access_token);
        // User authentication succeeded, you can proceed with signIn
        console.log('Successful')
        // signIn('credentials', { email, password });
      } else {
        // Handle incorrect credentials or other error responses from your API
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  }; */
  
  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/', 
      redirect: false, 
    });

    console.log(result)

    // if (!result.error) {
    //   // Redirect to the homepage
    //   window.location.href = '/';
    // } else {
    //   console.error('Login failed:', result.error);
    // }
  };


  return (
    <div className='login'>
      <nav>
        <img src='/static/login_logo.png' alt='logo' />
      </nav>
      <section>
        <div className='login_left'> 
          <img src='/static/login_banner.png' alt='logo' />
        </div>
        <div className='login_right'>
          <div className='login_form'>
            <h1>Welcome to Saudia Furniture</h1>
            <span>Login to Continue</span>
            <form>
              <div className='input'>
                <img src='/static/Message.png' alt='icon'/>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='input'>
                <img src='/static/Password.png' alt='icon'/>
                <input
                  type="password"
                  placeholder="Password"
                  class="password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="login_bottom">
                <label class="form-control">
                  <input type="checkbox" name="checkbox" />
                  <p>Remember me</p>
                </label>             
                <p>Forget Password</p>
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

LoginPage.withLoginLayout = true;

export default LoginPage;
