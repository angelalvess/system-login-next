import RegisterCard from '@/components/RegisterCard/RegisterCard';

export default function Register() {
  return (
    <div className="bg-black h-screen flex items-center justify-center ">
      <h1>Register page</h1>
      <RegisterCard title="Create an account"></RegisterCard>
    </div>
  );
}
