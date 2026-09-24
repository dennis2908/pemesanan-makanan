export const AUTH_TOKEN_KEY = 'next_token';

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return Boolean(token);
};

export const saveAuthSession = (token: string, user?: Record<string, any>) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(AUTH_TOKEN_KEY, token);

  if (user) {
    localStorage.setItem('next_user', JSON.stringify(user));
  }

  const legacySession = JSON.parse(localStorage.getItem('nextJS') || '{}');
  legacySession.authLogin = token;
  legacySession.authUserName = user?.name || user?.email || '';
  localStorage.setItem('nextJS', JSON.stringify(legacySession));
};

export const clearAuthSession = () => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem('next_user');
  localStorage.removeItem('nextJS');
};
