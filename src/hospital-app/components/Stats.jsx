import { Award, Users, HeartPulse, Clock3 } from "lucide-react";

export default function Stats({ className = "" }) {
  const stats = [
    {
      value: "25+",
      label: "Years of Experience",
      sublabel: "Pioneering clinical excellence since 2001",
      icon: Award,
      color: "text-blue-600 bg-blue-50",
    },
    {
      value: "150+",
      label: "Expert Doctors",
      sublabel: "Board-certified medical specialists",
      icon: Users,
      color: "text-teal-600 bg-teal-50",
    },
    {
      value: "50K+",
      label: "Patients Served",
      sublabel: "Compassionate patient-centered recoveries",
      icon: HeartPulse,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      value: "24/7",
      label: "Emergency Support",
      sublabel: "Round-the-clock critical response team",
      icon: Clock3,
      color: "text-rose-600 bg-rose-50",
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon size={24} />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {stat.value}
              </div>

              <div className="mt-1 text-sm sm:text-base font-bold text-gray-800">
                {stat.label}
              </div>

              <div className="mt-1 text-xs text-gray-500 hidden sm:block">
                {stat.sublabel}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
