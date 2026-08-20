import { useState } from "react";

const Documents = () => {
  const [search, setSearch] = useState("");

  const initialDocuments = [
    {
      id: 1,
      name: "Building Plan & Elevation",
      project: "Green Valley Villa",
      type: "PDF",
      size: "4.2 MB",
      date: "Aug 18, 2026",
    },
    {
      id: 2,
      name: "Project Contract & Scope of Work",
      project: "Tech Park Office",
      type: "PDF",
      size: "1.8 MB",
      date: "Aug 15, 2026",
    },
    {
      id: 3,
      name: "Material & Labor Cost Estimate",
      project: "Green Valley Villa",
      type: "XLSX",
      size: "820 KB",
      date: "Aug 12, 2026",
    },
    {
      id: 4,
      name: "Site Topography & Soil Survey",
      project: "Industrial Warehouse",
      type: "PDF",
      size: "12.5 MB",
      date: "Aug 10, 2026",
    },
    {
      id: 5,
      name: "Structural Engineering Certification",
      project: "City Apartment",
      type: "PDF",
      size: "3.1 MB",
      date: "Jul 28, 2026",
    },
  ];

  const [documents, setDocuments] = useState(initialDocuments);

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(search.toLowerCase()) ||
    document.project.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpload = () => {
    const docName = window.prompt("Enter document title:");
    if (!docName) return;

    const newDoc = {
      id: Date.now(),
      name: docName,
      project: "General Project",
      type: "PDF",
      size: "2.4 MB",
      date: "Just now",
    };
    setDocuments([newDoc, ...documents]);
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Files & Blueprints
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Project Documents
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Store, view, and organize blueprints, site photos, permits, and contracts.
          </p>
        </div>

        <button
          type="button"
          onClick={handleUpload}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          + Upload Document
        </button>
      </div>

      {/* Search */}
      <div className="mt-8">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search documents by name or project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
          <span className="absolute left-3.5 top-2.5 text-slate-400">🔍</span>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-600">
                  {doc.type}
                </span>
                <span className="text-xs text-slate-400">{doc.date}</span>
              </div>

              <h3 className="mt-3 font-semibold text-slate-900">
                {doc.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Project: {doc.project}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Size: {doc.size}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => alert(`Downloading ${doc.name}...`)}
                className="w-full rounded-lg bg-slate-100 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Download
              </button>
              <button
                type="button"
                onClick={() =>
                  setDocuments(documents.filter((d) => d.id !== doc.id))
                }
                className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
