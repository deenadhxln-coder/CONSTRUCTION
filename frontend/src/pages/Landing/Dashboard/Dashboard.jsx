import Sidebar from "../../../components/dashboard/Sidebar";
import Topbar from "../../../components/dashboard/Topbar";
import StatCard from "../../../components/dashboard/StatCard";
import ProjectTable from "../../../components/dashboard/ProjectTable";

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      name: "Green Valley Villa",
      type: "Residential",
      client: "Arun Kumar",
      status: "Active",
      progress: 72,
      deadline: "Sep 15, 2026",
    },
    {
      id: 2,
      name: "Tech Park Office",
      type: "Commercial",
      client: "Tech Solutions Ltd.",
      status: "Active",
      progress: 54,
      deadline: "Oct 02, 2026",
    },
    {
      id: 3,
      name: "Industrial Warehouse",
      type: "Industrial",
      client: "BuildCorp Industries",
      status: "Planning",
      progress: 25,
      deadline: "Nov 18, 2026",
    },
    {
      id: 4,
      name: "City Apartment",
      type: "Residential",
      client: "Priya Sharma",
      status: "Active",
      progress: 86,
      deadline: "Aug 30, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="md:pl-64">

        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
        <main className="px-6 py-8 lg:px-8">

          {/* Welcome */}
          <div className="mb-8">

            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Project Overview
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor your construction projects, teams, and tasks from one
              place.
            </p>

          </div>

          {/* Statistics */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Total Projects"
              value="24"
              description="+4 projects this month"
              icon="🏗️"
            />

            <StatCard
              title="Active Projects"
              value="12"
              description="Currently under construction"
              icon="🚧"
            />

            <StatCard
              title="Total Clients"
              value="38"
              description="+6 new clients"
              icon="👥"
            />

            <StatCard
              title="Pending Tasks"
              value="48"
              description="12 due this week"
              icon="📋"
            />

          </div>

          {/* Content Grid */}
          <div className="mt-8 grid gap-8 xl:grid-cols-3">

            {/* Projects */}
            <div className="xl:col-span-2">
              <ProjectTable projects={projects} />
            </div>

            {/* Upcoming Tasks */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 px-6 py-5">

                <h2 className="text-lg font-bold text-slate-900">
                  Upcoming Tasks
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Tasks that need your attention
                </p>

              </div>

              <div className="divide-y divide-slate-100">

                <div className="p-5">
                  <div className="flex gap-3">

                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Material Inspection
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Green Valley Villa
                      </p>

                      <p className="mt-2 text-xs font-medium text-red-500">
                        Due Today
                      </p>
                    </div>

                  </div>
                </div>

                <div className="p-5">
                  <div className="flex gap-3">

                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Electrical Work
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Tech Park Office
                      </p>

                      <p className="mt-2 text-xs font-medium text-orange-500">
                        Tomorrow
                      </p>
                    </div>

                  </div>
                </div>

                <div className="p-5">
                  <div className="flex gap-3">

                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Site Meeting
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Industrial Warehouse
                      </p>

                      <p className="mt-2 text-xs font-medium text-blue-500">
                        Aug 25, 2026
                      </p>
                    </div>

                  </div>
                </div>

                <div className="p-5">
                  <div className="flex gap-3">

                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500" />

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Final Inspection
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        City Apartment
                      </p>

                      <p className="mt-2 text-xs font-medium text-green-500">
                        Aug 28, 2026
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;