import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DateTime } from 'luxon'; // Import Luxon

const Homepage_form = () => {

    const [inputs, setInputs] = useState({
        guests: '',
        villas: '',
        check_in_date: '',
        check_out_date: '',
        name: '',
        email: '',
        contact: '',
    });

    const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
    const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

    const guests = ["Guest 1", "Guest 2", "Guest 3"];
    const villas = ["Villa 1", "Villa 2", "Villa 3"];

    const handleDateChange = (date: Date, inputName: string) => {
        // Use Luxon to handle timezone
        const localDate = DateTime.fromJSDate(date, { zone: 'local' });
        const formattedDate = localDate.toISODate(); // Format as YYYY-MM-DD

        setInputs(prev => ({ ...prev, [inputName]: formattedDate }));
    };

    // Check if all required fields are filled
    const allFieldsFilled = inputs.guests && inputs.villas && inputs.check_in_date && inputs.check_out_date;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission
        console.log(inputs); // Log the current inputs

        // Reset the inputs state to its initial values
        setInputs({
            guests: '',
            villas: '',
            check_in_date: '',
            check_out_date: '',
            name: '',
            email: '',
            contact: ''
        });
    };

    return (
        <section>
            <div className='text-slate-400 '>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col  gap-2 md:gap-6 full py-20 md:py-0'>
                    <div className="flex  justify-center items-center flex-wrap gap-2 md:gap-6 full">
                        {/* Guests Dropdown */}
                        <div className="flex flex-col items-start gap-2">
                            <label className="text-[#fff] text-base" htmlFor="guests">Guests <span className="text-red-500">*</span></label>

                            <select id="guests" name="guests" onChange={(e) => setInputs({ ...inputs, guests: e.target.value })}
                                className="focus:border-blue-500 focus:ring-blue-300 outline-none px-4 py-2 border rounded-md min-w-[200px]" required>
                                <option value="">Select Guest</option>
                                {guests.map((guest, index) => (
                                    <option key={index} value={guest.toLowerCase().replace(" ", "")}>{guest}</option>
                                ))}
                            </select>
                        </div>

                        {/* Villas Dropdown */}
                        <div className="flex flex-col items-start gap-2">
                            <label className="text-[#fff] text-base" htmlFor="villas">Villas <span className="text-red-500">*</span></label>

                            <select id="villas" name="villas" onChange={(e) => setInputs({ ...inputs, villas: e.target.value })}
                                className="px-4 py-2 border rounded-md min-w-[200px]" required>
                                <option value="">Select a Villa</option>
                                {villas.map((villa, index) => (
                                    <option key={index} value={villa.toLowerCase().replace(" ", "")}>{villa}</option>
                                ))}
                            </select>
                        </div>

                        {/* Check-In Date */}
                        <div className="flex flex-col items-start gap-2 relative">
                            <label className="text-[#fff] text-base" htmlFor="check_in_date">Check-In Date <span className="text-red-500">*</span></label>

                            <input
                                type="text" readOnly value={inputs.check_in_date} placeholder="Select Date"
                                className="px-4 py-2 border rounded-md min-w-[200px] cursor-pointer"
                                onClick={() => {
                                    setShowCheckInCalendar(!showCheckInCalendar);
                                    setShowCheckOutCalendar(false); // Close check-out calendar

                                }} required />
                            {showCheckInCalendar && (
                                <div className="absolute top-[104%] left-0 bg-white p-2 rounded-lg shadow-lg z-50">
                                    <Calendar onChange={(date) => handleDateChange(date as Date, 'check_in_date')} />
                                </div>
                            )}
                        </div>

                        {/* Check-Out Date */}
                        <div className="flex flex-col items-start gap-2 relative">
                            <label className="text-[#fff] text-base" htmlFor="check_out_date">Check-Out Date <span className="text-red-500">*</span></label>
                            <input type="text" readOnly value={inputs.check_out_date} placeholder="Select Date"
                                className="px-4 py-2 border rounded-md min-w-[200px] cursor-pointer"
                                onClick={() => {
                                    setShowCheckOutCalendar(!showCheckOutCalendar);
                                    setShowCheckInCalendar(false); // Close check-in calendar
                                }} required />
                            {showCheckOutCalendar && (
                                <div className="absolute top-[104%] left-0 bg-white p-2 rounded-lg shadow-lg z-50">
                                    <Calendar onChange={(date) => handleDateChange(date as Date, 'check_out_date')} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-wrap gap-6 full">

                        {/* Conditionally Render Name, Email, and Contact Number */}
                        {allFieldsFilled && (
                            <>
                                <div className="flex flex-wrap justify-center flex-row gap-2 md:gap-6">

                                    <div className="flex flex-col items-start gap-2">
                                        <label className="text-[#fff] text-base" htmlFor="name">Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={inputs.name}
                                            placeholder="Enter Full Name"
                                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                                            className="px-4 py-2 border rounded-md min-w-[200px]"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col items-start gap-2">
                                        <label className="text-[#fff] text-base" htmlFor="email">Email <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={inputs.email}
                                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                            className="px-4 py-2 border rounded-md min-w-[200px]"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col items-start gap-2">
                                        <label className="text-[#fff] text-base" htmlFor="contact">Contact Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            id="contact"
                                            name="contact"
                                            placeholder="Enter Mobile Number"
                                            value={inputs.contact}
                                            onChange={(e) => setInputs({ ...inputs, contact: e.target.value })}
                                            className="px-4 py-2 border rounded-md min-w-[200px]"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md">Submit</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Homepage_form