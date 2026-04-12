const users = [
  {
    name: "Elena Rodriguez",
    role: "Senior Traveler",
    email: "elena.rodriguez@example.com",
    status: "Active",
  },
  {
    name: "Marcus Wright",
    role: "Guide",
    email: "marcus.wright@example.com",
    status: "Pending",
  },
  {
    name: "Alex Rivera",
    role: "Operations",
    email: "alex.rivera@example.com",
    status: "Active",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 py-10">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">User Management</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950">Manage accounts and access</h1>
            <p className="mt-3 text-sm text-slate-600">Review roles, invite new users, and manage active permissions for the STMS platform.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/users" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition">
              Invite User
            </Link>
            <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition">
              Export List
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-slate-200">
                <tr>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Name</th>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Role</th>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Email</th>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Status</th>
                  <th className="py-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {users.map((user) => (
                  <tr key={user.email} className="transition hover:bg-slate-50">
                    <td className="py-5 pr-6">
                      <p className="font-semibold text-slate-950">{user.name}</p>
                    </td>
                    <td className="py-5 pr-6 text-sm text-slate-600">{user.role}</td>
                    <td className="py-5 pr-6 text-sm text-slate-600">{user.email}</td>
                    <td className="py-5 pr-6 text-sm">
                      <span className={`inline-flex rounded-full px-3 py-1 font-semibold ${user.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-800"}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-5 text-right">
                      <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
