import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    const handleGoogleLogin = () => {
        console.log('Google login clicked');
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-sm" style={{ width: '400px', maxWidth: '90%' }}>
                <div className="card-body p-4">
                    <h2 className="card-title mb-4 text-start fw-normal" style={{ fontSize: '24px', color: '#333' }}>
                        Login
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-muted small">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    padding: '12px 16px'
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-muted small">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    padding: '12px 16px'
                                }}
                            />
                        </div>

                        <div className="text-end mb-4">
                            <a
                                href="#"
                                className="text-decoration-none small"
                                style={{ color: '#FF6B6B', fontSize: '13px' }}
                                onClick={(e) => e.preventDefault()}
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-lg w-100 mb-3"
                            style={{
                                backgroundColor: '#FF6B6B',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '12px',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: 'white'
                            }}
                        >
                            Sign In
                        </button>

                        <div className="text-center mb-3">
                            <span className="text-muted small">OR</span>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg w-100 d-flex align-items-center justify-content-center"
                            onClick={handleGoogleLogin}
                            style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '4px',
                                padding: '12px',
                                fontSize: '14px',
                                color: '#666',
                                backgroundColor: 'white'
                            }}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                className="me-2"
                            >
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;