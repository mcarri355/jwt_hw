/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_KEY: 'key',
    SECRET_PASS: '12345',
    SECRET_EMAIL: 'email@example.com',
  },
};

export default nextConfig;
