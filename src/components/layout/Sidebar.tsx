import { ConfigProvider, Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/generateSidebarItems';
import { Link } from 'react-router-dom';
import adminSidebarItems from '../../utils/sidebarItems';

const { Sider } = Layout;
const Sidebar = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#f0f4ff',
                    // colorBgContainer: '#DAA520',
                    colorText: '#414446',
                },
                components: {
                    Menu: {
                        itemSelectedColor: '#0A2369',
                        itemBorderRadius: '0px' as any,
                        itemHeight: 45,
                        fontSize: 15,
                    },
                },
            }}
        >
            <Sider
                width={250}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"

                // onBreakpoint={(broken) => {
                //   // console.log(broken);
                // }}
                // onCollapse={(collapsed, type) => {
                //   console.log(collapsed, type);
                // }}
            >
                {/* logo of the website */}
                <Link to="/">
                    <img src="/logo.svg" className="w-[180px] object-cover m-5" alt="" />
                </Link>

                <Menu
                    style={
                        {
                            // color: '#DAA520',
                            // width: 250,
                        }
                    }
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={sidebarItemsGenerator(adminSidebarItems)}
                />
            </Sider>
        </ConfigProvider>
    );
};

export default Sidebar;
