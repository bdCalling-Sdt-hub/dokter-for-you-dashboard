import { Form, Input } from 'antd';
import { useChangePasswordMutation } from '../../../redux/apiSlices/authSlice';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [form] = Form.useForm();

  const [changePassword] = useChangePasswordMutation();

  const handleChangePassword = async (values: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    try {
      const response = await changePassword(values).unwrap();

      if (response?.success) {
        toast.success('Password updated successfully!');
        form.resetFields();
      } else {
        toast.error('Failed to update password.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-6 lg:px-12 mt-8">
      <Form
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleChangePassword}
        className="w-full lg:w-1/2"
      >
        <Form.Item
          name="currentPassword"
          label={<p className="block">Current Password</p>}
          rules={[
            {
              required: true,
              message: 'Please input your current password!',
            },
          ]}
          className="mb-5"
        >
          <Input.Password
            placeholder="Enter Password"
            className="border border-gray-300 h-[50px] bg-white rounded-lg"
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label={<p className="block">New Password</p>}
          dependencies={['currentPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('currentPassword') === value) {
                  return Promise.reject(new Error('The new password and current password do not match!'));
                }
                return Promise.resolve();
              },
            }),
          ]}
          className="mb-5"
        >
          <Input.Password
            placeholder="Enter password"
            className="border border-gray-300 h-[50px] bg-white rounded-lg"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={<p className="block">Re-Type Password</p>}
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered does not match!'));
              },
            }),
          ]}
          className="mb-10"
        >
          <Input.Password
            placeholder="Enter password"
            className="border border-gray-300 h-[50px] bg-white rounded-lg"
          />
        </Form.Item>

        <Form.Item className="flex  justify-end">
          <button type="submit" className="bg-primary text-white w-36 h-11 rounded-lg">
            Save
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
