import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Input, Popconfirm, Select, Upload } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { TbTrash } from 'react-icons/tb';
import Modal from '../../../components/shared/Modal';
import { IoImage } from 'react-icons/io5';
import {
  useCreateConsultationSubcategoryMutation,
  useDeleteConsultationSubcategoryMutation,
  useEditConsultationSubcategoryMutation,
  useGetConsultationSubcategoryQuery,
} from '../../../redux/apiSlices/consultationSlice';
import toast from 'react-hot-toast';

interface Subcategory {
  _id: string;
  name: string;
  subCategoryName: string;
  image: string;
  details: string;
}

const ConsultationSubCategory: React.FC = () => {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [editCategoryData, setEditCategoryData] = useState<Subcategory | null>(null);

  const { data: consultationSubCategoryData, isFetching, refetch } = useGetConsultationSubcategoryQuery(undefined);
  const [createConsultationSubcategory] = useCreateConsultationSubcategoryMutation();
  const [editConsultationSubcategory] = useEditConsultationSubcategoryMutation();
  const [deleteConsultationSubcategory] = useDeleteConsultationSubcategoryMutation();

  const consultationSubCategories = consultationSubCategoryData?.data;
  console.log(consultationSubCategories);

  const [categoryImagePreview, setCategoryImagePreview] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (editCategoryData) {
      form.setFieldsValue({
        name: editCategoryData.name,
        subCategoryName: editCategoryData.subCategoryName,
        image: editCategoryData.image,
        details: editCategoryData.details,
      });
      setCategoryImagePreview(editCategoryData.image);
    } else {
      form.resetFields();
      setCategoryImagePreview(undefined);
    }
  }, [editCategoryData, form]);

  if (isFetching) return <div>Loading...</div>;

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('image', values.image);
    formData.append('details', values.details);
    // formData.append('category', values.category);
    console.log(values);

    try {
      let response;
      if (editCategoryData) {
        response = await editConsultationSubcategory({ data: formData, id: editCategoryData._id }).unwrap();
        if (response?.success) {
          toast.success('Subcategory updated successfully!');
        }
      } else {
        response = await createConsultationSubcategory(formData).unwrap();
        if (response?.success) {
          toast.success('Subcategory added successfully!');
        }
      }
      refetch();
    } catch (error) {
      toast.error(editCategoryData ? 'Failed to update subcategory!' : 'Failed to add subcategory!');
    }
    setOpenModal(false);
  };

  const handleDeleteSubcategory = async (id: string) => {
    try {
      const response = await deleteConsultationSubcategory(id).unwrap();
      if (response?.success) {
        toast.success('Subcategory deleted successfully!');
        refetch();
      }
    } catch (error) {
      toast.error('Failed to delete subcategory!');
    }
  };

  const categoryForm = (
    <Form form={form} onFinish={onFinish} layout="vertical" requiredMark={false}>
      <Form.Item label="Sub Category Name" name="subCategoryName">
        <Input placeholder="Enter Sub Category Name" />
      </Form.Item>
      <Form.Item label="Category Name" name="name">
        <Select placeholder="Select Category">
          {consultationSubCategories?.map((category: Subcategory) => (
            <Select.Option key={category.name} value={category.name}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Category Image"
        name="image"
        getValueFromEvent={(e) => {
          const file = e?.fileList?.[0]?.originFileObj;
          if (file) {
            setCategoryImagePreview(URL.createObjectURL(file));
          }
          return e?.fileList?.[0]?.originFileObj;
        }}
      >
        <Upload.Dragger
          accept="image/*"
          maxCount={1}
          showUploadList={false}
          beforeUpload={(_file) => {
            return false;
          }}
        >
          {categoryImagePreview || editCategoryData?.image ? (
            <img
              src={categoryImagePreview || editCategoryData?.image}
              alt="category preview"
              className="w-48 h-48 mx-auto object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2">
                <IoImage size={24} />
              </div>
              <p className="text-gray">Upload Image</p>
            </div>
          )}
        </Upload.Dragger>
      </Form.Item>
      <Form.Item label="Details" name="details">
        <Input.TextArea rows={12} placeholder="Enter Details" />
      </Form.Item>

      <div className="flex justify-end">
        <Form.Item>
          <Button htmlType="submit" type="primary" size="large">
            {editCategoryData ? 'Update Subcategory' : 'Add Subcategory'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Consultation Subcategory</h1>
        <div className="flex items-end gap-2">
          <Select style={{ width: 150 }} placeholder="Select Category" allowClear>
            {consultationSubCategories?.map((category: Subcategory) => (
              <Select.Option key={category.name} value={category.name}>
                {category.name}
              </Select.Option>
            ))}
          </Select>

          <Popconfirm
            title="Delete Subcategory"
            description="Are you sure to delete this subcategory?"
            okText="Yes"
            cancelText="No"
            placement="top"
          >
            <Button style={{ height: 42 }} type="text">
              <TbTrash size={24} />
            </Button>
          </Popconfirm>
          <Button
            onClick={() => setOpenModal(true)}
            style={{
              height: 42,
            }}
            iconPosition="end"
            type="primary"
            icon={<PlusOutlined />}
            className="bg-[#002B90]"
          >
            Add Sub Category
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {consultationSubCategories?.map((subcategory: Subcategory, _index: number) => (
          <Card key={_index} className="">
            <div className="flex items-center gap-4 mb-4 rounded-xl relative">
              <div className="w-full h-40 rounded-xl">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={
                    subcategory?.image.startsWith('http')
                      ? subcategory?.image
                      : `${import.meta.env.VITE_BASE_URL}${subcategory?.image}`
                  }
                  alt="subCategoryName"
                />
              </div>
            </div>
            <div className="space-y-1 mb-3">
              <h1 className="text-secondary text-lg font-semibold">{subcategory.subCategoryName}</h1>
              <h3 className="text-primary">{subcategory.name}</h3>
            </div>
            <div className="flex gap-2">
              <Popconfirm
                title="Delete Subcategory"
                description="Are you sure to delete this subcategory?"
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="flex items-center"
                  onClick={() => handleDeleteSubcategory(subcategory._id)}
                >
                  Delete
                </Button>
              </Popconfirm>
              <Button
                onClick={() => {
                  setEditCategoryData(subcategory);
                  setOpenModal(true);
                }}
                type="primary"
                icon={<EditOutlined />}
                className="flex items-center bg-[#002B90]"
              >
                Edit
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        width={800}
        open={openModal}
        setOpen={(open) => {
          setOpenModal(open);
          if (!open) {
            setEditCategoryData(null);
            setCategoryImagePreview(undefined);
          }
        }}
        body={categoryForm}
        title={editCategoryData ? 'Edit Subcategory' : 'Add Subcategory'}
      />
    </div>
  );
};

export default ConsultationSubCategory;
