const LoginCard = ({ title, children }) => {
  return (
    <div className="bg-white w-[400px] p-5  rounded-[10px]  ">
      <h1 className="text-center font-bold text-2xl mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default LoginCard;
