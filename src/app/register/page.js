import RegisterCard from '@/components/RegisterCard/RegisterCard';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center ">
      <RegisterCard title="Create an account">
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

          <Input
            className="border-2 border-blue-400 rounded-md p-2 outline-none"
            type="password"
            placeholder="Confirm your password"
          />
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </Button>
          <Link
            className="text-black hover:text-gray-700 text-center"
            href="/login"
          >
            Already have an account? Login
          </Link>
        </form>
      </RegisterCard>
    </div>
  );
}
