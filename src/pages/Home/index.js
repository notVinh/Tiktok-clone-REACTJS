import Reel from '~/components/Reel';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import videos from '~/assets/videos';

const cx = classNames.bind(styles);

const videoList = [
    {
        img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/607c1cd6a247852aeca04921cfbb84ae.jpeg?x-expires=1686045600&x-signature=ta8JHZh4Qdwwc4ETk4YWwqkIgCU%3D',
        nickname: 'thao26.07',
        fullname: 'Thảo',
        desc: 'Nhạc này không nên nghe một lần.',
        hagtag: '#fyp #fypシ #xuhuong',
        music: 'andree so cute',
        likeNum: 182,
        comment: 1660,
        save: 3552,
        share: 4445,
        videoSource: videos.video0,
    },
    {
        img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2616d818460e28493a2756f06bae2502~c5_100x100.jpeg?x-expires=1686063600&x-signature=d5LujjcmHxPCRO6F6VnKcM0om08%3D',
        nickname: 'nlinhne_1001',
        fullname: 'ngoclinhh_🥥',
        desc: 'có vẻ thích áo này=))',
        hagtag: '',
        music: 'Make it clap x Caroline - Kuya Magik',
        likeNum: 2555,
        comment: 78,
        save: 663,
        share: 65,
        videoSource: videos.video1,
    },
    {
        img: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/50ab2ff29385052ae8ee318c14f3f480~c5_100x100.jpeg?x-expires=1686063600&x-signature=EPdIstSyAZkDYHRrhRYNOD9lK0g%3D',
        nickname: 'fanbongda',
        fullname: 'Bóng đá là số 1',
        desc: 'ngày buồn nhất của Messi',
        hagtag: '#messi',
        music: 'Gió',
        likeNum: 2555,
        comment: 78,
        save: 663,
        share: 65,
        videoSource: videos.video2,
    },
    {
        img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2b92976305236c5d8877253b9ab3ca89~c5_100x100.jpeg?x-expires=1686063600&x-signature=cMg4dUWQDvOxK90v9UytvMGpQqg%3D',
        nickname: 'doantrang92n1',
        fullname: 'Người Chung Cống',
        desc: 'có vẻ thích áo này=))',
        hagtag: '',
        music: 'Make it clap x Caroline - Kuya Magik',
        likeNum: 2555,
        comment: 78,
        save: 663,
        share: 65,
        videoSource: videos.video3,
    },
    {
        img: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/48eeef7e6a282b94e61ad92880471c90~c5_100x100.jpeg?x-expires=1686063600&x-signature=45zW%2BqYtdb5SP5DiI9PhTy8jo7c%3D',
        nickname: 'petfunnyev2',
        fullname: '𝓵𝓸𝓷𝓰 𝓵𝓪𝓶 𝓶𝓮𝓶𝓮',
        desc: 'phải có bằng chứng chứ',
        hagtag: '#meme #capcut #trending #trending #haihuoc',
        music: 'Nhạc cổ động cuộc sống',
        likeNum: 2555,
        comment: 78,
        save: 663,
        share: 65,
        videoSource: videos.video4,
    },
];

function Home() {
    useEffect(() => {
        document.querySelector('#focus').focus();
    }, []);
    return (
        <div id="focus" tabIndex="1" className={cx('section')}>
            {videoList.map((video) => (
                <Reel
                    img={video.img}
                    nickname={video.nickname}
                    fullname={video.fullname}
                    desc={video.desc}
                    hagtag={video.hagtag}
                    music={video.music}
                    likeNum={video.likeNum}
                    comment={video.comment}
                    save={video.save}
                    share={video.share}
                    videoSource={video.videoSource}
                />
            ))}
        </div>
    );
}

export default Home;
