import React, { useState } from 'react';
import InputField from '../../components/ui/input';
import Button from '../../components/ui/button';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { email, password } = formData;

    if (!email || !password) {
      setError('Please enter both email and password.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    // Simulate successful login
    console.log('Logging in with:', formData);
    alert('Signed in successfully!');
  };

  return (
    <div className="min-h-screen flex items-center bg-[#1E293B] justify-center px-4 text-white">
     <div className="w-full max-w-md bg-[#1E293B] p-8 rounded-xl shadow-md space-y-6 border-0 md:border md:border-white/10">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-semibold">Sign In to Your Account</h2>
          <p className="text-sm text-[#808EA2]">Enter your credentials to sign in</p>
        </div>

        {/* Form */}
        <form className="space-y-10" onSubmit={handleSubmit}>
          <InputField
            name="email"
            type="email"
            placeholder="Enter your email address"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail size={18} />}
          />

          <div className="relative">
            <InputField
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock size={18} />}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 bottom-[0.65rem] text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            <a
              href="#"
              className="absolute right-0 -bottom-5 text-xs text-blue-400"
            >
              Forgot Password?
            </a>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-xs -mt-6">{error}</p>
          )}

          <Button  className="w-full py-3 mt-10">
            Sign in
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 text-sm text-white/60 my-2">
          <div className="h-px flex-1 bg-white/10"></div>
          or continue with
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Social buttons */}
        <div className="flex justify-center gap-4">
          <button className="p-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <img src="/google.png" alt="Google" className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-white/50">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
