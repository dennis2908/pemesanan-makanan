import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from 'Layouts';
import Auth from 'components/Auth';
import { isAuthenticated, saveAuthSession } from 'lib/auth';

export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useState({ email: 'admin@example.com', password: 'password123' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleChange = (field: 'email' | 'password', value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
      const response = await axios.post(`${apiBaseUrl}/auth/login`, {
        email: form.email,
        password: form.password,
      });

      const { token, user } = response.data;
      saveAuthSession(token, user);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login">
      <Auth title="Masuk" subTitle="Silakan masuk untuk melanjutkan">
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          {error && (
            <div style={{ color: '#d14343', background: '#fde7e7', borderRadius: '0.5rem', padding: '0.75rem 1rem' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontWeight: 600 }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => handleChange('email', event.target.value)}
              placeholder="nama@contoh.com"
              required
              style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #dfe3f0' }}
            />
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label htmlFor="password" style={{ fontWeight: 600 }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(event) => handleChange('password', event.target.value)}
              placeholder="Masukkan password"
              required
              style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #dfe3f0' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.8rem 1rem',
              border: 'none',
              borderRadius: '0.5rem',
              background: loading ? '#8ca7ff' : '#3366ff',
              color: '#fff',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>
      </Auth>
    </Layout>
  );
}
