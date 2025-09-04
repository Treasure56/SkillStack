import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <main className="flex flex-col justify-center h-screen max-w-[500px] mx-auto">
      <div className="bg-white md:shadow rounded px-8 pt-6 pb-8 mb-4  flex flex-col space-y-2">
        <h2 className=" text-3xl font-semibold text-center">Welcome Back!</h2>
        <p className="text-gray-600 text-base text-center">
          Login to your SkillStack account
        </p>
          <LoginForm />
      </div>
    </main>
  );
}
