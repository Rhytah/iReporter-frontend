import React from 'react';
import {
  Form,
  Select,
  Button,
  Upload,
  Layout,
  Input,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Content } = Layout;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const RedflagForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Layout className="layout" style={{ minWidth: '50vw', minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px' }}>

        <div className="site-layout-content">

          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              'input-number': 3,
              'checkbox-group': ['A', 'B'],
              rate: 3.5,
            }}
          >
            <Form.Item
              name="redflag"
              label="Issue"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please add the issue you are reporting!',
                },
              ]}
            >
              <Input placeholder="What issue are you reporting?" />
            </Form.Item>
            <Form.Item
              name="select"
              label="Agency"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please select responsible Agency!',
                },
              ]}
            >
              <Select placeholder="Please select responsible Agency">
                <Option value="china">Ministry of Works, Road and Transport</Option>
                <Option value="usa">Ministry of ICT</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="region"
              label="Region"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please select your region!',
                },
              ]}
            >
              <Select placeholder="Please select your region">
                <Option value="eastern">Eastern Region</Option>
                <Option value="western">Western Region</Option>
                <Option value="southern">Southern Region</Option>
                <Option value="northern">Northern Region</Option>
                <Option value="central">Central Region</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="image as evidence of issue"
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <UploadOutlined />
                  {' '}
Click to upload
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
            Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default RedflagForm;
