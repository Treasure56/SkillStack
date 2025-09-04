import RegisterForm from "./RegisterForm";

export default function Page() {
  return (
    <main className="flex flex-col justify-center h-screen max-w-[500px] mx-auto">
      <div className="bg-white md:shadow rounded px-8 pt-6 pb-8 mb-4  flex flex-col space-y-2">
        <h2 className=" text-3xl font-semibold text-center">Create Account</h2>
        <p className="text-gray-600 text-base text-center">
          Sign up to get started with SkillStack
        </p>
          <RegisterForm />
      </div>
    </main>
  );
}
