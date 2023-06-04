import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuItem({ icon, iconActive, title, to }) {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
        >
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default MenuItem;
