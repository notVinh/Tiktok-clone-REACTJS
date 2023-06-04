import PropTypes from 'prop-types';
import styles from './SugItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';
import config from '~/config';

const cx = classNames.bind(styles);

function SugItem({ name, username, data }) {
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('box')}>
                            <div className={cx('box-header')}>
                                <Link to={config.routes.profile}>
                                    <Image
                                        className={cx('avatar')}
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/99c01802055ca67e2cf7ad755f3128e2~c5_100x100.jpeg?x-expires=1680854400&x-signature=GnZ06x4X%2F7%2FQ0levfmthzCeRQvc%3D"
                                        alt="vinh"
                                    ></Image>
                                </Link>
                                <Button primary>Follow</Button>
                            </div>
                            <Link to={config.routes.profile}>
                                <h4 className={cx('name')}>
                                    <span>{'quang vinh'}</span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                                </h4>
                            </Link>
                            <Link to={config.routes.profile}>
                                <span className={cx('username')}>{'Vinh'}</span>
                            </Link>

                            <div className={cx('reaction')}>
                                <div>
                                    <strong>10.3M</strong> Follow
                                </div>
                                <div className={cx('like')}>
                                    <strong>266.3M</strong> Thích
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                placement="bottom"
            >
                <Link to={'/'} className={cx('wrapper')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/99c01802055ca67e2cf7ad755f3128e2~c5_100x100.jpeg?x-expires=1680854400&x-signature=GnZ06x4X%2F7%2FQ0levfmthzCeRQvc%3D"
                        alt="vinh"
                    ></Image>
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{'quang vinh'}</span>
                            {/* {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />} */}
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('username')}>{'Vinh'}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

SugItem.propTypes = {
    data: PropTypes.object,
};

export default SugItem;
