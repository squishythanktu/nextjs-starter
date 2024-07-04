import RegisterForm from "@/app/(pages)/(auth)/register/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <h2 className="text-center text-xl font-semibold">Register Form</h2>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </>
  );
}
