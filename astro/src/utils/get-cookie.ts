export const getCookie = (name: string): string | null => {
  const cookieString = document.cookie;
  if (!cookieString) return null;
  const cookies = cookieString.split(';').map(cookie => cookie.trim());
  const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
  if (cookie) {
    const cookieValue = cookie.substring(name.length + 1);
    return decodeURIComponent(cookieValue);
  }
  return null;
};
