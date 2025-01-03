import { Button } from 'antd';
import { BsArrowLeft } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { RiRefundLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const PatientDetailsPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const topSection = (
        <div className="flex items-center justify-between px-4 py-2 bg-white my-2">
            {/* Back Button and Title */}
            <div className="flex items-center space-x-2">
                <BsArrowLeft className="text-lg text-gray-700 cursor-pointer" onClick={handleBack} />
                <h1 className="text-lg font-medium text-gray-800">User Services Details For Refund</h1>
            </div>

            {/* Reported Button */}
            <Button
                type="primary"
                style={{
                    height: 42,
                    backgroundColor: '#1854F9',
                }}
            >
                Reported
            </Button>
        </div>
    );

    const detailsSection = (
        <div className="bg-[#E7FBF2] p-6  flex justify-between items-center mb-4">
            <div>
                <p className="text-lg font-semibold text-gray-800">S No. #2164564615</p>
                <p className="text-md text-gray-600">Man problem/Erectile dysfunction</p>
                <p className="text-md text-gray-600">1/1/2025, 5:30 pm</p>
            </div>
            <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">Consultation Report</p>
                <p className="text-sm text-gray-500">Prescription is Complete</p>
            </div>
            <div>
                <Button type="primary" icon={<FaDownload />} size="large">
                    Download
                </Button>
            </div>
        </div>
    );

    const patientAndConsultantSection = (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#E8EEFE] p-6 text-gray ">
                <h1 className="text-xl font-semibold text-[#222222] my-3">Patient:</h1>
                <div className="flex items-center space-x-4">
                    {/* Profile Picture */}

                    <img
                        src="/user.svg" // Replace with the real image URL
                        alt="Patient"
                        className="object-cover size-32 rounded-full"
                    />

                    {/* Patient Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#0A2369]">Asadujjaman</h2>
                        <p className="text-lg text-[#11D279]">Netherlands</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-4 text-sm text-gray-800 space-y-4">
                    <p>
                        <span className="font-semibold">Name:</span> Asadujjaman Mahfuz
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> Asadujjaman101@bd.com
                    </p>
                    <p>
                        <span className="font-semibold">Contact Number:</span> +0999999999999999
                    </p>
                    <p>
                        <span className="font-semibold">Gender:</span> Male
                    </p>
                    <p>
                        <span className="font-semibold">Death of birth:</span> 12 Nov, 2024
                    </p>
                </div>
            </div>
            <div className="bg-[#E8EEFE] p-6 text-gray ">
                <h1 className="text-xl font-semibold text-[#222222] my-3">Consultant:</h1>
                <div className="flex items-center space-x-4">
                    {/* Profile Picture */}

                    <img
                        src="/user.svg" // Replace with the real image URL
                        alt="Patient"
                        className="object-cover size-32 rounded-full"
                    />

                    {/* Patient Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#0A2369]">Dr. Arco Verhoog</h2>
                        <p className="text-lg text-[#11D279]">Urologist</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-4 text-sm text-gray-800 space-y-4">
                    <p>
                        <span className="font-semibold">Name:</span> Dr. Arco Verhoog
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> Asadujjaman101@bd.com
                    </p>
                    <p>
                        <span className="font-semibold">Contact Number:</span> +0999999999999999
                    </p>
                    <p>
                        <span className="font-semibold">Gender:</span> Male
                    </p>
                </div>
            </div>
        </div>
    );

    const consultationDetailsSection = (
        <div className=" p-4 text-gray">
            {/* Consultation Details */}
            <div className="flex justify-between items-center pb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Consultation for man's weight problem</h3>
                    <p className="text-sm text-gray-500">Medical questionnaire, doctor's advice and prescription.</p>
                </div>
                <div className="text-[#0A2369] font-semibold text-lg">$25.00</div>
            </div>

            {/* Discount and Total */}
            <div className="mt-4">
                <div className="flex justify-end gap-20">
                    <span>Discount -</span>
                    <span>$0.00</span>
                </div>
                <hr className="h-0.5 bg-gray" />
                <div className="flex justify-end gap-20 text-lg font-semibold text-gray-900 mt-2">
                    <span>Total -</span>
                    <span className="text-[#0A2369]">$25.00</span>
                </div>
            </div>

            {/* Download Button */}
            <div className="mt-6 text-right flex justify-end space-x-2">
                <Button
                    style={{ height: 42, backgroundColor: '#FF3B28' }}
                    type="primary"
                    icon={<RiRefundLine size={20} />}
                >
                    Refund Now
                </Button>
                <Button style={{ height: 42 }} type="primary" icon={<FaDownload size={20} />}>
                    Download
                </Button>
            </div>
        </div>
    );

    return (
        <div className="bg-white p-3">
            {topSection}
            {detailsSection}
            {patientAndConsultantSection}
            {consultationDetailsSection}
        </div>
    );
};

export default PatientDetailsPage;
