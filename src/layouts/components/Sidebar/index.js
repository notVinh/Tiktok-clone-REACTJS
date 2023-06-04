import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import { MenuItem } from './Menu';
import { CameraIcon, CameraIconActive, GroupIcon, GroupIconActive, HomeIcon, HomeIconActive } from '~/components/Icon';
import config from '~/config';
import Suggest from './Suggest';
import SugItem from '~/components/SugItem';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    icon={<HomeIcon />}
                    iconActive={<HomeIconActive />}
                    title={'Dành cho bạn'}
                    to={config.routes.home}
                />
                <MenuItem
                    icon={<GroupIcon />}
                    iconActive={<GroupIconActive />}
                    title={'Đang Follow'}
                    to={config.routes.following}
                />
                <MenuItem
                    icon={<CameraIcon />}
                    iconActive={<CameraIconActive />}
                    title={'LIVE'}
                    to={config.routes.live}
                />
            </Menu>

            <Suggest label={'Tài khoản được đề xuất'}>
                <SugItem />
            </Suggest>
        </aside>
    );
}

export default Sidebar;
