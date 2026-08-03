import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-muted-foreground">
            Join RentNest as a Tenant or Landlord
          </p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;