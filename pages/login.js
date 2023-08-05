import { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

LoginPage.withLoginLayout = true;

export default LoginPage;
