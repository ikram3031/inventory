import { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async () => {
    try {
      // Make an API request to check if the user exists
      const response = await fetch('your_external_api_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // User exists in the external API, proceed with authentication
        signIn('credentials', { username, password });
      } else {
        // Handle incorrect credentials or other error responses
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error while logging in:', error);
    }
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
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
