import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ErrorPage from '../pages/error/ErrorPage';
import Categories from '../pages/dashboard/Categories';
import Review from '../pages/dashboard/Review';
import Campaign from '../pages/dashboard/Campaign';
import TermsCondition from '../pages/dashboard/TermsCondition';
import Notification from '../pages/dashboard/Notification';
import UserDetails from '../pages/dashboard/user/UserDetails';
import PatientServices from '../pages/dashboard/patient/PatientServices';
import ConsultationCategory from '../pages/dashboard/consultation-category/ConsultationCategory';
import ConsultationSubcategory from '../pages/dashboard/ConsultationSubcategory';
import ShippingSetting from '../pages/dashboard/ShippingSetting';
import DiscountPrice from '../pages/dashboard/DiscountPrice';

import UserReview from '../pages/dashboard/UserReview';
import About from '../pages/dashboard/About';
import SetArticle from '../pages/dashboard/SetArticle';
import TermsConditions from '../pages/dashboard/TermsConditions';
import UserAgreement from '../pages/dashboard/UserAgreement';
import FAQ from '../pages/dashboard/FAQ';
import DoctorsDetails from '../pages/dashboard/DoctorsDetails';
import PharmacyDetails from '../pages/dashboard/PharmacyDetails';
import AdminDetails from '../pages/dashboard/AdminDetails';
import PatientDetailsPage from '../pages/dashboard/patient/section/PatientDetailsPage';
import VideConsultationDetails from '../pages/dashboard/patient/section/VideoColsultationDetails';
import DigitalPrescriptionDetails from '../pages/dashboard/patient/section/DigitalPrescriptionDetails';
import MedicationDetails from '../pages/dashboard/patient/section/MedicationDetails';
import MedicationTrade from '../pages/dashboard/medication-trade/MedicationTrade';
import MedicationTradeDetails from '../pages/dashboard/medication-trade/section/MedicationTradeDetails';
import RefundServices from '../pages/dashboard/refund/RefundServices';
import RegularConsultationRefundDetails from '../pages/dashboard/refund/section/RegularConsultationRefundDetails';
import VideoConsultationRefundDetails from '../pages/dashboard/refund/section/VideoConsultationRefundDetails';
import DigitalPrescriptionRefundDetails from '../pages/dashboard/refund/section/DigitalPrescriptionRefundDetails';
import MedicationRefundDetails from '../pages/dashboard/refund/section/MedicationRefundDetails';
import MedicineService from '../pages/dashboard/medicine/MedicineService';
import AddMedicine from '../pages/dashboard/medicine/AddMedicine';
import EditMedication from '../pages/dashboard/medicine/EditMedicine';
import SingleMedicineDetails from '../pages/dashboard/medicine/SingleMedicineDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'categories', element: <Categories /> },
            { path: 'reviews', element: <Review /> },
            { path: 'campaign', element: <Campaign /> },
            { path: 'make-admin', element: <MakeAdmin /> },
            { path: 'terms', element: <TermsCondition /> },
            { path: 'notification', element: <Notification /> },

            { path: 'user-details', element: <UserDetails /> },
            { path: 'patient-services', element: <PatientServices /> },

            //Note: pages for patient details
            { path: 'regular-consultation/details/:id', element: <PatientDetailsPage /> },
            { path: 'video-consultation/details/:id', element: <VideConsultationDetails /> },
            { path: 'digital-prescription/details/:id', element: <DigitalPrescriptionDetails /> },
            { path: 'medication/details/:id', element: <MedicationDetails /> },
            { path: 'medication-trade', element: <MedicationTrade /> },
            //Note: pages for medication trade
            { path: 'medication-trade/details/:id', element: <MedicationTradeDetails /> },

            { path: 'refund', element: <RefundServices /> },
            //Note: pages for refund
            { path: 'regular-consultation-refund/details/:id', element: <RegularConsultationRefundDetails /> },
            { path: 'video-consultation-refund/details/:id', element: <VideoConsultationRefundDetails /> },
            { path: 'digital-prescription-refund/details/:id', element: <DigitalPrescriptionRefundDetails /> },
            { path: 'medication-refund/details/:id', element: <MedicationRefundDetails /> },

            { path: 'medicine-service', element: <MedicineService /> },
            //Note: pages for medicine service

            { path: 'medicine-service/add-medicine', element: <AddMedicine /> },
            { path: 'medicine-service/edit-medicine/:id', element: <EditMedication /> },
            { path: 'medicine-service/details-medicine/:id', element: <SingleMedicineDetails /> },

            { path: 'consultation-category', element: <ConsultationCategory /> },
            { path: 'consultation-subcategory', element: <ConsultationSubcategory /> },
            { path: 'shipping-setting', element: <ShippingSetting /> },
            { path: 'discount-price', element: <DiscountPrice /> },

            { path: 'user-review', element: <UserReview /> },
            { path: 'about', element: <About /> },
            { path: 'set-article', element: <SetArticle /> },
            { path: 'terms-conditions', element: <TermsConditions /> },
            { path: 'user-agreement', element: <UserAgreement /> },
            { path: 'faq', element: <FAQ /> },

            { path: 'doctors-details', element: <DoctorsDetails /> },
            { path: 'pharmacy-details', element: <PharmacyDetails /> },
            { path: 'admin-details', element: <AdminDetails /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]);

export default router;
