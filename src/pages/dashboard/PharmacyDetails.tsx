import { Button, Input, Popconfirm, Select, Table, Tooltip } from 'antd';
import React, { useState } from 'react';
import { BsEye, BsPlusLg, BsSearch, BsTrash } from 'react-icons/bs';
import { CiEdit, CiLock, CiUnlock } from 'react-icons/ci';
import PharmacyDetailsModal from '../../components/ui/PharmacyDetailsModal';
import AddPermacyDetails from '../../components/ui/AddPermacyDetails';

const PharmacyDetails: React.FC = () => { 
  const [openModal, setOpenModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [viewShippingProfile, setViewShippingProfile] = useState<any>(null);
  const [shippingProfile, setShippingProfile] = useState<any>(null); 

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: 'pharmacy Name   ',
      dataIndex: 'pharmacyName',
      key: 'pharmacyName',
    },
    {
      title: 'Address',
      dataIndex: 'pharmacyAddress',
      key: 'pharmacyAddress',
    },
    {
      title: 'Contact',
      dataIndex: 'selectedArea',
      key: 'selectedArea',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Tooltip title="View">
            <Button
              onClick={() => {
                setViewShippingProfile(record);
                setOpenViewModal(true);
              }}
              type="text"
              icon={<BsEye size={20} className="text-blue-600" />}
            />
          </Tooltip>  

          <Tooltip title="Edit">
                                  <Button
                                      onClick={() => {
                                          setShippingProfile(record);
                                          setOpenModal(true);
                                      }}
                                      type="text"
                                      icon={<CiEdit size={20} className="text-blue-600" />}
                                  /> 
                                   </Tooltip> 

          <Tooltip title="Lock All">
            <Button type="text" icon={<CiLock style={{ fontSize: '20px', color: 'red' }} />} />
          </Tooltip> 

          <Tooltip title="Delete">
            <Popconfirm
              title="Delete Shipping Setting"
              description="Are you sure to delete this shipping setting?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => console.log('Delete', record)}
            >
              <Button type="text" icon={<BsTrash size={18} className="text-red-500" />} />
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  // Sample data
  const data = [
    {
      key: '1',
      pharmacyName: 'City Pharmacy',
      pharmacyAddress: 'Dhaka,Bangladesh',
      selectedArea: '12349878945',
      shippingPrice: 5.99,
    },
    {
      key: '2',
      pharmacyName: 'Health Plus',
      pharmacyAddress: 'Dhaka,Bangladesh',
      selectedArea: '2485754656745',
      shippingPrice: 7.99,
    },
    {
      key: '3',
      pharmacyName: 'MediCare',
      pharmacyAddress: 'Dhaka,Bangladesh',
      selectedArea: '274878743454',
      shippingPrice: 9.99,
    },
  ];
 
  return (
    <div className="pharmacy-details">
      <div className="doctors-details">
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-title">Pharmacy Details</h1>
          </div>
          <div className="mb-4 flex items-center justify-end gap-4">
            <Tooltip title="Unlock All">
              <Button type="text" icon={<CiUnlock style={{ fontSize: '30px', color: 'green' }} />} />
            </Tooltip>
            <Tooltip title="Lock All">
              <Button type="text" icon={<CiLock style={{ fontSize: '30px', color: 'red' }} />} />
            </Tooltip>
            <Popconfirm
              title="Are you sure to delete the selected items?"
              onConfirm={() => console.log('Deleted selected')}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text" shape="circle" icon={<BsTrash color="red" size={20} />} />
            </Popconfirm>

            <Input
              type="text"
              prefix={<BsSearch className="mx-2" size={20} />}
              placeholder="Search"
              style={{ width: 320 }}
            />
            <Select
              placeholder="Doctor Type"
              style={{ width: 200 }}
              options={[
                { value: 'all', label: 'All Pharmacies' },
                { value: 'pharmacy1', label: 'Pharmacy 1' },
                { value: 'pharmacy2', label: 'Pharmacy 2' },
                { value: 'pharmacy3', label: 'Pharmacy 3' },
              ]}
            /> 

            <Select
              placeholder="Action"
              style={{ width: 200 }}
              options={[
                { value: 'all', label: 'All Pharmacies' },
                { value: 'pharmacy1', label: 'Pharmacy 1' },
                { value: 'pharmacy2', label: 'Pharmacy 2' },
                { value: 'pharmacy3', label: 'Pharmacy 3' },
              ]}
            />

            <Button
              icon={<BsPlusLg size={18} color='#fffff' />}
              style={{
                height: 42,
              }}
              type="primary"
              onClick={() => setOpenModal(true)}
            >
              Add pharmacy 
            </Button>
          </div>
        </div>

        <div>
          <Table
            rowSelection={{
              type: 'checkbox',
              onChange: (selectedRowKeys: any, selectedRows: any) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
            }}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
          />
        </div>

      </div>  
      <PharmacyDetailsModal open={openViewModal} setOpen={setOpenViewModal} viewShippingProfile={viewShippingProfile} /> 
      <AddPermacyDetails open={openModal} setOpen={setOpenModal} shippingProfile={shippingProfile} setShippingProfile={setShippingProfile}  />
    </div> 
    </div>
  );
};

export default PharmacyDetails;
