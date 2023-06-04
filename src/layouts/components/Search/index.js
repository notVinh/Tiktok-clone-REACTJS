import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [value, setValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);

    const ref = useRef();

    const debounce = useDebounce(value, 500);

    // const accounts = [{ name: 'vinh', username: 'han' }];
    useEffect(() => {
        if (!debounce) {
            setSearchResults([]);
            return;
        }

        // setLoading(true);  ---trường hợp theo 3 cách mặc định thì sử dụng còn sử dụng cách 4 thì không cần

        // ------------  Gọi API cách 4: tách cách 3 sang 1 file riêng --------------------
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResults(result);

            setLoading(false);
        };
        fetchApi();

        // ------------  Gọi API cách 3: sử dụng Axios nhưng đổi từ Promise sang async --------------------
        // const fetchApi = async () => {
        //     try {
        //         const res = await request.get('users/search', {
        //             params: {
        //                 q: debounce,
        //                 type: `less`,
        //             },
        //         });
        //         setSearchResults(res.data);
        //         setLoading(false);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };
        // fetchApi();

        // ------------  Gọi API cách 2: sử dụng Axios --------------------
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debounce,
        //             type: `less`,
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResults(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        // ------------  Gọi API cách 1: sử dụng fetch API --------------------
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResults(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }, [debounce]);

    const handleClear = () => {
        setValue('');
        setSearchResults([]);
        ref.current.focus();
    };

    const handleHide = () => {
        setShow(false);
    };

    const handleChange = (e) => {
        const valueChange = e.target.value;
        if (!valueChange.startsWith(' ')) {
            setValue(valueChange);
        }
    };

    return (
        <div>
            <Tippy
                interactive
                visible={show && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {/* {accounts.map((account) => {
                                            return <AccountItem {...{ name: account.name, username: account.username }} />;
                                        })} */}
                            {/* <AccountItem {...{ name: 'co cc', username: 'vinh' }} />
                            <AccountItem {...{ name: 'hay', username: 'vinh' }} />
                            <AccountItem />
                            <AccountItem /> */}
                            {searchResults.map((account) => (
                                <AccountItem key={account.id} data={account} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHide}
            >
                <div className={cx('search')}>
                    <input
                        ref={ref}
                        value={value}
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video..."
                        className={cx('search-box')}
                        onChange={handleChange}
                        onFocus={() => setShow(true)}
                    ></input>
                    {!!value && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
