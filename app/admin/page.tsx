import UserManager from "./user-manager";
import CalculationManager from "./calculation-manager";
import FactorManager from "./factor-manager";
import FactorValueManager from "./factorValue-manager";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/api/auth/signin");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <UserManager />
      <CalculationManager />
      <FactorManager />
      <FactorValueManager />
    </main>
  );
}
