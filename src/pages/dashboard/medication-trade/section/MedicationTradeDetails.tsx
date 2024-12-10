import { Button, Tooltip } from 'antd';
import { BsArrowLeft } from 'react-icons/bs';
import { CiBank } from 'react-icons/ci';
import { FaDownload } from 'react-icons/fa';
import { LiaHandPointRightSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

const MedicationTradeDetails = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const topSection = (
        <div className="flex items-center justify-between px-4 py-2 bg-white my-2">
            {/* Back Button and Title */}
            <div className="flex items-center space-x-2">
                <BsArrowLeft className="text-lg text-gray-700 cursor-pointer" onClick={handleBack} />
                <h1 className="text-lg font-medium text-gray-800">Medication Details</h1>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    type="primary"
                    style={{
                        height: 42,
                    }}
                >
                    Processing
                </Button>
                <Button
                    type="text"
                    style={{
                        height: 42,
                    }}
                >
                    <Tooltip title="Poke Therapist">
                        <LiaHandPointRightSolid color="#00B3CC" size={20} />
                    </Tooltip>
                </Button>
            </div>
        </div>
    );

    const detailsSection = (
        <div className="bg-[#E7FBF2] p-6  flex justify-between items-center mb-4">
            <div className="text-gray0-80">
                <p className="text-lg font-semibold">S No. #2164564615</p>
                <p className="text-md">Man problem/Erectile dysfunction</p>
                <p className="text-md">1/1/2025, 5:30 pm</p>
            </div>
        </div>
    );

    const patientAndConsultantSection = (
        <div className="bg-[#E8EEFE] p-6">
            <h1 className="text-xl font-semibold mb-6">Patient:</h1>
            <div className="flex flex-col gap-8">
                {/* Patient Info Section */}
                <div className="flex gap-4">
                    <img src="/user.svg" alt="Patient" className="w-24 h-24 rounded-full object-cover" />
                    <div>
                        <h2 className="text-xl font-semibold text-[#0A2369]">Asadujjaman</h2>
                        <p className="text-[#11D279]">Netherlands</p>

                        <div className="mt-4 space-y-2 text-[#4B4B4B]">
                            <p>
                                <span className="inline-block w-32">Name</span> : Asadujjaman Mahfuz
                            </p>
                            <p>
                                <span className="inline-block w-32">Email</span> : Asadujjaman101@bd.com
                            </p>
                            <p>
                                <span className="inline-block w-32">Contact Number</span> : +0999999999999999
                            </p>
                            <p>
                                <span className="inline-block w-32">Gender</span> : Male
                            </p>
                            <p>
                                <span className="inline-block w-32">Death of birth</span> : 12 nov, 2024
                            </p>
                        </div>
                    </div>
                </div>

                {/* Address and Schedule Section */}
                <div className="grid grid-cols-4 gap-8">
                    <div className="space-y-1">
                        <h3 className="font-medium mb-2">Address:</h3>
                        <p>john david</p>
                        <p>101 new house street 2957</p>
                        <p>amsterdam, NL</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium mb-2">Billing address:</h3>
                        <p className="text-[#11D279]">john david</p>
                        <p className="text-[#11D279]">101 new house street 2957</p>
                        <p className="text-[#11D279]">amsterdam, NL</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium mb-2">Pharmacy Address</h3>
                        <p>4517 Washington Ave.</p>
                        <p>Manchester</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="space-y-1">
                            <h3 className="font-medium mb-2">Time schedule</h3>
                            <p>Order Date : 14/11/2022, 10:09</p>
                            <p>Delivery Date : ----</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium mb-2">payment method:</h3>
                            <div className="flex items-center gap-2">
                                <CiBank size={24} />
                                <span>Transfer your own booking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const medicineDetailsSection = (
        <div className="flex items-center justify-between my-2 rounded-lg p-4 text-gray">
            <div className="flex items-center space-x-4">
                <img src="/ceevit.png" alt="Ceevit" className="w-20 h-auto rounded" />

                <div>
                    <h3 className="font-semibold text-lg text-gray-800">Ceevit</h3>
                    <p className="text-sm text-gray-600">Vitamin C 250 mg</p>
                </div>
            </div>

            <div className="flex space-x-8">
                <div className="text-center">
                    <p className="text-sm text-gray-600">Dosage</p>
                    <p className="font-semibold text-gray-800">250 mg</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-600">Contents of the Box</p>
                    <p className="font-semibold text-gray-800">1</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-semibold text-gray-800">$10.00</p>
                </div>
            </div>
        </div>
    );

    const consultationDetailsSection = (
        <div className=" p-4 text-gray text-lg">
            <hr className="my-4" />
            <div className="flex items-center justify-end gap-40">
                <p>Subtotal</p>
                <p>$180.00</p>
            </div>
            <div className="flex items-center justify-end gap-40">
                <p>Discount</p>
                <p>-$20.00</p>
            </div>
            <div className="flex items-center justify-end gap-40">
                <p>Shipping cost</p>
                <p>$10.00</p>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-end gap-40 text-[#0A2369]">
                <p>Total</p>
                <p>$170.00</p>
            </div>
            <div className="mt-6 text-right">
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
            {medicineDetailsSection}
            {medicineDetailsSection}
            {consultationDetailsSection}
        </div>
    );
};

export default MedicationTradeDetails;
