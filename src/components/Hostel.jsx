import React from "react";
const Hostel = () => {
  const studentRoom = {
    hostelName: "Lotus Hostel",
    roomNumber: "124",
    roommates: ["Jahnavi", "Mokthika"],
    occupancy: 3,
    amenities: ["Wi-Fi",",", "Mess",",", "Laundry", ",","Common Room",",","AC",",","Oven",",","Fridge"],
    notices: [
      "Water supply will be off tomorrow 9 AM - 12 PM",
      "Mess menu updated for this week"
    ]
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hostel</h1>
      <table className="w-full mb-4 border-collapse">
        <tbody>
          <tr className="border-b">
            <td className="py-2 font-semibold">Hostel Name</td>
            <td className="py-2">{studentRoom.hostelName}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-semibold">Room Number</td>
            <td className="py-2">{studentRoom.roomNumber}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-semibold">Roommates</td>
            <td className="py-2">{studentRoom.roommates.join(", ")}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-semibold">Occupancy</td>
            <td className="py-2">{studentRoom.occupancy} per room</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Amenities</h2>
        <div className="flex gap-2 flex-wrap">
          {studentRoom.amenities.map((a, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {a}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Notices</h2>
        <ul className="list-disc list-inside">
          {studentRoom.notices.map((notice, i) => (
            <li key={i}>{notice}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Request Room Change
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Submit Complaint
        </button>
      </div>
    </div>
  );
};

export default Hostel;