import LoginCard from '@/components/LoginCard/LoginCard';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center  ">
      <LoginCard title="Login to your account">
        <form className="flex flex-col space-y-5">
          <Input
            className="border-2 border-blue-400 rounded-md p-2 outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            className="border-2 border-blue-400 rounded-md p-2 outline-none"
            type="password"
            placeholder="Enter your password"
          />
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </Button>
          <Link
            className="text-black hover:text-gray-700 text-center"
            href="/register"
          >
            Dont have an account? Register
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}
