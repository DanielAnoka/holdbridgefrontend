import React, { useState } from 'react';
import InputField from '../../components/ui/input';
import Button from '../../components/ui/button';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
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

    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!agree) {
      setError('You must agree to the Terms and Privacy Policy.');
       setTimeout(() => setError(''), 3000);
      return;
    }
    console.log('Form submitted:', formData);
    alert('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center bg-[#1E293B] justify-center px-4 text-white">
   <div className="w-full max-w-md bg-[#1E293B] p-8 rounded-xl shadow-md space-y-6 border-0 md:border md:border-white/10">

        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-semibold">Create Your Account</h2>
          <p className="text-sm text-white/60">Enter your information to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              name="firstName"
              type="text"
              placeholder="Enter first name"
              label="First name"
              value={formData.firstName}
              onChange={handleChange}
              icon={<User size={18} />}
            />
            <InputField
              name="lastName"
              type="text"
              placeholder="Enter last name"
              label="Last name"
              value={formData.lastName}
              onChange={handleChange}
              icon={<User size={18} />}
            />
          </div>

          {/* Email */}
          <InputField
            name="email"
            type="email"
            placeholder="Enter your email address"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail size={18} />}
          />

          {/* Password */}
          <div className="relative mb-2">
            <InputField
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock size={18} />}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-[0.65rem] text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-xs text-white/70">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1 accent-blue-500"
            />
            <label htmlFor="agree">
              I agree to the{" "}
              <a href="#" className="text-[#0891B2]">Terms of service</a>
              <span className="mx-1">and</span>
              <a href="#" className="text-[#0891B2]">Privacy policy</a>
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-xs mt-1">{error}</p>
          )}

          {/* Submit */}
          <Button type="submit" className="w-full py-3 mt-4">
            Sign up
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 text-sm text-white/60 my-2">
          <div className="h-px flex-1 bg-white/10"></div>
          or continue with
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Social Login */}
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
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 ">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
