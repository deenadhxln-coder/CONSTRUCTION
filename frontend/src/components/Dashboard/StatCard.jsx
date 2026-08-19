const StatCard = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl">
          {icon}
        </div>

      </div>

      {description && (
        <p className="mt-4 text-xs text-slate-500">
          {description}
        </p>
      )}

    </div>
  );
};

export default StatCard;