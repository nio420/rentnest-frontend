import LoginForm from "@/components/auth/login-form";

const LoginPage = async () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-muted-foreground">
            Login to your RentNest account
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
