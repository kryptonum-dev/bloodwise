export const setCookie = (name: string, value: string, days: number = 1) => {
  const date = new Date(Date.now() + 24 * 60 * 60 * 1000 * days);
  const expires = days ? `; expires=${date.toUTCString()}` : '';
  const cookieValue = encodeURIComponent(value);
  document.cookie = `${name}=${cookieValue}${expires}; SameSite=Strict`;
};
