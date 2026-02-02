export default function UserDashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm ">
            Welcome back! Here’s an overview of your POS system.
          </p>
        </div>

        <button className="bg-white text-sky-600 px-4 py-2 rounded-lg font-semibold hover:bg-sky-100 transition">
          + New Sale
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Total Sales" value="Rs. 125,400" />
        <StatCard title="Orders Today" value="86" />
        <StatCard title="Total Revenue" value="Rs. 1,245,000" />
        <StatCard title="Customers" value="1,420" />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white text-gray-800 rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">Recent Orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <OrderRow id="#1023" name="Ram Shrestha" amount="Rs. 2,450" status="Paid" />
                <OrderRow id="#1024" name="Sita Rai" amount="Rs. 1,150" status="Pending" />
                <OrderRow id="#1025" name="Hari KC" amount="Rs. 3,200" status="Paid" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white text-gray-800 rounded-lg shadow p-5 space-y-4">
          <h2 className="font-semibold text-lg">Quick Actions</h2>

          <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700">
            Add Product
          </button>
          <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700">
            View Inventory
          </button>
          <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */

function StatCard({ title, value }) {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}

function OrderRow({ id, name, amount, status }: { id: string; name: string; amount: string; status: string }) {
  return (
    <tr className="border-t">
      <td className="p-3">{id}</td>
      <td className="p-3">{name}</td>
      <td className="p-3">{amount}</td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${status === "Paid"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
