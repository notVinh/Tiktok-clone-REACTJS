import React from 'react';
import { useState, useRef } from 'react';
import Image from '../Images';
import styles from './Reel.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { HiMusicNote } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Reel = ({ img, nickname, fullname, desc, hagtag, music, likeNum, comment, save, share, videoSource }) => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);
    const videoRef = useRef();
    const handlePlay = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('nav')}>
                <div className={cx('info')}>
                    <Image className={cx('img-avatar')} src={img}></Image>
                    <div className={cx('info-item')}>
                        <div className={cx('info-name')}>
                            <h1 className={cx('info-nickname')}>{nickname}</h1>
                            <h2 className={cx('info-fullname')}>{fullname}</h2>
                        </div>
                        <div className={cx('info-desc')}>
                            <p>{desc}</p>
                            <p className={cx('hagtag')}>{hagtag}</p>
                        </div>
                        <div className={cx('info-music')}>
                            <HiMusicNote />
                            nhạc nền - <span>{music}</span>
                        </div>
                        <div className={cx('video-nav')}>
                            <video
                                ref={videoRef}
                                className={cx('video')}
                                height={590}
                                src={videoSource}
                                onClick={handlePlay}
                                loop
                            />
                            <div className={cx('action')}>
                                <span>
                                    {like ? (
                                        <span className={cx('icon')} onClick={() => setLike(false)}>
                                            <FcLike />
                                        </span>
                                    ) : (
                                        <span className={cx('icon-none')} onClick={() => setLike(true)}>
                                            <FcLikePlaceholder />
                                        </span>
                                    )}
                                    <span className="quantity">{likeNum}</span>
                                </span>
                                <span>
                                    <span className={cx('icon')}>
                                        <AiFillMessage />
                                    </span>
                                    <span className="quantity">{comment}</span>
                                </span>
                                <span>
                                    <span className={cx('icon')}>
                                        <BsFillBookmarkFill />
                                    </span>
                                    <span className="quantity">{save}</span>
                                </span>
                                <span>
                                    <span className={cx('icon')}>
                                        <FaShare />
                                    </span>
                                    <span className="quantity">{share}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Button outline className={cx('btn')}>
                    Follow
                </Button>
            </div>
        </div>
    );
};

export default Reel;
