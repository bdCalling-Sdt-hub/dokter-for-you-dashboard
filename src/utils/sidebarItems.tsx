import { TSidebarItem } from './generateSidebarItems';
import {
    AiOutlineUser,
    AiOutlineMedicineBox,
    AiOutlinePlusCircle,
    AiOutlineSetting,
    AiOutlineUnorderedList,
    AiOutlineSearch,
    AiOutlineStar,
} from 'react-icons/ai';
import { MdOutlineCategory, MdOutlineLocalShipping, MdOutlineArticle, MdOutlineDescription } from 'react-icons/md';
import { FiUsers, FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu';

const adminSidebarItems: TSidebarItem[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '',
        icon: <LuLayoutDashboard size={24} />,
        roles: ['admin'],
    },
    {
        key: 'user-details',
        label: 'User Details',
        path: 'user-details',
        icon: <AiOutlineUser size={24} />,
        roles: ['admin'],
    },
    {
        key: 'patient-services',
        label: 'Patient Services',
        path: 'patient-services',
        icon: <AiOutlineMedicineBox size={24} />,
        roles: ['admin'],
    },
    {
        key: 'medication-trade',
        label: 'Medication Trade',
        path: 'medication-trade',
        icon: <AiOutlineMedicineBox size={24} />,
        roles: ['admin'],
    },
    {
        key: 'refund',
        label: 'Refund',
        path: 'refund',
        icon: <AiOutlineUnorderedList size={24} />,
        roles: ['admin'],
    },
    {
        key: 'medicine-service',
        label: 'Add Medicine',
        path: 'medicine-service',
        icon: <AiOutlinePlusCircle size={24} />,
        roles: ['admin'],
    },
    {
        key: 'service-setting',
        label: 'Service Setting',
        path: 'service-setting',
        icon: <AiOutlineSetting size={24} />,
        roles: ['admin'],
        children: [
            {
                key: 'consultation-category',
                label: 'Consultation Category',
                path: 'consultation-category',
                icon: <MdOutlineCategory size={24} />,
            },
            {
                key: 'consultation-subcategory',
                label: 'Consultation Subcategory',
                path: 'consultation-subcategory',
                icon: <FiArrowRightCircle size={24} />,
            },
            {
                key: 'shipping-setting',
                label: 'Shipping Setting',
                path: 'shipping-setting',
                icon: <MdOutlineLocalShipping size={24} />,
            },
            {
                key: 'discount-price',
                label: 'Discount Price',
                path: 'discount-price',
                icon: <AiOutlineStar size={24} />,
            },
        ],
    },
    {
        key: 'interface-setting',
        label: 'Interface Setting',
        path: 'interface-setting',
        icon: <AiOutlineSetting size={24} />,
        roles: ['admin'],
        children: [
            {
                key: 'user-review',
                label: 'User Review',
                path: 'user-review',
                icon: <AiOutlineSearch size={24} />,
            },
            {
                key: 'about',
                label: 'About',
                path: 'about',
                icon: <MdOutlineDescription size={24} />,
            },
            {
                key: 'set-article',
                label: 'Set Article',
                path: 'set-article',
                icon: <MdOutlineArticle size={24} />,
            },
            {
                key: 'terms-conditions',
                label: 'Terms & Conditions',
                path: 'terms-conditions',
                icon: <FiArrowLeftCircle size={24} />,
            },
            {
                key: 'user-agreement',
                label: 'User Agreement',
                path: 'user-agreement',
                icon: <AiOutlineStar size={24} />,
            },
            {
                key: 'faq',
                label: 'FAQ',
                path: 'faq',
                icon: <AiOutlineSearch size={24} />,
            },
        ],
    },
    {
        key: 'service-provider',
        label: 'Service Provider',
        path: 'service-provider',
        icon: <FiUsers size={24} />,
        roles: ['admin'],
        children: [
            {
                key: 'doctors-details',
                label: 'Doctors Details',
                path: 'doctors-details',
                icon: <AiOutlineUser size={24} />,
            },
            {
                key: 'pharmacy-details',
                label: 'Pharmacy Details',
                path: 'pharmacy-details',
                icon: <AiOutlineMedicineBox size={24} />,
            },
            {
                key: 'admin-details',
                label: 'Admin Details',
                path: 'admin-details',
                icon: <AiOutlineUser size={24} />,
            },
        ],
    },
    //pharmacy
    {
        key: 'pharmacy-dashboard',
        label: 'Pharmacy Dashboard',
        path: 'pharmacy-dashboard',
        roles: ['pharmacy'],
    },
    {
        key: 'patient-services',
        label: 'Patient Services',
        path: 'pharmacy-patient-services',
        roles: ['pharmacy'],
    },
    {
        key: 'medication-trade',
        label: 'Medication trade',
        path: 'pharmacy-medication-trade',
        roles: ['pharmacy'],
    },
    {
        key: 'add-medicine',
        label: 'Add Medicine',
        path: 'pharmacy-add-medicine',
        roles: ['pharmacy'],
    },
    {
        key: 'login',
        label: 'Log Out',
        path: 'login',
        icon: <LuLogOut size={24} />,
        roles: ['admin', 'doctor', 'pharmacy'],
    },
];

export default adminSidebarItems;
