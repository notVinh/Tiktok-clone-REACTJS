import classNames from 'classnames/bind';
import styles from './Suggest.module.scss';

const cx = classNames.bind(styles);

function Suggest({ label, children }) {
    return (
        <nav className={cx('wrapper')}>
            <h3>{label}</h3>
            {children}
        </nav>
    );
}

export default Suggest;
