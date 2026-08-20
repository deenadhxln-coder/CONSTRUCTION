import { useState, useEffect } from "react";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../../services/clientService";

import ClientForm from "../../components/clients/ClientForm";
import ClientDetails from "../../components/clients/ClientDetails";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getClients();
      setClients(data);
    };
    fetchList();
  }, []);

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      (client.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (client.company || "").toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "All" || client.status === status;

    return matchesSearch && matchesStatus;
  });

  const handleSaveClient = async (clientData) => {
    if (editingClient) {
      await updateClient(clientData.id, clientData);
      setClients((prev) =>
        prev.map((item) => (item.id === clientData.id ? clientData : item))
      );
      setEditingClient(null);
    } else {
      const created = await createClient(clientData);
      setClients((prev) => [created, ...prev]);
      setShowForm(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (!confirmed) return;

    await deleteClient(id);
    setClients((prev) => prev.filter((client) => client.id !== id));
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Management
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Clients
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your client partnerships and contact information.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingClient(null);
            setShowForm(true);
          }}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          + Add Client
        </button>
      </div>

      {/* Filter & Search */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by client or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
          <span className="absolute left-3.5 top-2.5 text-slate-400">🔍</span>
        </div>

        <div className="flex items-center gap-2">
          {["All", "Active", "Inactive"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                status === item
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Clients Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Projects</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredClients.map((client) => (
                <tr key={client.id} className="transition hover:bg-slate-50/80">
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    <div>
                      <p>{client.name}</p>
                      <p className="text-xs font-normal text-slate-400">{client.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {client.company}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {client.phone}
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {client.projects || 0} Projects
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
                        client.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedClient(client)}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingClient(client);
                          setShowForm(true);
                        }}
                        className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(client.id)}
                        className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredClients.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="text-4xl">👥</div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                No clients found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try searching with a different term.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <ClientForm
          client={editingClient}
          onClose={() => {
            setShowForm(false);
            setEditingClient(null);
          }}
          onSave={handleSaveClient}
        />
      )}

      {/* Details Modal */}
      {selectedClient && (
        <ClientDetails
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
};

export default Clients;
