import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Python', value: 54},
  { name: 'JavaScript', value: 34 },
  { name: 'HTML', value: 5 },
  { name: 'CSS', value: 5 },
  { name: 'Java', value: 2 },
];

const COLORS = ['#0ea5e9', '#22c55e', '#eab308', '#f97316', '#6366f1'];

const AboutMe = () => {

  const getExperience = () => {
    const startDate = new Date('2025-01-01'); // January 1, 2025
    const now = new Date();

    const totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let display = '';
    if (years > 0) {
      display += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0 || years === 0) {
      display += `${years > 0 ? ' ' : ''}${months} month${months > 1 ? 's' : ''}`;
    }

    return display;
  };



  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 md:px-20 py-20">
      <div className="mt-16">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-sky-600">/</span> About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-0 mt-10">
          {/* Left Column */}
          <div className="md:pr-6">
            <h2 className="text-2xl md:text-3xl mb-3">
              Turning Data into Decisions, and Automation into Impact
            </h2>
            <p className="text-sm md:text-base">
              I help businesses work smarter by building AI-powered workflows, automating tasks, and delivering data-driven insights that cut costs and boost efficiency.
            </p>
          </div>

          {/* Empty Spacer */}
          <div className="hidden md:block w-full"></div>

          {/* Right Column */}
          <div className="md:pl-6">
            <div className="flex flex-col md:flex-row md:gap-[100px] gap-6 mb-5 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl">Total {getExperience()} of Professional Experience</h2>
              <h2 className="text-2xl md:text-3xl">6 Successful Projects</h2>
            </div>
          </div>
        </div>

        {/* Donut Chart Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Languages I've Used in Projects</h2>

          <div className="w-full flex justify-center">
            <div className="w-[400px] h-[300px] md:w-[700px] md:h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="80%"
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name }) => name}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
